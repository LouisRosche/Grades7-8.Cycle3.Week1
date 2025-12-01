/**
 * ============================================================================
 * SHARED FORM UTILITIES - Use for both G7 and G8 Forms
 * ============================================================================
 *
 * This library provides standardized helper functions for creating
 * Google Forms with consistent settings, validation, and rubrics.
 *
 * API CONSTRAINTS (Non-Negotiable Rules):
 * 1. setPoints() ONLY on auto-gradable items (MCQ, checkbox, scale)
 * 2. NEVER setPoints() on paragraph or text items
 * 3. setShuffleOrder() does NOT exist - manual config required
 * 4. Use requireTextLengthGreaterThanOrEqualTo() NOT requireTextLengthGreaterThan()
 * 5. setRequireLogin(true) for verified Google account emails
 */

var FormUtils = {

  /**
   * Configure standard security settings for all forms
   */
  configSecurity: function(form) {
    form.setIsQuiz(true);
    form.setRequireLogin(true);           // Forces verified Google account
    form.setCollectEmail(true);           // Captures email for gradebook
    form.setLimitOneResponsePerUser(true); // Prevents resubmission
    form.setAllowResponseEdits(true);      // Allows revision before deadline
    form.setProgressBar(true);             // Reduces abandonment
  },

  /**
   * Add a calculation item with numeric validation
   * Ensures students include a number in their answer
   */
  addCalcItem: function(form, title, helpText, points, rubric) {
    form.addSectionHeaderItem()
      .setTitle('Calculation (' + points + ' points)')
      .setHelpText('MANUAL GRADING\n' + rubric);

    var item = form.addTextItem()
      .setTitle(title)
      .setHelpText(helpText + '\n\nYour answer MUST include a number.')
      .setRequired(true);

    // Require at least one digit in the response
    item.setValidation(FormApp.createTextValidation()
      .requireTextMatchesPattern('.*[0-9].*')
      .setHelpText('Your answer must include a numerical value')
      .build());

    return item;
  },

  /**
   * Add a paragraph explanation item with minimum length validation
   */
  addExplainItem: function(form, title, helpText, points, rubric, minChars) {
    form.addSectionHeaderItem()
      .setTitle('Explanation (' + points + ' points)')
      .setHelpText('MANUAL GRADING\n' + rubric);

    var item = form.addParagraphTextItem()
      .setTitle(title)
      .setHelpText(helpText)
      .setRequired(true);

    // Minimum character requirement
    var minLength = minChars || 50;
    item.setValidation(FormApp.createParagraphTextValidation()
      .requireTextLengthGreaterThanOrEqualTo(minLength)
      .build());

    return item;
  },

  /**
   * Add a misconception-targeting MCQ with feedback
   */
  addMisconceptionMCQ: function(form, stem, correct, distractors, points, feedbackCorrect, feedbackIncorrect) {
    var item = form.addMultipleChoiceItem()
      .setTitle(stem)
      .setRequired(true);

    var choices = [item.createChoice(correct, true)];
    for (var i = 0; i < distractors.length; i++) {
      choices.push(item.createChoice(distractors[i], false));
    }

    item.setChoices(choices);
    item.setPoints(points);
    item.setFeedbackForCorrect(
      FormApp.createFeedback().setText(feedbackCorrect).build()
    );
    item.setFeedbackForIncorrect(
      FormApp.createFeedback().setText(feedbackIncorrect).build()
    );

    return item;
  },

  /**
   * Add a diagnostic confidence item (0 points - does not affect grade)
   * Use for student self-reflection only
   */
  addConfidenceDiagnostic: function(form, topic) {
    var item = form.addScaleItem()
      .setTitle('Self-Assessment: How confident are you about ' + topic + '?')
      .setHelpText('FOR REFLECTION ONLY - This does NOT affect your grade.')
      .setBounds(1, 5)
      .setLabels('Still learning', 'Got it!')
      .setRequired(true);
    // NO setPoints() - purely diagnostic
    return item;
  },

  /**
   * Add SEP-1 compliant question generator for Exit Tickets
   * NGSS SEP-1: Asking Questions
   */
  addQuestionGenerator: function(form, topic, example1, example2, points) {
    form.addSectionHeaderItem()
      .setTitle('Generate Scientific Questions (' + points + ' points)')
      .setHelpText(
        'RUBRIC - SEP-1: Asking Questions\n' +
        points + ' pts: 2 testable HOW/WHY questions with specific variables\n' +
        (points-1) + ' pts: 2 questions, at least 1 testable\n' +
        (points-2) + ' pts: 2 questions but yes/no style\n' +
        '1 pt: Only 1 question\n' +
        '0 pts: No response'
      );

    var item = form.addParagraphTextItem()
      .setTitle(
        'Write 2 scientific questions you still have about ' + topic + '.\n\n' +
        'Requirements:\n' +
        '- Start with HOW or WHY (not yes/no questions)\n' +
        '- Include specific variables that could be tested'
      )
      .setHelpText(
        'EXAMPLES of good scientific questions:\n' +
        '- ' + example1 + '\n' +
        '- ' + example2
      )
      .setRequired(true);

    return item;
  },

  /**
   * Add a section with question tagging (NEW, SPIRAL, INTEGRATION)
   */
  addTaggedSection: function(form, tag, title, points) {
    var tagLabels = {
      'NEW': 'NEW',
      'SPIRAL': 'SPIRAL (Cycle 2)',
      'INTEGRATION': 'INTEGRATION'
    };

    var label = tagLabels[tag] || tag;

    form.addSectionHeaderItem()
      .setTitle('Question: ' + label + ' - ' + title + ' (' + points + ' points)');
  },

  /**
   * Generate standardized rubric text
   */
  generateRubric: function(type, points, keyTerms) {
    var templates = {
      calculation: {
        full: 'Correct answer + correct formula shown + correct units',
        partial_high: 'Correct answer OR correct setup with minor arithmetic error',
        partial_mid: 'Correct formula, significant calculation error',
        partial_low: 'Relevant formula identified but not applied correctly',
        minimal: 'Attempt shows some relevant thinking',
        zero: 'No response or completely irrelevant'
      },
      explanation: {
        full: 'Uses KEY_TERM_1 AND KEY_TERM_2 + explains mechanism + connects to CONCEPT',
        partial_high: 'Uses key terms + explains mechanism OR connects to concept',
        partial_mid: 'Uses key terms without clear mechanism',
        partial_low: 'Relevant ideas without scientific vocabulary',
        minimal: 'Attempt with major misconceptions',
        zero: 'No response or completely irrelevant'
      },
      misconception: {
        full: 'Correctly identifies misconception + explains WHY wrong + states correct concept',
        partial_high: 'Identifies misconception + partial explanation',
        partial_mid: 'Identifies misconception without explanation',
        partial_low: 'Partially identifies issue',
        minimal: 'Accepts misconception but shows doubt',
        zero: 'Accepts misconception fully or no response'
      }
    };

    var template = templates[type];
    if (!template) return '';

    var pointScale = [
      points,
      Math.ceil(points * 0.8),
      Math.ceil(points * 0.6),
      Math.ceil(points * 0.4),
      Math.ceil(points * 0.2),
      0
    ];

    var rubric = 'RUBRIC (' + points + ' points):\n';
    var levels = ['full', 'partial_high', 'partial_mid', 'partial_low', 'minimal', 'zero'];

    for (var i = 0; i < levels.length; i++) {
      var description = template[levels[i]];

      // Replace placeholders with actual terms
      if (keyTerms) {
        for (var j = 0; j < keyTerms.length; j++) {
          description = description.replace('KEY_TERM_' + (j + 1), keyTerms[j]);
        }
      }

      rubric += pointScale[i] + ' pts: ' + description + '\n';
    }

    return rubric;
  },

  /**
   * Log form information consistently
   */
  logForm: function(form, name, points) {
    var editUrl = form.getEditUrl();
    var pubUrl = form.getPublishedUrl();
    var embedUrl = pubUrl.replace('/viewform', '/viewform?embedded=true');

    Logger.log('----------------------------------------');
    Logger.log(name + ' (' + points + ' pts)');
    Logger.log('----------------------------------------');
    Logger.log('Edit:  ' + editUrl);
    Logger.log('Embed: ' + embedUrl);
    Logger.log('');
  },

  /**
   * Create enhanced feedback with next-step guidance
   */
  createFeedback: function(isCorrect, concept, commonError, nextStep) {
    var text;

    if (isCorrect) {
      text = 'Correct! ' + concept;
      if (nextStep) {
        text += '\n\nNEXT STEP: ' + nextStep;
      }
    } else {
      text = 'Not quite.';
      if (commonError) {
        text += ' ' + commonError;
      }
      text += '\n\nKEY CONCEPT: ' + concept;
      if (nextStep) {
        text += '\n\nTRY THIS: ' + nextStep;
      }
    }

    return FormApp.createFeedback().setText(text).build();
  }
};

// Make FormUtils available globally
if (typeof exports !== 'undefined') {
  exports.FormUtils = FormUtils;
}

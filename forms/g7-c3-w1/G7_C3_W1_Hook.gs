/**
 * G7.C3.W1: Hook - The Hot Car Mystery
 * Grade 7 Science | Cycle 3, Week 1
 *
 * NGSS: MS-ESS3-5 (Climate Change Investigation)
 * Spiral: MS-PS1-5, MS-PS1-6 (Conservation, Energy in Reactions)
 *
 * Total Points: 15
 * Estimated Time: ~10 minutes
 *
 * DEPLOYMENT:
 * 1. Open Google Apps Script (script.google.com)
 * 2. Create new project, paste this code
 * 3. Run createG7C3W1HookForm()
 * 4. Authorize when prompted
 * 5. Check Google Drive for the new form
 */

function createG7C3W1HookForm() {
  // ============================================
  // FORM CREATION & SETTINGS
  // ============================================
  const form = FormApp.create('G7.C3.W1: Hook - The Hot Car Mystery');

  form.setDescription(
    '🌡️ The Hot Car Mystery\n\n' +
    'It\'s a sunny 75°F day. You park your car for 30 minutes. When you return, ' +
    'the dashboard is over 150°F—too hot to touch! But the air outside is still 75°F.\n\n' +
    'The car isn\'t generating any heat. So where is all this extra heat coming from?\n\n' +
    '⏱️ Time: ~10 minutes | 📊 Points: 15\n\n' +
    '💡 Use what you learned in Cycle 2 about energy and chemical reactions!'
  );

  form.setIsQuiz(true);
  form.setCollectEmail(true);
  form.setLimitOneResponsePerUser(true);
  form.setAllowResponseEdits(true);
  form.setShowLinkToRespondAgain(false);
  form.setPublishingSummary(false);
  form.setConfirmationMessage(
    '✅ Hook submitted! You\'re ready for Station 1.\n\n' +
    'Next: Use the PhET simulation to discover WHY CO₂ traps heat.'
  );

  // ============================================
  // QUESTION 1: Pre-Assessment (Retrieval)
  // Short Answer - Manual Grading (3 points)
  // ============================================
  form.addSectionHeaderItem()
    .setTitle('Question 1: Cycle 2 Review')
    .setHelpText('📝 MANUAL GRADING (3 points)\n' +
      '4: Both correct with examples\n' +
      '3: Both correct, basic explanation\n' +
      '2: One correct\n' +
      '1: Attempt with misconceptions\n' +
      '0: No response');

  const q1 = form.addParagraphTextItem()
    .setTitle('In a chemical reaction, when is energy RELEASED? When is energy ABSORBED?')
    .setHelpText('Think back to Cycle 2: What did you learn about endothermic and exothermic reactions?')
    .setRequired(true);

  // ============================================
  // QUESTION 2: Phenomenon Engagement
  // Short Answer - Manual Grading (3 points)
  // ============================================
  form.addSectionHeaderItem()
    .setTitle('Question 2: Observe the Phenomenon')
    .setHelpText('📝 MANUAL GRADING (3 points)\n' +
      '3: Describes temperature difference + inside hotter\n' +
      '2: Partial description\n' +
      '1: Vague response\n' +
      '0: No response');

  const q2 = form.addParagraphTextItem()
    .setTitle('Describe what happens to the temperature inside a car on a sunny day compared to outside.')
    .setHelpText('Be specific about what you\'ve experienced or observed.')
    .setRequired(true);

  // ============================================
  // QUESTION 3: Initial Hypothesis
  // Short Answer - Manual Grading (3 points)
  // ============================================
  form.addSectionHeaderItem()
    .setTitle('Question 3: Your Hypothesis')
    .setHelpText('📝 MANUAL GRADING (3 points)\n' +
      '3: Scientific reasoning about energy/light/heat\n' +
      '2: Reasonable guess with some logic\n' +
      '1: Guess without reasoning\n' +
      '0: No response');

  const q3 = form.addParagraphTextItem()
    .setTitle('Why do you think the inside of the car gets hotter than the outside?')
    .setHelpText('This is a prediction—there\'s no wrong answer yet! Just explain your thinking.')
    .setRequired(true);

  // ============================================
  // QUESTION 4: Connect to Prior Knowledge
  // Multiple Choice - Auto Grading (3 points)
  // ============================================
  form.addSectionHeaderItem()
    .setTitle('Question 4: Energy Connection');

  const q4 = form.addMultipleChoiceItem()
    .setTitle('This involves energy transfer. Based on what you learned in Cycle 2, what type of energy change might be happening when the car\'s interior absorbs sunlight?')
    .setHelpText('Think about whether energy is going INTO or OUT OF the materials.')
    .setRequired(true);

  q4.setChoices([
    q4.createChoice('a) Endothermic (absorbs energy)', true),
    q4.createChoice('b) Exothermic (releases energy)', false),
    q4.createChoice('c) Neither—no energy change', false),
    q4.createChoice('d) Both at the same time', false)
  ]);

  q4.setPoints(3);
  q4.setFeedbackForCorrect(
    FormApp.createFeedback()
      .setText('✅ Correct! Absorbing sunlight is endothermic—energy goes INTO the materials.')
      .build()
  );
  q4.setFeedbackForIncorrect(
    FormApp.createFeedback()
      .setText('❌ Review: Endothermic = absorbs energy. Materials absorbing sunlight = endothermic.')
      .build()
  );

  // ============================================
  // QUESTION 5: Confidence Rating
  // Linear Scale - Auto Grading (3 points)
  // ============================================
  form.addSectionHeaderItem()
    .setTitle('Question 5: Self-Assessment');

  const q5 = form.addScaleItem()
    .setTitle('How confident are you in your explanation of why cars get hot inside?')
    .setHelpText('Be honest—this helps us know where to focus our learning!')
    .setBounds(1, 5)
    .setLabels('1 = Guessing', '5 = Very confident')
    .setRequired(true);

  q5.setPoints(3);

  // ============================================
  // COMPLETION
  // ============================================
  form.addSectionHeaderItem()
    .setTitle('🎉 Hook Complete!')
    .setHelpText('Click Submit below, then continue to Station 1 to test your predictions using the PhET simulation.');

  // Log the form URL
  Logger.log('Form created successfully!');
  Logger.log('Edit URL: ' + form.getEditUrl());
  Logger.log('Response URL: ' + form.getPublishedUrl());
  Logger.log('Embed URL: ' + form.getPublishedUrl().replace('/viewform', '/viewform?embedded=true'));

  return form;
}

/**
 * Run this function to test the form creation
 */
function testHookForm() {
  const form = createG7C3W1HookForm();
  Logger.log('Test complete. Form ID: ' + form.getId());
}

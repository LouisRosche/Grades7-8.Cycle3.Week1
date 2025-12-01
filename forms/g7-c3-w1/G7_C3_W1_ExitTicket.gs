/**
 * G7.C3.W1: Exit Ticket - Chemistry and Climate Connection
 * Grade 7 Science | Cycle 3, Week 1
 *
 * NGSS: MS-ESS3-5 (Climate Change)
 * Spiral: MS-PS1-5 (Conservation), MS-PS1-6 (Energy in Reactions)
 *
 * Total Points: 20
 * Estimated Time: ~15 minutes
 *
 * ASSESSMENT STRUCTURE:
 * - 2 NEW questions (Cycle 3 content)
 * - 2 SPIRAL questions (Cycle 2 retrieval)
 * - 1 INTEGRATION question (requires both cycles)
 *
 * DEPLOYMENT:
 * 1. Open Google Apps Script (script.google.com)
 * 2. Create new project, paste this code
 * 3. Run createG7C3W1ExitTicketForm()
 * 4. Authorize when prompted
 * 5. Check Google Drive for the new form
 */

function createG7C3W1ExitTicketForm() {
  // ============================================
  // FORM CREATION & SETTINGS
  // ============================================
  const form = FormApp.create('G7.C3.W1: Exit Ticket - Chemistry & Climate');

  form.setDescription(
    '🎓 Exit Ticket: Show What You\'ve Learned\n\n' +
    'This exit ticket tests whether you can connect your Cycle 2 chemistry ' +
    'knowledge to climate science.\n\n' +
    '⏱️ Time: ~15 minutes | 📊 Points: 20\n\n' +
    '📋 Question Types:\n' +
    '• 2 questions on TODAY\'S new content\n' +
    '• 2 questions SPIRALING back to Cycle 2\n' +
    '• 1 INTEGRATION question connecting both'
  );

  form.setIsQuiz(true);
  form.setCollectEmail(true);
  form.setLimitOneResponsePerUser(true);
  form.setAllowResponseEdits(true);
  form.setShowLinkToRespondAgain(false);
  form.setPublishingSummary(false);
  form.setConfirmationMessage(
    '🎉 Week 1 Complete! Congratulations!\n\n' +
    'You\'ve connected chemistry to climate science. Key takeaways:\n' +
    '• CO₂ absorbs IR and vibrates (doesn\'t break)\n' +
    '• Carbon cycles through Earth—never created or destroyed\n' +
    '• The greenhouse effect works at the molecular level\n\n' +
    'Next week: What happens when ice melts? Feedback loops!'
  );

  // ============================================
  // QUESTION 1: NEW - Greenhouse Effect Explanation
  // Paragraph Text - Manual Grading (4 points)
  // ============================================
  form.addSectionHeaderItem()
    .setTitle('Question 1: NEW CONTENT')
    .setHelpText('📝 MANUAL GRADING (4 points)\n' +
      '4: Uses "absorb" + "vibrate" + molecular-level explanation\n' +
      '3: Uses key vocabulary + basic explanation\n' +
      '2: Partial explanation, missing vocabulary\n' +
      '1: Vague or incorrect\n' +
      '0: No response');

  const q1 = form.addParagraphTextItem()
    .setTitle('Explain the greenhouse effect in 2-3 sentences using the words "absorb" and "vibrate."')
    .setHelpText('Connect what you learned about CO₂ molecules to how Earth\'s atmosphere traps heat.')
    .setRequired(true);

  // ============================================
  // QUESTION 2: SPIRAL - Bond Energy & Reaction Type
  // Multiple Choice - Auto Grading (4 points)
  // ============================================
  form.addSectionHeaderItem()
    .setTitle('Question 2: SPIRAL - Cycle 2 Review');

  const q2 = form.addMultipleChoiceItem()
    .setTitle('In the reaction: CH₄ + 2O₂ → CO₂ + 2H₂O + energy\n\nThis reaction RELEASES energy. Based on Cycle 2, this means:')
    .setHelpText('Remember: Endothermic absorbs energy, Exothermic releases energy.')
    .setRequired(true);

  q2.setChoices([
    q2.createChoice('a) More energy is released forming new bonds than absorbed breaking old bonds (exothermic)', true),
    q2.createChoice('b) More energy is absorbed breaking bonds than released forming new bonds (endothermic)', false),
    q2.createChoice('c) Energy is created from nothing during the reaction', false),
    q2.createChoice('d) Energy is destroyed during the reaction', false)
  ]);

  q2.setPoints(4);
  q2.setFeedbackForCorrect(
    FormApp.createFeedback()
      .setText('✅ Correct! Exothermic: forming bonds releases MORE energy than breaking bonds absorbs.')
      .build()
  );
  q2.setFeedbackForIncorrect(
    FormApp.createFeedback()
      .setText('❌ Energy released = exothermic. Forming bonds releases energy; breaking absorbs it.')
      .build()
  );

  // ============================================
  // QUESTION 3: NEW - Carbon Path Tracing
  // Paragraph Text - Manual Grading (4 points)
  // ============================================
  form.addSectionHeaderItem()
    .setTitle('Question 3: NEW CONTENT')
    .setHelpText('📝 MANUAL GRADING (4 points)\n' +
      '4: Complete path with molecular forms at each step\n' +
      '3: Complete path, some molecular details\n' +
      '2: Partial path\n' +
      '1: Vague or incorrect path\n' +
      '0: No response');

  const q3 = form.addParagraphTextItem()
    .setTitle('Trace a carbon atom\'s path from: gasoline → engine → atmosphere → plant → you\n\nDescribe what happens at EACH step.')
    .setHelpText('Include what form the carbon takes at each location (e.g., CO₂, glucose, etc.)')
    .setRequired(true);

  // ============================================
  // QUESTION 4: SPIRAL - Conservation of Mass
  // Multiple Choice - Auto Grading (4 points)
  // ============================================
  form.addSectionHeaderItem()
    .setTitle('Question 4: SPIRAL - Cycle 2 Review');

  const q4 = form.addMultipleChoiceItem()
    .setTitle('What happens to the total mass in a closed chemical reaction?')
    .setHelpText('Think about what you learned about atoms in Cycle 2.')
    .setRequired(true);

  q4.setChoices([
    q4.createChoice('a) Increases—new atoms are created', false),
    q4.createChoice('b) Decreases—atoms are destroyed', false),
    q4.createChoice('c) Stays the same—atoms are conserved', true),
    q4.createChoice('d) Depends on the reaction type', false)
  ]);

  q4.setPoints(4);
  q4.setFeedbackForCorrect(
    FormApp.createFeedback()
      .setText('✅ Correct! Conservation of mass: atoms rearrange but are never created or destroyed.')
      .build()
  );
  q4.setFeedbackForIncorrect(
    FormApp.createFeedback()
      .setText('❌ Law of Conservation of Mass: atoms can\'t be created or destroyed, only rearranged.')
      .build()
  );

  // ============================================
  // QUESTION 5: INTEGRATION - Evaluate Claim
  // Paragraph Text - Manual Grading (4 points)
  // ============================================
  form.addSectionHeaderItem()
    .setTitle('Question 5: INTEGRATION (Cycle 2 + Cycle 3)')
    .setHelpText('📝 MANUAL GRADING (4 points) - 3D Assessment\n' +
      '4: Refutes claim + conservation of mass + explains alternatives\n' +
      '3: Refutes claim + conservation of mass\n' +
      '2: Recognizes problem but weak explanation\n' +
      '1: Accepts claim or major misconceptions\n' +
      '0: No response\n\n' +
      '3D SCORING:\n' +
      '• SEP: Does response critique using evidence?\n' +
      '• DCI: Does response apply conservation correctly?\n' +
      '• CCC: Does response track matter flow?');

  const q5 = form.addParagraphTextItem()
    .setTitle('A company claims their product "destroys carbon pollution."\n\nUsing what you know about conservation of mass and the carbon cycle, evaluate this claim. Is it scientifically possible? What might the product ACTUALLY do?')
    .setHelpText('Think: Can atoms be destroyed? If not, what happens to carbon that\'s "removed"?')
    .setRequired(true);

  // ============================================
  // COMPLETION
  // ============================================
  form.addSectionHeaderItem()
    .setTitle('🎉 Week 1 Complete!')
    .setHelpText(
      'Congratulations! You\'ve connected chemistry to climate.\n\n' +
      '✅ Check your Progress Tracker at the top of the Canvas page.\n' +
      '✅ Make sure all 5 boxes are checked.\n\n' +
      'COMING NEXT WEEK: Why does melting ice cause MORE melting?\n' +
      'You\'ll investigate feedback loops and tipping points!'
    );

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
function testExitTicketForm() {
  const form = createG7C3W1ExitTicketForm();
  Logger.log('Test complete. Form ID: ' + form.getId());
}

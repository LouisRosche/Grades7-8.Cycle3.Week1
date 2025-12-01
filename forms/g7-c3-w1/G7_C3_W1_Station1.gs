/**
 * G7.C3.W1: Station 1 - Molecular Vibration & IR Absorption
 * Grade 7 Science | Cycle 3, Week 1
 *
 * NGSS: MS-ESS3-5 (Climate Change Investigation)
 * Spiral Target: Bond energy concepts from MS-PS1-5, MS-PS1-6
 *
 * Total Points: 20
 * Estimated Time: ~18 minutes
 *
 * RESOURCE: PhET "Molecules and Light" Simulation
 * https://phet.colorado.edu/en/simulations/molecules-and-light
 *
 * DEPLOYMENT:
 * 1. Open Google Apps Script (script.google.com)
 * 2. Create new project, paste this code
 * 3. Run createG7C3W1Station1Form()
 * 4. Authorize when prompted
 * 5. Check Google Drive for the new form
 */

function createG7C3W1Station1Form() {
  // ============================================
  // FORM CREATION & SETTINGS
  // ============================================
  const form = FormApp.create('G7.C3.W1: Station 1 - Molecular Vibration & IR Absorption');

  form.setDescription(
    '🔬 Discover WHY CO₂ Traps Heat\n\n' +
    'Use the PhET simulation to test different molecules and discover why carbon dioxide (CO₂) ' +
    'absorbs infrared radiation while nitrogen (N₂) does not.\n\n' +
    '🔗 Open PhET in another tab: https://phet.colorado.edu/en/simulations/molecules-and-light\n\n' +
    '⏱️ Time: ~18 minutes | 📊 Points: 20\n\n' +
    '⚠️ CRITICAL: Watch carefully—do the molecules BREAK or just VIBRATE?'
  );

  form.setIsQuiz(true);
  form.setCollectEmail(true);
  form.setLimitOneResponsePerUser(true);
  form.setAllowResponseEdits(true);
  form.setShowLinkToRespondAgain(false);
  form.setPublishingSummary(false);
  form.setConfirmationMessage(
    '✅ Station 1 complete! Key insight: CO₂ vibrates (doesn\'t break) when absorbing IR.\n\n' +
    'Next: Station 2 - Trace carbon atoms through Earth\'s systems.'
  );

  // ============================================
  // INSTRUCTIONS SECTION
  // ============================================
  form.addSectionHeaderItem()
    .setTitle('📋 Instructions')
    .setHelpText(
      'BEFORE answering questions:\n' +
      '1. Open PhET simulation in a new tab\n' +
      '2. Set light source to INFRARED\n' +
      '3. Test each molecule: N₂, O₂, CO₂, H₂O\n' +
      '4. Watch what happens to each molecule\n\n' +
      'Then answer the questions below based on your observations.'
    );

  // ============================================
  // QUESTION 1: Simulation Observation
  // Multiple Choice - Auto Grading (4 points)
  // ============================================
  form.addSectionHeaderItem()
    .setTitle('Question 1: What Did You Observe?');

  const q1 = form.addMultipleChoiceItem()
    .setTitle('In the PhET simulation, when infrared radiation hits a CO₂ molecule, what happens to the molecule?')
    .setHelpText('Watch the CO₂ molecule carefully when IR waves hit it.')
    .setRequired(true);

  q1.setChoices([
    q1.createChoice('a) It breaks apart into separate atoms', false),
    q1.createChoice('b) It vibrates faster (stretches and bends)', true),
    q1.createChoice('c) It slows down and stops moving', false),
    q1.createChoice('d) Nothing happens—the IR passes through', false)
  ]);

  q1.setPoints(4);
  q1.setFeedbackForCorrect(
    FormApp.createFeedback()
      .setText('✅ Correct! CO₂ vibrates (stretches/bends) when absorbing IR—it does NOT break apart.')
      .build()
  );
  q1.setFeedbackForIncorrect(
    FormApp.createFeedback()
      .setText('❌ Look again: The molecule stays together but moves more. That\'s vibration, not breaking.')
      .build()
  );

  // ============================================
  // QUESTION 2: Energy Analysis
  // Multiple Choice - Auto Grading (4 points)
  // ============================================
  form.addSectionHeaderItem()
    .setTitle('Question 2: Energy Process');

  const q2 = form.addMultipleChoiceItem()
    .setTitle('The CO₂ molecule absorbing IR energy is an example of what type of process?')
    .setHelpText('Think about Cycle 2: Is energy going INTO or OUT OF the molecule?')
    .setRequired(true);

  q2.setChoices([
    q2.createChoice('a) Endothermic (absorbs energy)', true),
    q2.createChoice('b) Exothermic (releases energy)', false),
    q2.createChoice('c) Neither—no energy transfer', false)
  ]);

  q2.setPoints(4);
  q2.setFeedbackForCorrect(
    FormApp.createFeedback()
      .setText('✅ Correct! Energy goes INTO the molecule (absorbed), making it endothermic.')
      .build()
  );
  q2.setFeedbackForIncorrect(
    FormApp.createFeedback()
      .setText('❌ Absorbing = energy goes IN. Endothermic = absorbs energy. Review Cycle 2 notes.')
      .build()
  );

  // ============================================
  // QUESTION 3: CRITICAL MISCONCEPTION CHECK
  // Paragraph Text - Manual Grading (5 points)
  // This is the most important question!
  // ============================================
  form.addSectionHeaderItem()
    .setTitle('⚠️ Question 3: Critical Thinking (REQUIRED)')
    .setHelpText('📝 MANUAL GRADING (5 points)\n' +
      '5: Correct (Student B) + bond energy explanation + Cycle 2 connection\n' +
      '4: Correct + bond energy OR vibration explanation\n' +
      '3: Correct + basic explanation\n' +
      '2: Correct but explanation incomplete\n' +
      '1: Incorrect or correct with wrong reasoning\n' +
      '0: No response');

  const q3 = form.addParagraphTextItem()
    .setTitle('Student A says: "When CO₂ absorbs energy, it breaks the bonds."\nStudent B says: "The bonds don\'t break, they just vibrate."\n\nWho is correct and WHY?')
    .setHelpText('Use what you observed in the simulation AND what you learned about bond energy in Cycle 2.')
    .setRequired(true);

  // ============================================
  // QUESTION 4: Connection to Cycle 2
  // Paragraph Text - Manual Grading (3 points)
  // ============================================
  form.addSectionHeaderItem()
    .setTitle('Question 4: Cycle 2 Connection')
    .setHelpText('📝 MANUAL GRADING (3 points)\n' +
      '3: Explains that breaking bonds requires energy + IR doesn\'t provide enough\n' +
      '2: Mentions bond energy but incomplete connection\n' +
      '1: Vague reference to Cycle 2\n' +
      '0: No response');

  const q4 = form.addParagraphTextItem()
    .setTitle('In Cycle 2, we learned that breaking bonds REQUIRES energy. How does this help explain why CO₂ bonds DON\'T break when absorbing IR?')
    .setHelpText('Hint: Think about how much energy IR radiation provides vs. how much energy is needed to break a bond.')
    .setRequired(true);

  // ============================================
  // QUESTION 5: Application
  // Paragraph Text - Manual Grading (2 points)
  // ============================================
  form.addSectionHeaderItem()
    .setTitle('Question 5: Extend Your Understanding')
    .setHelpText('📝 MANUAL GRADING (2 points)\n' +
      '2: Mentions molecular structure (2 atoms, linear, symmetric)\n' +
      '1: Reasonable attempt without structure reference\n' +
      '0: No response');

  const q5 = form.addParagraphTextItem()
    .setTitle('N₂ (nitrogen gas) doesn\'t absorb much IR energy. Based on molecular structure, why might this be?')
    .setHelpText('Compare: N₂ has 2 identical atoms (N≡N). CO₂ has 3 atoms (O=C=O). What\'s different?')
    .setRequired(true);

  // ============================================
  // QUESTION 6: Self-Assessment
  // Linear Scale - Auto Grading (2 points)
  // ============================================
  form.addSectionHeaderItem()
    .setTitle('Question 6: Self-Assessment');

  const q6 = form.addScaleItem()
    .setTitle('Rate your understanding: "I can explain how molecules absorb energy without breaking bonds."')
    .setHelpText('Be honest—this helps us know if you need more support!')
    .setBounds(1, 5)
    .setLabels('1 = Not confident', '5 = Very confident')
    .setRequired(true);

  q6.setPoints(2);

  // ============================================
  // COMPLETION
  // ============================================
  form.addSectionHeaderItem()
    .setTitle('🎉 Station 1 Complete!')
    .setHelpText(
      'KEY TAKEAWAY: CO₂ absorbs IR and vibrates—it doesn\'t break apart!\n' +
      'This is why CO₂ is a greenhouse gas.\n\n' +
      'Click Submit, then continue to Station 2.'
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
function testStation1Form() {
  const form = createG7C3W1Station1Form();
  Logger.log('Test complete. Form ID: ' + form.getId());
}

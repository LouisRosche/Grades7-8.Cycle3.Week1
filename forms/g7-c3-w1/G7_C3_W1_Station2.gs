/**
 * G7.C3.W1: Station 2 - Carbon Cycle Conservation
 * Grade 7 Science | Cycle 3, Week 1
 *
 * NGSS: MS-ESS3-5 (Climate Change Investigation)
 * Spiral Target: Conservation of Mass (MS-PS1-5)
 *
 * Total Points: 20
 * Estimated Time: ~15 minutes
 *
 * KEY CONCEPT: Carbon atoms are NEVER created or destroyed—just rearranged.
 *
 * DEPLOYMENT:
 * 1. Open Google Apps Script (script.google.com)
 * 2. Create new project, paste this code
 * 3. Run createG7C3W1Station2Form()
 * 4. Authorize when prompted
 * 5. Check Google Drive for the new form
 */

function createG7C3W1Station2Form() {
  // ============================================
  // FORM CREATION & SETTINGS
  // ============================================
  const form = FormApp.create('G7.C3.W1: Station 2 - Carbon Cycle Conservation');

  form.setDescription(
    '🌿 Trace Carbon Atoms Through Earth\'s Systems\n\n' +
    'Prove that carbon atoms are NEVER created or destroyed—just rearranged. ' +
    'This is your Cycle 2 conservation of mass applied to Earth\'s climate!\n\n' +
    '⏱️ Time: ~15 minutes | 📊 Points: 20\n\n' +
    '🔑 KEY FORMULA: CO₂ is 27% carbon by mass\n' +
    '📝 You\'ll need a calculator for this station!'
  );

  form.setIsQuiz(true);
  form.setCollectEmail(true);
  form.setLimitOneResponsePerUser(true);
  form.setAllowResponseEdits(true);
  form.setShowLinkToRespondAgain(false);
  form.setPublishingSummary(false);
  form.setConfirmationMessage(
    '✅ Station 2 complete! Key insight: Carbon cycles through Earth—never created or destroyed.\n\n' +
    'Next: Station 3 - Design a thermal trap using what you\'ve learned!'
  );

  // ============================================
  // REFERENCE INFORMATION
  // ============================================
  form.addSectionHeaderItem()
    .setTitle('📚 Reference: Photosynthesis Equation')
    .setHelpText(
      '6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂\n\n' +
      'Left side (Reactants): 6 carbon dioxide + 6 water\n' +
      'Right side (Products): 1 glucose + 6 oxygen\n\n' +
      'Count the atoms: C=6, H=12, O=18 on BOTH sides!'
    );

  // ============================================
  // QUESTION 1: Mass Tracking Calculation
  // Text Item - Manual Grading (4 points)
  // ============================================
  form.addSectionHeaderItem()
    .setTitle('Question 1: Calculate Carbon Storage')
    .setHelpText('📝 MANUAL GRADING (4 points)\n' +
      '4: Correct answer (12.9-13.1 lbs) + shows work\n' +
      '3: Correct answer, work unclear\n' +
      '2: Correct setup, calculation error\n' +
      '1: Wrong setup but shows attempt\n' +
      '0: No response\n\n' +
      'ANSWER KEY: 48 × 0.27 = 12.96 ≈ 13 lbs');

  const q1 = form.addParagraphTextItem()
    .setTitle('A tree absorbs 48 lbs of CO₂ per year. How many pounds of CARBON is that?\n\n(Remember: CO₂ is 27% carbon by mass. Show your work!)')
    .setHelpText('Step 1: Convert 27% to decimal (0.27)\nStep 2: Multiply 48 × 0.27\nStep 3: Write your answer with units')
    .setRequired(true);

  // ============================================
  // QUESTION 2: Conservation Check
  // Multiple Choice - Auto Grading (4 points)
  // ============================================
  form.addSectionHeaderItem()
    .setTitle('Question 2: Count the Atoms');

  const q2 = form.addMultipleChoiceItem()
    .setTitle('In photosynthesis: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂\n\nCount the atoms on each side. Are there more, fewer, or the same number of atoms on each side?')
    .setHelpText('Left: 6C + 12H + 18O = 36 atoms. Right: Count carefully!')
    .setRequired(true);

  q2.setChoices([
    q2.createChoice('a) More atoms on the left side', false),
    q2.createChoice('b) More atoms on the right side', false),
    q2.createChoice('c) Same number on both sides', true),
    q2.createChoice('d) Can\'t tell without more information', false)
  ]);

  q2.setPoints(4);
  q2.setFeedbackForCorrect(
    FormApp.createFeedback()
      .setText('✅ Correct! 36 atoms on each side. Atoms are conserved—rearranged, not created/destroyed.')
      .build()
  );
  q2.setFeedbackForIncorrect(
    FormApp.createFeedback()
      .setText('❌ Count again: Left has 6C+12H+18O=36. Right has 6C+12H+6O+12O=36. They\'re equal!')
      .build()
  );

  // ============================================
  // QUESTION 3: Cycle Completion
  // Checkbox - Auto Grading (4 points)
  // ============================================
  form.addSectionHeaderItem()
    .setTitle('Question 3: Where Does Carbon Go?');

  const q3 = form.addCheckboxItem()
    .setTitle('When you burn wood, where does the carbon GO? (Select ALL that apply)')
    .setHelpText('Think about conservation of mass—atoms can\'t be destroyed!')
    .setRequired(true);

  q3.setChoices([
    q3.createChoice('a) Destroyed completely', false),
    q3.createChoice('b) Into the air as CO₂', true),
    q3.createChoice('c) Into ash (some carbon remains)', true),
    q3.createChoice('d) Converted to pure energy', false)
  ]);

  q3.setPoints(4);
  q3.setFeedbackForCorrect(
    FormApp.createFeedback()
      .setText('✅ Correct! Carbon goes into CO₂ gas AND some remains in ash. Never destroyed!')
      .build()
  );
  q3.setFeedbackForIncorrect(
    FormApp.createFeedback()
      .setText('❌ Carbon can\'t be "destroyed" or become "pure energy." It goes to CO₂ and ash.')
      .build()
  );

  // ============================================
  // QUESTION 4: Misconception Check
  // Paragraph Text - Manual Grading (4 points)
  // ============================================
  form.addSectionHeaderItem()
    .setTitle('Question 4: Evaluate This Claim')
    .setHelpText('📝 MANUAL GRADING (4 points)\n' +
      '4: Correctly refutes + conservation of mass + explains carbon origin\n' +
      '3: Correctly refutes + mentions conservation OR origin\n' +
      '2: Correctly refutes, weak explanation\n' +
      '1: Incorrect or partially correct with errors\n' +
      '0: No response');

  const q4 = form.addParagraphTextItem()
    .setTitle('A student says: "When we burn fossil fuels, we\'re creating new carbon that goes into the atmosphere."\n\nIs this correct? Explain using conservation of mass.')
    .setHelpText('Think: Where did the carbon in fossil fuels come from originally?')
    .setRequired(true);

  // ============================================
  // QUESTION 5: Quantitative Analysis
  // Multiple Choice - Auto Grading (4 points)
  // ============================================
  form.addSectionHeaderItem()
    .setTitle('Question 5: Carbon Balance');

  const q5 = form.addMultipleChoiceItem()
    .setTitle('If ALL the carbon absorbed by trees in one year was released by burning those same trees, would atmospheric carbon increase, decrease, or stay the same?')
    .setHelpText('Think about inputs and outputs—what goes in must come out!')
    .setRequired(true);

  q5.setChoices([
    q5.createChoice('a) Increase—burning adds more carbon than trees absorbed', false),
    q5.createChoice('b) Decrease—some carbon stays in the ash', false),
    q5.createChoice('c) Stay the same—carbon in = carbon out (conservation)', true),
    q5.createChoice('d) Can\'t determine without exact measurements', false)
  ]);

  q5.setPoints(4);
  q5.setFeedbackForCorrect(
    FormApp.createFeedback()
      .setText('✅ Correct! Conservation of mass: carbon absorbed = carbon released. Perfect balance.')
      .build()
  );
  q5.setFeedbackForIncorrect(
    FormApp.createFeedback()
      .setText('❌ Conservation of mass: atoms in = atoms out. Same carbon, just moved to different place.')
      .build()
  );

  // ============================================
  // COMPLETION
  // ============================================
  form.addSectionHeaderItem()
    .setTitle('🎉 Station 2 Complete!')
    .setHelpText(
      'KEY TAKEAWAY: Carbon cycles through Earth\'s systems—never created or destroyed.\n' +
      'Burning fossil fuels RELEASES ancient carbon, it doesn\'t CREATE new carbon.\n\n' +
      'Click Submit, then continue to Station 3.'
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
function testStation2Form() {
  const form = createG7C3W1Station2Form();
  Logger.log('Test complete. Form ID: ' + form.getId());
}

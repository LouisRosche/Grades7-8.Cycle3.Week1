/**
 * G7.C3.W1: Station 3 - Engineering Thermal Trap
 * Grade 7 Science | Cycle 3, Week 1
 *
 * NGSS: MS-ESS3-5 (Climate Change) + MS-ETS1-1 (Engineering Design)
 * Spiral Target: Thermal energy concepts from Cycle 2
 *
 * Total Points: 25
 * Estimated Time: ~20 minutes
 *
 * ENGINEERING DESIGN CHALLENGE: Apply thermal energy concepts to design
 * a structure that maximizes heat retention.
 *
 * DEPLOYMENT:
 * 1. Open Google Apps Script (script.google.com)
 * 2. Create new project, paste this code
 * 3. Run createG7C3W1Station3Form()
 * 4. Authorize when prompted
 * 5. Check Google Drive for the new form
 */

function createG7C3W1Station3Form() {
  // ============================================
  // FORM CREATION & SETTINGS
  // ============================================
  const form = FormApp.create('G7.C3.W1: Station 3 - Design a Thermal Trap');

  form.setDescription(
    '🔧 Engineering Challenge: Design a Thermal Trap\n\n' +
    'Apply what you learned about thermal energy to design a structure that ' +
    'maximizes heat retention. You MUST explain every choice using science!\n\n' +
    '⏱️ Time: ~20 minutes | 📊 Points: 25\n\n' +
    '📏 CONSTRAINTS:\n' +
    '• Size: 20cm × 20cm × 20cm maximum\n' +
    '• Materials: Choose from 5 available options\n' +
    '• Requirement: Justify EVERY choice with thermal energy concepts'
  );

  form.setIsQuiz(true);
  form.setCollectEmail(true);
  form.setLimitOneResponsePerUser(true);
  form.setAllowResponseEdits(true);
  form.setShowLinkToRespondAgain(false);
  form.setPublishingSummary(false);
  form.setConfirmationMessage(
    '✅ Station 3 complete! You\'ve designed a thermal trap using real science.\n\n' +
    'Next: Exit Ticket - Show you can connect chemistry to climate!'
  );

  // ============================================
  // MATERIALS REFERENCE
  // ============================================
  form.addSectionHeaderItem()
    .setTitle('📦 Available Materials')
    .setHelpText(
      'Choose from these 5 materials:\n\n' +
      '1. BLACK PAPER - Absorbs light energy, converts to heat\n' +
      '2. ALUMINUM FOIL - Reflects radiation, conducts heat quickly\n' +
      '3. BUBBLE WRAP - Traps air pockets, poor conductor (insulator)\n' +
      '4. CARDBOARD - Moderate insulator, structural support\n' +
      '5. PLASTIC WRAP - Transparent to visible light, blocks some IR\n\n' +
      'Think about: What should go on bottom? Sides? Top?'
    );

  // ============================================
  // QUESTION 1: Material Selection
  // Paragraph Text - Manual Grading (5 points)
  // ============================================
  form.addSectionHeaderItem()
    .setTitle('Question 1: Material Ranking')
    .setHelpText('📝 MANUAL GRADING (5 points)\n' +
      '5: Correct ranking + scientific reasoning for each\n' +
      '4: Correct ranking + reasoning for most\n' +
      '3: Reasonable ranking + some reasoning\n' +
      '2: Ranking without scientific reasoning\n' +
      '1: Attempt without logic\n' +
      '0: No response');

  const q1 = form.addParagraphTextItem()
    .setTitle('You have 3 materials to trap heat: black paper, aluminum foil, and bubble wrap.\n\nRank them from BEST to WORST heat trapper and explain your reasoning for EACH material.')
    .setHelpText('Use thermal energy vocabulary: absorb, reflect, conduct, insulate, radiate')
    .setRequired(true);

  // ============================================
  // QUESTION 2: Design Plan
  // Paragraph Text - Manual Grading (5 points)
  // ============================================
  form.addSectionHeaderItem()
    .setTitle('Question 2: Your Design')
    .setHelpText('📝 MANUAL GRADING (5 points)\n' +
      '5: Clear description with specific placement + energy flow explanation\n' +
      '4: Clear description + partial energy flow\n' +
      '3: Description but missing specifics\n' +
      '2: Vague description\n' +
      '1: Minimal attempt\n' +
      '0: No response');

  const q2 = form.addParagraphTextItem()
    .setTitle('Describe your thermal trap design.\n\nSpecify: What material goes on the BOTTOM? SIDES? TOP? How does energy flow through your design?')
    .setHelpText('Example format: "Bottom: [material] because... Sides: [material] because... Top: [material] because..."')
    .setRequired(true);

  // ============================================
  // QUESTION 3: Molecular Connection
  // Paragraph Text - Manual Grading (5 points)
  // ============================================
  form.addSectionHeaderItem()
    .setTitle('Question 3: Connect to Molecules')
    .setHelpText('📝 MANUAL GRADING (5 points)\n' +
      '5: Connects to molecular vibration + IR absorption + greenhouse effect\n' +
      '4: Connects to molecular motion + heat\n' +
      '3: Mentions particles/molecules but weak connection\n' +
      '2: Vague reference to energy\n' +
      '1: No molecular-level thinking\n' +
      '0: No response');

  const q3 = form.addParagraphTextItem()
    .setTitle('How does your design connect to what you learned about molecular vibration and IR absorption in Station 1?')
    .setHelpText('Think: How is your thermal trap similar to the greenhouse effect? What happens to molecules when they absorb energy?')
    .setRequired(true);

  // ============================================
  // QUESTION 4: Trade-off Analysis
  // Paragraph Text - Manual Grading (5 points)
  // ============================================
  form.addSectionHeaderItem()
    .setTitle('Question 4: Engineering Trade-offs')
    .setHelpText('📝 MANUAL GRADING (5 points)\n' +
      '5: Identifies multiple trade-offs with scientific reasoning\n' +
      '4: Identifies trade-offs with some reasoning\n' +
      '3: Identifies at least one trade-off\n' +
      '2: Mentions limitations without analysis\n' +
      '1: No trade-off thinking\n' +
      '0: No response');

  const q4 = form.addParagraphTextItem()
    .setTitle('What trade-offs did you have to make in your design?\n\n(Example: "I chose X over Y because..., but this means I sacrificed...")')
    .setHelpText('Engineers always face trade-offs! What did you give up to optimize for heat trapping?')
    .setRequired(true);

  // ============================================
  // QUESTION 5: Prediction
  // Paragraph Text - Manual Grading (5 points)
  // ============================================
  form.addSectionHeaderItem()
    .setTitle('Question 5: Make a Prediction')
    .setHelpText('📝 MANUAL GRADING (5 points)\n' +
      '5: Specific prediction (number) + scientific justification\n' +
      '4: Prediction with partial justification\n' +
      '3: Reasonable prediction, weak justification\n' +
      '2: Prediction without justification\n' +
      '1: Unrealistic prediction\n' +
      '0: No response');

  const q5 = form.addParagraphTextItem()
    .setTitle('Predict: How many degrees warmer will the inside of your thermal trap get compared to the outside air after 10 minutes in sunlight?\n\nGive a specific number and explain WHY you predict this.')
    .setHelpText('Think about: A car can reach 40°F hotter than outside. How does your design compare?')
    .setRequired(true);

  // ============================================
  // COMPLETION
  // ============================================
  form.addSectionHeaderItem()
    .setTitle('🎉 Station 3 Complete!')
    .setHelpText(
      'You just applied physics and chemistry to solve an engineering problem!\n\n' +
      'KEY INSIGHT: Your thermal trap works just like the greenhouse effect:\n' +
      '• Visible light enters through transparent top\n' +
      '• Dark surfaces absorb light → molecules vibrate → temperature rises\n' +
      '• IR radiation can\'t escape easily → heat is trapped\n\n' +
      'Click Submit, then continue to Exit Ticket.'
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
function testStation3Form() {
  const form = createG7C3W1Station3Form();
  Logger.log('Test complete. Form ID: ' + form.getId());
}

/**
 * ============================================================================
 * GRADE 7 - CYCLE 3 WEEK 1: THE GREENHOUSE EFFECT MYSTERY
 * 5 Forms | 100 Points Total | MS-ESS3-5 + Spiral MS-PS1-5, MS-PS1-6
 * ============================================================================
 *
 * FORMS CREATED:
 *   1. Hook - The Hot Car Mystery (15 pts)
 *   2. Station 1 - Molecular Vibration & IR (20 pts)
 *   3. Station 2 - Carbon Cycle Conservation (20 pts)
 *   4. Station 3 - Design a Thermal Trap (25 pts)
 *   5. Exit Ticket - Chemistry & Climate (20 pts)
 *
 * DEPLOYMENT:
 *   1. Open script.google.com, create new project
 *   2. Paste this entire script
 *   3. Run: createAllG7C3W1Forms()
 *   4. Authorize when prompted
 *   5. Check Logger for form URLs (View > Logs)
 *
 * FEATURES UTILIZED:
 *   - Quiz mode with auto-grading
 *   - Shuffled MCQ options (anti-cheating)
 *   - Progress bar for student pacing
 *   - Response validation on calculations
 *   - Feedback with resource links
 *   - Page breaks for clear sections
 *   - Help text scaffolding
 *
 * CONSTRAINTS FOLLOWED:
 *   - No emojis in feedback text
 *   - Feedback under 200 characters
 *   - setPoints() only on auto-gradable items
 *   - Manual rubrics in section headers
 */

// ============================================================================
// MAIN FUNCTION - Creates all 5 G7 forms
// ============================================================================

function createAllG7C3W1Forms() {
  Logger.log('========================================');
  Logger.log('GRADE 7 CYCLE 3 WEEK 1 - FORM GENERATOR');
  Logger.log('========================================\n');

  const forms = {
    hook: createG7Hook_(),
    station1: createG7Station1_(),
    station2: createG7Station2_(),
    station3: createG7Station3_(),
    exitTicket: createG7ExitTicket_()
  };

  Logger.log('\n========================================');
  Logger.log('ALL 5 FORMS CREATED SUCCESSFULLY');
  Logger.log('Total Points: 100');
  Logger.log('========================================');

  return forms;
}

// ============================================================================
// FORM 1: HOOK - THE HOT CAR MYSTERY (15 points)
// ============================================================================

function createG7Hook_() {
  const form = FormApp.create('G7.C3.W1: Hook - The Hot Car Mystery');

  // Form settings
  form.setDescription(
    'THE HOT CAR MYSTERY\n\n' +
    'It is a sunny 75 degrees F day. You park your car for 30 minutes.\n' +
    'When you return, the dashboard is over 150 degrees F - too hot to touch!\n' +
    'But the air outside is still just 75 degrees F.\n\n' +
    'The car is not generating any heat. So where is all this extra heat coming from?\n\n' +
    '---\n' +
    'Time: About 10 minutes\n' +
    'Points: 15 total\n' +
    'Tip: Use what you learned in Cycle 2 about energy and reactions!'
  );

  form.setIsQuiz(true);
  form.setCollectEmail(true);
  form.setLimitOneResponsePerUser(true);
  form.setAllowResponseEdits(true);
  form.setShowLinkToRespondAgain(false);
  form.setProgressBar(true);
  form.setConfirmationMessage(
    'Hook submitted! You are ready for Station 1.\n\n' +
    'Next step: Use the PhET simulation to discover WHY CO2 traps heat.\n' +
    'Link: https://phet.colorado.edu/en/simulations/molecules-and-light'
  );

  // === PAGE 1: Prior Knowledge ===
  form.addPageBreakItem()
    .setTitle('Part 1: What You Already Know')
    .setHelpText('Let us see what you remember from Cycle 2.');

  // Q1: Energy in reactions (3 pts - manual)
  form.addSectionHeaderItem()
    .setTitle('Question 1')
    .setHelpText(
      'MANUAL GRADING - 3 points\n' +
      '3 pts: Both correct (released when forming bonds, absorbed when breaking) with examples\n' +
      '2 pts: One correct or both without detail\n' +
      '1 pt: Shows some understanding\n' +
      '0 pts: No response or completely incorrect'
    );

  form.addParagraphTextItem()
    .setTitle('In a chemical reaction, when is energy RELEASED? When is energy ABSORBED?')
    .setHelpText(
      'Hint: Think about endothermic vs exothermic reactions from Cycle 2.\n' +
      'What happens to energy when bonds break? When bonds form?'
    )
    .setRequired(true)
    .setValidation(FormApp.createParagraphTextValidation()
      .requireTextLengthGreaterThan(20)
      .build());

  // === PAGE 2: Observations ===
  form.addPageBreakItem()
    .setTitle('Part 2: The Phenomenon')
    .setHelpText('Describe what you have observed or experienced.');

  // Q2: Temperature observation (3 pts - manual)
  form.addSectionHeaderItem()
    .setTitle('Question 2')
    .setHelpText(
      'MANUAL GRADING - 3 points\n' +
      '3 pts: Describes temperature difference clearly, notes inside is much hotter\n' +
      '2 pts: Partial description\n' +
      '1 pt: Vague response\n' +
      '0 pts: No response'
    );

  form.addParagraphTextItem()
    .setTitle('Describe what happens to the temperature inside a car on a sunny day compared to outside.')
    .setHelpText('Be specific about what you have experienced or know happens.')
    .setRequired(true);

  // Q3: Initial hypothesis (3 pts - manual)
  form.addSectionHeaderItem()
    .setTitle('Question 3')
    .setHelpText(
      'MANUAL GRADING - 3 points\n' +
      '3 pts: Scientific reasoning about energy, light, or heat transfer\n' +
      '2 pts: Reasonable guess with some logic\n' +
      '1 pt: Guess without reasoning\n' +
      '0 pts: No response'
    );

  form.addParagraphTextItem()
    .setTitle('Why do you think the inside of the car gets hotter than the outside?')
    .setHelpText(
      'This is a prediction - there is no wrong answer yet!\n' +
      'Just explain your thinking as clearly as you can.'
    )
    .setRequired(true);

  // === PAGE 3: Connections ===
  form.addPageBreakItem()
    .setTitle('Part 3: Connect to Cycle 2')
    .setHelpText('Apply what you learned about energy.');

  // Q4: Energy type MCQ (3 pts - auto)
  const q4 = form.addMultipleChoiceItem()
    .setTitle('When the car\'s interior absorbs sunlight, what type of energy change is happening?')
    .setHelpText('Think about whether energy is going INTO or OUT OF the materials.')
    .setRequired(true);

  q4.setChoices([
    q4.createChoice('Endothermic - the materials absorb energy', true),
    q4.createChoice('Exothermic - the materials release energy', false),
    q4.createChoice('Neither - no energy change occurs', false),
    q4.createChoice('Both at the same time', false)
  ]);
  q4.setShuffleOrder(true);
  q4.setPoints(3);
  q4.setFeedbackForCorrect(
    FormApp.createFeedback()
      .setText('Correct! Absorbing sunlight is endothermic - energy goes INTO the materials, making them hotter.')
      .build()
  );
  q4.setFeedbackForIncorrect(
    FormApp.createFeedback()
      .setText('Not quite. When materials absorb energy from sunlight, that is an endothermic process - energy goes IN.')
      .build()
  );

  // Q5: Confidence scale (3 pts - auto)
  const q5 = form.addScaleItem()
    .setTitle('How confident are you in your explanation of why cars get hot inside?')
    .setHelpText('Be honest - this helps us know where to focus our learning!')
    .setBounds(1, 5)
    .setLabels('1 = Just guessing', '5 = Very confident')
    .setRequired(true);
  q5.setPoints(3);

  logFormInfo_(form, 'G7 Hook', 15);
  return form;
}

// ============================================================================
// FORM 2: STATION 1 - MOLECULAR VIBRATION & IR (20 points)
// ============================================================================

function createG7Station1_() {
  const form = FormApp.create('G7.C3.W1: Station 1 - Molecular Vibration & IR');

  form.setDescription(
    'DISCOVER WHY CO2 TRAPS HEAT\n\n' +
    'Use the PhET simulation to test different molecules and discover why\n' +
    'carbon dioxide (CO2) absorbs infrared radiation while nitrogen (N2) does not.\n\n' +
    'SIMULATION LINK (open in new tab):\n' +
    'https://phet.colorado.edu/en/simulations/molecules-and-light\n\n' +
    '---\n' +
    'Time: About 18 minutes\n' +
    'Points: 20 total\n\n' +
    'CRITICAL QUESTION: Do molecules BREAK or just VIBRATE when absorbing IR?'
  );

  form.setIsQuiz(true);
  form.setCollectEmail(true);
  form.setLimitOneResponsePerUser(true);
  form.setAllowResponseEdits(true);
  form.setProgressBar(true);
  form.setConfirmationMessage(
    'Station 1 complete!\n\n' +
    'KEY INSIGHT: CO2 vibrates when absorbing IR - it does NOT break apart.\n' +
    'This is why CO2 is a greenhouse gas.\n\n' +
    'Continue to Station 2: Carbon Cycle Conservation'
  );

  // === PAGE 1: Simulation Instructions ===
  form.addPageBreakItem()
    .setTitle('Step 1: Run the Simulation')
    .setHelpText(
      'BEFORE answering questions:\n\n' +
      '1. Open the PhET simulation in a new tab\n' +
      '2. Set the light source to INFRARED\n' +
      '3. Test each molecule: N2, O2, CO2, H2O\n' +
      '4. Watch carefully what happens to each molecule\n\n' +
      'Simulation: https://phet.colorado.edu/en/simulations/molecules-and-light'
    );

  // Q1: Observation MCQ (4 pts)
  const q1 = form.addMultipleChoiceItem()
    .setTitle('In the PhET simulation, when infrared radiation hits a CO2 molecule, what happens to the molecule?')
    .setHelpText('Watch the CO2 molecule carefully when IR waves hit it. Does it stay together or break apart?')
    .setRequired(true);

  q1.setChoices([
    q1.createChoice('It breaks apart into separate atoms', false),
    q1.createChoice('It vibrates faster - stretches and bends but stays together', true),
    q1.createChoice('It slows down and stops moving', false),
    q1.createChoice('Nothing happens - the IR passes right through', false)
  ]);
  q1.setShuffleOrder(true);
  q1.setPoints(4);
  q1.setFeedbackForCorrect(
    FormApp.createFeedback()
      .setText('Correct! CO2 vibrates (stretches and bends) when absorbing IR. The molecule stays together - it does NOT break apart.')
      .build()
  );
  q1.setFeedbackForIncorrect(
    FormApp.createFeedback()
      .setText('Look again at the simulation. The CO2 molecule stays in one piece but moves more. That movement is vibration.')
      .build()
  );

  // Q2: Energy type MCQ (4 pts)
  const q2 = form.addMultipleChoiceItem()
    .setTitle('The CO2 molecule absorbing IR energy is an example of what type of process?')
    .setHelpText('Think about Cycle 2: Is energy going INTO or OUT OF the molecule?')
    .setRequired(true);

  q2.setChoices([
    q2.createChoice('Endothermic - the molecule absorbs energy', true),
    q2.createChoice('Exothermic - the molecule releases energy', false),
    q2.createChoice('Neither - no energy transfer happens', false)
  ]);
  q2.setShuffleOrder(true);
  q2.setPoints(4);
  q2.setFeedbackForCorrect(
    FormApp.createFeedback()
      .setText('Correct! Energy goes INTO the molecule when it absorbs IR. Absorbing energy = endothermic.')
      .build()
  );
  q2.setFeedbackForIncorrect(
    FormApp.createFeedback()
      .setText('The molecule is taking in energy from the IR radiation. Taking in energy = endothermic process.')
      .build()
  );

  // === PAGE 2: Critical Thinking ===
  form.addPageBreakItem()
    .setTitle('Step 2: Critical Analysis')
    .setHelpText('This is the most important part - think carefully!');

  // Q3: Misconception check (5 pts - manual)
  form.addSectionHeaderItem()
    .setTitle('Question 3: Who Is Correct? (5 points)')
    .setHelpText(
      'MANUAL GRADING - 5 points\n' +
      '5 pts: Student B correct + bond energy explanation + Cycle 2 connection\n' +
      '4 pts: Correct + bond energy OR vibration explanation\n' +
      '3 pts: Correct + basic explanation\n' +
      '2 pts: Correct but no real explanation\n' +
      '1 pt: Incorrect or wrong reasoning\n' +
      '0 pts: No response'
    );

  form.addParagraphTextItem()
    .setTitle(
      'Student A says: "When CO2 absorbs energy, it breaks the bonds."\n' +
      'Student B says: "The bonds don\'t break, they just vibrate."\n\n' +
      'Who is correct and WHY?'
    )
    .setHelpText(
      'Use BOTH:\n' +
      '1. What you observed in the simulation\n' +
      '2. What you learned about bond energy in Cycle 2\n\n' +
      'Remember: Breaking bonds requires a LOT of energy!'
    )
    .setRequired(true)
    .setValidation(FormApp.createParagraphTextValidation()
      .requireTextLengthGreaterThan(50)
      .build());

  // Q4: Cycle 2 connection (3 pts - manual)
  form.addSectionHeaderItem()
    .setTitle('Question 4: Cycle 2 Connection (3 points)')
    .setHelpText(
      'MANUAL GRADING - 3 points\n' +
      '3 pts: Explains breaking bonds requires energy + IR does not provide enough\n' +
      '2 pts: Mentions bond energy but incomplete connection\n' +
      '1 pt: Vague reference to energy\n' +
      '0 pts: No response'
    );

  form.addParagraphTextItem()
    .setTitle('In Cycle 2, we learned that breaking bonds REQUIRES energy. How does this help explain why CO2 bonds DO NOT break when absorbing IR?')
    .setHelpText('Hint: Compare the amount of energy IR provides vs. the amount needed to break a strong bond.')
    .setRequired(true);

  // === PAGE 3: Application ===
  form.addPageBreakItem()
    .setTitle('Step 3: Extend Your Understanding');

  // Q5: N2 application (2 pts - manual)
  form.addSectionHeaderItem()
    .setTitle('Question 5: Why Not N2? (2 points)')
    .setHelpText(
      'MANUAL GRADING - 2 points\n' +
      '2 pts: Mentions molecular structure (2 identical atoms, linear, symmetric)\n' +
      '1 pt: Reasonable attempt without structure reference\n' +
      '0 pts: No response'
    );

  form.addParagraphTextItem()
    .setTitle('N2 (nitrogen gas) does not absorb much IR energy. Based on molecular structure, why might this be?')
    .setHelpText(
      'Compare the molecules:\n' +
      '- N2 has 2 identical atoms: N≡N (linear, symmetric)\n' +
      '- CO2 has 3 atoms: O=C=O (can bend and stretch asymmetrically)\n' +
      '- H2O has 3 atoms: H-O-H (bent shape)\n\n' +
      'What pattern do you notice?'
    )
    .setRequired(true);

  // Q6: Self-assessment (2 pts)
  const q6 = form.addScaleItem()
    .setTitle('Rate your understanding: "I can explain how molecules absorb energy without breaking bonds."')
    .setHelpText('Be honest - this helps us know if you need more support!')
    .setBounds(1, 5)
    .setLabels('1 = Not confident', '5 = Very confident')
    .setRequired(true);
  q6.setPoints(2);

  logFormInfo_(form, 'G7 Station 1', 20);
  return form;
}

// ============================================================================
// FORM 3: STATION 2 - CARBON CYCLE CONSERVATION (20 points)
// ============================================================================

function createG7Station2_() {
  const form = FormApp.create('G7.C3.W1: Station 2 - Carbon Cycle Conservation');

  form.setDescription(
    'TRACE CARBON ATOMS THROUGH EARTH\'S SYSTEMS\n\n' +
    'Prove that carbon atoms are NEVER created or destroyed - just rearranged.\n' +
    'This is your Cycle 2 conservation of mass applied to climate!\n\n' +
    '---\n' +
    'Time: About 15 minutes\n' +
    'Points: 20 total\n\n' +
    'KEY FORMULA: CO2 is 27% carbon by mass\n' +
    'You will need a calculator for this station!'
  );

  form.setIsQuiz(true);
  form.setCollectEmail(true);
  form.setLimitOneResponsePerUser(true);
  form.setAllowResponseEdits(true);
  form.setProgressBar(true);
  form.setConfirmationMessage(
    'Station 2 complete!\n\n' +
    'KEY INSIGHT: Carbon cycles through Earth - never created or destroyed.\n' +
    'Burning fossil fuels RELEASES ancient carbon, it does not CREATE new carbon.\n\n' +
    'Continue to Station 3: Design a Thermal Trap'
  );

  // === PAGE 1: Reference Information ===
  form.addPageBreakItem()
    .setTitle('Reference: Photosynthesis Equation')
    .setHelpText(
      '6CO2 + 6H2O --> C6H12O6 + 6O2\n\n' +
      'Left side (Reactants):\n' +
      '- 6 carbon dioxide molecules\n' +
      '- 6 water molecules\n\n' +
      'Right side (Products):\n' +
      '- 1 glucose molecule\n' +
      '- 6 oxygen molecules\n\n' +
      'COUNT THE ATOMS:\n' +
      'Carbon: 6 on left, 6 on right\n' +
      'Hydrogen: 12 on left, 12 on right\n' +
      'Oxygen: 18 on left, 18 on right\n' +
      'TOTAL: 36 atoms on each side!'
    );

  // Q1: Mass calculation (4 pts - manual)
  form.addSectionHeaderItem()
    .setTitle('Question 1: Calculate Carbon Storage (4 points)')
    .setHelpText(
      'MANUAL GRADING - 4 points\n' +
      '4 pts: Correct answer (12.9-13.1 lbs) with work shown\n' +
      '3 pts: Correct answer but work unclear\n' +
      '2 pts: Correct setup but calculation error\n' +
      '1 pt: Wrong setup but shows effort\n' +
      '0 pts: No response\n\n' +
      'ANSWER KEY: 48 x 0.27 = 12.96 lbs (accept 13 lbs)'
    );

  form.addParagraphTextItem()
    .setTitle(
      'A tree absorbs 48 lbs of CO2 per year. How many pounds of CARBON is that?\n\n' +
      '(Remember: CO2 is 27% carbon by mass)\n\n' +
      'SHOW YOUR WORK!'
    )
    .setHelpText(
      'Steps:\n' +
      '1. Convert 27% to a decimal: 27% = 0.27\n' +
      '2. Multiply: 48 lbs x 0.27 = ?\n' +
      '3. Write your answer with units (lbs)'
    )
    .setRequired(true);

  // === PAGE 2: Conservation ===
  form.addPageBreakItem()
    .setTitle('Part 2: Conservation of Atoms');

  // Q2: Atom counting MCQ (4 pts)
  const q2 = form.addMultipleChoiceItem()
    .setTitle(
      'In photosynthesis: 6CO2 + 6H2O --> C6H12O6 + 6O2\n\n' +
      'Are there more, fewer, or the same number of atoms on each side?'
    )
    .setHelpText('Left side has: 6C + 12H + 18O = 36 atoms. Count the right side!')
    .setRequired(true);

  q2.setChoices([
    q2.createChoice('More atoms on the left side', false),
    q2.createChoice('More atoms on the right side', false),
    q2.createChoice('Same number on both sides (36 atoms each)', true),
    q2.createChoice('Cannot tell without more information', false)
  ]);
  q2.setShuffleOrder(true);
  q2.setPoints(4);
  q2.setFeedbackForCorrect(
    FormApp.createFeedback()
      .setText('Correct! 36 atoms on each side. Atoms are conserved - rearranged, never created or destroyed.')
      .build()
  );
  q2.setFeedbackForIncorrect(
    FormApp.createFeedback()
      .setText('Count again! Left: 6C+12H+18O=36. Right: 6C+12H+6O+12O=36. They are equal - atoms are conserved.')
      .build()
  );

  // Q3: Carbon destination checkbox (4 pts)
  const q3 = form.addCheckboxItem()
    .setTitle('When you burn wood, where does the carbon GO?\n\n(Select ALL correct answers)')
    .setHelpText('Think about conservation of mass - atoms cannot just disappear!')
    .setRequired(true);

  q3.setChoices([
    q3.createChoice('Destroyed completely - carbon disappears', false),
    q3.createChoice('Released into the air as CO2 gas', true),
    q3.createChoice('Some remains in the ash', true),
    q3.createChoice('Converted to pure energy (E=mc2)', false)
  ]);
  q3.setPoints(4);
  q3.setFeedbackForCorrect(
    FormApp.createFeedback()
      .setText('Correct! Carbon goes into CO2 gas AND some remains in ash. It is never destroyed - just moved!')
      .build()
  );
  q3.setFeedbackForIncorrect(
    FormApp.createFeedback()
      .setText('Carbon atoms cannot be destroyed. When wood burns, carbon becomes CO2 gas and some stays in ash.')
      .build()
  );

  // === PAGE 3: Misconception Check ===
  form.addPageBreakItem()
    .setTitle('Part 3: Evaluate Claims');

  // Q4: Misconception check (4 pts - manual)
  form.addSectionHeaderItem()
    .setTitle('Question 4: Is This Student Correct? (4 points)')
    .setHelpText(
      'MANUAL GRADING - 4 points\n' +
      '4 pts: Correctly refutes + uses conservation of mass + explains carbon origin\n' +
      '3 pts: Correctly refutes + mentions conservation OR carbon origin\n' +
      '2 pts: Correctly refutes but weak explanation\n' +
      '1 pt: Incorrect or partially correct with errors\n' +
      '0 pts: No response'
    );

  form.addParagraphTextItem()
    .setTitle(
      'A student says: "When we burn fossil fuels, we are creating new carbon that goes into the atmosphere."\n\n' +
      'Is this correct? Explain using conservation of mass.'
    )
    .setHelpText(
      'Think about:\n' +
      '- Can atoms be created?\n' +
      '- Where did the carbon in fossil fuels originally come from?\n' +
      '- What does "conservation of mass" tell us?'
    )
    .setRequired(true)
    .setValidation(FormApp.createParagraphTextValidation()
      .requireTextLengthGreaterThan(30)
      .build());

  // Q5: Carbon balance MCQ (4 pts)
  const q5 = form.addMultipleChoiceItem()
    .setTitle(
      'If ALL the carbon absorbed by trees in one year was released by burning those same trees, ' +
      'would atmospheric carbon increase, decrease, or stay the same?'
    )
    .setHelpText('Think about inputs and outputs - what goes in must come out!')
    .setRequired(true);

  q5.setChoices([
    q5.createChoice('Increase - burning adds more carbon than trees absorbed', false),
    q5.createChoice('Decrease - some carbon stays in the ash', false),
    q5.createChoice('Stay the same - carbon in equals carbon out (conservation)', true),
    q5.createChoice('Cannot determine without exact measurements', false)
  ]);
  q5.setShuffleOrder(true);
  q5.setPoints(4);
  q5.setFeedbackForCorrect(
    FormApp.createFeedback()
      .setText('Correct! Conservation of mass: the carbon absorbed equals the carbon released. Perfect balance.')
      .build()
  );
  q5.setFeedbackForIncorrect(
    FormApp.createFeedback()
      .setText('Remember conservation of mass: atoms in = atoms out. The same carbon just moves to a different place.')
      .build()
  );

  logFormInfo_(form, 'G7 Station 2', 20);
  return form;
}

// ============================================================================
// FORM 4: STATION 3 - DESIGN A THERMAL TRAP (25 points)
// ============================================================================

function createG7Station3_() {
  const form = FormApp.create('G7.C3.W1: Station 3 - Design a Thermal Trap');

  form.setDescription(
    'ENGINEERING CHALLENGE: DESIGN A THERMAL TRAP\n\n' +
    'Apply what you learned about thermal energy to design a structure\n' +
    'that maximizes heat retention - like a mini greenhouse!\n\n' +
    '---\n' +
    'Time: About 20 minutes\n' +
    'Points: 25 total (highest value station!)\n\n' +
    'CONSTRAINTS:\n' +
    '- Size: Maximum 20cm x 20cm x 20cm\n' +
    '- Materials: Choose from 5 available options\n' +
    '- Requirement: Justify EVERY choice with science!'
  );

  form.setIsQuiz(true);
  form.setCollectEmail(true);
  form.setLimitOneResponsePerUser(true);
  form.setAllowResponseEdits(true);
  form.setProgressBar(true);
  form.setConfirmationMessage(
    'Station 3 complete!\n\n' +
    'Great engineering work! Your thermal trap uses the same physics as the greenhouse effect:\n' +
    '- Visible light enters through transparent top\n' +
    '- Dark surfaces absorb light, molecules vibrate faster, temperature rises\n' +
    '- IR radiation cannot escape easily, so heat is trapped\n\n' +
    'Continue to Exit Ticket'
  );

  // === PAGE 1: Materials Reference ===
  form.addPageBreakItem()
    .setTitle('Available Materials')
    .setHelpText(
      'You may use any combination of these 5 materials:\n\n' +
      '1. BLACK PAPER\n' +
      '   - Absorbs light energy well\n' +
      '   - Converts light to heat\n' +
      '   - Best for: absorbing incoming radiation\n\n' +
      '2. ALUMINUM FOIL\n' +
      '   - Reflects radiation\n' +
      '   - Conducts heat quickly\n' +
      '   - Best for: reflecting heat back inward\n\n' +
      '3. BUBBLE WRAP\n' +
      '   - Traps air pockets\n' +
      '   - Poor heat conductor (good insulator)\n' +
      '   - Best for: reducing heat loss through walls\n\n' +
      '4. CARDBOARD\n' +
      '   - Moderate insulator\n' +
      '   - Provides structural support\n' +
      '   - Best for: structure + some insulation\n\n' +
      '5. PLASTIC WRAP\n' +
      '   - Transparent to visible light\n' +
      '   - Blocks some infrared\n' +
      '   - Best for: creating greenhouse effect on top'
    );

  // Q1: Material ranking (5 pts - manual)
  form.addSectionHeaderItem()
    .setTitle('Question 1: Material Ranking (5 points)')
    .setHelpText(
      'MANUAL GRADING - 5 points\n' +
      '5 pts: Correct ranking with scientific reasoning for each material\n' +
      '4 pts: Correct ranking with reasoning for most materials\n' +
      '3 pts: Reasonable ranking with some scientific reasoning\n' +
      '2 pts: Ranking without scientific reasoning\n' +
      '1 pt: Attempt without clear logic\n' +
      '0 pts: No response'
    );

  form.addParagraphTextItem()
    .setTitle(
      'Rank these 3 materials from BEST to WORST for trapping heat:\n' +
      'Black paper, Aluminum foil, Bubble wrap\n\n' +
      'Explain your reasoning for EACH material.'
    )
    .setHelpText(
      'Use thermal energy vocabulary:\n' +
      '- Absorb (take in energy)\n' +
      '- Reflect (bounce energy back)\n' +
      '- Conduct (transfer heat through material)\n' +
      '- Insulate (prevent heat transfer)'
    )
    .setRequired(true)
    .setValidation(FormApp.createParagraphTextValidation()
      .requireTextLengthGreaterThan(50)
      .build());

  // === PAGE 2: Design ===
  form.addPageBreakItem()
    .setTitle('Your Design');

  // Q2: Design description (5 pts - manual)
  form.addSectionHeaderItem()
    .setTitle('Question 2: Describe Your Design (5 points)')
    .setHelpText(
      'MANUAL GRADING - 5 points\n' +
      '5 pts: Clear description with specific placement + energy flow explanation\n' +
      '4 pts: Clear description with partial energy flow\n' +
      '3 pts: Description but missing specifics\n' +
      '2 pts: Vague description\n' +
      '1 pt: Minimal attempt\n' +
      '0 pts: No response'
    );

  form.addParagraphTextItem()
    .setTitle(
      'Describe your thermal trap design.\n\n' +
      'Be specific:\n' +
      '- What material goes on the BOTTOM?\n' +
      '- What material goes on the SIDES?\n' +
      '- What material goes on the TOP?\n' +
      '- How does energy flow through your design?'
    )
    .setHelpText(
      'Example format:\n' +
      '"Bottom: [material] because... Sides: [material] because... Top: [material] because..."\n' +
      '"Energy flows in through the top as visible light, then..."'
    )
    .setRequired(true);

  // Q3: Molecular connection (5 pts - manual)
  form.addSectionHeaderItem()
    .setTitle('Question 3: Connect to Molecular Level (5 points)')
    .setHelpText(
      'MANUAL GRADING - 5 points\n' +
      '5 pts: Connects to molecular vibration + IR absorption + greenhouse effect\n' +
      '4 pts: Connects to molecular motion and heat\n' +
      '3 pts: Mentions particles/molecules but weak connection\n' +
      '2 pts: Vague reference to energy\n' +
      '1 pt: No molecular-level thinking\n' +
      '0 pts: No response'
    );

  form.addParagraphTextItem()
    .setTitle('How does your design connect to what you learned about molecular vibration and IR absorption in Station 1?')
    .setHelpText(
      'Think about:\n' +
      '- How is your thermal trap similar to the greenhouse effect?\n' +
      '- What happens to molecules when they absorb energy?\n' +
      '- Why can visible light get in but heat cannot get out?'
    )
    .setRequired(true);

  // === PAGE 3: Analysis ===
  form.addPageBreakItem()
    .setTitle('Engineering Analysis');

  // Q4: Trade-offs (5 pts - manual)
  form.addSectionHeaderItem()
    .setTitle('Question 4: Trade-offs (5 points)')
    .setHelpText(
      'MANUAL GRADING - 5 points\n' +
      '5 pts: Identifies multiple trade-offs with scientific reasoning\n' +
      '4 pts: Identifies trade-offs with some reasoning\n' +
      '3 pts: Identifies at least one clear trade-off\n' +
      '2 pts: Mentions limitations without analysis\n' +
      '1 pt: No trade-off thinking\n' +
      '0 pts: No response'
    );

  form.addParagraphTextItem()
    .setTitle(
      'What trade-offs did you make in your design?\n\n' +
      'Example: "I chose X over Y because..., but this means I had to sacrifice..."'
    )
    .setHelpText('Engineers always face trade-offs! What did you give up to optimize for trapping heat?')
    .setRequired(true);

  // Q5: Prediction (5 pts - manual)
  form.addSectionHeaderItem()
    .setTitle('Question 5: Make a Prediction (5 points)')
    .setHelpText(
      'MANUAL GRADING - 5 points\n' +
      '5 pts: Specific number with scientific justification\n' +
      '4 pts: Number with partial justification\n' +
      '3 pts: Reasonable prediction with weak justification\n' +
      '2 pts: Number without justification\n' +
      '1 pt: Unrealistic prediction\n' +
      '0 pts: No response'
    );

  form.addParagraphTextItem()
    .setTitle(
      'PREDICT: How many degrees (F) warmer will the inside of your thermal trap get\n' +
      'compared to outside air after 10 minutes in sunlight?\n\n' +
      'Give a specific number and explain WHY you predict this.'
    )
    .setHelpText(
      'Reference point: A car can reach 40+ degrees F hotter than outside.\n' +
      'How does your design compare? Better insulation? Worse? Why?'
    )
    .setRequired(true);

  logFormInfo_(form, 'G7 Station 3', 25);
  return form;
}

// ============================================================================
// FORM 5: EXIT TICKET - CHEMISTRY & CLIMATE (20 points)
// ============================================================================

function createG7ExitTicket_() {
  const form = FormApp.create('G7.C3.W1: Exit Ticket - Chemistry & Climate');

  form.setDescription(
    'EXIT TICKET: SHOW WHAT YOU LEARNED\n\n' +
    'This exit ticket tests whether you can connect your Cycle 2\n' +
    'chemistry knowledge to climate science.\n\n' +
    '---\n' +
    'Time: About 15 minutes\n' +
    'Points: 20 total\n\n' +
    'QUESTION TYPES:\n' +
    '- 2 questions on NEW content (Cycle 3)\n' +
    '- 2 questions SPIRALING back (Cycle 2)\n' +
    '- 1 INTEGRATION question (connects both cycles)'
  );

  form.setIsQuiz(true);
  form.setCollectEmail(true);
  form.setLimitOneResponsePerUser(true);
  form.setAllowResponseEdits(true);
  form.setProgressBar(true);
  form.setConfirmationMessage(
    'WEEK 1 COMPLETE! Congratulations!\n\n' +
    'You have connected chemistry to climate science.\n\n' +
    'Key takeaways:\n' +
    '- CO2 absorbs IR and vibrates (does not break)\n' +
    '- Carbon cycles through Earth - never created or destroyed\n' +
    '- The greenhouse effect works at the molecular level\n\n' +
    'NEXT WEEK: What happens when ice melts? Feedback loops!'
  );

  // === PAGE 1: New Content ===
  form.addPageBreakItem()
    .setTitle('NEW CONTENT: Cycle 3')
    .setHelpText('These questions test what you learned TODAY about the greenhouse effect.');

  // Q1: Greenhouse effect explanation (4 pts - manual)
  form.addSectionHeaderItem()
    .setTitle('Question 1: NEW - Explain the Greenhouse Effect (4 points)')
    .setHelpText(
      'MANUAL GRADING - 4 points\n' +
      '4 pts: Uses "absorb" AND "vibrate" with molecular-level explanation\n' +
      '3 pts: Uses key vocabulary with basic explanation\n' +
      '2 pts: Partial explanation, missing vocabulary\n' +
      '1 pt: Vague or mostly incorrect\n' +
      '0 pts: No response'
    );

  form.addParagraphTextItem()
    .setTitle('Explain the greenhouse effect in 2-3 sentences.\n\nYou MUST use the words "absorb" and "vibrate" in your answer.')
    .setHelpText('Connect what you learned about CO2 molecules to how Earth\'s atmosphere traps heat.')
    .setRequired(true)
    .setValidation(FormApp.createParagraphTextValidation()
      .requireTextLengthGreaterThan(40)
      .build());

  // === PAGE 2: Spiral ===
  form.addPageBreakItem()
    .setTitle('SPIRAL: Cycle 2 Review')
    .setHelpText('These questions check that you still remember key concepts from Cycle 2.');

  // Q2: Bond energy MCQ (4 pts)
  const q2 = form.addMultipleChoiceItem()
    .setTitle(
      'In the reaction: CH4 + 2O2 --> CO2 + 2H2O + energy\n\n' +
      'This reaction RELEASES energy. Based on Cycle 2, what does this mean?'
    )
    .setHelpText('Think about what happens to energy when bonds break vs. when bonds form.')
    .setRequired(true);

  q2.setChoices([
    q2.createChoice('More energy is released forming new bonds than absorbed breaking old bonds (exothermic)', true),
    q2.createChoice('More energy is absorbed breaking bonds than released forming new bonds (endothermic)', false),
    q2.createChoice('Energy is created from nothing during the reaction', false),
    q2.createChoice('Energy is destroyed during the reaction', false)
  ]);
  q2.setShuffleOrder(true);
  q2.setPoints(4);
  q2.setFeedbackForCorrect(
    FormApp.createFeedback()
      .setText('Correct! This is exothermic: forming product bonds releases MORE energy than breaking reactant bonds absorbs.')
      .build()
  );
  q2.setFeedbackForIncorrect(
    FormApp.createFeedback()
      .setText('When a reaction releases energy, it is exothermic. More energy comes out of forming bonds than goes into breaking them.')
      .build()
  );

  // Q3: Carbon path (4 pts - manual)
  form.addSectionHeaderItem()
    .setTitle('Question 3: NEW - Trace the Carbon (4 points)')
    .setHelpText(
      'MANUAL GRADING - 4 points\n' +
      '4 pts: Complete path with correct molecular form at each step\n' +
      '3 pts: Complete path with some molecular details\n' +
      '2 pts: Partial path\n' +
      '1 pt: Vague or incorrect path\n' +
      '0 pts: No response'
    );

  form.addParagraphTextItem()
    .setTitle(
      'Trace a carbon atom\'s path:\n' +
      'Gasoline --> Engine --> Atmosphere --> Plant --> You\n\n' +
      'Describe what happens at EACH step and what form the carbon takes.'
    )
    .setHelpText(
      'Example format:\n' +
      '"In gasoline, carbon is in hydrocarbon molecules. In the engine, it..."\n\n' +
      'Forms to consider: hydrocarbons, CO2 gas, glucose, proteins, etc.'
    )
    .setRequired(true);

  // Q4: Conservation MCQ (4 pts)
  const q4 = form.addMultipleChoiceItem()
    .setTitle('What happens to the total mass in a closed chemical reaction?')
    .setHelpText('Think about what you learned about atoms in Cycle 2.')
    .setRequired(true);

  q4.setChoices([
    q4.createChoice('Mass increases because new atoms are created', false),
    q4.createChoice('Mass decreases because atoms are destroyed', false),
    q4.createChoice('Mass stays the same because atoms are conserved (rearranged, not created or destroyed)', true),
    q4.createChoice('It depends on the type of reaction', false)
  ]);
  q4.setShuffleOrder(true);
  q4.setPoints(4);
  q4.setFeedbackForCorrect(
    FormApp.createFeedback()
      .setText('Correct! Law of Conservation of Mass: atoms are rearranged but never created or destroyed.')
      .build()
  );
  q4.setFeedbackForIncorrect(
    FormApp.createFeedback()
      .setText('Remember the Law of Conservation of Mass: atoms cannot be created or destroyed, only rearranged.')
      .build()
  );

  // === PAGE 3: Integration ===
  form.addPageBreakItem()
    .setTitle('INTEGRATION: Connect Both Cycles')
    .setHelpText('This question requires you to use knowledge from BOTH Cycle 2 AND Cycle 3.');

  // Q5: Integration (4 pts - manual)
  form.addSectionHeaderItem()
    .setTitle('Question 5: INTEGRATION - Evaluate a Claim (4 points)')
    .setHelpText(
      'MANUAL GRADING - 4 points (3D Assessment)\n' +
      '4 pts: Refutes claim + explains conservation of mass + suggests alternatives\n' +
      '3 pts: Refutes claim + uses conservation of mass\n' +
      '2 pts: Recognizes problem but weak explanation\n' +
      '1 pt: Accepts claim or major misconceptions\n' +
      '0 pts: No response\n\n' +
      '3D Scoring:\n' +
      '- SEP: Does response critique the claim using evidence?\n' +
      '- DCI: Does response correctly apply conservation of mass?\n' +
      '- CCC: Does response track matter flow through the system?'
    );

  form.addParagraphTextItem()
    .setTitle(
      'A company claims their product "destroys carbon pollution."\n\n' +
      'Using what you know about:\n' +
      '1. Conservation of mass (Cycle 2)\n' +
      '2. The carbon cycle (Cycle 3)\n\n' +
      'Evaluate this claim:\n' +
      '- Is it scientifically possible to "destroy" carbon?\n' +
      '- What might the product ACTUALLY do to the carbon?'
    )
    .setHelpText(
      'Think about:\n' +
      '- Can atoms ever be destroyed?\n' +
      '- If carbon is not destroyed, where could it go?\n' +
      '- What would be a more accurate way to describe what the product does?'
    )
    .setRequired(true)
    .setValidation(FormApp.createParagraphTextValidation()
      .requireTextLengthGreaterThan(60)
      .build());

  logFormInfo_(form, 'G7 Exit Ticket', 20);
  return form;
}

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Logs form information to the console
 */
function logFormInfo_(form, name, points) {
  const editUrl = form.getEditUrl();
  const publishedUrl = form.getPublishedUrl();
  const embedUrl = publishedUrl.replace('/viewform', '/viewform?embedded=true');

  Logger.log('----------------------------------------');
  Logger.log(name + ' (' + points + ' points)');
  Logger.log('----------------------------------------');
  Logger.log('Edit URL:  ' + editUrl);
  Logger.log('View URL:  ' + publishedUrl);
  Logger.log('Embed URL: ' + embedUrl);
  Logger.log('');
}

/**
 * Test function - creates just the Hook form
 */
function testG7Hook() {
  const form = createG7Hook_();
  Logger.log('Test complete. Check the form in your Google Drive.');
}

/**
 * Delete all forms created by this script (use with caution!)
 */
function deleteAllG7C3W1Forms() {
  const files = DriveApp.getFilesByName('G7.C3.W1:');
  while (files.hasNext()) {
    const file = files.next();
    Logger.log('Found: ' + file.getName());
    // Uncomment the next line to actually delete:
    // file.setTrashed(true);
  }
}

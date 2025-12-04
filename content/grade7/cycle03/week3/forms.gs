/**
 * ============================================================================
 * GRADE 7 - CYCLE 3 WEEK 3: SYNTHESIS & ASSESSMENT
 * 3 Forms | 100 Points Total | ~75 Minutes
 * ============================================================================
 *
 * ASSESSMENT WEEK STRUCTURE:
 *   Part 1: Synthesis Review (20 pts, ~15 min) - Connects W1+W2 concepts
 *   Part 2: Cumulative Assessment (60 pts, ~40 min) - All learning targets
 *   Part 3: Misconception Final Check (20 pts, ~20 min) - Targeted remediation
 *
 * LEARNING TARGETS ASSESSED (from W1 & W2):
 *   W1-1: Explain why CO2 absorbs heat but N2 doesn't
 *   W1-2: Trace carbon atoms through the carbon cycle
 *   W1-3: Design a structure that traps thermal energy
 *   W1-4: Connect bond energy concepts to the greenhouse effect
 *   W2-1: Explain how albedo affects Earth's energy balance
 *   W2-2: Model a positive feedback loop using ice-albedo
 *   W2-3: Analyze carbon sink data and predict consequences
 *   W2-4: Design a carbon capture system using scientific principles
 *
 * SPIRAL FROM CYCLE 2:
 *   MS-PS1-5: Conservation of mass (atoms rearranged, not created/destroyed)
 *   MS-PS1-6: Energy changes in reactions (endo/exothermic)
 *
 * MISCONCEPTIONS TARGETED:
 *   1. "Breaking bonds releases energy" (60% frequency) - Q in Part 3
 *   2. "Mass disappears in reactions" (40%) - Q in Part 2 & 3
 *   3. "Energy is not measurable" (35%) - Q in Part 2
 *
 * 3-DIMENSIONAL ASSESSMENT:
 *   SEP: Asking Questions (MS-ESS3-5 requires this)
 *   DCI: ESS3.D Human Impacts on Earth Systems
 *   CCC: Cause and Effect, Stability and Change
 *
 * ============================================================================
 */

// ============================================================================
// MAIN FUNCTION
// ============================================================================

function createAllG7C3W3Forms() {
  Logger.log('================================================');
  Logger.log('G7 CYCLE 3 WEEK 3: SYNTHESIS & ASSESSMENT');
  Logger.log('================================================\n');

  const forms = {
    synthesis: createG7W3Synthesis_(),
    assessment: createG7W3Assessment_(),
    misconceptionCheck: createG7W3MisconceptionCheck_()
  };

  Logger.log('\n================================================');
  Logger.log('ALL 3 FORMS CREATED - 100 POINTS TOTAL');
  Logger.log('================================================');

  return forms;
}

// ============================================================================
// PART 1: SYNTHESIS REVIEW (20 points, ~15 min)
// Connects W1 greenhouse effect to W2 feedback loops
// ============================================================================

function createG7W3Synthesis_() {
  const form = FormApp.create('G7.C3.W3: Part 1 - Synthesis Review');

  form.setDescription(
    'CYCLE 3 SYNTHESIS: CONNECTING THE PIECES\n\n' +
    'Over the past two weeks, you learned:\n' +
    '- Week 1: How CO2 traps heat (greenhouse effect)\n' +
    '- Week 2: How feedback loops amplify climate change\n\n' +
    'Now it\'s time to connect these ideas into a complete picture.\n\n' +
    '---\n' +
    'Time: About 15 minutes | Points: 20\n' +
    'This prepares you for the cumulative assessment.'
  );

  form.setIsQuiz(true);
  form.setRequireLogin(true);
  form.setCollectEmail(true);
  form.setLimitOneResponsePerUser(true);
  form.setAllowResponseEdits(true);
  form.setProgressBar(true);
  form.setConfirmationMessage(
    'Synthesis Review complete!\n\n' +
    'You\'ve connected Week 1 and Week 2 concepts.\n' +
    'Now you\'re ready for the Cumulative Assessment.\n\n' +
    'Take a 5-minute break, then continue to Part 2.'
  );

  // --- CONCEPT MAP ---
  form.addPageBreakItem()
    .setTitle('The Big Picture')
    .setHelpText(
      'Climate change is not just one process - it\'s multiple processes connected together.\n\n' +
      'WEEK 1: CO2 absorbs infrared → molecules vibrate → heat trapped\n' +
      'WEEK 2: Heat melts ice → albedo decreases → more heat absorbed → feedback loop\n\n' +
      'Your task: Connect these processes.'
    );

  // Q1: Connection diagram (5 pts manual)
  form.addSectionHeaderItem()
    .setTitle('Question 1: Create a Connection Diagram (5 points)')
    .setHelpText(
      'RUBRIC:\n' +
      '5: Correctly connects all 4 elements with arrows showing cause-effect\n' +
      '4: Connects 3-4 elements correctly\n' +
      '3: Connects 2-3 elements\n' +
      '2: Shows some connections but unclear\n' +
      '1: Lists concepts without connections\n' +
      '0: No response'
    );

  form.addParagraphTextItem()
    .setTitle(
      'Create a diagram (in text) showing how these 4 processes connect:\n\n' +
      '1. CO2 greenhouse effect (Week 1)\n' +
      '2. Ice-albedo feedback (Week 2)\n' +
      '3. Carbon sink saturation (Week 2)\n' +
      '4. Human fossil fuel emissions\n\n' +
      'Use arrows (→) to show cause and effect relationships.'
    )
    .setHelpText('Example format: A → B → C (A causes B, B causes C)')
    .setRequired(true);

  // Q2: Identify the starting point (5 pts auto)
  const q2 = form.addMultipleChoiceItem()
    .setTitle('In the climate system, which process is the PRIMARY driver that starts the feedback loops?')
    .setRequired(true);

  q2.setChoices([
    q2.createChoice('Ice melting (this causes everything else)', false),
    q2.createChoice('Increased CO2 in atmosphere (from human emissions)', true),
    q2.createChoice('Decreased albedo (this starts the warming)', false),
    q2.createChoice('Carbon sinks failing (this triggers the problem)', false)
  ]);
  q2.setPoints(5);
  q2.setFeedbackForCorrect(
    FormApp.createFeedback()
      .setText('Correct! Increased CO2 is the PRIMARY driver. It causes initial warming, which then triggers the feedback loops (ice-albedo, carbon sink saturation).')
      .build()
  );
  q2.setFeedbackForIncorrect(
    FormApp.createFeedback()
      .setText('The feedbacks (ice melting, albedo change, sink failure) are RESPONSES to warming. The initial CAUSE is increased CO2 from human emissions.')
      .build()
  );

  // Q3: Synthesis explanation (5 pts manual)
  form.addSectionHeaderItem()
    .setTitle('Question 3: Explain the Complete System (5 points)')
    .setHelpText(
      'RUBRIC:\n' +
      '5: Traces complete path from CO2 emission → warming → feedbacks → amplification\n' +
      '4: Includes most elements but missing one connection\n' +
      '3: Explains 2 major connections\n' +
      '2: Partial explanation\n' +
      '1: Vague response\n' +
      '0: No response'
    );

  form.addParagraphTextItem()
    .setTitle(
      'Explain in 3-4 sentences how human CO2 emissions lead to ACCELERATING climate change.\n\n' +
      'Your explanation must include:\n' +
      '- The greenhouse effect (Week 1)\n' +
      '- At least ONE feedback loop (Week 2)\n' +
      '- Why the change accelerates (not stays constant)'
    )
    .setRequired(true);

  // Q4: Conservation check (5 pts auto) - Cycle 2 spiral
  const q4 = form.addMultipleChoiceItem()
    .setTitle('CYCLE 2 & 3 CONNECTION: When fossil fuels burn and release CO2, where did that carbon originally come from?')
    .setHelpText('Think about conservation of mass - carbon can\'t be created from nothing.')
    .setRequired(true);

  q4.setChoices([
    q4.createChoice('The carbon is newly created by the burning process', false),
    q4.createChoice('The carbon was in the fossil fuel, originally from ancient plants that did photosynthesis', true),
    q4.createChoice('The carbon comes from the oxygen in the air', false),
    q4.createChoice('The carbon appears from the heat energy', false)
  ]);
  q4.setPoints(5);
  q4.setFeedbackForCorrect(
    FormApp.createFeedback()
      .setText('Correct! Fossil fuels contain carbon from ancient plants. Those plants absorbed CO2 millions of years ago. Burning releases that SAME carbon back to the atmosphere. Conservation of mass!')
      .build()
  );
  q4.setFeedbackForIncorrect(
    FormApp.createFeedback()
      .setText('Carbon can\'t be created (conservation of mass). Fossil fuel carbon came from ancient organisms that absorbed CO2 through photosynthesis millions of years ago.')
      .build()
  );

  logFormInfo_(form, 'G7 W3 Part 1 - Synthesis', 20);
  return form;
}

// ============================================================================
// PART 2: CUMULATIVE ASSESSMENT (60 points, ~40 min)
// Tests all 8 learning targets from W1 and W2
// ============================================================================

function createG7W3Assessment_() {
  const form = FormApp.create('G7.C3.W3: Part 2 - Cumulative Assessment');

  form.setDescription(
    'CYCLE 3 CUMULATIVE ASSESSMENT\n\n' +
    'This assessment covers everything you learned in Weeks 1 and 2:\n' +
    '- Greenhouse effect and molecular behavior\n' +
    '- Carbon cycle and conservation of mass\n' +
    '- Albedo and energy balance\n' +
    '- Feedback loops and system thinking\n\n' +
    '---\n' +
    'Time: About 40 minutes | Points: 60\n\n' +
    'Read each question carefully. Show your work on calculations.\n' +
    'You may NOT go back to previous sections once submitted.'
  );

  form.setIsQuiz(true);
  form.setRequireLogin(true);
  form.setCollectEmail(true);
  form.setLimitOneResponsePerUser(true);
  form.setAllowResponseEdits(false); // No edits on assessment
  form.setProgressBar(true);
  form.setConfirmationMessage(
    'Assessment submitted!\n\n' +
    'Continue to Part 3: Misconception Check\n' +
    'This is your chance to show you\'ve corrected any misunderstandings.'
  );

  // === SECTION A: GREENHOUSE EFFECT (Week 1) ===
  form.addPageBreakItem()
    .setTitle('Section A: Greenhouse Effect (15 points)')
    .setHelpText('Questions from Week 1 content.');

  // A1: Molecular mechanism (5 pts auto)
  const a1 = form.addMultipleChoiceItem()
    .setTitle('A1. When CO2 molecules absorb infrared radiation, they:')
    .setRequired(true);

  a1.setChoices([
    a1.createChoice('Break apart into separate carbon and oxygen atoms', false),
    a1.createChoice('Vibrate faster (stretch and bend) but stay together', true),
    a1.createChoice('Slow down and stop moving', false),
    a1.createChoice('Combine with other molecules', false)
  ]);
  a1.setPoints(5);
  a1.setFeedbackForCorrect(
    FormApp.createFeedback()
      .setText('Correct! CO2 molecules absorb IR energy and vibrate faster. They do NOT break apart.')
      .build()
  );
  a1.setFeedbackForIncorrect(
    FormApp.createFeedback()
      .setText('IR absorption causes vibration, not breaking. Breaking bonds would require much more energy.')
      .build()
  );

  // A2: Why CO2 but not N2 (5 pts manual)
  form.addSectionHeaderItem()
    .setTitle('A2. Explain Molecular Difference (5 points)')
    .setHelpText(
      'RUBRIC:\n' +
      '5: Explains 3+ atoms allow asymmetric vibration + N2 symmetric = no absorption\n' +
      '4: Mentions molecular structure difference correctly\n' +
      '3: Partial explanation\n' +
      '2: Vague response\n' +
      '0: No response'
    );

  form.addParagraphTextItem()
    .setTitle('Why does CO2 absorb infrared radiation while N2 (nitrogen) does not? Explain using molecular structure.')
    .setRequired(true);

  // A3: Application (5 pts auto)
  const a3 = form.addMultipleChoiceItem()
    .setTitle('A3. Water vapor (H2O) is also a greenhouse gas. Based on what you know about CO2, predict why H2O absorbs infrared:')
    .setRequired(true);

  a3.setChoices([
    a3.createChoice('H2O has 3 atoms and can vibrate asymmetrically (bend)', true),
    a3.createChoice('H2O is a liquid, which absorbs more energy', false),
    a3.createChoice('H2O is lighter than N2', false),
    a3.createChoice('H2O breaks apart easily', false)
  ]);
  a3.setPoints(5);
  a3.setFeedbackForCorrect(
    FormApp.createFeedback()
      .setText('Correct! Like CO2, H2O has 3 atoms in a bent shape. It can vibrate asymmetrically when absorbing IR.')
      .build()
  );
  a3.setFeedbackForIncorrect(
    FormApp.createFeedback()
      .setText('Pattern: molecules with 3+ atoms that can bend/stretch asymmetrically absorb IR. H2O has 3 atoms in a bent shape.')
      .build()
  );

  // === SECTION B: CARBON CYCLE (Week 1 + Cycle 2) ===
  form.addPageBreakItem()
    .setTitle('Section B: Carbon Cycle & Conservation (15 points)')
    .setHelpText('Questions from Week 1 + Cycle 2 spiral.');

  // B1: Calculation (5 pts manual)
  form.addSectionHeaderItem()
    .setTitle('B1. Carbon Calculation (5 points)')
    .setHelpText(
      'RUBRIC:\n' +
      '5: Correct answer (6.48 or ~6.5 lbs) with work shown\n' +
      '4: Correct answer without work\n' +
      '3: Correct setup, calculation error\n' +
      '2: Attempted with wrong setup\n' +
      '0: No response\n\n' +
      'ANSWER: 24 × 0.27 = 6.48 lbs carbon'
    );

  form.addParagraphTextItem()
    .setTitle(
      'A small tree absorbs 24 lbs of CO2 per year.\n' +
      'CO2 is 27% carbon by mass.\n\n' +
      'How many pounds of CARBON does this tree store per year?\n' +
      'SHOW YOUR WORK!'
    )
    .setRequired(true);

  // B2: Conservation (5 pts auto)
  const b2 = form.addMultipleChoiceItem()
    .setTitle('B2. When that tree eventually dies and decomposes, what happens to the carbon it stored?')
    .setRequired(true);

  b2.setChoices([
    b2.createChoice('The carbon is destroyed and disappears', false),
    b2.createChoice('The carbon is released back to the atmosphere as CO2', true),
    b2.createChoice('The carbon turns into a different element', false),
    b2.createChoice('The carbon stays in the tree forever', false)
  ]);
  b2.setPoints(5);
  b2.setFeedbackForCorrect(
    FormApp.createFeedback()
      .setText('Correct! Conservation of mass: carbon atoms are never destroyed. Decomposition releases them as CO2 (or CH4). Same atoms, different location.')
      .build()
  );
  b2.setFeedbackForIncorrect(
    FormApp.createFeedback()
      .setText('Atoms cannot be destroyed. The carbon returns to the atmosphere when decomposers break down the wood molecules.')
      .build()
  );

  // B3: Photosynthesis equation (5 pts auto)
  const b3 = form.addMultipleChoiceItem()
    .setTitle('B3. In photosynthesis (6CO2 + 6H2O → C6H12O6 + 6O2), which statement is TRUE about the carbon atoms?')
    .setRequired(true);

  b3.setChoices([
    b3.createChoice('6 carbon atoms enter as CO2 and 6 carbon atoms end up in glucose - same number', true),
    b3.createChoice('Carbon atoms are created during the reaction', false),
    b3.createChoice('Carbon atoms are destroyed during the reaction', false),
    b3.createChoice('More carbon comes out than goes in', false)
  ]);
  b3.setPoints(5);
  b3.setFeedbackForCorrect(
    FormApp.createFeedback()
      .setText('Correct! Conservation of mass: 6 carbons in, 6 carbons out. Atoms are REARRANGED from CO2 into glucose, never created or destroyed.')
      .build()
  );
  b3.setFeedbackForIncorrect(
    FormApp.createFeedback()
      .setText('Count the carbons: 6 CO2 = 6 carbon atoms. C6H12O6 = 6 carbon atoms. Same number - atoms are conserved!')
      .build()
  );

  // === SECTION C: ALBEDO & FEEDBACK (Week 2) ===
  form.addPageBreakItem()
    .setTitle('Section C: Albedo & Feedback Loops (15 points)')
    .setHelpText('Questions from Week 2 content.');

  // C1: Albedo (5 pts auto)
  const c1 = form.addMultipleChoiceItem()
    .setTitle('C1. A surface with HIGH albedo (like snow) will:')
    .setRequired(true);

  c1.setChoices([
    c1.createChoice('Absorb most light energy and heat up quickly', false),
    c1.createChoice('Reflect most light energy and stay relatively cool', true),
    c1.createChoice('Neither absorb nor reflect light', false),
    c1.createChoice('Convert light directly into ice', false)
  ]);
  c1.setPoints(5);
  c1.setFeedbackForCorrect(
    FormApp.createFeedback()
      .setText('Correct! High albedo = high reflectivity. Snow reflects most sunlight, so it doesn\'t heat up as much.')
      .build()
  );
  c1.setFeedbackForIncorrect(
    FormApp.createFeedback()
      .setText('Albedo measures reflectivity. HIGH albedo = REFLECTS more light = absorbs less = stays cooler.')
      .build()
  );

  // C2: Feedback loop (5 pts manual)
  form.addSectionHeaderItem()
    .setTitle('C2. Complete the Feedback Loop (5 points)')
    .setHelpText(
      'RUBRIC:\n' +
      '5: Correctly completes loop with arrows AND identifies as positive feedback with explanation\n' +
      '4: Correct loop, identifies positive but weak explanation\n' +
      '3: Correct loop but wrong feedback type\n' +
      '2: Incomplete loop\n' +
      '0: No response'
    );

  form.addParagraphTextItem()
    .setTitle(
      'Complete this feedback loop:\n\n' +
      'Temperature rises → Ice melts → [BLANK 1] → [BLANK 2] → Temperature rises more\n\n' +
      '1. Fill in BLANK 1 and BLANK 2\n' +
      '2. Is this POSITIVE or NEGATIVE feedback? Explain why.'
    )
    .setRequired(true);

  // C3: Carbon sink feedback (5 pts auto)
  const c3 = form.addMultipleChoiceItem()
    .setTitle('C3. If ocean temperatures rise, the ocean will absorb LESS CO2. What type of feedback is this?')
    .setRequired(true);

  c3.setChoices([
    c3.createChoice('Positive feedback - warming leads to more warming', true),
    c3.createChoice('Negative feedback - warming reduces warming', false),
    c3.createChoice('No feedback - just a one-time effect', false),
    c3.createChoice('Cannot determine', false)
  ]);
  c3.setPoints(5);
  c3.setFeedbackForCorrect(
    FormApp.createFeedback()
      .setText('Correct! Warming → less CO2 absorbed → more CO2 in atmosphere → more warming. The effect amplifies itself = positive feedback.')
      .build()
  );
  c3.setFeedbackForIncorrect(
    FormApp.createFeedback()
      .setText('Trace the chain: Warming → ocean absorbs less → more CO2 stays in air → more greenhouse effect → more warming. Same direction = positive.')
      .build()
  );

  // === SECTION D: INTEGRATION (Week 1 + Week 2 + Cycle 2) ===
  form.addPageBreakItem()
    .setTitle('Section D: Integration (15 points)')
    .setHelpText('These questions require connecting multiple concepts.');

  // D1: Energy flow (5 pts manual)
  form.addSectionHeaderItem()
    .setTitle('D1. Energy Flow in Climate System (5 points)')
    .setHelpText(
      'RUBRIC:\n' +
      '5: Correctly traces energy from sun → surface → IR → CO2 → re-emission\n' +
      '4: Most of path correct\n' +
      '3: Partial path\n' +
      '2: Vague response\n' +
      '0: No response'
    );

  form.addParagraphTextItem()
    .setTitle(
      'Trace the path of energy in the greenhouse effect:\n' +
      'Start: Sunlight reaches Earth\n' +
      'End: Heat is trapped in atmosphere\n\n' +
      'Describe each step and what happens to the energy at each stage.'
    )
    .setRequired(true);

  // D2: System prediction (5 pts manual)
  form.addSectionHeaderItem()
    .setTitle('D2. Predict System Behavior (5 points)')
    .setHelpText(
      'RUBRIC:\n' +
      '5: Correctly predicts acceleration + explains with feedback loop reasoning\n' +
      '4: Correct prediction with partial reasoning\n' +
      '3: Reasonable prediction, limited reasoning\n' +
      '2: Prediction without reasoning\n' +
      '0: No response'
    );

  form.addParagraphTextItem()
    .setTitle(
      'Scientists observe that Arctic ice is melting faster each decade.\n' +
      '2010s: Lost 3.5 million km² average\n' +
      '2020s: Lost 4.2 million km² average (so far)\n\n' +
      'Predict: Will ice loss in the 2030s be MORE than 4.2 million km², LESS, or about the SAME?\n' +
      'Explain your prediction using feedback loops.'
    )
    .setRequired(true);

  // D3: SEP-1 Question generation (5 pts manual)
  form.addSectionHeaderItem()
    .setTitle('D3. Generate Scientific Questions (5 points) - SEP-1')
    .setHelpText(
      'NGSS MS-ESS3-5 requires students to ASK questions.\n\n' +
      'RUBRIC:\n' +
      '5: 2 testable HOW/WHY questions with variables identified\n' +
      '4: 2 good questions, 1 testable\n' +
      '3: 1 testable question\n' +
      '2: Yes/no questions only\n' +
      '0: No response'
    );

  form.addParagraphTextItem()
    .setTitle(
      'You learned about climate feedback loops. Now generate 2 NEW scientific questions you would want to investigate.\n\n' +
      'Requirements:\n' +
      '- Start with HOW or WHY\n' +
      '- Include specific variables that could be measured\n' +
      '- Questions should be about something we DIDN\'T already answer in class'
    )
    .setHelpText('Example: "How would increasing the albedo of cities affect local temperature?"')
    .setRequired(true);

  logFormInfo_(form, 'G7 W3 Part 2 - Assessment', 60);
  return form;
}

// ============================================================================
// PART 3: MISCONCEPTION FINAL CHECK (20 points, ~20 min)
// Final chance to demonstrate corrected understanding
// ============================================================================

function createG7W3MisconceptionCheck_() {
  const form = FormApp.create('G7.C3.W3: Part 3 - Misconception Check');

  form.setDescription(
    'MISCONCEPTION FINAL CHECK\n\n' +
    'This section targets the most common misunderstandings from Cycle 3.\n' +
    'Read each question carefully - some are designed to catch common mistakes!\n\n' +
    '---\n' +
    'Time: About 20 minutes | Points: 20\n\n' +
    'Take your time. These questions require careful thinking.'
  );

  form.setIsQuiz(true);
  form.setRequireLogin(true);
  form.setCollectEmail(true);
  form.setLimitOneResponsePerUser(true);
  form.setAllowResponseEdits(false); // No edits on assessment
  form.setProgressBar(true);
  form.setConfirmationMessage(
    '🎉 CYCLE 3 COMPLETE! 🎉\n\n' +
    'You\'ve finished all assessments for the Climate Change unit.\n\n' +
    'Key concepts to remember:\n' +
    '✓ CO2 absorbs IR and vibrates (doesn\'t break)\n' +
    '✓ Carbon is conserved - never created or destroyed\n' +
    '✓ Positive feedback amplifies change\n' +
    '✓ Multiple feedbacks interact in climate systems\n\n' +
    'Your scores will be posted to Canvas within 2 days.'
  );

  // --- MISCONCEPTION 1: BOND ENERGY (60% frequency) ---
  form.addPageBreakItem()
    .setTitle('Misconception Check: Bond Energy')
    .setHelpText('This is the most common mistake students make.');

  // MC1a: Direct check (5 pts auto)
  const mc1a = form.addMultipleChoiceItem()
    .setTitle(
      'CAREFUL: When chemical bonds BREAK, energy is:\n\n' +
      '(Think carefully - this is where most students get confused!)'
    )
    .setRequired(true);

  mc1a.setChoices([
    mc1a.createChoice('Released (breaking bonds releases energy)', false),
    mc1a.createChoice('Required/absorbed (breaking bonds needs energy input)', true),
    mc1a.createChoice('Neither released nor absorbed', false),
    mc1a.createChoice('Both released and absorbed equally', false)
  ]);
  mc1a.setPoints(5);
  mc1a.setFeedbackForCorrect(
    FormApp.createFeedback()
      .setText('CORRECT! Breaking bonds REQUIRES energy (endothermic). FORMING bonds RELEASES energy (exothermic). This is counterintuitive but essential!')
      .build()
  );
  mc1a.setFeedbackForIncorrect(
    FormApp.createFeedback()
      .setText('COMMON MISTAKE! Many people think breaking = releasing. Actually: BREAKING bonds ABSORBS energy. FORMING bonds RELEASES energy.')
      .build()
  );

  // MC1b: Application (5 pts manual)
  form.addSectionHeaderItem()
    .setTitle('MC1b. Apply Bond Energy Understanding (5 points)')
    .setHelpText(
      'RUBRIC:\n' +
      '5: Correctly explains IR causes vibration not breaking because insufficient energy\n' +
      '4: Mentions insufficient energy\n' +
      '3: Partial explanation\n' +
      '2: Says vibration but no energy reasoning\n' +
      '0: No response'
    );

  form.addParagraphTextItem()
    .setTitle(
      'When CO2 absorbs infrared radiation, it vibrates but does NOT break apart.\n\n' +
      'Use your understanding of bond energy to explain WHY the CO2 molecule doesn\'t break.'
    )
    .setHelpText('Hint: How much energy does it take to break a C=O double bond? Is IR enough?')
    .setRequired(true);

  // --- MISCONCEPTION 2: MASS DISAPPEARS (40% frequency) ---
  form.addPageBreakItem()
    .setTitle('Misconception Check: Conservation of Mass')
    .setHelpText('Another common mistake about what happens to matter.');

  // MC2a: Direct check (5 pts auto)
  const mc2a = form.addMultipleChoiceItem()
    .setTitle('A log weighing 10 kg burns completely in a fire. After burning, the ash weighs only 0.5 kg. What happened to the other 9.5 kg?')
    .setRequired(true);

  mc2a.setChoices([
    mc2a.createChoice('It was destroyed by the fire', false),
    mc2a.createChoice('It was converted to pure energy', false),
    mc2a.createChoice('It escaped as gases (CO2, H2O) into the air - same atoms, different form', true),
    mc2a.createChoice('It disappeared completely', false)
  ]);
  mc2a.setPoints(5);
  mc2a.setFeedbackForCorrect(
    FormApp.createFeedback()
      .setText('CORRECT! Mass is CONSERVED. The "missing" mass is now in the atmosphere as CO2 and H2O vapor. Same atoms, just rearranged and dispersed. If you weighed all the gases, total mass = 10 kg.')
      .build()
  );
  mc2a.setFeedbackForIncorrect(
    FormApp.createFeedback()
      .setText('Mass cannot be destroyed! The atoms from the log are now in the atmosphere as CO2 and H2O. Total mass is conserved.')
      .build()
  );

  // MC2b: Cycle 2 connection (5 pts auto)
  const mc2b = form.addMultipleChoiceItem()
    .setTitle('CYCLE 2 CONNECTION: In any chemical reaction, the total mass of products compared to reactants is:')
    .setRequired(true);

  mc2b.setChoices([
    mc2b.createChoice('Always less (some mass is destroyed)', false),
    mc2b.createChoice('Always more (new mass is created)', false),
    mc2b.createChoice('Always equal (mass is conserved - atoms rearranged, not created or destroyed)', true),
    mc2b.createChoice('Depends on the type of reaction', false)
  ]);
  mc2b.setPoints(5);
  mc2b.setFeedbackForCorrect(
    FormApp.createFeedback()
      .setText('CORRECT! This is the Law of Conservation of Mass from Cycle 2. Atoms are REARRANGED in reactions, never created or destroyed. Total mass always stays the same.')
      .build()
  );
  mc2b.setFeedbackForIncorrect(
    FormApp.createFeedback()
      .setText('Conservation of Mass: atoms in = atoms out. Mass is ALWAYS conserved in chemical reactions. No exceptions.')
      .build()
  );

  logFormInfo_(form, 'G7 W3 Part 3 - Misconception Check', 20);
  return form;
}

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

function logFormInfo_(form, name, points) {
  const editUrl = form.getEditUrl();
  const pubUrl = form.getPublishedUrl();
  const embedUrl = pubUrl.replace('/viewform', '/viewform?embedded=true');

  Logger.log('----------------------------------------');
  Logger.log(name + ' (' + points + ' pts)');
  Logger.log('----------------------------------------');
  Logger.log('Edit:  ' + editUrl);
  Logger.log('Embed: ' + embedUrl);
  Logger.log('');
}

// Individual test functions
function testG7W3Synthesis() { createG7W3Synthesis_(); }
function testG7W3Assessment() { createG7W3Assessment_(); }
function testG7W3MisconceptionCheck() { createG7W3MisconceptionCheck_(); }

/**
 * ============================================================================
 * GRADE 8 - CYCLE 3 WEEK 3: SYNTHESIS & ASSESSMENT
 * 3 Forms | 100 Points Total | ~75 Minutes
 * ============================================================================
 *
 * ASSESSMENT WEEK STRUCTURE:
 *   Part 1: Synthesis Review (20 pts, ~15 min) - Connects W1+W2 concepts
 *   Part 2: Cumulative Assessment (60 pts, ~40 min) - All learning targets
 *   Part 3: Misconception Final Check (20 pts, ~20 min) - Lamarckian + forces
 *
 * LEARNING TARGETS ASSESSED (from W1 & W2):
 *   W1-1: Apply natural selection to real scenarios
 *   W1-2: Use Newton's Third Law in biological contexts
 *   W1-3: Calculate force effects on survival
 *   W1-4: Explain why populations evolve, not individuals
 *   W2-1: Distinguish homologous from analogous structures
 *   W2-2: Use anatomical evidence to infer relationships
 *   W2-3: Interpret transitional fossils
 *   W2-4: Predict features of transitional organisms
 *
 * SPIRAL FROM CYCLE 2:
 *   MS-PS2-1: Newton's Third Law
 *   MS-PS2-2: F=ma relationships
 *
 * MISCONCEPTIONS TARGETED (CRITICAL):
 *   1. Lamarckian evolution (45% frequency) - Multiple checks
 *   2. "Bigger = more force" (55%) - N3L check
 *   3. F=ma weak understanding (45%) - Calculation
 *
 * 3-DIMENSIONAL ASSESSMENT:
 *   SEP-6: Constructing Explanations (MS-LS4-4 requires this)
 *   DCI: LS4.B Natural Selection, LS4.A Evidence of Common Ancestry
 *   CCC: Patterns, Cause and Effect
 *
 * ============================================================================
 */

// ============================================================================
// MAIN FUNCTION
// ============================================================================

function createAllG8C3W3Forms() {
  Logger.log('================================================');
  Logger.log('G8 CYCLE 3 WEEK 3: SYNTHESIS & ASSESSMENT');
  Logger.log('================================================\n');

  const forms = {
    synthesis: createG8W3Synthesis_(),
    assessment: createG8W3Assessment_(),
    misconceptionCheck: createG8W3MisconceptionCheck_()
  };

  Logger.log('\n================================================');
  Logger.log('ALL 3 FORMS CREATED - 100 POINTS TOTAL');
  Logger.log('================================================');

  return forms;
}

// ============================================================================
// PART 1: SYNTHESIS REVIEW (20 points, ~15 min)
// Connects W1 natural selection to W2 evolutionary evidence
// ============================================================================

function createG8W3Synthesis_() {
  const form = FormApp.create('G8.C3.W3: Part 1 - Synthesis Review');

  form.setDescription(
    'CYCLE 3 SYNTHESIS: CONNECTING THE PIECES\n\n' +
    'Over the past two weeks, you learned:\n' +
    '- Week 1: How natural selection works (mechanism)\n' +
    '- Week 2: Evidence that evolution happened (proof)\n\n' +
    'Now it\'s time to connect these ideas: the mechanism explains the evidence.\n\n' +
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
    'You\'ve connected mechanism (how) to evidence (proof).\n' +
    'Now you\'re ready for the Cumulative Assessment.\n\n' +
    'Take a 5-minute break, then continue to Part 2.'
  );

  // --- CONCEPT CONNECTION ---
  form.addPageBreakItem()
    .setTitle('The Big Picture')
    .setHelpText(
      'Evolution by natural selection is supported by multiple lines of evidence:\n\n' +
      'WEEK 1 (Mechanism): Variation → Selection → Survival → Reproduction → Population change\n' +
      'WEEK 2 (Evidence): Homologous structures, transitional fossils, vestigial organs\n\n' +
      'Your task: Explain how the mechanism produces the evidence.'
    );

  // Q1: Connection explanation (5 pts manual)
  form.addSectionHeaderItem()
    .setTitle('Question 1: Explain the Connection (5 points)')
    .setHelpText(
      'RUBRIC:\n' +
      '5: Correctly explains how natural selection over time produces homologous structures\n' +
      '4: Good explanation with minor gaps\n' +
      '3: Partial explanation\n' +
      '2: Mentions both but doesn\'t connect\n' +
      '0: No response'
    );

  form.addParagraphTextItem()
    .setTitle(
      'Whales have finger bones inside their flippers (Week 2 evidence).\n' +
      'Natural selection modifies existing structures (Week 1 mechanism).\n\n' +
      'Explain how natural selection acting on a land mammal ancestor could have produced a whale flipper with finger bones inside.'
    )
    .setRequired(true);

  // Q2: Evidence types (5 pts auto)
  const q2 = form.addMultipleChoiceItem()
    .setTitle('Which type of evidence BEST supports the claim that whales evolved from land mammals?')
    .setRequired(true);

  q2.setChoices([
    q2.createChoice('Whales live in water like fish', false),
    q2.createChoice('Whales are large animals', false),
    q2.createChoice('Transitional fossils showing gradual changes from legs to flippers over millions of years', true),
    q2.createChoice('Whales eat different food than land mammals', false)
  ]);
  q2.setPoints(5);
  q2.setFeedbackForCorrect(
    FormApp.createFeedback()
      .setText('Correct! Transitional fossils (Pakicetus → Ambulocetus → Rodhocetus → Basilosaurus → modern whales) show the actual sequence of changes.')
      .build()
  );
  q2.setFeedbackForIncorrect(
    FormApp.createFeedback()
      .setText('Transitional fossils are the strongest evidence because they show the actual intermediate stages captured in rock.')
      .build()
  );

  // Q3: Mechanism application (5 pts manual)
  form.addSectionHeaderItem()
    .setTitle('Question 3: Apply the Mechanism (5 points)')
    .setHelpText(
      'RUBRIC:\n' +
      '5: Complete natural selection explanation with variation → selection → inheritance\n' +
      '4: Most elements present\n' +
      '3: Partial mechanism\n' +
      '2: Vague response\n' +
      '0: No response'
    );

  form.addParagraphTextItem()
    .setTitle(
      'Tiktaalik is a transitional fossil with both fish and tetrapod features.\n\n' +
      'Using natural selection (Week 1), explain how a population of fish could have evolved wrist bones and a neck over many generations.\n\n' +
      'Include: What variation existed? What selection pressure? How did the population change?'
    )
    .setRequired(true);

  // Q4: Forces connection (5 pts auto) - Cycle 2 spiral
  const q4 = form.addMultipleChoiceItem()
    .setTitle('CYCLE 2 CONNECTION: When a gazelle pushes against the ground to run, the ground pushes back on the gazelle (Newton\'s 3rd Law). How does this relate to natural selection?')
    .setRequired(true);

  q4.setChoices([
    q4.createChoice('It doesn\'t - physics has nothing to do with evolution', false),
    q4.createChoice('Gazelles that can push harder against the ground accelerate faster, escape predators, and survive to reproduce', true),
    q4.createChoice('The ground evolves to push back harder', false),
    q4.createChoice('Newton\'s laws don\'t apply to living things', false)
  ]);
  q4.setPoints(5);
  q4.setFeedbackForCorrect(
    FormApp.createFeedback()
      .setText('Correct! Physics determines which traits help survival. Stronger legs = more force = faster acceleration = escape predators = survive to reproduce. Physics + biology!')
      .build()
  );
  q4.setFeedbackForIncorrect(
    FormApp.createFeedback()
      .setText('Physics determines what works! Traits that allow more effective force production (stronger legs, better leverage) lead to survival advantages.')
      .build()
  );

  logFormInfo_(form, 'G8 W3 Part 1 - Synthesis', 20);
  return form;
}

// ============================================================================
// PART 2: CUMULATIVE ASSESSMENT (60 points, ~40 min)
// Tests all 8 learning targets from W1 and W2
// ============================================================================

function createG8W3Assessment_() {
  const form = FormApp.create('G8.C3.W3: Part 2 - Cumulative Assessment');

  form.setDescription(
    'CYCLE 3 CUMULATIVE ASSESSMENT\n\n' +
    'This assessment covers everything you learned in Weeks 1 and 2:\n' +
    '- Natural selection mechanism and applications\n' +
    '- Forces and their role in survival\n' +
    '- Homologous and analogous structures\n' +
    '- Transitional fossils and evolutionary evidence\n\n' +
    '---\n' +
    'Time: About 40 minutes | Points: 60\n\n' +
    'Read each question carefully.\n' +
    'You may NOT go back to previous sections once submitted.'
  );

  form.setIsQuiz(true);
  form.setRequireLogin(true);
  form.setCollectEmail(true);
  form.setLimitOneResponsePerUser(true);
  form.setAllowResponseEdits(false);
  form.setProgressBar(true);
  form.setConfirmationMessage(
    'Assessment submitted!\n\n' +
    'Continue to Part 3: Misconception Check\n' +
    'This is your chance to show you understand the tricky concepts.'
  );

  // === SECTION A: NATURAL SELECTION (Week 1) ===
  form.addPageBreakItem()
    .setTitle('Section A: Natural Selection Mechanism (15 points)')
    .setHelpText('Questions from Week 1 content.');

  // A1: Complete mechanism (5 pts auto)
  const a1 = form.addMultipleChoiceItem()
    .setTitle('A1. For natural selection to occur, which of the following must be TRUE?')
    .setRequired(true);

  a1.setChoices([
    a1.createChoice('Organisms must want to change', false),
    a1.createChoice('Variation must exist AND some variations must affect survival/reproduction', true),
    a1.createChoice('All organisms must be identical', false),
    a1.createChoice('The environment must stay exactly the same', false)
  ]);
  a1.setPoints(5);
  a1.setFeedbackForCorrect(
    FormApp.createFeedback()
      .setText('Correct! Two requirements: (1) Variation must exist, (2) Some variations must affect survival/reproduction. Without both, no selection.')
      .build()
  );
  a1.setFeedbackForIncorrect(
    FormApp.createFeedback()
      .setText('Natural selection requires: variation + differential survival/reproduction. No variation = nothing to select. No survival difference = no selection.')
      .build()
  );

  // A2: Application scenario (5 pts manual)
  form.addSectionHeaderItem()
    .setTitle('A2. Apply Natural Selection (5 points)')
    .setHelpText(
      'RUBRIC:\n' +
      '5: Identifies variation + selection pressure + predicts population change correctly\n' +
      '4: Most elements correct\n' +
      '3: Partial mechanism\n' +
      '2: Vague response\n' +
      '0: No response'
    );

  form.addParagraphTextItem()
    .setTitle(
      'A population of beetles varies in color from light brown to dark brown.\n' +
      'Birds can easily spot and eat light-colored beetles on dark tree bark.\n\n' +
      'Predict what will happen to the beetle population over 50 generations.\n' +
      'Explain using natural selection.'
    )
    .setRequired(true);

  // A3: Forces connection (5 pts auto) - Cycle 2 spiral
  const a3 = form.addMultipleChoiceItem()
    .setTitle('A3. CYCLE 2: A cheetah (50 kg) and a gazelle (40 kg) push against the ground with equal force when running. According to F=ma, which accelerates faster?')
    .setRequired(true);

  a3.setChoices([
    a3.createChoice('The cheetah (bigger = faster)', false),
    a3.createChoice('The gazelle (less mass = more acceleration for same force)', true),
    a3.createChoice('They accelerate equally', false),
    a3.createChoice('Cannot determine', false)
  ]);
  a3.setPoints(5);
  a3.setFeedbackForCorrect(
    FormApp.createFeedback()
      .setText('Correct! F=ma → a=F/m. Same force, less mass = greater acceleration. This is why gazelles can change direction faster - survival advantage!')
      .build()
  );
  a3.setFeedbackForIncorrect(
    FormApp.createFeedback()
      .setText('F=ma rearranges to a=F/m. If F is equal, smaller m = larger a. The lighter gazelle accelerates faster with the same force.')
      .build()
  );

  // === SECTION B: EVOLUTIONARY EVIDENCE (Week 2) ===
  form.addPageBreakItem()
    .setTitle('Section B: Evidence for Evolution (15 points)')
    .setHelpText('Questions from Week 2 content.');

  // B1: Homologous vs analogous (5 pts auto)
  const b1 = form.addMultipleChoiceItem()
    .setTitle('B1. A dolphin flipper and a shark fin both help with swimming, but they have completely different bone structures. These are:')
    .setRequired(true);

  b1.setChoices([
    b1.createChoice('Homologous structures (same bones, different function)', false),
    b1.createChoice('Analogous structures (different structure, same function)', true),
    b1.createChoice('Evidence of common ancestry', false),
    b1.createChoice('Transitional structures', false)
  ]);
  b1.setPoints(5);
  b1.setFeedbackForCorrect(
    FormApp.createFeedback()
      .setText('Correct! Different structure + same function = ANALOGOUS. They evolved swimming ability independently. NOT evidence of common ancestry.')
      .build()
  );
  b1.setFeedbackForIncorrect(
    FormApp.createFeedback()
      .setText('Same function but different structure = analogous (evolved independently). Homologous = same structure, different function (common ancestor).')
      .build()
  );

  // B2: Transitional fossil interpretation (5 pts manual)
  form.addSectionHeaderItem()
    .setTitle('B2. Interpret Fossil Evidence (5 points)')
    .setHelpText(
      'RUBRIC:\n' +
      '5: Correctly explains intermediate features + what this proves about evolution\n' +
      '4: Good explanation of intermediate features\n' +
      '3: Recognizes as transitional but limited explanation\n' +
      '2: Vague response\n' +
      '0: No response'
    );

  form.addParagraphTextItem()
    .setTitle(
      'Archaeopteryx is a fossil with:\n' +
      '- Feathers (like birds)\n' +
      '- Teeth and clawed wings (like dinosaurs)\n' +
      '- A long bony tail (like dinosaurs)\n\n' +
      'Explain why scientists consider this a transitional fossil. What does it show about the relationship between dinosaurs and birds?'
    )
    .setRequired(true);

  // B3: Vestigial structures (5 pts auto)
  const b3 = form.addMultipleChoiceItem()
    .setTitle('B3. Humans have a tailbone (coccyx) even though we don\'t have tails. Whales have hip bones even though they don\'t have legs. These are examples of:')
    .setRequired(true);

  b3.setChoices([
    b3.createChoice('Mistakes in development', false),
    b3.createChoice('Vestigial structures - reduced features left over from ancestors', true),
    b3.createChoice('Evidence that evolution is wrong', false),
    b3.createChoice('Structures that will grow in the future', false)
  ]);
  b3.setPoints(5);
  b3.setFeedbackForCorrect(
    FormApp.createFeedback()
      .setText('Correct! Vestigial structures are evolutionary "leftovers." They made sense in ancestors (tails, legs) but are reduced in descendants. Evidence OF evolution.')
      .build()
  );
  b3.setFeedbackForIncorrect(
    FormApp.createFeedback()
      .setText('Vestigial structures are reduced or non-functional features inherited from ancestors where they were functional. They\'re evidence FOR evolution.')
      .build()
  );

  // === SECTION C: SYNTHESIS (Week 1 + Week 2) ===
  form.addPageBreakItem()
    .setTitle('Section C: Connecting Mechanism to Evidence (15 points)')
    .setHelpText('These questions require connecting Week 1 and Week 2 concepts.');

  // C1: Explain the connection (5 pts manual)
  form.addSectionHeaderItem()
    .setTitle('C1. Mechanism → Evidence (5 points)')
    .setHelpText(
      'RUBRIC:\n' +
      '5: Correctly explains how selection on existing structures leads to homology\n' +
      '4: Good explanation with minor gaps\n' +
      '3: Partial connection\n' +
      '2: Vague response\n' +
      '0: No response'
    );

  form.addParagraphTextItem()
    .setTitle(
      'Bat wings and human arms have the same bone structure (humerus, radius, ulna, carpals, digits).\n\n' +
      'Using natural selection, explain how a population of small mammals could have evolved wings over many generations while keeping the same basic bone pattern.'
    )
    .setRequired(true);

  // C2: Predict transitional features (5 pts manual)
  form.addSectionHeaderItem()
    .setTitle('C2. Predict Transitional Features (5 points)')
    .setHelpText(
      'RUBRIC:\n' +
      '5: Predicts intermediate features for all 3 traits with reasoning\n' +
      '4: 2-3 traits predicted correctly\n' +
      '3: 1-2 traits with reasoning\n' +
      '2: Predictions without reasoning\n' +
      '0: No response'
    );

  form.addParagraphTextItem()
    .setTitle(
      'Ancestor: Land mammal with 4 legs, fur, external ears\n' +
      'Descendant: Aquatic mammal with flippers, smooth skin, no external ears\n\n' +
      'Predict 3 features of a transitional form (halfway between):\n' +
      '1. Limbs would look like...\n' +
      '2. Skin/fur would be like...\n' +
      '3. Ears would be like...'
    )
    .setRequired(true);

  // C3: Evidence evaluation (5 pts auto)
  const c3 = form.addMultipleChoiceItem()
    .setTitle('C3. A scientist claims she has found a transitional fossil. What features would BEST support her claim?')
    .setRequired(true);

  c3.setChoices([
    c3.createChoice('Features exactly like the ancestor', false),
    c3.createChoice('Features exactly like the descendant', false),
    c3.createChoice('A mix of ancestral and descendant features', true),
    c3.createChoice('Completely unique features unlike any other organism', false)
  ]);
  c3.setPoints(5);
  c3.setFeedbackForCorrect(
    FormApp.createFeedback()
      .setText('Correct! Transitional fossils have features of BOTH groups - some ancestral, some descendant. That\'s what makes them "transitional."')
      .build()
  );
  c3.setFeedbackForIncorrect(
    FormApp.createFeedback()
      .setText('Transitional = in between. Must have some features of the ancestor AND some features of the descendant.')
      .build()
  );

  // === SECTION D: SEP-6 EXPLANATION (15 pts) ===
  form.addPageBreakItem()
    .setTitle('Section D: Constructing Explanations (15 points)')
    .setHelpText('NGSS SEP-6: Construct scientific explanations using evidence.');

  // D1: Complete explanation (10 pts manual)
  form.addSectionHeaderItem()
    .setTitle('D1. Construct a Complete Explanation (10 points)')
    .setHelpText(
      'RUBRIC:\n' +
      '10: Uses 3+ pieces of evidence + explains mechanism correctly + no Lamarckian errors\n' +
      '8: Uses 2-3 pieces of evidence with good mechanism\n' +
      '6: Uses 1-2 pieces of evidence\n' +
      '4: Weak evidence or Lamarckian language\n' +
      '2: No evidence cited\n' +
      '0: No response'
    );

  form.addParagraphTextItem()
    .setTitle(
      'Construct a scientific explanation to answer: "How do we know that whales evolved from land mammals?"\n\n' +
      'Your explanation MUST include:\n' +
      '1. At least 2 types of evidence (fossils, anatomy, vestigial structures)\n' +
      '2. The mechanism (natural selection) that caused the changes\n' +
      '3. Why this happened over many GENERATIONS (not within one whale\'s lifetime)'
    )
    .setRequired(true);

  // D2: Evaluate a claim (5 pts manual)
  form.addSectionHeaderItem()
    .setTitle('D2. Evaluate a Claim (5 points)')
    .setHelpText(
      'RUBRIC:\n' +
      '5: Correctly identifies error + explains why it\'s wrong + provides correct alternative\n' +
      '4: Identifies error with partial correction\n' +
      '3: Identifies error but weak explanation\n' +
      '2: Doesn\'t recognize the error\n' +
      '0: No response'
    );

  form.addParagraphTextItem()
    .setTitle(
      'A student says: "Whales evolved flippers because they moved to the ocean and needed to swim. Over time, their legs turned into flippers from all the swimming."\n\n' +
      'Identify what is WRONG with this explanation and provide the CORRECT explanation.'
    )
    .setRequired(true);

  logFormInfo_(form, 'G8 W3 Part 2 - Assessment', 60);
  return form;
}

// ============================================================================
// PART 3: MISCONCEPTION FINAL CHECK (20 points, ~20 min)
// Final check on Lamarckian misconception and force concepts
// ============================================================================

function createG8W3MisconceptionCheck_() {
  const form = FormApp.create('G8.C3.W3: Part 3 - Misconception Check');

  form.setDescription(
    'MISCONCEPTION FINAL CHECK\n\n' +
    'This section targets the most common misunderstandings from Cycle 3.\n' +
    'Read each question VERY carefully - these are designed to catch common mistakes!\n\n' +
    '---\n' +
    'Time: About 20 minutes | Points: 20\n\n' +
    'Take your time. These questions require careful thinking.'
  );

  form.setIsQuiz(true);
  form.setRequireLogin(true);
  form.setCollectEmail(true);
  form.setLimitOneResponsePerUser(true);
  form.setAllowResponseEdits(false);
  form.setProgressBar(true);
  form.setConfirmationMessage(
    '🎉 CYCLE 3 COMPLETE! 🎉\n\n' +
    'You\'ve finished all assessments for the Evolution unit.\n\n' +
    'Key concepts to remember:\n' +
    '✓ POPULATIONS evolve, not individuals\n' +
    '✓ Variation must exist BEFORE selection\n' +
    '✓ Homologous structures = common ancestry\n' +
    '✓ Transitional fossils show evolution in progress\n\n' +
    'Your scores will be posted to Canvas within 2 days.'
  );

  // --- MISCONCEPTION 1: LAMARCKIAN (45% frequency - CRITICAL) ---
  form.addPageBreakItem()
    .setTitle('Misconception Check: How Evolution Works')
    .setHelpText('This is the most common mistake students make about evolution.');

  // MC1a: Direct Lamarckian check (5 pts auto)
  const mc1a = form.addMultipleChoiceItem()
    .setTitle(
      'CAREFUL: A giraffe stretches its neck to reach high leaves. Does this stretching cause its offspring to have longer necks?'
    )
    .setRequired(true);

  mc1a.setChoices([
    mc1a.createChoice('Yes - the stretching changes the giraffe\'s genes', false),
    mc1a.createChoice('Yes - the giraffe passes on what it learned', false),
    mc1a.createChoice('No - stretching doesn\'t change DNA, so offspring inherit the same genes the parent was born with', true),
    mc1a.createChoice('No - but the offspring will learn to stretch too', false)
  ]);
  mc1a.setPoints(5);
  mc1a.setFeedbackForCorrect(
    FormApp.createFeedback()
      .setText('CORRECT! You cannot change your genes by your actions. The giraffe passes on the genes it was born with, not muscles it built. This is the key insight!')
      .build()
  );
  mc1a.setFeedbackForIncorrect(
    FormApp.createFeedback()
      .setText('COMMON MISTAKE (Lamarckism)! An organism cannot change its DNA through actions. Genes are inherited as they were at birth.')
      .build()
  );

  // MC1b: Correct mechanism (5 pts manual)
  form.addSectionHeaderItem()
    .setTitle('MC1b. The Correct Explanation (5 points)')
    .setHelpText(
      'RUBRIC:\n' +
      '5: Correctly explains: variation already exists → selection → reproduction → population change\n' +
      '4: Mostly correct mechanism\n' +
      '3: Partial mechanism, some Lamarckian language\n' +
      '2: Mostly Lamarckian\n' +
      '0: No response'
    );

  form.addParagraphTextItem()
    .setTitle(
      'If giraffes DIDN\'T get longer necks from stretching, then how DID giraffes evolve long necks?\n\n' +
      'Explain the CORRECT mechanism. Start with: "In an ancestral giraffe population, there was variation in neck length..."'
    )
    .setRequired(true);

  // --- MISCONCEPTION 2: NEWTON'S 3RD LAW (55% frequency) ---
  form.addPageBreakItem()
    .setTitle('Misconception Check: Force Pairs')
    .setHelpText('Another common mistake about how forces work.');

  // MC2a: N3L check (5 pts auto)
  const mc2a = form.addMultipleChoiceItem()
    .setTitle('CYCLE 2: An elephant (5000 kg) and a mouse (0.02 kg) push against each other. According to Newton\'s Third Law, the forces are:')
    .setRequired(true);

  mc2a.setChoices([
    mc2a.createChoice('The elephant pushes harder because it\'s bigger', false),
    mc2a.createChoice('Equal and opposite - both push with the same force', true),
    mc2a.createChoice('The mouse pushes harder because it\'s trying harder', false),
    mc2a.createChoice('Cannot determine without knowing speed', false)
  ]);
  mc2a.setPoints(5);
  mc2a.setFeedbackForCorrect(
    FormApp.createFeedback()
      .setText('CORRECT! Newton\'s 3rd Law: Every action has an EQUAL and opposite reaction. Size doesn\'t matter - the forces are always equal!')
      .build()
  );
  mc2a.setFeedbackForIncorrect(
    FormApp.createFeedback()
      .setText('Newton\'s 3rd Law: Forces in a pair are ALWAYS equal and opposite. The elephant and mouse push on each other with equal force.')
      .build()
  );

  // MC2b: Why different effects (5 pts auto)
  const mc2b = form.addMultipleChoiceItem()
    .setTitle('If the elephant and mouse push with equal force, why does the mouse go flying while the elephant barely moves?')
    .setRequired(true);

  mc2b.setChoices([
    mc2b.createChoice('The mouse actually experiences more force', false),
    mc2b.createChoice('Equal force + less mass = greater acceleration (F=ma → a=F/m)', true),
    mc2b.createChoice('The elephant\'s force doesn\'t fully reach the mouse', false),
    mc2b.createChoice('Newton\'s laws don\'t work for small animals', false)
  ]);
  mc2b.setPoints(5);
  mc2b.setFeedbackForCorrect(
    FormApp.createFeedback()
      .setText('CORRECT! Same force, but a=F/m. Tiny mass = huge acceleration. Huge mass = tiny acceleration. The forces are equal, the EFFECTS are different.')
      .build()
  );
  mc2b.setFeedbackForIncorrect(
    FormApp.createFeedback()
      .setText('F=ma rearranges to a=F/m. Same F, smaller m = larger a. The mouse accelerates more because it has less mass, not because it experiences more force.')
      .build()
  );

  logFormInfo_(form, 'G8 W3 Part 3 - Misconception Check', 20);
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
function testG8W3Synthesis() { createG8W3Synthesis_(); }
function testG8W3Assessment() { createG8W3Assessment_(); }
function testG8W3MisconceptionCheck() { createG8W3MisconceptionCheck_(); }

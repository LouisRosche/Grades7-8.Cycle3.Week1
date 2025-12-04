/**
 * ThreeDimensionalAnalyzer.gs
 * Analyzes student performance across NGSS 3-Dimensional Learning:
 * - SEP (Science and Engineering Practices)
 * - DCI (Disciplinary Core Ideas)
 * - CCC (Crosscutting Concepts)
 *
 * KAMS Science Curriculum System
 * Version: 2.0
 */

/**
 * 3D Learning Dimensions with associated questions
 * Loaded from cycle config - this is the mapping structure
 */
const THREE_D_FRAMEWORK = {
  sep: {
    'SEP-1': { name: 'Asking Questions and Defining Problems', weight: 1.2 },
    'SEP-2': { name: 'Developing and Using Models', weight: 1.0 },
    'SEP-3': { name: 'Planning and Carrying Out Investigations', weight: 1.0 },
    'SEP-4': { name: 'Analyzing and Interpreting Data', weight: 1.1 },
    'SEP-5': { name: 'Using Mathematics and Computational Thinking', weight: 1.0 },
    'SEP-6': { name: 'Constructing Explanations and Designing Solutions', weight: 1.2 },
    'SEP-7': { name: 'Engaging in Argument from Evidence', weight: 1.1 },
    'SEP-8': { name: 'Obtaining, Evaluating, and Communicating Information', weight: 1.0 }
  },
  dci: {
    // Grade 7 - Earth & Life Science
    'ESS3.D': { name: 'Human Impacts on Earth Systems', grade: 7 },
    'PS1.B': { name: 'Chemical Reactions', grade: 7 },
    'PS3.A': { name: 'Definitions of Energy', grade: 7 },
    // Grade 8 - Physical & Life Science
    'LS4.B': { name: 'Natural Selection', grade: 8 },
    'PS2.A': { name: 'Forces and Motion', grade: 8 }
  },
  ccc: {
    'CCC-1': { name: 'Patterns' },
    'CCC-2': { name: 'Cause and Effect' },
    'CCC-3': { name: 'Scale, Proportion, and Quantity' },
    'CCC-4': { name: 'Systems and System Models' },
    'CCC-5': { name: 'Energy and Matter' },
    'CCC-6': { name: 'Structure and Function' },
    'CCC-7': { name: 'Stability and Change' }
  }
};

/**
 * Load question-to-3D mapping from cycle config
 * @param {number} grade
 * @param {number} cycle
 * @param {number} week
 * @returns {Object} questionId -> {sep, dci, ccc, points}
 */
function loadQuestionMetadata(grade, cycle, week) {
  // This would be loaded from config/cycles/cycleXX.json
  // For now, return example structure
  return {
    'g7_c3_w1_hook_q1': { sep: null, dci: null, ccc: null, points: 3, type: 'diagnostic' },
    'g7_c3_w1_hook_q4': { sep: null, dci: 'PS1.B', ccc: 'CCC-5', points: 3, type: 'auto' },
    'g7_c3_w1_s1_q2': { sep: 'SEP-4', dci: 'PS1.B', ccc: 'CCC-5', points: 4, type: 'auto' },
    'g7_c3_w1_s1_q3': { sep: 'SEP-6', dci: 'PS1.B', ccc: 'CCC-5', points: 5, type: 'manual' },
    'g7_c3_w1_s2_q2': { sep: 'SEP-5', dci: 'PS1.B', ccc: 'CCC-5', points: 4, type: 'auto' },
    'g7_c3_w1_s3_q5': { sep: 'SEP-6', dci: 'PS3.A', ccc: 'CCC-5', points: 6, type: 'manual' },
    'g7_c3_w1_exit_q1': { sep: 'SEP-6', dci: 'ESS3.D', ccc: 'CCC-2', points: 5, type: 'manual' },
    'g7_c3_w1_exit_q5': { sep: 'SEP-7', dci: 'PS1.B', ccc: 'CCC-5', points: 5, type: 'manual' },
    'g7_c3_w1_exit_q6': { sep: 'SEP-1', dci: null, ccc: null, points: 3, type: 'sep1' }
  };
}

/**
 * Analyze student performance by 3D dimension
 * @param {Object} studentData - Student responses with scores
 * @param {Object} questionMeta - Question metadata mapping
 * @returns {Object} 3D performance breakdown
 */
function analyze3DPerformance(studentData, questionMeta) {
  const dimensions = {
    sep: {},
    dci: {},
    ccc: {},
    integrated: { earned: 0, possible: 0 }
  };

  // Initialize dimension trackers
  Object.keys(THREE_D_FRAMEWORK.sep).forEach(code => {
    dimensions.sep[code] = { earned: 0, possible: 0, questions: [] };
  });
  Object.keys(THREE_D_FRAMEWORK.dci).forEach(code => {
    dimensions.dci[code] = { earned: 0, possible: 0, questions: [] };
  });
  Object.keys(THREE_D_FRAMEWORK.ccc).forEach(code => {
    dimensions.ccc[code] = { earned: 0, possible: 0, questions: [] };
  });

  // Process each question
  studentData.questionDetails.forEach(detail => {
    const qId = `g${studentData.grade}_c${studentData.cycle}_w${studentData.week}_${detail.form}_q${detail.qNum}`;
    const meta = questionMeta[qId];

    if (!meta) return;

    const points = meta.points;
    const earned = detail.earned || 0;

    // Track by SEP
    if (meta.sep && dimensions.sep[meta.sep]) {
      dimensions.sep[meta.sep].earned += earned;
      dimensions.sep[meta.sep].possible += points;
      dimensions.sep[meta.sep].questions.push(qId);
    }

    // Track by DCI
    if (meta.dci && dimensions.dci[meta.dci]) {
      dimensions.dci[meta.dci].earned += earned;
      dimensions.dci[meta.dci].possible += points;
      dimensions.dci[meta.dci].questions.push(qId);
    }

    // Track by CCC
    if (meta.ccc && dimensions.ccc[meta.ccc]) {
      dimensions.ccc[meta.ccc].earned += earned;
      dimensions.ccc[meta.ccc].possible += points;
      dimensions.ccc[meta.ccc].questions.push(qId);
    }

    // Track integrated (has all 3 dimensions)
    if (meta.sep && meta.dci && meta.ccc) {
      dimensions.integrated.earned += earned;
      dimensions.integrated.possible += points;
    }
  });

  // Calculate percentages
  const calculate3DScore = (dim) => {
    Object.keys(dim).forEach(code => {
      if (dim[code].possible > 0) {
        dim[code].percentage = (dim[code].earned / dim[code].possible) * 100;
      } else {
        dim[code].percentage = null;
      }
    });
  };

  calculate3DScore(dimensions.sep);
  calculate3DScore(dimensions.dci);
  calculate3DScore(dimensions.ccc);

  if (dimensions.integrated.possible > 0) {
    dimensions.integrated.percentage =
      (dimensions.integrated.earned / dimensions.integrated.possible) * 100;
  }

  return dimensions;
}

/**
 * Generate 3D proficiency report for a class
 * @param {Object} students - All student data
 * @param {Object} questionMeta - Question metadata
 * @returns {Object} Class-level 3D proficiency report
 */
function generate3DClassReport(students, questionMeta) {
  const report = {
    generated: new Date().toISOString(),
    studentCount: Object.keys(students).length,
    sep: {},
    dci: {},
    ccc: {},
    strengthsAndGaps: {
      strengths: [],
      gaps: [],
      recommendations: []
    }
  };

  // Initialize aggregators
  Object.keys(THREE_D_FRAMEWORK.sep).forEach(code => {
    report.sep[code] = {
      name: THREE_D_FRAMEWORK.sep[code].name,
      classAverage: 0,
      studentScores: []
    };
  });
  Object.keys(THREE_D_FRAMEWORK.dci).forEach(code => {
    report.dci[code] = {
      name: THREE_D_FRAMEWORK.dci[code].name,
      classAverage: 0,
      studentScores: []
    };
  });
  Object.keys(THREE_D_FRAMEWORK.ccc).forEach(code => {
    report.ccc[code] = {
      name: THREE_D_FRAMEWORK.ccc[code].name,
      classAverage: 0,
      studentScores: []
    };
  });

  // Analyze each student
  Object.keys(students).forEach(email => {
    const student = students[email];
    const dims = analyze3DPerformance(student, questionMeta);

    // Aggregate SEP scores
    Object.keys(dims.sep).forEach(code => {
      if (dims.sep[code].percentage !== null) {
        report.sep[code].studentScores.push(dims.sep[code].percentage);
      }
    });

    // Aggregate DCI scores
    Object.keys(dims.dci).forEach(code => {
      if (dims.dci[code].percentage !== null) {
        report.dci[code].studentScores.push(dims.dci[code].percentage);
      }
    });

    // Aggregate CCC scores
    Object.keys(dims.ccc).forEach(code => {
      if (dims.ccc[code].percentage !== null) {
        report.ccc[code].studentScores.push(dims.ccc[code].percentage);
      }
    });
  });

  // Calculate class averages
  const calcAverage = (arr) => arr.length > 0 ? arr.reduce((a, b) => a + b, 0) / arr.length : null;

  Object.keys(report.sep).forEach(code => {
    report.sep[code].classAverage = calcAverage(report.sep[code].studentScores);
  });
  Object.keys(report.dci).forEach(code => {
    report.dci[code].classAverage = calcAverage(report.dci[code].studentScores);
  });
  Object.keys(report.ccc).forEach(code => {
    report.ccc[code].classAverage = calcAverage(report.ccc[code].studentScores);
  });

  // Identify strengths and gaps
  const STRENGTH_THRESHOLD = 75;
  const GAP_THRESHOLD = 60;

  // SEP analysis
  Object.keys(report.sep).forEach(code => {
    const avg = report.sep[code].classAverage;
    if (avg !== null) {
      if (avg >= STRENGTH_THRESHOLD) {
        report.strengthsAndGaps.strengths.push({
          dimension: 'SEP',
          code: code,
          name: report.sep[code].name,
          average: avg
        });
      } else if (avg < GAP_THRESHOLD) {
        report.strengthsAndGaps.gaps.push({
          dimension: 'SEP',
          code: code,
          name: report.sep[code].name,
          average: avg,
          recommendation: getSEPRecommendation(code)
        });
      }
    }
  });

  // DCI analysis
  Object.keys(report.dci).forEach(code => {
    const avg = report.dci[code].classAverage;
    if (avg !== null) {
      if (avg >= STRENGTH_THRESHOLD) {
        report.strengthsAndGaps.strengths.push({
          dimension: 'DCI',
          code: code,
          name: report.dci[code].name,
          average: avg
        });
      } else if (avg < GAP_THRESHOLD) {
        report.strengthsAndGaps.gaps.push({
          dimension: 'DCI',
          code: code,
          name: report.dci[code].name,
          average: avg,
          recommendation: getDCIRecommendation(code)
        });
      }
    }
  });

  // CCC analysis
  Object.keys(report.ccc).forEach(code => {
    const avg = report.ccc[code].classAverage;
    if (avg !== null) {
      if (avg >= STRENGTH_THRESHOLD) {
        report.strengthsAndGaps.strengths.push({
          dimension: 'CCC',
          code: code,
          name: report.ccc[code].name,
          average: avg
        });
      } else if (avg < GAP_THRESHOLD) {
        report.strengthsAndGaps.gaps.push({
          dimension: 'CCC',
          code: code,
          name: report.ccc[code].name,
          average: avg,
          recommendation: getCCCRecommendation(code)
        });
      }
    }
  });

  return report;
}

/**
 * Get SEP-specific intervention recommendation
 */
function getSEPRecommendation(code) {
  const recommendations = {
    'SEP-1': 'Focus on phenomenon-based questioning; use more "how" and "why" prompts',
    'SEP-4': 'Provide structured data tables; scaffold graph interpretation',
    'SEP-5': 'Include step-by-step calculation guides; emphasize units',
    'SEP-6': 'Use claim-evidence-reasoning scaffolds; model explanations',
    'SEP-7': 'Practice argument structure; provide evidence cards for sorting'
  };
  return recommendations[code] || 'Provide additional practice with this practice';
}

/**
 * Get DCI-specific intervention recommendation
 */
function getDCIRecommendation(code) {
  const recommendations = {
    'PS1.B': 'Review with molecular models; emphasize conservation',
    'PS2.A': 'Use interactive force diagrams; practice F=ma calculations',
    'PS3.A': 'Connect to everyday examples; thermal demonstrations',
    'LS4.B': 'Simulations showing population change over generations',
    'ESS3.D': 'Connect to local/personal examples of human impact'
  };
  return recommendations[code] || 'Review core concepts with alternative representations';
}

/**
 * Get CCC-specific intervention recommendation
 */
function getCCCRecommendation(code) {
  const recommendations = {
    'CCC-2': 'Explicitly map cause → effect chains; use graphic organizers',
    'CCC-5': 'Track matter/energy through systems with physical manipulatives',
    'CCC-7': 'Discuss equilibrium concepts; identify what maintains stability'
  };
  return recommendations[code] || 'Make crosscutting concept explicit in discussions';
}

/**
 * Export 3D analysis to JSON
 */
function export3DReport(report, grade, cycle, week) {
  const filename = `3d-analysis-g${grade}-c${cycle}-w${week}.json`;

  // Would use saveToJson from DataAggregator
  Logger.log(`3D Report: ${JSON.stringify(report.strengthsAndGaps)}`);

  return report;
}

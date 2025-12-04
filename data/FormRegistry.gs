/**
 * FormRegistry.gs
 * Central registry for tracking all created forms
 *
 * This solves the "where are my form IDs?" problem at scale
 *
 * Creates a Google Sheet that tracks:
 * - Form ID, Edit URL, Published URL
 * - Response Sheet ID (linked after first response)
 * - Grade, Cycle, Week, Form Type
 * - Creation date, question count, point value
 * - Deployment status
 *
 * KAMS Science Curriculum System v2.0
 */

// ============================================================================
// CONFIGURATION
// ============================================================================

const REGISTRY_SHEET_NAME = 'KAMS Science Form Registry';

/**
 * Create the form registry spreadsheet
 * Run this once to set up the registry
 */
function createFormRegistry() {
  // Check if registry already exists
  const existing = DriveApp.getFilesByName(REGISTRY_SHEET_NAME);
  if (existing.hasNext()) {
    const file = existing.next();
    Logger.log(`Registry already exists: ${file.getUrl()}`);
    return SpreadsheetApp.openById(file.getId());
  }

  // Create new spreadsheet
  const ss = SpreadsheetApp.create(REGISTRY_SHEET_NAME);
  const sheet = ss.getActiveSheet();
  sheet.setName('Forms');

  // Set up headers
  const headers = [
    'Created',
    'Grade',
    'Cycle',
    'Week',
    'Form Type',
    'Form Name',
    'Form ID',
    'Edit URL',
    'Published URL',
    'Response Sheet ID',
    'Points',
    'Question Count',
    'Status',
    'Last Modified',
    'Notes'
  ];

  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.getRange(1, 1, 1, headers.length)
    .setFontWeight('bold')
    .setBackground('#4285f4')
    .setFontColor('white');

  // Freeze header row
  sheet.setFrozenRows(1);

  // Set column widths
  sheet.setColumnWidth(1, 150);  // Created
  sheet.setColumnWidth(2, 60);   // Grade
  sheet.setColumnWidth(3, 60);   // Cycle
  sheet.setColumnWidth(4, 60);   // Week
  sheet.setColumnWidth(5, 100);  // Form Type
  sheet.setColumnWidth(6, 300);  // Form Name
  sheet.setColumnWidth(7, 200);  // Form ID
  sheet.setColumnWidth(8, 250);  // Edit URL
  sheet.setColumnWidth(9, 250);  // Published URL
  sheet.setColumnWidth(10, 200); // Response Sheet ID
  sheet.setColumnWidth(11, 60);  // Points
  sheet.setColumnWidth(12, 100); // Question Count
  sheet.setColumnWidth(13, 80);  // Status
  sheet.setColumnWidth(14, 150); // Last Modified
  sheet.setColumnWidth(15, 200); // Notes

  // Create summary sheet
  const summarySheet = ss.insertSheet('Summary');
  createSummaryDashboard(summarySheet);

  // Create lookup sheet for ResponseCollector
  const lookupSheet = ss.insertSheet('Lookup');
  createLookupFormulas(lookupSheet);

  Logger.log(`Created registry: ${ss.getUrl()}`);
  Logger.log(`IMPORTANT: Copy this Spreadsheet ID to your scripts: ${ss.getId()}`);

  return ss;
}

/**
 * Create summary dashboard with counts by cycle/grade
 */
function createSummaryDashboard(sheet) {
  sheet.getRange('A1').setValue('Form Registry Summary');
  sheet.getRange('A1').setFontSize(14).setFontWeight('bold');

  sheet.getRange('A3').setValue('Forms by Cycle');
  sheet.getRange('A4').setFormula('=QUERY(Forms!A:M, "SELECT C, COUNT(G) WHERE G IS NOT NULL GROUP BY C LABEL C \'Cycle\', COUNT(G) \'Form Count\'")');

  sheet.getRange('D3').setValue('Forms by Status');
  sheet.getRange('D4').setFormula('=QUERY(Forms!A:M, "SELECT M, COUNT(G) WHERE G IS NOT NULL GROUP BY M LABEL M \'Status\', COUNT(G) \'Count\'")');

  sheet.getRange('A15').setValue('Missing Forms');
  sheet.getRange('A15').setFontWeight('bold');
  sheet.getRange('A16').setValue('(Forms where Status is not "Deployed")');

  // Add conditional formatting hint
  sheet.getRange('A20').setValue('Tip: Use Data > Create a filter to find specific forms');
}

/**
 * Create lookup formulas for ResponseCollector
 */
function createLookupFormulas(sheet) {
  sheet.getRange('A1').setValue('Form ID Lookup');
  sheet.getRange('A1').setFontSize(14).setFontWeight('bold');

  sheet.getRange('A3').setValue('Enter:');
  sheet.getRange('B3').setValue('Grade');
  sheet.getRange('C3').setValue('Cycle');
  sheet.getRange('D3').setValue('Week');
  sheet.getRange('E3').setValue('Form Type');

  sheet.getRange('B4').setValue(7);
  sheet.getRange('C4').setValue(3);
  sheet.getRange('D4').setValue(1);
  sheet.getRange('E4').setValue('hook');

  sheet.getRange('A6').setValue('Form ID:');
  sheet.getRange('B6').setFormula(
    '=IFERROR(INDEX(Forms!G:G, MATCH(B4&C4&D4&E4, Forms!B:B&Forms!C:C&Forms!D:D&Forms!E:E, 0)), "Not found")'
  );

  sheet.getRange('A7').setValue('Published URL:');
  sheet.getRange('B7').setFormula(
    '=IFERROR(INDEX(Forms!I:I, MATCH(B4&C4&D4&E4, Forms!B:B&Forms!C:C&Forms!D:D&Forms!E:E, 0)), "Not found")'
  );

  // Batch export section
  sheet.getRange('A10').setValue('Batch Export All Form IDs');
  sheet.getRange('A10').setFontWeight('bold');
  sheet.getRange('A11').setValue('Copy this JSON for ResponseCollector config:');
  sheet.getRange('A12').setFormula(
    '="{" & CHAR(10) & JOIN("," & CHAR(10), ARRAYFORMULA(IF(Forms!G2:G<>"", "  ""g" & Forms!B2:B & "_c" & Forms!C2:C & "_w" & Forms!D2:D & "_" & Forms!E2:E & """: """ & Forms!G2:G & """", ""))) & CHAR(10) & "}"'
  );
}

// ============================================================================
// REGISTRATION FUNCTIONS
// ============================================================================

/**
 * Register a newly created form
 * Called by FormGenerator after creating each form
 */
function registerForm(formData) {
  const ss = getRegistrySheet();
  if (!ss) {
    Logger.log('ERROR: Registry not found. Run createFormRegistry() first.');
    return false;
  }

  const sheet = ss.getSheetByName('Forms');

  sheet.appendRow([
    new Date().toISOString(),           // Created
    formData.grade,                      // Grade
    formData.cycle,                      // Cycle
    formData.week,                       // Week
    formData.formType,                   // Form Type
    formData.name,                       // Form Name
    formData.formId,                     // Form ID
    formData.editUrl,                    // Edit URL
    formData.publishedUrl,               // Published URL
    '',                                  // Response Sheet ID (filled later)
    formData.points,                     // Points
    formData.questionCount,              // Question Count
    'Created',                           // Status
    new Date().toISOString(),            // Last Modified
    ''                                   // Notes
  ]);

  Logger.log(`Registered: G${formData.grade} C${formData.cycle} W${formData.week} ${formData.formType}`);
  return true;
}

/**
 * Update form status
 */
function updateFormStatus(formId, status, notes) {
  const ss = getRegistrySheet();
  if (!ss) return false;

  const sheet = ss.getSheetByName('Forms');
  const data = sheet.getDataRange().getValues();

  for (let i = 1; i < data.length; i++) {
    if (data[i][6] === formId) { // Column G = Form ID
      sheet.getRange(i + 1, 13).setValue(status);          // Status
      sheet.getRange(i + 1, 14).setValue(new Date().toISOString()); // Last Modified
      if (notes) {
        sheet.getRange(i + 1, 15).setValue(notes);         // Notes
      }
      return true;
    }
  }

  return false;
}

/**
 * Link response sheet to form
 */
function linkResponseSheet(formId, responseSheetId) {
  const ss = getRegistrySheet();
  if (!ss) return false;

  const sheet = ss.getSheetByName('Forms');
  const data = sheet.getDataRange().getValues();

  for (let i = 1; i < data.length; i++) {
    if (data[i][6] === formId) { // Column G = Form ID
      sheet.getRange(i + 1, 10).setValue(responseSheetId); // Response Sheet ID
      sheet.getRange(i + 1, 14).setValue(new Date().toISOString()); // Last Modified
      return true;
    }
  }

  return false;
}

// ============================================================================
// LOOKUP FUNCTIONS
// ============================================================================

/**
 * Get form ID from registry
 */
function getFormId(grade, cycle, week, formType) {
  const ss = getRegistrySheet();
  if (!ss) return null;

  const sheet = ss.getSheetByName('Forms');
  const data = sheet.getDataRange().getValues();

  for (let i = 1; i < data.length; i++) {
    if (data[i][1] == grade && data[i][2] == cycle &&
        data[i][3] == week && data[i][4] == formType) {
      return data[i][6]; // Form ID
    }
  }

  return null;
}

/**
 * Get all form IDs for a cycle
 */
function getCycleFormIds(grade, cycle) {
  const ss = getRegistrySheet();
  if (!ss) return {};

  const sheet = ss.getSheetByName('Forms');
  const data = sheet.getDataRange().getValues();
  const result = {};

  for (let i = 1; i < data.length; i++) {
    if (data[i][1] == grade && data[i][2] == cycle) {
      const week = data[i][3];
      const formType = data[i][4];
      const key = `w${week}_${formType}`;
      result[key] = {
        formId: data[i][6],
        responseSheetId: data[i][9],
        status: data[i][12]
      };
    }
  }

  return result;
}

/**
 * Export all form IDs as JSON for ResponseCollector
 */
function exportFormIdsAsJson() {
  const ss = getRegistrySheet();
  if (!ss) return '{}';

  const sheet = ss.getSheetByName('Forms');
  const data = sheet.getDataRange().getValues();
  const result = {};

  for (let i = 1; i < data.length; i++) {
    if (data[i][6]) { // Has Form ID
      const key = `g${data[i][1]}_c${data[i][2]}_w${data[i][3]}_${data[i][4]}`;
      result[key] = data[i][6];
    }
  }

  return JSON.stringify(result, null, 2);
}

// ============================================================================
// HELPERS
// ============================================================================

/**
 * Get the registry spreadsheet
 */
function getRegistrySheet() {
  const files = DriveApp.getFilesByName(REGISTRY_SHEET_NAME);
  if (files.hasNext()) {
    return SpreadsheetApp.openById(files.next().getId());
  }
  return null;
}

/**
 * Check registry health - find any issues
 */
function auditRegistry() {
  const ss = getRegistrySheet();
  if (!ss) {
    Logger.log('ERROR: Registry not found');
    return;
  }

  const sheet = ss.getSheetByName('Forms');
  const data = sheet.getDataRange().getValues();

  let issues = [];
  let stats = {
    total: 0,
    created: 0,
    deployed: 0,
    missingResponse: 0
  };

  for (let i = 1; i < data.length; i++) {
    if (!data[i][6]) continue; // Skip empty rows

    stats.total++;

    // Check status
    const status = data[i][12];
    if (status === 'Created') stats.created++;
    if (status === 'Deployed') stats.deployed++;

    // Check for missing response sheet
    if (!data[i][9] && status === 'Deployed') {
      stats.missingResponse++;
      issues.push(`G${data[i][1]} C${data[i][2]} W${data[i][3]} ${data[i][4]}: Deployed but no response sheet linked`);
    }
  }

  Logger.log('=== Registry Audit ===');
  Logger.log(`Total forms: ${stats.total}`);
  Logger.log(`Created (not deployed): ${stats.created}`);
  Logger.log(`Deployed: ${stats.deployed}`);
  Logger.log(`Missing response sheets: ${stats.missingResponse}`);

  if (issues.length > 0) {
    Logger.log('\nIssues:');
    issues.forEach(issue => Logger.log(`  - ${issue}`));
  } else {
    Logger.log('\nNo issues found!');
  }
}

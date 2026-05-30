const BASE_URL = 'http://localhost:3000';
const ENDPOINTS = [
  '/epd',
  '/epd/workspace',
  '/epd/pgeu',
  '/epd/friendship',
  '/epd/defense',
  '/epd/scrutiny',
  '/academy'
];

async function runQA() {
  console.log('==================================================');
  console.log('   GUURTI PORTAL AUTOMATED QA & ROUTING CHECK     ');
  console.log('==================================================\n');
  console.log(`Target Local Host: ${BASE_URL}\n`);

  let passed = 0;
  let failed = 0;

  for (const endpoint of ENDPOINTS) {
    const url = BASE_URL + endpoint;
    try {
      const response = await fetch(url);
      const status = response.status;
      if (status === 200) {
        console.log(`[PASS] ${endpoint} -> HTTP ${status} (Operational)`);
        passed++;
      } else {
        console.log(`[FAIL] ${endpoint} -> HTTP ${status} (Crashed/Blocked)`);
        failed++;
      }
    } catch (error) {
      console.log(`[ERROR] ${endpoint} -> ${error.message}`);
      failed++;
    }
  }

  console.log('\n==================================================');
  console.log(`   QA SUMMARY: ${passed} Passed, ${failed} Failed`);
  if (failed === 0) {
    console.log('   STATUS: 100% OPERATIONAL & VERIFIED ONLINE     ');
  } else {
    console.log('   STATUS: ATTENTION REQUIRED ON FAILED ROUTES    ');
  }
  console.log('==================================================');
}

runQA();

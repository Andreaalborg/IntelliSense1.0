/**
 * Simple test script for matchFaq — run with: npx tsx src/lib/chatKnowledge.test.ts
 *
 * Tests the fix for short-keyword matching (e.g., "pris" → "prisene").
 */
import { matchFaq, CHAT_FAQS } from "./chatKnowledge";

type TestCase = { input: string; expectMatch: string | null; description: string };

const testCases: TestCase[] = [
  // Price FAQ tests
  { input: "Hva koster det?", expectMatch: "Hva koster det?", description: "exact question" },
  { input: "Hva er prisene deres?", expectMatch: "Hva koster det?", description: "price variation with 'prisene'" },
  { input: "Priser", expectMatch: "Hva koster det?", description: "short 'Priser' query" },
  { input: "pris", expectMatch: "Hva koster det?", description: "single keyword 'pris'" },

  // Delivery time FAQ tests
  { input: "Hvor lang tid tar en nettside?", expectMatch: "Hvor lang tid tar en nettside?", description: "exact nettside question" },
  { input: "Leveringstid", expectMatch: "Hvor lang tid tar en nettside?", description: "'Leveringstid' maps to time FAQ" },

  // SEO FAQ tests
  { input: "Når ser jeg resultater fra SEO?", expectMatch: "SEO — når ser jeg resultater?", description: "SEO results question" },
  { input: "SEO", expectMatch: "SEO — når ser jeg resultater?", description: "short 'SEO' query" },

  // General FAQ tests
  { input: "Hva gjør IntelliSense?", expectMatch: "Hva gjør IntelliSense?", description: "about question" },
  { input: "binding", expectMatch: "Har dere bindingstid?", description: "bindingstid keyword" },

  // No-match sanity check
  { input: "xyz123", expectMatch: null, description: "gibberish → no match" },
];

let passed = 0;
let failed = 0;

for (const tc of testCases) {
  const result = matchFaq(tc.input);
  const actualQuestion = result?.question ?? null;
  const ok = actualQuestion === tc.expectMatch;

  if (ok) {
    console.log(`✓ PASS: "${tc.input}" → ${tc.description}`);
    passed++;
  } else {
    console.error(`✗ FAIL: "${tc.input}" — expected "${tc.expectMatch}", got "${actualQuestion}"`);
    failed++;
  }
}

console.log(`\n${passed} passed, ${failed} failed`);
process.exit(failed > 0 ? 1 : 0);

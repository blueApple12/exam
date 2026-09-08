# Codex verification — 2026-09-08T21:57:03.545Z

**VERIFY OK — 360/360 full-output cases passed**, using Compiler Explorer cg132 — gcc 13.2, C99, -O0. No compiler warnings on the final run.

| Paper | Q2 | Q3 | Q4 |
|---|---:|---:|---:|
| 1-hardest | 24/24 | 24/24 | 24/24 |
| 2-easiest | 24/24 | 24/24 | 24/24 |
| 3-prediction-1 | 24/24 | 24/24 | 24/24 |
| 4-prediction-2 | 24/24 | 24/24 | 24/24 |
| 5-prediction-3 | 24/24 | 24/24 | 24/24 |

Every kit contains all four questions (Q1 has three snippets), 12 worked input/output examples, the original three skeletons, 72 automated cases, and separate C/markdown solutions. All fifteen skeleton copies were directly compared with the corresponding ZIP member: **byte-identical**. Embedded editor text preserves the exact skeleton content with line-ending normalization only.

## What was checked

- Entire stdout from the original main logic, including Q2's entire printed array and Q3's output string. The verifier renames main only to call it repeatedly with independent inputs and delimit outputs.
- Additional snapshots check that b (Q2), s (Q3), and immutable Q4 inputs are unchanged on return. The challenging Q4 explicitly permits mutation.
- 24 cases per coding question. Expectations come from separate Python oracles: whole-number arithmetic, multiset counts, complete subsequence/permutation enumeration, and direct interval/pair scans. No C reference implementation generated its own expected answers.
- Examples are selected from these verified cases; HTML data and standalone JSON cases match. Three Q1 answer derivations per paper are in SOLUTIONS.md. Q1 bounds were analysed mathematically; running gcc does not prove asymptotic complexity.
- Recursion-only solution bodies contain no loops, dynamic allocation or structs, and every public Q4 function calls itself. Helper recursion and bounds were inspected.
- The local HTTP index returned 200. Browser rendering could not be visually inspected because the connected browser tool reported no available browser; no screenshot-based validation is claimed.
- `node --test spring2026B-codex/runner.test.mjs`: 5/5 runner tests passed, including a deliberate correct-return/wrong-array result, compilation failure, runtime failure, skeleton loading and question switching. These are runtime-logic tests with simulated responses, not a visual browser test.

## Reproduce

Run `node spring2026B-codex/verify.mjs` from the project root. The unmodified exact skeletons are the three `examB_qN.c` files in each paper directory; do not confuse them with `solutions/qN.c`.

## ZIP member SHA-256

- q2: `e6c94e0ce22ac20cef60e568fd529bf82974cb01902a1d44088430a42c4d5ca4`
- q3: `a2c7fad539170b7272bc872c199ac86d2d97fc97b7c3105959cef5a523465018`
- q4: `b9bea2e622993bf80150da985812d5536e73cb2b83404105483c1b3fac89c217`

Finite tests check results, not all legal inputs or complexity. End-of-call snapshots cannot detect a temporary mutation that is later restored. The C solutions were also read against their stated contracts. Difficulty and likelihood labels remain reasoned judgments, not guarantees.

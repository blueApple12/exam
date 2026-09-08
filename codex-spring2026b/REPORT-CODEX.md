# Codex — Spring 2026 Moed B forecast

Written from the three files in `inbox/קבצי שלד-20260908.zip`, before seeing the real B paper. I also read Claude's coordination note and its predictions; these are my evaluated rankings, **not a blind independent second forecast**. The earlier skeleton-free ranking of exams 9–20 is superseded for this target.

## What the skeletons actually establish

| Slot | Hard evidence | Best inference; uncertainty |
|---|---|---|
| Q2 | `int examB_q2(int* a, int* b, int n)`; both n-element arrays are read; integer result then **all n entries of a** printed | Array transformation is very likely. Arithmetic, ordered-array matching, per-element binary searches or merging are plausible. `b` is not an empty output buffer. A shortened result needs a specified tail. A stand-alone logarithmic search is a poor fit when the task changes n outputs. |
| Q3 | `int examB_q3(char* s, char* p)`; p has input length + 1 capacity and starts empty; integer then p printed unconditionally | Construct a string no longer than the input. Histogram, read/write cursors or a sliding window are strong families. There is no input pattern string or k parameter. The return may be length, removal count, changed-position count or a flag. Unconditional printing does **not** decide which. |
| Q4 | `int examB_q4(int* arr, int n)`; only the integer printed | Recursion is a strong lecturer/semester prior, not text encoded in the prototype. Recursive array scans, run statistics, pair statistics or a sorting-based count fit. No external target k or second array. Mutation may be allowed as workspace even though it is not printed. |

Allocation failure checks and scanf guards are defensive boilerplate, not topic evidence. Input assumptions such as sortedness will be in the paper. Q3's capacity rules out **unrestricted expanding** digit-count encoding, not every possible compression format. The actual A paper (archived PDF pp. 6–8) used snake-matrix membership, lexicographically minimum palindrome construction, and recursive k-sum pairing. These surfaces are downgraded; their underlying techniques remain live. No backtracking or structs in these practice papers.

## Candidate grid and ranking

Provenance: R1 repeated lecturer row; R2 one real row; R3 recurring device or an adaptation of a real row; R4 trainer-only; R5 invention. No exact R1/R2 Q2 row survives all of this new interface's input/output requirements. Adaptations are honestly marked R3. Probabilities below are subjective **exact-task** allocations, informed by the old roughly 25% no-naming-tell baseline; they are not measured probabilities for these specific skeletons.

| Slot/rank | Candidate and return/output interpretation | Device and likely contract | Provenance | Probability |
|---|---|---|---|---:|
| Q2 #1 | Add two equally long digit arrays into a, return carry | Right-to-left carry; Θ(n)/Θ(1) | R3, addition device from Summer 2025 B, adapted interface; not a Mirela literal repeat | 25% |
| Q2 #2 | Replace each a value with its lower-bound rank in sorted b; return membership count | n binary searches; O(n log n)/O(1) | R3, rank-output/search devices; Spring 2016 A is related, but its output buffer was not a second filled input | 20% |
| Q2 #3 | Multiset difference of sorted a and b, zero-fill a tail, return length | Two pointers/compaction; Θ(n)/Θ(1) | R3, merge and in-place compaction devices | 15% |
| Q2 #4 | Sorted multiset intersection, padded result | Same device, different predicate | R3 | 10% |
| Q2 other | Other transforms, paired arithmetic, merge variants or different return semantics | Not ruled out | — | 30% |
| Q3 #1 | Rearrange into p with no equal neighbours, report success; possibly lexicographic tie-breaking | Histogram + greedy construction; O(n)/O(1), fixed alphabet | R2 core: Spring 2022 B “Rearrange so no two adjacent chars are equal, or report impossible”; lexicographic refinement is R3 | 25% |
| Q3 #2 | Deduplicate into p in a specified occurrence order, return removals | Histogram + cursors; Θ(n)/Θ(1) | R3 | 20% |
| Q3 #3 | Copy longest repetition-free substring, return length | Sliding window; Θ(n)/Θ(1) | R3 | 15% |
| Q3 #4 | Collapse consecutive runs into p | Read/write cursors; Θ(n)/Θ(1) | R3 | 10% |
| Q3 other | Sorting, filtering, other witness construction or different count/length semantics | Includes near-ties above | — | 30% |
| Q4 #1 | Count strictly increasing contiguous subarrays of length ≥2 | Recursive suffix/prefix decomposition; no stated time requirement predicted | R3, recursive enumeration/run device | 25% |
| Q4 #2 | Longest strictly increasing contiguous run | Recursive scan; no stated time requirement predicted | R3 | 20% |
| Q4 #3 | Count strict prefix records | Recursive maximum + count | R3 | 15% |
| Q4 #4 | Palindrome decision | Direct endpoint recursion | R3 | 10% |
| Q4 other | Inversions, pairs, divisibility predicates, sorting statistics or other scalar recursion | Input mutation and wrapper clause unresolved | — | 30% |

Q3 #2 and #4 have open first/last occurrence, count/length and single-pass/cascading variants. The chosen practice papers pin those axes; the probabilities above refer to their families with these uncertainties, **not the probability of every sentence matching**. Q4 open axes include contiguous objects versus arbitrary pairs and count versus longest versus decision; a free-standing `(arr,n)` cannot resolve them. There is no defensible numerical probability for an entire paper formed by multiplying these correlated guesses.

Premortems: Q2 may be a merge/rank question rather than arithmetic; Q3 may return a length or edit count rather than a success flag; Q4 may count non-contiguous pairs rather than contiguous runs. Preserve those alternatives during revision. No source justifies 90% confidence in an exact question.

## Five Codex papers

1. **Hardest / challenge benchmark**: rotated-reference nearest-value rewriting; smallest distinct-letter subsequence; recursive inversion counting with in-place merging. Difficult compositions of course tools, not backtracking or structs.
2. **Easiest / lower final-level benchmark**: padded multiset intersection; run collapse; recursive array palindrome. Passing this is a foundation check, not readiness evidence by itself.
3. **Prediction 1**: digit-array addition; lexicographically smallest non-adjacent-equal rearrangement; count increasing subarrays.
4. **Prediction 2**: lower-bound ranks and membership count; retain last occurrences in order; longest increasing run.
5. **Prediction 3**: padded multiset difference; longest repetition-free substring; prefix-record count.

The three predicted papers are distinct plausible scenarios, not a claim that B must equal one of them. The hardest/easiest extremes are extra practice, not fourth/fifth forecasts. Some basic devices resemble old questions deliberately, but the exact interfaces, return/output contracts and compositions are freshly specified. Q1 predictions concern **idioms**, not unknowable exact code: dependent loop sums, helper-return values versus helper cost, recurrence trees and peak live allocation.

## What to study first

1. Read the entire output contract: Q2's integer **and every array entry**, Q3's integer **and terminated output string**. Know what failure and unused tails contain.
2. Master two-pointer multiset matching with duplicates, lower/upper bounds, and right-to-left carry/borrow. Add rotation-index mapping after ordinary binary search is reliable.
3. Practise 26-entry histograms, occurrence order, output-buffer compaction, sliding windows, and greedy feasibility. Never confuse substring, subsequence and arbitrary permutation.
4. Write a recursive contract and base case before Q4 code. Practise a public function that really calls itself and recursive helpers, without loops. Count recursion-stack space; branching alone is not necessarily backtracking.
5. For Q1, sum actual inner work, include repeated helper calls, and measure **peak live** memory. Θ(2ⁿ) is not the tight bound for Fibonacci's T(n−1)+T(n−2); avoid memorising the old wrong keys.

Suggested order: easy paper → Prediction 1 → Prediction 2 → Prediction 3 → challenge paper. In each sitting use three hours, keep solutions closed, and only then inspect failures. This ordering is a study strategy, not a likelihood ranking of difficulty. After each miss record whether it was the task, technique, bound, C implementation, or output contract. Passing finite tests never proves complexity.

## Verification scope

See `VERIFICATION.md` for actual compiler results, ZIP hashes and test counts. The unchanged original C files are in each kit; implementations are separate. Expectations include complete stdout, not merely the returned integer. Printed examples are drawn from independently computed tests. No claim about the old exams' correctness or a completed trainer round is made here; the new-skeleton task took priority over that interrupted work.

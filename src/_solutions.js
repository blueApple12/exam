const SOLUTIONS = {
  q2: {
    archetype: "חיפוש בינארי לגבול בכל שורה בנפרד",
    complexity: "זמן Θ(m · log N) · מקום Θ(1)",
    code: `int examT_q2(int mat[][N], int m, int x) {
    int total = 0;
    for (int i = 0; i < m; i++) {
        int low = 0, high = N - 1, cnt = 0;
        while (low <= high) {
            int mid = low + (high - low) / 2;
            if (mat[i][mid] < x) {
                cnt = mid + 1;
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        total += cnt;
    }
    return total;
}`
  },
  q3: {
    archetype: "מסכת זוגיות נצברת מכל התחלה — בדיוק ביט אחד דלוק",
    complexity: "זמן O(n²) · מקום נוסף O(1)",
    code: `int examT_q3(char* s) {
    int n = 0;
    while (s[n] != '\\0') {
        n++;
    }
    int total = 0;
    for (int i = 0; i < n; i++) {
        int mask = 0;
        for (int j = i; j < n; j++) {
            mask ^= 1 << (s[j] - 'a');
            if (mask != 0 && (mask & (mask - 1)) == 0) {
                total++;
            }
        }
    }
    return total;
}`
  },
  q4: {
    archetype: "נוסחת נסיגה f(n) = f(n-1) + 2f(n-2) — דומינו אנכי, זוג אופקי, או ריבוע",
    complexity: "אין דרישת סיבוכיות",
    code: `int examT_q4(int n) {
    if (n == 0) {
        return 1;
    }
    if (n == 1) {
        return 1;
    }
    return examT_q4(n - 1) + 2 * examT_q4(n - 2);
}`
  }
};

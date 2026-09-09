const SOLUTIONS = {
  q2: {
    archetype: "Match equal occurrences one at a time.",
    complexity: "O(n) / O(1)",
    code: `int examB_q2(int* a, int* b, int n) {
    int i = 0, j = 0, w = 0;
    while (i < n && j < n) {
        if (a[i] < b[j])
            i++;
        else if (a[i] > b[j])j++;
        else {
            a[w++] = a[i++];
            j++;
        }
    }
    for (int k = w; k < n; k++)
        a[k] = 0;
    return w;
}`
  },
  q3: {
    archetype: "Compare adjacent input characters, not membership in a global set.",
    complexity: "O(n) / O(1)",
    code: `int examB_q3(char* s, char* p) {
    int i = 0, w = 0;
    while (s[i]) {
        if (i == 0 || s[i] != s[i-1])
            p[w++] = s[i];
        i++;
    }
    p[w] = '\\0';
    return i-w;
}`
  },
  q4: {
    archetype: "Check endpoints, then recurse on the inner segment.",
    complexity: "No required bound; O(n) time / O(n) stack",
    code: `int examB_q4(int* arr, int n) {
    if (n < 2)
        return 1;
    if (arr[0] != arr[n-1])
        return 0;
    return examB_q4(arr+1, n-2);
}`
  },
};

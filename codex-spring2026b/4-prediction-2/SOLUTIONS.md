# Codex — תחזית 2 — פתרונות

פתחו רק לאחר ניסיון עצמאי.

### Q1a

Θ(log² n) time; Θ(1) additional space. Triangular sum over logarithmic exponent indices.

### Q1b

Θ(n) time; Θ(n) additional space. Free occurs before descending: peak heap Θ(n), recursion depth Θ(n), not quadratic.

### Q1c

Θ(n³) time; Θ(1) additional space. n outer iterations; inner loop has n+1 calls to a Θ(n)-cost helper.

## Q2

O(n log(n+1)) / O(1)

Lower bound counts strict predecessors even with duplicates. Membership must use the original x before overwriting a[i].

```c
int examB_q2(int* a,int* b,int n){
    int count=0;
    for(int i=0;i<n;i++){
        int x=a[i],lo=0,hi=n;
        while(lo<hi){int m=lo+(hi-lo)/2;if(b[m]<x)lo=m+1;else hi=m;}
        if(lo<n && b[lo]==x)count++;
        a[i]=lo;
    }
    return count;
}
```

## Q3

O(n) / O(1)

Count remaining occurrences and emit exactly when the count becomes zero. This differs from first-occurrence deduplication and adjacent-run collapse.

```c
int examB_q3(char* s,char* p){
    int left[26]={0},n=0,w=0;
    while(s[n]){left[s[n]-'a']++;n++;}
    for(int i=0;i<n;i++)if(--left[s[i]-'a']==0)p[w++]=s[i];
    p[w]='\0';return n-w;
}
```

## Q4

No required bound; O(n²) time / O(n) stack

Separate the best run in the prefix from the run ending at the last element. A subsequence with gaps is not an admissible answer.

```c
int end_run(int* a,int n){if(n<2 || a[n-2]>=a[n-1])return 1;return 1+end_run(a,n-1);}
int examB_q4(int* arr,int n){
    if(n<2)return n;
    int best=examB_q4(arr,n-1),last=end_run(arr,n);
    return best>last?best:last;
}
```

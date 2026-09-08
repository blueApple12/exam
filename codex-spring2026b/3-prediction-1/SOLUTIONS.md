# Codex — תחזית 1 — פתרונות

פתחו רק לאחר ניסיון עצמאי.

### Q1a

Θ(n log n) time; Θ(1) additional space. Sum floor(n/i), the harmonic sum.

### Q1b

Θ(n) time; Θ(log n) additional space. g2 costs Θ(n) and returns about 3n/4. Geometric total work, logarithmic depth.

### Q1c

Θ(n) time; Θ(n²) additional space. n calls, but n+(n-1)+... live cells before unwinding.

## Q2

O(n) / O(1)

Process from least to most significant. Loop invariant: processed suffix equals the sum suffix and carry is the only dependency crossing the boundary.

```c
int examB_q2(int* a,int* b,int n){
    int carry=0;
    for(int i=n-1;i>=0;i--){int t=a[i]+b[i]+carry;a[i]=t%10;carry=t/10;}
    return carry;
}
```

## Q3

O(n) / O(1), fixed 26-letter alphabet

Try the smallest next letter that leaves a feasible suffix. If r letters remain, the preceding letter may occur at most floor(r/2), other letters at most ceil(r/2). These separator bounds are sufficient for this one-dimensional arrangement. Alphabet scans are constant; this is constructive greedy, not backtracking.

```c
int can_finish(int* c,int n,int previous){
    for(int x=0;x<26;x++)if(c[x]>(x==previous?n/2:(n+1)/2))return 0;
    return 1;
}
int examB_q3(char* s,char* p){
    int c[26]={0},n=0;
    while(s[n]){c[s[n]-'a']++;n++;}
    int previous=-1;
    for(int i=0;i<n;i++){
        int chosen=-1;
        for(int x=0;x<26;x++)if(c[x]>0 && x!=previous){
            c[x]--;
            if(can_finish(c,n-i-1,x)){chosen=x;break;}
            c[x]++;
        }
        if(chosen<0){p[0]='\0';return 0;}
        p[i]=(char)('a'+chosen);previous=chosen;
    }
    p[n]='\0';return 1;
}
```

## Q4

No required bound; O(n²) time / O(n) stack

Every interval either ends before the last position or ends there. An increasing suffix of length L contributes L−1 new intervals. Count is not longest length.

```c
int end_run(int* a,int n){if(n<2 || a[n-2]>=a[n-1])return 1;return 1+end_run(a,n-1);}
int examB_q4(int* arr,int n){if(n<2)return 0;return examB_q4(arr,n-1)+end_run(arr,n)-1;}
```

# Codex — רף קל של מבחן סופי — פתרונות

פתחו רק לאחר ניסיון עצמאי.

### Q1a

Θ(n log n) time; Θ(1) additional space. n outer iterations and logarithmically many inner iterations.

### Q1b

Θ(n) time; Θ(log n) additional space. Binary recursion tree has Θ(n) nodes, logarithmic active depth.

### Q1c

Θ(n) time; Θ(n) additional space. Constant work per iteration under the allocation convention. Only one allocation is live, largest n.

## Q2

O(n) / O(1)

Match equal occurrences one at a time. The write cursor never passes unread a. Both the retained prefix and the zero tail are graded.

```c
int examB_q2(int* a,int* b,int n){
    int i=0,j=0,w=0;
    while(i<n && j<n){if(a[i]<b[j])i++;else if(a[i]>b[j])j++;else{a[w++]=a[i++];j++;}}
    for(int k=w;k<n;k++)a[k]=0;
    return w;
}
```

## Q3

O(n) / O(1)

Compare adjacent input characters, not membership in a global set. Return old length minus new length.

```c
int examB_q3(char* s,char* p){
    int i=0,w=0;
    while(s[i]){if(i==0 || s[i]!=s[i-1])p[w++]=s[i];i++;}
    p[w]='\0';return i-w;
}
```

## Q4

No required bound; O(n) time / O(n) stack

Check endpoints, then recurse on the inner segment. n=0 is a necessary internal base case even when top-level input is nonempty.

```c
int examB_q4(int* arr,int n){
    if(n<2)return 1;
    if(arr[0]!=arr[n-1])return 0;
    return examB_q4(arr+1,n-2);
}
```

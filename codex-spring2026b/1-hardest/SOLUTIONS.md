# Codex — אתגר קשה במיוחד — פתרונות

פתחו רק לאחר ניסיון עצמאי.

### Q1a

Θ(n log n) time; Θ(1) additional space. Each doubling level does between n and n+i prints; there are Θ(log n) levels.

### Q1b

Θ(n) time; Θ(n²) additional space. Two halved recursive calls make Θ(n) nodes. Peak live heap is n²+(n/2)²+...; sibling lifetimes do not overlap.

### Q1c

Θ(n log n) time; Θ(log n) additional space. g3 returns a power of two in [n/2,n] but costs Θ(log n). It is re-evaluated in every loop condition.

## Q2

O(n log(n+1)) / O(1)

Find the rotation once, then lower-bound each original query in virtual sorted order. Compare predecessor/successor; never compare only the physical neighbours across the rotation.

```c
int examB_q2(int* a, int* b, int n) {
    int lo=0, hi=n-1;
    while(lo<hi){int m=lo+(hi-lo)/2; if(b[m]>b[hi]) lo=m+1; else hi=m;}
    int pivot=lo, found=0;
    for(int i=0;i<n;i++){
        int x=a[i]; lo=0; hi=n;
        while(lo<hi){int m=lo+(hi-lo)/2; if(b[(pivot+m)%n]<x) lo=m+1; else hi=m;}
        int v;
        if(lo==0) v=b[pivot];
        else if(lo==n) v=b[(pivot+n-1)%n];
        else {int left=b[(pivot+lo-1)%n],right=b[(pivot+lo)%n];v=(x-left<=right-x)?left:right;}
        if(v==x) found++;
        a[i]=v;
    }
    return found;
}
```

## Q3

O(n) / O(1), alphabet size 26; p is output

The output acts as a stack. A larger last letter may be removed only if another copy remains. Every letter occurrence is pushed/popped at most once; the first differing position proves the greedy choice.

```c
int examB_q3(char* s, char* p) {
    int left[26]={0},used[26]={0},w=0;
    for(int i=0;s[i];i++) left[s[i]-'a']++;
    for(int i=0;s[i];i++){
        int c=s[i]-'a';left[c]--;
        if(used[c]) continue;
        while(w>0 && p[w-1]>s[i] && left[p[w-1]-'a']>0) used[p[--w]-'a']=0;
        p[w++]=s[i];used[c]=1;
    }
    p[w]='\0';return w;
}
```

## Q4

No required bound; supplied solution O(n²) time / O(n) stack

After recursive sorting, moving the next right-half element before m−i left elements creates exactly that many strict inversions. In-place shifting costs O(n²) overall, not the O(n log n) of a buffered merge. No choice search or backtracking is used.

```c
void shift_right(int* a,int j,int i){if(j<=i)return;a[j]=a[j-1];shift_right(a,j-1,i);}
int merge_count(int* a,int i,int m,int n){
    if(i>=m || m>=n)return 0;
    if(a[i]<=a[m])return merge_count(a,i+1,m,n);
    int v=a[m],cross=m-i;shift_right(a,m,i);a[i]=v;
    return cross+merge_count(a,i+1,m+1,n);
}
int examB_q4(int* arr,int n){
    if(n<2)return 0;
    int m=n/2;
    int left=examB_q4(arr,m),right=examB_q4(arr+m,n-m);
    return left+right+merge_count(arr,0,m,n);
}
```

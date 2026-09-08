# Codex — תחזית 3 — פתרונות

פתחו רק לאחר ניסיון עצמאי.

### Q1a

Θ(√n · log n) time; Θ(1) additional space. Square-root outer loop times logarithmic inner work.

### Q1b

Θ(n log n) time; Θ(log n) additional space. Linear work per level, logarithmic depth; calls do not coexist across the breadth.

### Q1c

Θ(n) time; Θ(n) additional space. Geometric sum of work; largest single live allocation is Θ(n).

## Q2

O(n) / O(1)

Consume each occurrence in b at most once. Membership-only filtering would remove too many duplicates.

```c
int examB_q2(int* a,int* b,int n){
    int i=0,j=0,w=0;
    while(i<n){
        while(j<n && b[j]<a[i])j++;
        if(j<n && b[j]==a[i]){i++;j++;}
        else a[w++]=a[i++];
    }
    for(int k=w;k<n;k++)a[k]=0;
    return w;
}
```

## Q3

O(n) / O(1)

The left boundary only moves forward. Update the saved answer on strict improvement so ties retain the earliest start.

```c
int examB_q3(char* s,char* p){
    int last[26],left=0,best=0,start=0;
    for(int x=0;x<26;x++)last[x]=-1;
    for(int i=0;s[i];i++){
        int x=s[i]-'a';if(last[x]>=left)left=last[x]+1;last[x]=i;
        if(i-left+1>best){best=i-left+1;start=left;}
    }
    for(int i=0;i<best;i++){p[i]=s[start+i];}
    p[best]='\0';return best;
}
```

## Q4

No required bound; O(n²) time / O(n) stack

Compare the last value with the maximum of the entire earlier prefix, not merely its predecessor. Equal maxima are not new records.

```c
int prefix_max(int* a,int n){if(n==1)return a[0];int m=prefix_max(a,n-1);return m>a[n-1]?m:a[n-1];}
int examB_q4(int* arr,int n){if(n<2)return n;return examB_q4(arr,n-1)+(arr[n-1]>prefix_max(arr,n-1));}
```

const SOLUTIONS = {
  q2: {
    archetype: "הקלה ביותר · Codex · שאלה 2",
    complexity: "ראו את דף השאלות",
    code: `int examB_q2(int* a,int* b,int n){
    int i=0,j=0,w=0;
    while(i<n && j<n){if(a[i]<b[j])i++;else if(a[i]>b[j])j++;else{a[w++]=a[i++];j++;}}
    for(int k=w;k<n;k++)a[k]=0;
    return w;
}`
  },
  q3: {
    archetype: "הקלה ביותר · Codex · שאלה 3",
    complexity: "ראו את דף השאלות",
    code: `int examB_q3(char* s,char* p){
    int i=0,w=0;
    while(s[i]){if(i==0 || s[i]!=s[i-1])p[w++]=s[i];i++;}
    p[w]='\\0';return i-w;
}`
  },
  q4: {
    archetype: "הקלה ביותר · Codex · שאלה 4",
    complexity: "ראו את דף השאלות",
    code: `int examB_q4(int* arr,int n){
    if(n<2)return 1;
    if(arr[0]!=arr[n-1])return 0;
    return examB_q4(arr+1,n-2);
}`
  },
};

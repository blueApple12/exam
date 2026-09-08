#include <stdio.h>
#include <stdlib.h>

#define DONT_KNOW "I_dont_know"

void printIDontKnow() {
    printf("%s", DONT_KNOW);
    exit(0);
}

int examB_q3(char* s, char* p);

int main(void) {
    // uncomment next line if you don't know the answer
    // printIDontKnow();

    int n;
    if (scanf("%d", &n) != 1) return 1;
    char* s = malloc((n + 1) * sizeof(char));
    if (!s) return 1;
    if (scanf("%s", s) != 1) {
        free(s);
        return 1;
    }
    char* p = malloc((n + 1) * sizeof(char));
    if (!p) {
        free(s);
        return 1;
    }
    p[0] = '\0';
    int result = examB_q3(s, p);
    printf("%d\n", result);
    printf("%s", p);
    free(s);
    free(p);
    return 0;
}

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

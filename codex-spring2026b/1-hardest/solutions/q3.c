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

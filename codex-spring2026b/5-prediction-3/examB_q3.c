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
    // write your code here
    return 0;
}
#include <stdio.h>
#include <stdlib.h>

#define DONT_KNOW "I_dont_know"

void printIDontKnow() {
    printf("%s", DONT_KNOW);
    exit(0);
}

int examB_q2(int* a, int* b, int n);

int main(void) {
    // uncomment next line if you don't know the answer
    // printIDontKnow();

    int n;
    if (scanf("%d", &n) != 1) return 1;
    int* a = malloc(n * sizeof(int));
    int* b = malloc(n * sizeof(int));
    if (!a || !b) {
        free(a);
        free(b);
        return 1;
    }
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &a[i]) != 1) {
            free(a);
            free(b);
            return 1;
        }
    }
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &b[i]) != 1) {
            free(a);
            free(b);
            return 1;
        }
    }
    int result = examB_q2(a, b, n);
    printf("%d\n", result);
    for (int i = 0; i < n; i++) {
        printf("%d", a[i]);
        if (i < n - 1)
            printf(" ");
    }
    free(a);
    free(b);
    return 0;
}

int examB_q2(int* a,int* b,int n){
    int carry=0;
    for(int i=n-1;i>=0;i--){int t=a[i]+b[i]+carry;a[i]=t%10;carry=t/10;}
    return carry;
}

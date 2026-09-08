#include <stdio.h>
#include <stdlib.h>

#define DONT_KNOW "I_dont_know"

void printIDontKnow() {
    printf("%s", DONT_KNOW);
    exit(0);
}

int examB_q4(int* arr, int n);

int main(void) {
    // uncomment next line if you don't know the answer
    // printIDontKnow();

    int n;
    if (scanf("%d", &n) != 1) return 1;
    int* arr = malloc(n * sizeof(int));
    if (!arr) return 1;
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &arr[i]) != 1) {
            free(arr);
            return 1;
        }
    }
    printf("%d", examB_q4(arr, n));
    free(arr);
    return 0;
}

int end_run(int* a,int n){if(n<2 || a[n-2]>=a[n-1])return 1;return 1+end_run(a,n-1);}
int examB_q4(int* arr,int n){
    if(n<2)return n;
    int best=examB_q4(arr,n-1),last=end_run(arr,n);
    return best>last?best:last;
}

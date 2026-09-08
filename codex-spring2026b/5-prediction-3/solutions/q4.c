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

int prefix_max(int* a,int n){if(n==1)return a[0];int m=prefix_max(a,n-1);return m>a[n-1]?m:a[n-1];}
int examB_q4(int* arr,int n){if(n<2)return n;return examB_q4(arr,n-1)+(arr[n-1]>prefix_max(arr,n-1));}

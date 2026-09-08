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

const SKELETONS = {
  q2: `#include <stdio.h>
#include <stdlib.h>

#define N 4
#define DONT_KNOW "I_dont_know"

void printIDontKnow() {
    printf("%s", DONT_KNOW);
    exit(0);
}

int examT_q2(int mat[][N], int m, int x);

int main(void) {
    // uncomment next line if you don't know the answer
    // printIDontKnow();

    int m;
    if (scanf("%d", &m) != 1) return 1;
    int (*mat)[N] = malloc(m * sizeof(*mat));
    if (!mat) return 1;
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < N; j++) {
            if (scanf("%d", &mat[i][j]) != 1) {
                free(mat);
                return 1;
            }
        }
    }
    int x;
    if (scanf("%d", &x) != 1) {
        free(mat);
        return 1;
    }
    printf("%d", examT_q2(mat, m, x));
    free(mat);
    return 0;
}

int examT_q2(int mat[][N], int m, int x) {
    // write your code here
    return 0;
}`,
  q3: `#include <stdio.h>
#include <stdlib.h>

#define DONT_KNOW "I_dont_know"

void printIDontKnow() {
    printf("%s", DONT_KNOW);
    exit(0);
}

int examT_q3(char* s);

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
    printf("%d\\n", examT_q3(s));
    free(s);
    return 0;
}

int examT_q3(char* s) {
    // write your code here
    return 0;
}`,
  q4: `#include <stdio.h>
#include <stdlib.h>

#define DONT_KNOW "I_dont_know"

void printIDontKnow() {
    printf("%s", DONT_KNOW);
    exit(0);
}

int examT_q4(int n);

int main(void) {
    // uncomment next line if you don't know the answer
    // printIDontKnow();

    int n;
    if (scanf("%d", &n) != 1) return 1;

    printf("%d", examT_q4(n));
    return 0;
}

int examT_q4(int n) {
    // write your code here
    return 0;
}`
};

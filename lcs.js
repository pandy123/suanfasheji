// 子串应该比较好理解， 至于什么是子序列， 这里给出一个例子： 有两个母串
// cnblogs
// belong
// 比如序列bo, bg, lg在母串cnblogs与belong中都出现过并且出现顺序与母串保持一致， 我们将其称为公共子序列。
// 最长公共子序列（ Longest Common Subsequence, LCS）， 顾名思义， 是指在所有的子序列中最长的那一个。
// 子串是要求更严格的一种子序列， 要求在母串中连续地出现。 在上述例子的中， 最长公共子序列为blog（ cnblogs, belong）， 最长公共子串为lo（ cnblogs, belong）。

var stra = "ij,";
var strb = "ij5";

/** 计算最长公共子序列 */
/**
 * 记录cls[i,j]的长度
 */
var strlength = new Array();
for (var i = 0; i < stra.length + 1; i++) {
    strlength[i] = new Array();
    for (var j = 0; j < strb.length + 1; j++) {
        strlength[i][j] = 100;
    }
}

var result, ku, ku1, ku2;
var lcs = function(a, b, i, j) {
    if (i == -1 || j == -1) { // 过界下标
        strlength[i + 1][j + 1] = 0;
        return 0;
    } else if (a[i] == b[j]) {
        if (strlength[i][j] == 100) { // 还没有被计算过
            ku = lcs(a, b, i - 1, j - 1)
        } else { // 被计算过
            ku = strlength[i][j];
        }
        result = ku + 1;
        strlength[i + 1][j + 1] = result;
        return result;
    } else {
        if (strlength[i][j + 1] == 100) { // 还没有被计算过
            ku1 = lcs(a, b, i - 1, j)
        } else {
            ku1 = strlength[i][j + 1]; // 被计算过
        }

        if (strlength[i + 1][j] == 100) { // 还没有被计算过
            ku2 = lcs(a, b, i, j - 1)
        } else { // 被计算过
            ku2 = strlength[i + 1][j];
        }

        result = Math.max(ku1, ku2);
        strlength[i + 1][j + 1] = result;
        return result;
    }
}
var length = lcs(stra, strb, stra.length - 1, strb.length - 1);
console.log(length);
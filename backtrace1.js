// 用递归回溯 子集问题 子集问题就是 n 个数，产生n维向量，向量的每个值为 0 或 1,遍历有所
// t 是深度
var x = [0, 0, 0, 0];
var n = 3;
var outPut = function (x) {
    console.log(x);
}
var constraint = function (t) {
    return true;
}
var bound = function (t) {
    return true;
}

var backtrack = function (m) {
    let t = m;
    if (t > n) {
        outPut(x);
    } else {
        for (let i = 0; i < 2; i++) {
            x[t] = i;
            if (constraint(t) && bound(t)) {
                backtrack(t + 1);
            }
        }
    }
}
backtrack(0);











// 用递归回溯 排列树问题，a b c d e 的自由排列组合

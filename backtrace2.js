// 用递归回溯 
// 用递归回溯 排列树问题，a b c d e 的自由排列组合
// n 级，第一级有n个子，第二级 有n-1 个子， 最后一级只有1 个子
var x = ["a", "b", "c", "d", "e"];
var n = 5;
var outPut = function (x) {
    console.log(x);
}

var constraint = function (t) {
    return true;
}

var bound = function (t) {
    return true;
}

var swap = function (t, i) {
    var c = x[t];
    x[t] = x[i];
    x[i] = c;
}

var backtrack = function (m) {
    let t = m;
    if (t >= n) {
        outPut(x);
    } else {
        for (let i = t; i < n; i++) {
            swap(t, i);
            if (constraint(t) && bound(t)) {
                backtrack(t + 1);
            }
            swap(t, i);
        }
    }
}
backtrack(0);












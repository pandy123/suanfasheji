var stra = "gagabafdfjajlagoimldnaglmldfkmawooemxdf";
var tongji = {};
var chars = [];
for (var i = 0; i < stra.length; i++) {
    var char = stra[i];
    if (!tongji[char]) {
        tongji[char] = 1;
        chars.push(char);
    } else {
        tongji[char]++;;
    }
}
var sum = 0;
for (var k in tongji) {
    sum = sum + tongji[k];
}
console.log(sum);

chars.sort((a, b) => {
    return tongji[b] - tongji[a];
})

console.log(tongji);
chars.forEach((e) => {
    console.log(e, tongji[e]);
})

class TreeHoff {
    constructor() {
        this.left = null;
        this.right = null;
        this.char = null;
        this.num = null;
        this.value = null;
    }

}

/** 优先队列 */
var queue = [];

/** 优先队列排序 */
var sortQueue = function () {
    queue.sort((a, b) => {
        return b.num - a.num;
    })
}

/** 创建节点数 */
for (var i = 0; i < chars.length; i++) {
    var char = chars[i];
    var tree = new TreeHoff();
    tree.left = null;
    tree.right = null;
    tree.char = char;
    tree.num = tongji[char];
    tree.value = null;
    queue.push(tree);
}

/** 数合并 */
var unionTree = function (t1, t2) {
    var tree = new TreeHoff();
    tree.left = t2;
    tree.right = t1;
    tree.char = null;
    tree.num = t1.num + t2.num;
    tree.value = null;
    return tree;
}

/** 构造hoffuman树的过程 */
do {
    var t1 = queue.splice(queue.length - 1, 1);
    var t2 = queue.splice(queue.length - 1, 1);
    var tree = unionTree(t1[0], t2[0]);
    queue.push(tree);
    sortQueue();
} while (queue.length > 1)

var rootTree = queue[0];

var code = {};
var decode = {};
var rule = function (tree) {
    if (tree) {
        if (tree.left) {
            tree.left.value = tree.value ? tree.value + "0" : "0";
            if (tree.left.char) {
                code[tree.left.char] = tree.left.value;
                decode[tree.left.value] = tree.left.char;
            }
            rule(tree.left);
        }
        if (tree.right) {
            tree.right.value = tree.value ? tree.value + "1" : "1";
            if (tree.right.char) {
                code[tree.right.char] = tree.right.value;
                decode[tree.right.value] = tree.right.char;
            }
            rule(tree.right);
        }
    }
}
rule(rootTree);


var listcode = "";
for (var i = 0; i < stra.length; i++) {
    var char = stra[i];
    listcode = listcode + code[char];
}

var p = "";
var decodeStra = "";
for (var i = 0; i < listcode.length; i++) {
    var char = listcode[i];
    p = p + char;
    if (decode[p]) {
        decodeStra = decodeStra + decode[p];
        p = "";
    }
}

if (decodeStra == stra) {
    console.log(true);
}

console.log(code);
console.log("dd");
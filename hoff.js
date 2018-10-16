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
var queue = [];

var sortQueue = function() {
    queue.sort((a, b) => {
        return b.num - a.num;
    })
}

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

var unionTree = function(t1, t2) {
    var tree = new TreeHoff();
    tree.left = t2;
    tree.right = t1;
    tree.char = null;
    tree.value = null;
    tree.num = t1.num + t2.num;
    tree.value = null;
    return tree;
}

do {
    var t1 = queue.splice(queue.length - 1, 1);
    var t2 = queue.splice(queue.length - 1, 1);
    var tree = unionTree(t1[0], t2[0]);
    queue.push(tree);
    sortQueue();
} while (queue.length > 1)

var rootTree = queue[0];
console("dd");
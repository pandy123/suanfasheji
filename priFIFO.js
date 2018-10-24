// 优先队列式分支界限法将活节点表组织成一个优先队列
// 队列式分支界限法将活节点表组织成一个队列
class Node {
    constructor() {
        this.weight = null;
        this.parent = null;
        this.children = [];
        this.code = null;
    }
}
var graph = {
    "0": { "1": 2, "2": 3, "3": 4 },
    "1": { "2": 3, "5": 2, "4": 7 },
    "2": { "5": 9, "6": 2 },
    "3": { "6": 2 },
    "4": { "7": 3, "8": 3 },
    "5": { "6": 1, "8": 3 },
    "6": { "9": 1, "8": 5 },
    "7": { "10": 3 },
    "8": { "10": 2 },
    "9": { "8": 2, "10": 2 }
};

var queue = [];
var root = new Node();
root.weight = 0;
root.parent = null;
root.code = "0";

/** 构造一个解法树 */
var buildNode = function (parent) {
    let items = graph[parent.code];
    if (items) {
        for (let i in items) {
            let node = new Node();
            node.parent = parent;
            node.code = i;
            node.weight = parent.weight + items[i];
            parent.children.push(node);
            buildNode(node);
        }
    }
}
buildNode(root);

queue.push(root);
// 总路线权重最低
var prioNode = null;
// 节点最近
var map = {};

var validate = function (node) {
    var result = true;
    if (map[node.code]) {
        if (node.weight < map[node.code].weight) {
            map[node.code] = node;
        } else {
            result = false;
        }
    } else {
        map[node.code] = node;
    }
    return result;
}

/**
 * 优化方向，动态生成树形节点 ，优先队列，以queue 中权重最小的作为第一个
 */
do {
    /** 每次先排序 */
    queue.sort((a, b) => {
        return a.weight - b.weight;
    })
    var currentNode = queue.shift();
    if (currentNode.code == "10") {
        if (prioNode) {
            if (currentNode.weight < prioNode.weight) {
                prioNode = currentNode;
            }
        } else {
            prioNode = currentNode;
        }
    } else if (validate(currentNode)) {
        for (var i in currentNode.children) {
            queue.push(currentNode.children[i]);
        }
    }
} while (queue.length != 0)

var start = prioNode;
do {
    console.log(start.code, start.weight);
    start = start.parent;
} while (start.parent)














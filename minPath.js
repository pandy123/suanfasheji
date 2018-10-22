//采用贪心最短路径算法
class vertex {
    constructor(name) {
        this.name = name;
        this.vertexs = [];
        this.weights = [];
    }
}
class result {
    constructor(name) {
        this.name = name;
        this.weight = 10000;
        this.lastPath = null;
    }
}

var map = {};
var resultList = {};
var resultArray = [];
for (var i = 1; i < 8; i++) {
    var name = "v" + i;
    map[name] = new vertex(name);
    var result = new result(name);
    resultList[name] = result;
    resultArray.push(result);
}
resultList["v1"].weight = 0;

var v1 = map["v1"];
var v2 = map["v2"];
var v3 = map["v3"];
var v4 = map["v4"];
var v5 = map["v5"];
var v6 = map["v6"];
var v7 = map["v7"];

/**权重空间*/
v1.vertexs = [v2, v3, v4];
v1.weights = [20, 50, 30];

v2.vertexs = [v3, v6];
v2.weights = [25, 70];

v3.vertexs = [v4, v5, v6];
v3.weights = [40, 25, 50];

v4.vertexs = [v5];
v4.weights = [55]

v5.vertexs = [v6, v7];
v5.weights = [10, 70]

v6.vertexs = [v7];
v6.weights = [50];
/** 贪心 v1 -- v7 的距离 */

// 搜索路径是用当前节点下探的（V1-Vn最小权重进行）,探索路径中包含了所有路径后结束循环
// 每个节点的最小权重是，上一个节点的最小权重加上当前权重
// 每个节点的最小路径是，上一个节点的最小路径加上当前路径

var pathList = [];
var currentV = v1;
// 搜索路径
pathList.push(v1);

var findNextPath = function() {
    //找一个权重最小值, 作为新的搜索起始点
    currentV = null;
    resultArray.sort((a, b) => {
        return a.weight - b.weight;
    })
    for (var i = 0; i < resultArray.length; i++) {
        if (pathList.indexOf(resultArray[i]) < 0) {
            currentV = resultArray[i];
            pathList.push(resultArray[i]);
        }
    }
}

/** 用最短的路径*/
do {
    var currentWeigth = resultList[currentV.name].weight;
    for (var i = 0; i < currentV.vertexs.length; i++) {
        var name = currentV.vertexs[i].name;
        var weight = currentV.weights[i];
        /** 之前路径的权重和 */
        if (weight + currentWeigth < resultList[name].weight) {
            // 最小权重和最小权重路径
            resultList[name].weight = weight + currentWeigth;
            resultList[name].lastPath = currentV;
        }
    }
    currentV = findNextPath();
} while (currentV)

console.log(pathList);
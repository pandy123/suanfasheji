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
        this.paths = [];
    }
}

var map = {};
var resultList = {};
for (var i = 1; i < 8; i++) {
    var name = "v" + i;
    map[name] = new vertex(name);
    resultList[name] = new result(name);
}

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


var pathList = []
var currentV = v1;
pathList.push(currentV);
weigthSum = 0;

var copyPaths = function(paths) {
        var result = [];
        paths.forEach(element => {
            result.push(element);
        });
        return result;
    }
    /** 用最短的路径*/
do {
    var minV = currentV.vertexs[0];
    var min = currentV.weights[0]
    for (var i = 0; i < currentV.vertexs.length; i++) {
        var name = currentV.vertexs[i].name;
        var weight = currentV.weights[i];
        /** 之前路径的权重和 */
        if (weight + weigthSum < resultList[name].weight) {
            resultList[name].weight = weight + weigthSum;
            resultList[name].paths = copyPaths(pathList);
        }
        if (weight < min) {
            min = weight;
            minV = currentV.vertexs[i];
        }

    }
    currentV = minV;
    weigthSum = resultList[minV.name].weight;
    pathList.push(minV);
} while (pathList[pathList.length - 1] != v7)

console.log(pathList);
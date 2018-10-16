// 统计 字母、个数 map
// 构造霍夫曼树 
// 确定编码map表
// 解码
var str = "fafjljafljlgjljaldjfldk";
var charmap = {};
for (var i = 0; i < str.length; i++) {
    var char = str[i];
    if (charmap[char]) {
        charmap[char]++;
    } else {
        charmap[char] = 1;
    }
}
console.log(charmap);



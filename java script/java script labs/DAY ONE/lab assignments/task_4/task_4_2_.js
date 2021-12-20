var arr = [10.2, 20, 34, 333.12345];

var strArr = [];

arr.forEach((element) => {
  strArr.push(String(element));
});

var maxLength = strArr[3].length;

for (var i = 0; i < 4; i++) {
  document.write(`
        <h1>${Number(arr[i]).toPrecision(String(maxLength))}</h1>
    `);
}

var t1 = new Number(10);
var t2 = new Number(10);
console.log(t1 == t2);
var str1="my name"; //typeof string
var str2=new String("mmm")
var arr1=new Array(); //typeof arr1==>object
var arr2=[];//typeof arr2 ==>object
//--------------------
console.log([1, 2, 3] == [1, 2, 3]);

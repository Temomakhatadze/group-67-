

const number =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = number.map((curVal,index) => {
    if (curVal.name === "vano" && curVal.password === "vano1234"){
        return curVal.password = "gamarjoba123"
    }
})
console.log(result); 
console.log(acc)       





//////////////     1     ////////////

// for loop --- ციკლია სადაც ინდეხს ვუვლით მასივის მეშვეობით

//while --- ციკლია რომელიც გრძელდება სანამ ის არ არის ჯესშმარიტი




/////////////     2     ////////////
// map method --- მაპი გამოიყენება თითოეულ ელემენტის გარდაქმნში 
// ის უვლის საწყის მასივს და ახალ მასივად ქმნის და ცვლის ელემენტების რაოდენობას ან სხვარამეს



function temo(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

let arr1 = [1, 2, 3, 4];

temo(arr, function(item) {
    console.log(item);
});



function temo1(arr, callback) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }

    return result;
}

let arr = [1, 2, 3, 4];

let newArr = myMap(arr, function(item) {
    return item * 2;
});

console.log(newArr);


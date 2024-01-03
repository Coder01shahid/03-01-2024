let sha = {
    name:"shahid",
    age:18,
    city:"kotlu",
}

// using this ,we can just print the properties name of object...
for(let key in obj){
    console.log(outPut);
}
// using this we can also display the properties value..
for(let shahid in sha){
    console.log(shahid, sha[shahid]);
}
// practice 001
let myName = {
    name:"shahid",
    age:18,
    inCollege:true,
    Sem: "secound"
}

for(let myNameOutput in myName){
    console.log(myNameOutput, myName[myNameOutput]);
}

// practice 002

let MyFriend = {
    name: "dhairy",
    age: 20,
    inCollege: true,
    cYear: "secound",
    married : "no"
}
for(let outPut in MyFriend){
    console.log(outPut, MyFriend[outPut]);
}
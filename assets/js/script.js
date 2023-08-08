// const accounts01 = [["admin01","123"],["admin02","234"],["admin03","345"]]
// const accounts02 = {admin01:"123",admin02:"234",admin03:"345"}
// let users = {
//     user01:{
//         name:"ahmad",
//         age:"30",
//         state:"beirut"},

//     user02:{
//         name:"ali",
//         age:"67",
//             },

//     user03:{
//         name:"mohamed",
//         age:"89",
//             },

//     user04:{
//         name:"mouad",
//         age:"12",
//             },
// }




// let admin = prompt("enter username")
// function main(){
//     if(admin in accounts02){
//         console.log(`welcome ${admin} your password is ${accounts02[admin]}`)
//     }else{
//         console.log("you are not registered")
//     }
// }
// main()
// function getAge(){
//     let name=prompt ("enter your name")
//     if(users.name == name){
//         console.log(`${users.name}is ${users.age} years old`)
//     }else{
//         console.log("wrong name")
//     }
// }

//           [0,1,2,3,4] INDEX
// let number = [1,2,3,4,5]
// console.log(number.length-1)
// let sliced = number.slice(0,4)  // (index, take abel ekhir index ) = slice
// console.log(number.length-1)
// console.log(sliced)
// console.log(number)
// number.splice(1,3,20,30,40,50)  // (interval index , replacement)
// console.log(number)

let person = {
    name:"ahmad",
    age:"33",
    state:"beirut",
    greet: function(){
        console.log(`hello my name is ${this.name}`)
    }
}
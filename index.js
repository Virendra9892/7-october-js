console.log("Hey Virendra Good Morning !");

function show(name,release,verdict,box){
    this.Name = name;
    this.Release = release;
    this.Verdict = verdict;
    this.Box = box;
}
let name1 = new show("Drishyam2",2022,"All Time Blockbuster",2022);
console.log(name1);

function show1(name,model){
    return{
        Name : name,
        Model : model,
        show2 : function(name1){
            return name1;
        }
    }
}

let names = show1("Drishyam2","Ajay");
console.log("The name of movie is ",names.Name," and the model of movie is ",names.Model);

let names1 = show1("Aadipurush","Prabhash");
console.log("The name of movie is ",names1.Name,"  and the model of movie is",names1.Model);

let friend = {
    Name: "Virendra",
    Id: 1520191629,
    Class: "Msc-It",
    Salary: 3000,
    Sub: "Web Developer"
}

// function disp(friend){
//     for(let name in friend){
//         if(typeof friend[name] === "string"){
//             console.log(name,":",friend[name]);
//         }
//     }
// }
// disp(friend);

// function disp(friends){
//     for(let name in friends){
//         if(typeof friends[name] === "BigInt"){
//             console.log(name,friends[name]);
//         }
//         else{
//             console.log(name,friends[name]);
//         }
//     }
// }

// disp(friend);

friend.color = "Wheat";
console.log(friend);

delete friend.Sub;
delete friend.Id;
delete friend.color;
delete friend.Salary;
console.log(friend);


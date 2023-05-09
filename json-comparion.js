
// 1.How to compare two JSON have the same properties without order

let details1 = {name:"person1",age:"20"}
let details2 = {age:"20",name:"person1"}

let JSON = true
for(let e in details1)
{
    if(details1[e]!==details2[e])
    {
        JSON = false;
        break
    }
}
JSON?console.log("Equall"):console.log("Not Equall")


goe = [1,2,3,4,5]
p = 2
console.log(goe.indexOf(p))

if(p in goe){
    goe.splice(goe.indexOf(p),1)
    console.log(goe)
    console.log("good")
}

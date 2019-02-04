checking =()=>{
if (current ==="18:22"){
    alert("alarmt is going off")
}
console.log(current)
let t = setTimeout(checking, 1000)
}

checking()
console.log("loaded this")

startTime = ()=>{
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
   

    m = checkTime(m);
   
    $('.time').html(`${h}:${m}`)
    let t = setTimeout(startTime, 500)

}
checkTime=(i)=>{
    if (i<10) {i = "0"+i};
    return i
}
startTime()
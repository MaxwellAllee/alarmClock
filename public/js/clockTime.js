let current = ''
startTime = ()=>{
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    m = checkTime(m);
    current = `${h}:${m}`
    $('.time').html(current)
    let t = setTimeout(startTime, 500)
    

}
checkTime=(i)=>{
    if (i<10) {i = "0"+i};
    return i
}
$('#start').click(()=>{
    $('.snooze').show()
    $('.bottom').show()
    startTime()
})
$('.snooze').hide()
$('.bottom').hide()

let horn = 
soundPlay = true
let aTime = "02:24"
let makeSound = false
let soundOnce = true
var audio = new Audio('/sound/foghorn.mp3');
let snooze = false
let stop = false
checking = () => {
    if (current === aTime && soundOnce) {
        makeSound = true
        makeNoise()
        setTimeout(() => {checking}, 61000);
    }
    setTimeout(checking, 1000)
}
checking()
console.log("loaded this")
 
makeNoise=()=>{
    if(!snooze && !stop){
        audio.play();
        soundOnce = false
        setTimeout(makeNoise,4000)
    }
    else if (stop){
        stop = false
    }
}
$('#snooze').click(()=>{
    if(!soundOnce){
        snooze = true
        setTimeout(()=>{
            snooze = false;
            makeNoise()        
        },30000)
    }
})
$('#stop').click(()=>{
    if(!soundOnce){
        stop = true
        console.log("stop triggered")
    }
    
})
$('#set').click(()=>{
    console.log(`don't just click it stick it`)
    $('#modal').modal('toggle');
})
save=()=>{
    console.log('click it or ticket')
    console.log($('timeWanted').val())
    aTime = $('#timeWanted').val()
    console.log(aTime)
    $('#modal').modal('toggle');
}
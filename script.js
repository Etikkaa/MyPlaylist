console.log("My Playlist")

//Initalize the variables
let songIndex =0;
let audioElement = new Audio('1.mp3') 
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName= Array.from(document.getElementsByClassName("masterSongName"))
let songItems= Array.from(document.getElementsByClassName("songItem"))

let songs=[
    {songName: "Lag-Ja-Gale", filepath: "1.mp3", coverpath: "1.jpg"},
    {songName: "Yeh-Raatein-Yeh-MAusam", filepath: "2.mp3", coverpath: "2.jpg"},
    {songName: "Sach-Chaide", filepath: "3.mp3", coverpath: "3.jpg"},
    {songName: "Minie-Minie", filepath: "4.mp3", coverpath: "4.jpeg"},
    {songName: "Salam-e-Ishq", filepath: "1.mp3", coverpath: "1.jpg"},
]

songItems.forEach((element,i)=>{
   element.getElementsByTagName("img")[0].src = songs[i].coverpath;
element.getElementsByClassName("songName")[0].innerText = songs[i].songName
})

audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click', () =>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle')
        gif.style.opacity = 0;
    }
})
//Listen to Events
audioElement.addEventListener('timeupdate', () =>{
  

//Update Seekbar
progress = parseInt((audioElement.currentTime/audioElement.duration)*100)

myProgressBar.value=progress
})

myProgressBar.addEventListener('change', () =>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.add('fa-play-circle')
    element.classList.remove('fa-pause-circle')
})
   
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
element.addEventListener('click',(e)=>{
    console.log(e.target)
    makeAllPlays()
    
    songIndex = parseInt(e.target.id)
    e.target.classList.remove('fa-play-circle')
    e.target.classList.add('fa-pause-circle')
    audioElement.src = `${songIndex+1}.mp3`
    masterSongName.innerText=songs[songIndex].songName
    audioElement.currentTime=0
    audioElement.play()
    gif.style.opacity = 1;
    e.target.classList.remove('fa-play-circle')
    e.target.classList.add('fa-pause-circle')
})
})

document.getElementById('next').addEventListener('click', ()=>{
    if (songIndex>=4){
    songIndex = 0
    }
    else
    {
    songIndex += 1 
    }
    audioElement.src = `${songIndex+1}.mp3`
    masterSongName.innerText=songs[songIndex].songName
    audioElement.currentTime=0
    audioElement.play()
    e.target.classList.remove('fa-play-circle')
    e.target.classList.add('fa-pause-circle')
})

document.getElementById('previous').addEventListener('click', ()=>{
    if (songIndex<=0){
    songIndex = 0
    }
    else
    {
    songIndex -= 1 
    }
    audioElement.src = `${songIndex+1}.mp3`
    masterSongName.innerText=songs[songIndex].songName
    audioElement.currentTime=0
    audioElement.play()
    e.target.classList.remove('fa-play-circle')
    e.target.classList.add('fa-pause-circle')
})
console.log('Welcome to spotify');
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar= document.getElementById('myProgressBar');


let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName:"havana",filePath: "songs/1.mp3", coverPath: "cover/d1.jpg"},
    {songName:"tere pyar mein",filePath: "songs/2.mp3", coverPath: "cover/d2.webp"},
    {songName:"kesaria",filePath: "songs/3.mp3", coverPath: "cover/d4.avif"},
    {songName:"tumpa",filePath: "songs/2.mp3", coverPath: "cover/d3.webp"},
    {songName:"humrah",filePath: "songs/1.mp3", coverPath: "cover/d4.avif"},
    {songName:"taqdeer",filePath: "songs/5.mp3", coverPath: "cover/d2.webp"},
    {songName:"arijit hits",filePath: "songs/3.mp3", coverPath: "cover/d3.webp"},
    {songName:"kk mashup",filePath: "songs/5.mp3", coverPath: "cover/d1.jpg"}
]

songItems.forEach((element,i) => {
    console.log(element,i);
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText=songs[i].songName;
})

// audioelement.play
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove(' fa-pause-circle');
        masterPlay.classList.add(' fa-play-circle');
        gif.style.opacity=0;
    }

})

audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=> {
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove(' fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>8){
        songIndex=0;
    }
    else{
    songIndex+=1;
    }
    audioElement.element.src=`${songIndex+1}.mp3`;
    audioElement.currentTime=o;
    audioElement.play();
    masterPlay.classList.remove(' fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
    songIndex-=1;
    }
    audioElement.element.src=`${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=o;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add(' fa-pause-circle');
})
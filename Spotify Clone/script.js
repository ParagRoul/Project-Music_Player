console.log("This is a MUSIC PLAYER");
// Initilize the Variables

let index = 0;
// let audioElement = new Audio("Christmas.mp3"); //For playing the mp3 a object created to point to audio
let audioElement = new Audio("CheapThrills.mp3"); //For playing the mp3 a object created to point to audio

let masterPlay = document.getElementById("masterPlay"); //selecting the element Inorder to add Event
let myProgressBar = document.getElementById("myProgressBar"); //selecting the element Inorder to add Event
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItem = Array.from(document.getElementsByClassName("songItem"));
let songs = [
  {
    songName: "CheapThrills",
    filePath: "C:UsersKIITDesktopWebDevelopmentSpotify CloneCheapThrills.mp3",
  },
  {
    songName: "Christmas",
    filePath: "C:UsersKIITDesktopWebDevelopmentSpotify CloneChristmas.mp3",
  },
  {
    songName: "OneMoreNight",
    filePath: "C:UsersKIITDesktopWebDevelopmentSpotify CloneOneMoreNight.mp3",
  },
  {
    songName: "Electronic",
    filePath: "C:UsersKIITDesktopWebDevelopmentSpotify CloneElectronic.mp3",
  },
  {
    songName: "Animals",
    filePath: "C:UsersKIITDesktopWebDevelopmentSpotify CloneAnimals.mp3",
  },
  {
    songName: "DragMeDown",
    filePath: "C:UsersKIITDesktopWebDevelopmentSpotify CloneDragMeDown.mp3",
  },
  {
    songName: "StoryOfMyLife",
    filePath: "C:UsersKIITDesktopWebDevelopmentSpotify CloneStoryOfMyLife.mp3",
  },
  {
    songName: "Perfect",
    filePath: "C:UsersKIITDesktopWebDevelopmentSpotify ClonePerfect.mp3",
  },
  {
    songName: "Beautiful",
    filePath: "C:UsersKIITDesktopWebDevelopmentSpotify CloneBeautiful.mp3",
  },
];

songItem.forEach((element, i) => {
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
  // Traversing the play list and changing the name of eachsong accordingly
});

// Listen to events
// UPDATING the TIME in PROGRESS BAR

audioElement.addEventListener("timeupdate", () => {
  //updating the bar wrt to the time song is played

  // parseInt->for Integer
  //we are findng the percentage(%) of completion (1 to 100) help to update the progress bar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;

  if (myProgressBar.value == 100) {
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
    myProgressBar.value = 0;
  }
});

// When the Bar slided/changed//

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value / 100) * audioElement.duration;
});

// PLAY BUTTON

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};

//Menu list Play Button

// Traversing the the playlist and clicking on the playbutton will play the music//
//array.from-as the class is in the form of array
Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      //pointer event
      makeAllPlays(); //Running music is stopped first if new music is played
      var index = parseInt(e.target.id);
      // s = document.getElementById(`${index}s`).textContent; //IMP->element.textContent To get Text from the html TAG//

      var s = document.getElementById(`${index}s`).innerHTML;
      document.getElementById(`${index}s`).innerHTML = s;

      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");

      audioElement.currentTime = 0; //As the current music changed so the bar value =0;

      audioElement.src = `${s}.mp3`;
      audioElement.play();

      masterSongName.innerText = `${s}`;

      if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity = 1;
      } else {
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        gif.style.opacity = 0;
      }
    });
  }
);

// Handle Play and pause//
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play(); //playing the audio by help of audioElement //
    masterPlay.classList.remove("fa-play-circle"); //removing the play button when the music is played
    //here we remove the class from the classlist to do so
    masterPlay.classList.add("fa-pause-circle"); //display pause button to stop the play
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle"); //pause button pressed then it is removed
    masterPlay.classList.add("fa-play-circle"); //repalce pause button with play button to again play the music
    gif.style.opacity = 0;
  }
});

// Left & Right Play Button
document.getElementById("next").addEventListener("click", () => {
  if (index >= 8) {
    index = 0;
  } else {
    index += 1;
  }
  audioElement.currentTime = 0;
  var s = document.getElementById(`${index}s`).innerHTML;
  document.getElementById(`${index}s`).innerHTML = s;
  audioElement.src = `${s}.mp3`;
  audioElement.play();
  masterSongName.innerText = `${s}`;

  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});
document.getElementById("previous").addEventListener("click", () => {
  if (index <= 0) {
    index = 8;
  } else {
    index -= 1;
  }
  audioElement.currentTime = 0;
  var s = document.getElementById(`${index}s`).innerHTML;
  document.getElementById(`${index}s`).innerHTML = s;
  audioElement.src = `${s}.mp3`;
  audioElement.play();
  masterSongName.innerText = `${s}`;

  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});

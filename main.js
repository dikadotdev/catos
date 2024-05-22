const wallpapers = [
  {
    id: 1,
    source: "assets/wallpaper1.jpg",
  },
  {
    id: 2,
    source: "assets/wallpaper2.jpg",
  },
  {
    id: 3,
    source: "assets/wallpaper3.jpg",
  },
  {
    id: 4,
    source: "assets/wallpaper4.jpg",
  },
  {
    id: 5,
    source: "assets/wallpaper5.jpg",
  },
  {
    id: 6,
    source: "assets/wallpaper6.jpg",
  },
  {
    id: 7,
    source: "assets/wallpaper7.jpg",
  },
  {
    id: 8,
    source: "assets/wallpaper8.jpg",
  },
  {
    id: 9,
    source: "assets/gif1.gif",
  },
  {
    id: 10,
    source: "assets/gif2.gif",
  },
  {
    id: 11,
    source: "assets/gif3.gif",
  },
  {
    id: 12,
    source: "assets/gif4.gif",
  },
  {
    id: 13,
    source: "assets/gif5.gif",
  },
  {
    id: 14,
    source: "assets/gif6.gif",
  },
  {
    id: 15,
    source: "assets/gif7.gif",
  },
  {
    id: 16,
    source: "assets/gif8.gif",
  },
  {
    id: 17,
    source: "assets/gif9.gif",
  },
  {
    id: 18,
    source: "assets/gif10.gif",
  },
  {
    id: 19,
    source: "assets/gif11.gif",
  },
  {
    id: 20,
    source: "assets/gif12.gif",
  },
  {
    id: 21,
    source: "assets/wallpaper9.jpg",
  },
  {
    id: 22,
    source: "assets/wallpaper10.jpg",
  },
];

const folders = [
  {
    id: 0,
    folderName: "Pictures",
    apps: [],
  },
  {
    id: 1,
    folderName: "Videos",
    apps: [],
  },
  {
    id: 2,
    folderName: "Music",
    apps: [],
  },
];

const notes = [];
let countOpenApp = 1;

const offScreen = document.getElementById("off-screen");
const loginScreen = document.getElementById("login-screen");
const turnonBtn = document.getElementById("turn-on-button");
const loginBtn = document.getElementById("login-button");
const preloader = document.getElementById("preloader");
const preloaderMain = document.getElementById("preloader-main-screen");
const blueScreen = document.getElementById("blue-screen");
const mainScreen = document.getElementById("main-screen");

// fungsi untuk mengatur brightness
const brightnessButton = document.getElementById("brightness-button");
const brightnessMenu = document.getElementById("brightness-menu");
const brightnessControl = document.getElementById("brightness-control");
brightnessButton.addEventListener("click", () => {
  brightnessMenu.classList.toggle("hidden");
});

mainScreen.style.filter = `brightness(${brightnessControl.value}%)`;

brightnessControl.addEventListener("input", () => {
  mainScreen.style.filter = `brightness(${brightnessControl.value}%)`;
});

mainScreen.style.display = "none"; // menghilangkan tampilan utama untuk awal
loginScreen.style.display = "none"; // menghilangkan tampilan login untuk awal
preloader.style.display = "none"; // menghilangkan tampilan loading 1 untuk awal
preloaderMain.style.display = "none"; // menghilangkan tampilan loading 2 untuk awal

// ketika tombol turn on diklik maka
turnonBtn.addEventListener("click", () => {
  offScreen.style.display = "none"; // akan menghilangkan tampilan offscreen
  preloader.style.display = "flex"; // akan memunculkan tampilan loading 1
  setTimeout(() => {
    // menunggu selama 5 detik
    preloader.style.display = "none"; // setelah 5 detik akan menghilangkan tampilan loading 1
    loginScreen.style.display = "block"; // juga akan memunculkan halaman login
  }, 5000);
});

const password = document.getElementById("login-password"); // mengambil inputan password
const wrongPassword = document.getElementById("wrong-password"); // mengambil keterangan jika password salah

// ketika tombol login diklik
loginBtn.addEventListener("click", () => {
  // akan mengecek apakah password sama dengan 123
  if (password.value == "123") {
    // jika sama
    wrongPassword.classList.add("hidden"); // maka akan menghilangkan keterangan password salah
    password.value = ""; // lalu akan mengosongkan inputan password untuk login setelah restart / shutdown
    loginScreen.style.display = "none"; // lalu akan menghilangkan tampilan login screen
    preloaderMain.style.display = "flex"; // lalu akan memunculkan tampilan loading 2
    setTimeout(() => {
      // menunggu selama 5 detik
      preloaderMain.style.display = "none"; // setelah 5 detik akan menghilangkan tampilan loading 2
      mainScreen.style.display = "block"; // lalu akan memunculkan tampilan utama
    }, 5000);
  } else {
    // jika password tidak sama dengan 123
    wrongPassword.classList.remove("hidden"); // lalu akan menampilkan keterangan password salah
  }
});

const buttonMenuShutdown = document.getElementById("button-menu-shutdown"); // mengambil tombol untuk memunculkan menu shutdown
const menuShutdow = document.getElementById("menu-shutdown"); // mengambil menu shutdown

// ketika tombol shutdown diklik
buttonMenuShutdown.addEventListener("click", () => {
  menuShutdow.classList.toggle("hidden"); // akan menampilkan menu shutdown
});

const shutdown = document.getElementById("shutdown"); // mengambil tombol shutdown
// ketika tombol shutdown diklik
shutdown.addEventListener("click", () => {
  menuShutdow.classList.toggle("hidden"); // akan menutup menu shutdown
  mainScreen.style.display = "none"; // akan menghilangkan tampilan utama
  preloader.style.display = "flex"; // akan memunculkan tampilan loading 1
  setTimeout(() => {
    preloader.style.display = "none"; // setelah 5 detik akan menghilangkan tampilan loading 1
    offScreen.style.display = "block"; // lalu akan memunculkan tampilan offscreen
  }, 5000);
});

const restart = document.getElementById("restart"); // mengambil tombol restart
const sleep = document.getElementById("sleep"); // mengambil tombol sleep
const sleepScreen = document.getElementById("sleep-screen"); // mengambil tampilan sleep
const restartBluescreen = document.getElementById("restart-bluescreen");

// fungsi untuk mereset screen
function resetScreen() {
  finderApp.style.display = "none";
  finderMenu.classList.remove("bg-white", "w-28", "h-28", "bg-opacity-20");
  systemApp.style.display = "none";
  systemMenu.classList.remove("bg-white", "w-28", "h-28", "bg-opacity-20");
  cameraApp.style.display = "none";
  cameraMenu.classList.remove("bg-white", "w-28", "h-28", "bg-opacity-20");
  calculatorApp.style.display = "none";
  calculatorMenu.classList.remove("bg-white", "w-28", "h-28", "bg-opacity-20");
  notesApp.style.display = "none";
  notesMenu.classList.remove("bg-white", "w-28", "h-28", "bg-opacity-20");
  paintApp.style.display = "none";
  paintMenu.classList.remove("bg-white", "w-28", "h-28", "bg-opacity-20");
  videoApp.style.display = "none";
  pictureApp.style.display = "none";
  binaryApp.style.display = "none";
  binaryMenu.classList.remove("bg-white", "w-28", "h-28", "bg-opacity-20");
  audioApp.style.display = "none";
}

// ketika tombol restart diklik
restart.addEventListener("click", () => {
  menuShutdow.classList.toggle("hidden"); // akan menutup menu shutdown
  mainScreen.style.display = "none"; // akan menghilangkan tampilan utama
  preloader.style.display = "flex"; // akan memunculkan tampilan loading 1
  resetScreen(); // akan mereset screen
  setTimeout(() => {
    preloader.style.display = "none"; // akan menghilangkan tampilan loading 1
    setTimeout(() => {
      preloader.style.display = "flex"; // setelah 5 detik akan memunculkan tampilan loading 1
      setTimeout(() => {
        preloader.style.display = "none"; // setelah 5 detik akan menghilangkan tampilan loading 1
        loginScreen.style.display = "block"; // lalu akan memunculkan tampilan login
      }, 5000);
    }, 5000);
  }, 5000);
});

restartBluescreen.addEventListener("click", () => {
  menuShutdow.classList.add("hidden");
  blueScreen.style.display = "none";
  mainScreen.style.display = "none";
  preloader.style.display = "flex";
  resetScreen();
  setTimeout(() => {
    preloader.style.display = "none";
    setTimeout(() => {
      preloader.style.display = "flex";
      setTimeout(() => {
        preloader.style.display = "none";
        loginScreen.style.display = "block";
      }, 5000);
    }, 5000);
  }, 5000);
  countOpenApp = 1;
});

// Tombol Sleep
sleep.addEventListener("click", () => {
  // ketika tombol sleep diklik
  sleepScreen.classList.remove("hidden"); // akan memunculkan tampilan sleep
  menuShutdow.classList.toggle("hidden"); // akan menutup menu shutdown
});

// Klik Dimana Saja
window.addEventListener("click", (e) => {
  // ketika window (dimana saja) diklik
  if (e.target.classList.contains("sleep-screen")) {
    // jika sleep-screen diklik
    sleepScreen.classList.add("hidden"); // akan menghilangkan tampilan sleep
  }
});

// START : FINDERS
const finderMenu = document.getElementById("finder-menu");
const finderRight = document.getElementById("finder-right");
const finderApp = document.getElementById("finder-app");
const finderClose = document.getElementById("finder-close");
const finderDatas = document.getElementById("finder-data");
const finderBack = document.getElementById("finder-back");
const finderNext = document.getElementById("finder-next");
const finderPath = document.getElementById("finder-path");
finderApp.style.display = "none";

finderMenu.addEventListener("click", () => {
  finderApp.style.display = "flex";
  finderMenu.classList.add("bg-white", "w-28", "h-28", "bg-opacity-20");
  if (countOpenApp > 10) {
    blueScreen.style.display = "block";
    mainScreen.style.display = "none";
  }
  countOpenApp++;
});

finderClose.addEventListener("click", () => {
  finderApp.style.display = "none";
  finderMenu.classList.remove("bg-white", "w-28", "h-28", "bg-opacity-20");
});

const showFolders = () => {
  folders.map((folder) => {
    finderDatas.innerHTML += `<div data-id="${folder.id}" class="folder-choice flex flex-col items-center gap-1 cursor-pointer hover:bg-gray-100 transition-all px-4 py-3 rounded-xl">
    <img data-id="${folder.id}" src="assets/folder.png" class="w-24 folder-choice" />
    <p>${folder.folderName}</p></div>`;
  });
};

showFolders();

const addVideos = document.querySelector(".add-videos");
window.addEventListener("input", (e) => {
  if (e.target.classList.contains("add-videos")) {
    folders[1].apps.push({
      id: 0,
      appName: e.target.files[0].name,
      source: URL.createObjectURL(e.target.files[0]),
    });
    addMovies();
  } else if (e.target.classList.contains("add-audios")) {
    folders[2].apps.push({
      id: 0,
      appName: e.target.files[0].name,
      source: URL.createObjectURL(e.target.files[0]),
    });
    addAudios();
  } else if (e.target.classList.contains("add-pictures")) {
    folders[0].apps.push({
      id: 0,
      appName: e.target.files[0].name,
      source: URL.createObjectURL(e.target.files[0]),
    });
    addPictures();
  }
});

function addMovies() {
  finderDatas.innerHTML = "";
  folders[1].apps.map((app) => {
    finderDatas.innerHTML += `<div data-src="${app.source}" class="video-choice flex flex-col items-center gap-1 cursor-pointer hover:bg-gray-100 transition-all px-4 py-3 rounded-xl">
    <img data-src="${app.source}" src="assets/video-icon.png" class="video-choice w-24" />
    <p data-src="${app.source}" class="video-choice w-[100px] text-center">${app.appName}</p></div>`;
  });
}

function addAudios() {
  finderDatas.innerHTML = "";
  folders[2].apps.map((app) => {
    finderDatas.innerHTML += `<div data-src="${app.source}" class="music-choice flex flex-col items-center gap-1 cursor-pointer hover:bg-gray-100 transition-all px-4 py-3 rounded-xl">
    <img data-src="${app.source}" src="assets/music-icon.png" class="music-choice w-24" />
    <p data-src="${app.source}" class="music-choice w-[100px] text-center">${app.appName}</p></div>`;
  });
}

function addPictures() {
  finderDatas.innerHTML = "";
  folders[0].apps.map((app) => {
    finderDatas.innerHTML += `<div class="picture-choice flex flex-col items-center gap-1 cursor-pointer hover:bg-gray-100 transition-all px-4 py-3 rounded-xl">
    <img src="${app.source}" class="picture-choice w-24 h-16 bg-cover bg-center bg-no-repeat" />
    <p class="picture-choice w-[100px] text-center">${app.appName}</p></div>`;
  });
}

const buttonAddVideos = document.getElementById("add-videos");
const buttonAddAudios = document.getElementById("add-audios");
const buttonAddPictures = document.getElementById("add-pictures");
finderRight.addEventListener("click", (e) => {
  if (e.target.classList.contains("folder-choice")) {
    const i = e.target.attributes[0].value;
    if (folders[i].folderName == "Videos") {
      buttonAddVideos.classList.remove("hidden");
      finderBack.classList.remove("text-gray-200");
      finderNext.classList.add("text-gray-200");
      finderPath.innerHTML = folders[i].folderName;
      addMovies();
    } else if (folders[i].folderName == "Music") {
      buttonAddAudios.classList.remove("hidden");
      finderBack.classList.remove("text-gray-200");
      finderNext.classList.add("text-gray-200");
      finderPath.innerHTML = folders[i].folderName;
      addAudios();
    } else if (folders[i].folderName == "Pictures") {
      buttonAddPictures.classList.remove("hidden");
      finderBack.classList.remove("text-gray-200");
      finderNext.classList.add("text-gray-200");
      finderPath.innerHTML = folders[i].folderName;
      addPictures();
    } else if (folders[i].folderName == "Games") {
      finderDatas.innerHTML = "";
      finderBack.classList.remove("text-gray-200");
      finderNext.classList.add("text-gray-200");
      finderPath.innerHTML = folders[i].folderName;
      folders[i].apps.map((app) => {
        finderDatas.innerHTML += `<div class="game-choice flex flex-col items-center gap-1 cursor-pointer hover:bg-gray-100 transition-all px-4 py-3 rounded-xl">
        <img data-src="${app.source}" src="assets/game-icon.png" class="game-choice w-24" />
        <p class="game-choice w-[100px] text-center">${app.appName}</p></div>`;
      });
    } else {
      finderDatas.innerHTML = "";
      finderBack.classList.remove("text-gray-200");
      finderNext.classList.add("text-gray-200");
      finderPath.innerHTML = folders[i].folderName;
      folders[i].apps.map((app) => {
        finderDatas.innerHTML += `<div class="file-choice flex flex-col items-center gap-1 cursor-pointer hover:bg-gray-100 transition-all px-4 py-3 rounded-xl">
        <img src="assets/file.png" class="file-choice w-24" />
        <p class="file-choice w-[100px] text-center">${app.appName}</p></div>`;
      });
    }
  }
  if (e.target.classList.contains("finder-back")) {
    buttonAddVideos.classList.add("hidden");
    buttonAddAudios.classList.add("hidden");
    buttonAddPictures.classList.add("hidden");
    finderDatas.innerHTML = "";
    finderPath.innerHTML = "This PC";
    finderBack.classList.add("text-gray-200");
    finderNext.classList.remove("text-gray-200");
    showFolders();
  }

  if (e.target.classList.contains("video-choice")) {
    const i = e.target.attributes[0].value;
    videoApp.style.display = "flex";
    videoPlaying.src = i;
  }

  if (e.target.classList.contains("music-choice")) {
    const i = e.target.attributes[0].value;
    audioApp.style.display = "flex";
    audioPlaying.src = i;
  }

  if (e.target.classList.contains("picture-choice")) {
    const i = e.target.attributes[0].value;
    pictureApp.style.display = "flex";
    pictureShowing.src = i;
  }

  if (e.target.classList.contains("game-choice")) {
    const i = e.target.attributes[0].value;
    gameApp.style.display = "flex";
    gameShowing.src = i;
  }
});

// END : FINDER

// START : NOTES
const notesMenu = document.getElementById("notes-menu");
const notesApp = document.getElementById("notes-app");
const notesClose = document.getElementById("notes-close");
const notesTitle = document.getElementById("notes-title");
const notesContent = document.querySelector("#notes-content");
notesApp.style.display = "none";
notesContent.style.display = "none";
let notesCount = 0;

const showNotesTitle = () => {
  notes.map((note) => {
    notesTitle.innerHTML += `<div data-target="${note.id}" class="notes-choice all-notes text-black px-3 py-2 rounded-md flex gap-2 items-center cursor-pointer hover:bg-gray-200 transition-all">
    <p data-target="${note.id}" class="notes-choice">${note.noteTitle}</p>
    <i data-target="${note.id}" class="notes-delete bx bx-x bg-red-400 rounded-full p-1 text-white cursor-pointer hover:bg-red-600 transition-all"></i></div>`;
  });
};

showNotesTitle();

let allNotes = document.querySelectorAll(".all-notes");
let notesDelete = document.querySelectorAll(".notes-delete");

let notesTarget = 0;

notesApp.addEventListener("click", (e, index) => {
  e.preventDefault();
  e.stopPropagation();
  if (e.target.classList.contains("notes-add")) {
    notes.push({
      id: notesCount++,
      noteTitle: `untitled${notesCount}`,
      noteContent: "",
    });
    notesTitle.innerHTML = "";
    showNotesTitle();
    allNotes = document.querySelectorAll(".all-notes");
    notesDelete = document.querySelectorAll(".notes-delete");
    const lastNotes = notes.length - 1;
    notesTarget = lastNotes;
    allNotes[notesTarget].classList.add("bg-gray-200");
    notesContent.style.display = "block";
    notesContent.innerHTML = notes[notesTarget].noteContent;
    document.getElementById("notes-content").focus();
  }

  if (e.target.classList.contains("notes-choice")) {
    allNotes.forEach((note, index) => {
      if (note === e.target.parentElement) {
        notesTarget = index;
      }
    });
    notesContent.style.display = "block";
    notesContent.innerHTML = notes[notesTarget].noteContent;
    document.getElementById("notes-content").focus();
    allNotes.forEach((note) => {
      note.classList.remove("bg-gray-200");
    });
    allNotes[notesTarget].classList.add("bg-gray-200");
  }

  if (e.target.classList.contains("save-note")) {
    let textToSave = notesContent.innerHTML;
    let textTitle = notes[notesTarget].noteTitle;
    html2pdf(textToSave, {
      margin: 10,
      filename: `${textTitle}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "landscape" },
    });
  }
});

notesApp.addEventListener("input", (e) => {
  if (e.target.classList.contains("notes-content")) {
    notes[notesTarget].noteContent = e.target.innerHTML;
    notesContent.value = notes[notesTarget].noteContent;
  }
});

notesMenu.addEventListener("click", () => {
  notesApp.style.display = "flex";
  notesMenu.classList.add("bg-white", "w-28", "h-28", "bg-opacity-20");
  if (countOpenApp > 10) {
    // blueScreen.classList.remove("hidden");
    blueScreen.style.display = "block";
    mainScreen.style.display = "none";
  }
  countOpenApp++;
});

notesClose.addEventListener("click", () => {
  notesApp.style.display = "none";
  notesMenu.classList.remove("bg-white", "w-28", "h-28", "bg-opacity-20");
});

let optionsButtons = document.querySelectorAll(".option-button");
let advancedOptionButton = document.querySelectorAll(".adv-option-button");
let fontSizeRef = document.getElementById("fontSize");
let writingArea = document.getElementById("notes-content");
let alignButtons = document.querySelectorAll(".align");
let spacingButtons = document.querySelectorAll(".spacing");
let formatButtons = document.querySelectorAll(".format");
let scriptButtons = document.querySelectorAll(".script");

//Initial Settings
const initializer = () => {
  //function calls for highlighting buttons
  //No highlights for link, unlink,lists, undo,redo since they are one time operations
  highlighter(alignButtons, true);
  highlighter(spacingButtons, true);
  highlighter(formatButtons, false);
  highlighter(scriptButtons, true);

  //fontSize allows only till 7
  for (let i = 1; i <= 7; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.innerHTML = i;
    fontSizeRef.appendChild(option);
  }

  //default size
  fontSizeRef.value = 3;
};

//main logic
const modifyText = (command, defaultUi, value) => {
  //execCommand executes command on selected text
  document.execCommand(command, defaultUi, value);
};

//For basic operations which don't need value parameter
optionsButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modifyText(button.id, false, null);
    button.classList.toggle("active-option-button");
  });
});

//options that require value parameter (e.g colors, fonts)
advancedOptionButton.forEach((button) => {
  button.addEventListener("change", () => {
    modifyText(button.id, false, button.value);
  });
});

//Highlight clicked button
const highlighter = (className, needsRemoval) => {
  className.forEach((button) => {
    button.addEventListener("click", () => {
      //needsRemoval = true means only one button should be highlight and other would be normal
      if (needsRemoval) {
        let alreadyActive = false;

        //If currently clicked button is already active
        if (button.classList.contains("active")) {
          alreadyActive = true;
        }

        //Remove highlight from other buttons
        highlighterRemover(className);
        if (!alreadyActive) {
          //highlight clicked button
          button.classList.add("active");
        }
      } else {
        //if other buttons can be highlighted
        button.classList.toggle("active");
      }
    });
  });
};

const highlighterRemover = (className) => {
  className.forEach((button) => {
    button.classList.remove("active");
  });
};

window.onload = initializer();

// END : NOTE

// START : SYSTEM
const systemMenu = document.getElementById("system-menu");
const systemApp = document.getElementById("system-app");
const systemClose = document.getElementById("system-close");
const wallpaperImages = document.getElementById("wallpaper-images");

const mainWallpaper = document.getElementById("main-wallpaper");
const loadingWallpaper = document.getElementById("preloader-main-screen");
const wallpaperLoginScreen = document.getElementById("wallpaper-login-screen");
systemApp.style.display = "none";

systemMenu.addEventListener("click", () => {
  systemApp.style.display = "flex";

  systemMenu.classList.add("bg-white", "w-28", "h-28", "bg-opacity-20");
  if (countOpenApp > 10) {
    blueScreen.style.display = "block";

    mainScreen.style.display = "none";
  }
  countOpenApp++;
});

systemClose.addEventListener("click", () => {
  systemApp.style.display = "none";
  systemMenu.classList.remove("bg-white", "w-28", "h-28", "bg-opacity-20");
});

wallpapers.map((wallpaper) => {
  wallpaperImages.innerHTML += `<div class="wallpaper-choice w-[200px] h-[150px] bg-[url('${wallpaper.source}')] rounded-xl bg-cover bg-center bg-no-repeat cursor-pointer hover:outline-orange-600 transition-all ease-in-out duration-200 outline outline-4"></div>`;
});

const wallpaperChoice = document.querySelectorAll(".wallpaper-choice");

wallpaperChoice.forEach((wallpaper, i) => {
  wallpaper.addEventListener("click", () => {
    mainWallpaper.classList.remove("bg-[url('assets/wallpaper1.jpg')]");
    mainWallpaper.style.backgroundImage = `url('${wallpapers[i].source}')`;
    mainWallpaper.style.opacity = 1;

    loadingWallpaper.classList.remove("bg-[url('assets/wallpaper1.jpg')]");
    loadingWallpaper.style.backgroundImage = `url('${wallpapers[i].source}')`;

    wallpaperLoginScreen.classList.remove("bg-[url('assets/wallpaper1.jpg')]");
    wallpaperLoginScreen.style.backgroundImage = `url('${wallpapers[i].source}')`;
  });
});
// END : SYSTEM

// START : CAMERA
const cameraMenu = document.getElementById("camera-menu");
const cameraApp = document.getElementById("camera-app");
const cameraClose = document.getElementById("camera-close");
cameraApp.style.display = "none";

cameraMenu.addEventListener("click", () => {
  cameraApp.style.display = "flex";
  cameraMenu.classList.add("bg-white", "w-28", "h-28", "bg-opacity-20");
  if (countOpenApp > 10) {
    // blueScreen.classList.remove("hidden");
    blueScreen.style.display = "block";

    mainScreen.style.display = "none";
  }
  startCamera();
  countOpenApp++;
});

cameraClose.addEventListener("click", () => {
  cameraApp.style.display = "none";
  cameraMenu.classList.remove("bg-white", "w-28", "h-28", "bg-opacity-20");
});

function startCamera() {
  const [video, capture, output, result] = [document.getElementById("videoElement"), document.getElementById("camera-capture"), document.getElementById("camera-output"), document.getElementById("result")];

  var constraints = { video: true };

  navigator.mediaDevices
    .getUserMedia(constraints)
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (error) {
      console.error("Error accessing camera: ", error);
    });

  capture.addEventListener("click", function () {
    const context = output.getContext("2d");
    output.width = 1000;
    output.height = 1000;
    context.drawImage(video, 0, 0, output.width, output.height);
    result.src = output.toDataURL();
  });
}

// END : CAMERA

// START : CALCULATOR
const calculatorMenu = document.getElementById("calculator-menu");
const calculatorApp = document.getElementById("calculator-app");
const calculatorClose = document.getElementById("calculator-close");
calculatorApp.style.display = "none";

calculatorMenu.addEventListener("click", () => {
  calculatorApp.style.display = "flex";
  calculatorMenu.classList.add("bg-white", "w-28", "h-28", "bg-opacity-20");
  if (countOpenApp > 10) {
    // blueScreen.classList.remove("hidden");
    blueScreen.style.display = "block";

    mainScreen.style.display = "none";
  }
  countOpenApp++;
});

calculatorClose.addEventListener("click", () => {
  calculatorApp.style.display = "none";
  calculatorMenu.classList.remove("bg-white", "w-28", "h-28", "bg-opacity-20");
});
// END : CALCULATOR

// START : BINARY
const binaryMenu = document.getElementById("binary-menu");
const binaryApp = document.getElementById("binary-app");
const binaryClose = document.getElementById("binary-close");
const binaryForm = document.getElementById("binary-form");
const textForm = document.getElementById("text-form");
const hasilConvert = document.getElementById("hasil-convert");

binaryApp.style.display = "none";

binaryMenu.addEventListener("click", () => {
  binaryApp.style.display = "flex";
  binaryMenu.classList.add("bg-white", "w-28", "h-28", "bg-opacity-20");
  if (countOpenApp > 10) {
    blueScreen.style.display = "block";

    // blueScreen.classList.remove("hidden");
    mainScreen.style.display = "none";
  }
  countOpenApp++;
});

binaryClose.addEventListener("click", () => {
  binaryApp.style.display = "none";
  binaryMenu.classList.remove("bg-white", "w-28", "h-28", "bg-opacity-20");
});

binaryApp.addEventListener("click", (e) => {
  if (e.target.classList.contains("button-binary")) {
    binaryForm.style.display = "flex";
    textForm.style.display = "none";
    hasilConvert.innerHTML = "Hasil : ";
  }

  if (e.target.classList.contains("button-text")) {
    binaryForm.style.display = "none";
    textForm.style.display = "flex";
    hasilConvert.innerHTML = "Hasil : ";
  }
});

binaryApp.addEventListener("input", (e) => {
  if (e.target.classList.contains("input-text")) {
    const input = e.target.value;
    const hasil = textToBinary(input);
    hasilConvert.innerHTML = `Hasil : ${hasil}`;
  }

  if (e.target.classList.contains("input-binary")) {
    const input = e.target.value;
    const hasil = binaryToText(input);
    hasilConvert.innerHTML = `Hasil : ${hasil}`;
  }
});

function textToBinary(text) {
  let binaryResult = "";
  for (let i = 0; i < text.length; i++) {
    const binaryChar = text[i].charCodeAt(0).toString(2);
    binaryResult += "0".repeat(8 - binaryChar.length) + binaryChar + " ";
  }
  return binaryResult.trim();
}

function binaryToText(binary) {
  const binaryArray = binary.split(" ");
  let textResult = "";
  for (let i = 0; i < binaryArray.length; i++) {
    const decimalChar = parseInt(binaryArray[i], 2);
    textResult += String.fromCharCode(decimalChar);
  }
  return textResult;
}

// END : BINARY

// START : CONNECTION
window.addEventListener("online", () => {
  const statusDisconnect = document.getElementById("status-connect");
  statusDisconnect.classList.toggle("hidden");
  const wifiOn = document.getElementById("wifi-on");
  const wifiOff = document.getElementById("wifi-off");
  const wifiStatus = document.getElementById("wifi-status");
  wifiOn.classList.remove("hidden");
  wifiOff.classList.add("hidden");
  wifiStatus.innerHTML = "Status : Connected To Internet";
  setTimeout(() => {
    statusDisconnect.classList.toggle("hidden");
  }, 5000);
});

window.addEventListener("offline", () => {
  const statusDisconnect = document.getElementById("status-disconnect");
  statusDisconnect.classList.toggle("hidden");
  const wifiOn = document.getElementById("wifi-on");
  const wifiOff = document.getElementById("wifi-off");
  const wifiStatus = document.getElementById("wifi-status");
  wifiOn.classList.add("hidden");
  wifiOff.classList.remove("hidden");
  wifiStatus.innerHTML = "Status : No Internet";
  setTimeout(() => {
    statusDisconnect.classList.toggle("hidden");
  }, 5000);
});

// END : CONNECTION

// START : BATTERY
if ("getBattery" in navigator) {
  navigator.getBattery().then(function (battery) {
    function updateBatteryStatus() {
      const batteryLevel = document.getElementById("battery-level");
      const batteryStatus = document.getElementById("battery-status");
      batteryLevel.innerHTML = `Battery Level : ${battery.level * 100}%`;
      batteryStatus.innerHTML = `Status : ${battery.charging ? "Charging" : "Not Charging"}`;
      const batteryCharging = document.getElementById("battery-charging");
      const batteryFull = document.getElementById("battery-full");
      const batteryLow = document.getElementById("battery-low");

      if (battery.charging) {
        //ketika charging
        batteryCharging.classList.remove("hidden");
        batteryFull.classList.add("hidden");
        batteryLow.classList.add("hidden");
      } else if (battery.level < 0.8) {
        // ketika battery dibawah 80% n opsinonal
        batteryCharging.classList.add("hidden");
        batteryFull.classList.add("hidden");
        batteryLow.classList.remove("hidden");
      } else {
        //ketika tidak charging
        batteryCharging.classList.add("hidden");
        batteryFull.classList.remove("hidden");
        batteryLow.classList.add("hidden");
      }
    }

    updateBatteryStatus();

    battery.addEventListener("chargingchange", updateBatteryStatus);
    battery.addEventListener("levelchange", updateBatteryStatus);
  });
}

// END : BATTERY

// START : JAM
function perbaruiJam() {
  var waktuSekarang = new Date();
  var jam = waktuSekarang.getHours();
  var menit = waktuSekarang.getMinutes();
  var detik = waktuSekarang.getSeconds();

  // var formatJam = jam % 24 || 12;
  var amPm = jam < 12 ? "AM" : "PM";

  jam = padZero(jam);
  menit = padZero(menit);
  detik = padZero(detik);

  document.getElementById("jam").innerHTML = jam + ":" + menit + ":" + detik + " " + amPm;
}

function padZero(angka) {
  return angka < 10 ? "0" + angka : angka;
}

setInterval(perbaruiJam, 1000);

// END : JAM

// START : TANGGAL
function perbaruiTanggal() {
  var waktuSekarang = new Date();
  var tahun = waktuSekarang.getFullYear();
  var bulan = waktuSekarang.getMonth() + 1;
  var tanggal = waktuSekarang.getDate();
  var hari = waktuSekarang.getDay();

  bulan = padZero(bulan);
  tanggal = padZero(tanggal);

  var namaHari = getNamaHari(hari);

  // document.getElementById("tanggal").innerHTML = tahun + "-" + bulan + "-" + tanggal + namaHari;
  document.getElementById("tanggal").innerHTML = `${tahun}-${bulan}-${tanggal} ${namaHari}`;
}

function getNamaHari(hari) {
  var namaHariList = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  return namaHariList[hari];
}

setInterval(perbaruiTanggal, 1000);

// END : TANGGAL

// START : CONNECTION SAAT LOAD
document.addEventListener("DOMContentLoaded", function () {
  // Pastikan bahwa browser mendukung objek navigator.connection
  if ("connection" in navigator) {
    var networkStatus = navigator.connection.rtt;

    if (networkStatus != "0") {
      const wifiOn = document.getElementById("wifi-on");
      const wifiOff = document.getElementById("wifi-off");
      const wifiStatus = document.getElementById("wifi-status");
      wifiOn.classList.remove("hidden");
      wifiOff.classList.add("hidden");
      wifiStatus.innerHTML = "Status : Connected To Internet";
    } else {
      const wifiOn = document.getElementById("wifi-on");
      const wifiOff = document.getElementById("wifi-off");
      const wifiStatus = document.getElementById("wifi-status");
      wifiOn.classList.add("hidden");
      wifiOff.classList.remove("hidden");
      wifiStatus.innerHTML = "Status : No Internet";
    }
  }
});

// END : CONNECTION SAAT LOAD

// START : PAINT
const canvas = document.getElementById("canvas");
const paintBottom = document.getElementById("paint-bottom");
const paintApp = document.getElementById("paint-app");
const paintMenu = document.getElementById("paint-menu");
const paintClose = document.getElementById("paint-close");
paintApp.style.display = "none";

paintMenu.addEventListener("click", () => {
  paintApp.style.display = "flex";
  paintMenu.classList.add("bg-white", "w-28", "h-28", "bg-opacity-20");
  if (countOpenApp > 10) {
    // blueScreen.classList.remove("hidden");
    blueScreen.style.display = "block";

    mainScreen.style.display = "none";
  }
  countOpenApp++;
  canvas.height = paintBottom.clientHeight;
  canvas.width = paintBottom.clientWidth;

  var theColor = "";
  var lineW = 15;
  let prevX = null;
  let prevY = null;
  let draw = false;

  const ctx = canvas.getContext("2d");
  ctx.lineWidth = lineW;
  ctx.imageSmoothingEnabled = false;

  var theInput = document.getElementById("favcolor");
  theInput.addEventListener(
    "input",
    function () {
      theColor = theInput.value;
      paintBottom.style.backgroundColor = theColor;
      paintApp.style.backgroundColor = theColor;
      ctx.strokeStyle = theColor;
    },
    false
  );

  document.getElementById("ageInputId").oninput = function () {
    draw = null;
    lineW = document.getElementById("ageInputId").value;
    document.getElementById("ageOutputId").innerHTML = lineW;
    ctx.lineWidth = lineW;
  };

  let clrs = document.querySelectorAll(".clr");
  clrs = Array.from(clrs);
  clrs.forEach((clr) => {
    clr.addEventListener("click", () => {
      ctx.strokeStyle = clr.dataset.clr;
    });
  });

  let clearBtn = document.querySelector(".clear");
  clearBtn.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });

  paintBottom.addEventListener("mousedown", (e) => {
    draw = true;
    prevX = e.clientX - canvas.getBoundingClientRect().left;
    prevY = e.clientY - canvas.getBoundingClientRect().top;
  });

  paintBottom.addEventListener("mouseup", () => (draw = false));

  paintBottom.addEventListener("mousemove", (e) => {
    if (prevX == null || prevY == null || !draw) {
      prevX = e.clientX - canvas.getBoundingClientRect().left;
      prevY = e.clientY - canvas.getBoundingClientRect().top;
      return;
    }

    let currentX = e.clientX - canvas.getBoundingClientRect().left;
    let currentY = e.clientY - canvas.getBoundingClientRect().top;

    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currentX, currentY);
    ctx.stroke();

    prevX = currentX;
    prevY = currentY;
  });

  paintBottom.addEventListener("touchstart", (e) => {
    draw = true;
    prevX = e.touches[0].clientX - canvas.getBoundingClientRect().left;
    prevY = e.touches[0].clientY - canvas.getBoundingClientRect().top;
  });

  paintBottom.addEventListener("touchend", () => (draw = false));

  paintBottom.addEventListener("touchmove", (e) => {
    if (!draw) return;

    let currentX = e.touches[0].clientX - canvas.getBoundingClientRect().left;
    let currentY = e.touches[0].clientY - canvas.getBoundingClientRect().top;

    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currentX, currentY);
    ctx.stroke();

    prevX = currentX;
    prevY = currentY;
  });
});

paintClose.addEventListener("click", () => {
  paintApp.style.display = "none";
  paintMenu.classList.remove("bg-white", "w-28", "h-28", "bg-opacity-20");
});

let saveBtn = document.querySelector(".save");
saveBtn.addEventListener("click", () => {
  let data = canvas.toDataURL("image/png");
  let a = document.createElement("a");
  a.href = data;
  a.download = "sketch.png";
  a.click();
});

// END : PAINT

// START : VIDEO
const videoApp = document.getElementById("video-app");
const videoClose = document.getElementById("video-close");
const videoForm = document.getElementById("video-form");
const videoPlaying = document.getElementById("video-playing");

videoApp.style.display = "none";

videoClose.addEventListener("click", () => {
  videoApp.style.display = "none";
  videoPlaying.pause();
});
// END : VIDEO

// START : AUDIO
const audioApp = document.getElementById("audio-app");
const audioClose = document.getElementById("audio-close");
const audioForm = document.getElementById("audio-form");
const audioPlaying = document.getElementById("audio-playing");

audioApp.style.display = "none";

audioClose.addEventListener("click", () => {
  audioApp.style.display = "none";
  audioPlaying.pause();
});
// END : AUDIO

// START : AUDIO
const pictureApp = document.getElementById("picture-app");
const pictureClose = document.getElementById("picture-close");
const pictureForm = document.getElementById("picture-form");
const pictureShowing = document.getElementById("picture-showing");

pictureApp.style.display = "none";

pictureClose.addEventListener("click", () => {
  pictureApp.style.display = "none";
});
// END : AUDIO

// START : AUDIO
const gameApp = document.getElementById("game-app");
const gameClose = document.getElementById("game-close");
const gameForm = document.getElementById("game-form");
const gameShowing = document.getElementById("game-showing");

gameApp.style.display = "none";

gameClose.addEventListener("click", () => {
  gameApp.style.display = "none";
  gameShowing.src = "";
});
// END : AUDIO

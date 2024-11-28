const Gk = document.getElementById("gk");
Gk.innerHTML = ''; 
const Lb = document.getElementById("lb");
Lb.innerHTML = ''; 
const CbLeft = document.getElementById("cbLeft");
CbLeft.innerHTML = ''; 
const CbRight = document.getElementById("cbRight");
CbRight.innerHTML = ''; 
const Rb = document.getElementById("rb");
Rb.innerHTML = ''; 
const CmfLeft = document.getElementById("cmfLeft");
CmfLeft.innerHTML = ''; 
const Dmf = document.getElementById("dmf");
Dmf.innerHTML = ''; 
const CmfRight = document.getElementById("cmfRight");
CmfRight.innerHTML = ''; 
const Lwf = document.getElementById("lwf");
Lwf.innerHTML = ''; 
const St = document.getElementById("st");
St.innerHTML = ''; 
const Rwf = document.getElementById("rwf");
Rwf.innerHTML = ''; 


let data = JSON.parse(localStorage.getItem("object")) || [];


const ReadAll = () => {
  data = JSON.parse(localStorage.getItem("object")) || [];
  let firstGkAdded = false;
  let firstLbAdded = false;
  let firstCbLeftAdded = false;
  let firstCbRightAdded = false;
  let firstRbAdded = false;
  let firstCmLeftAdded = false;
  let firstDmfAdded = false;
  let firstCmRightAdded = false;
  let firstLwAdded = false;
  let firstStAdded = false;
  let firstRwAdded = false;
  

  let changements = [];
  let changement = document.querySelectorAll('#changement');

  data.forEach((player,index) => {
    if (player.position === "GK" && !firstGkAdded) {
      Gk.innerHTML = `
        <p class="font-bold text-lg absolute px-2 py-1 mt-5">${player.rating}</p>
        <p style="font-size: small; color: black;" class="absolute px-2 py-1 mt-10"><b>GK</b></p>

        <!-- Player Image and Name -->
        <div class="flex flex-col items-center mt-4">
          <div class="flex">
            <img src="${player.photo}" alt="" class="rounded-full w-16 h-16 ml-3">
            <button onclick="Delete(${index})" class="text-red-500 text-sm ">
                <i class="fas fa-trash-alt"></i> 
            </button>
          </div>
          <p class="font-semibold mt-2">${player.name}</p>
        </div>

        <!-- Player Stats -->
        <div style="gap: 1.5px;" class="flex justify-between text-xs mt-2">
            <div class="text-center">
            <p class="mb-0 text-black"><b>Div</b></p>
            <p class="mb-0">${player.gkRatings.diving}</p>
            </div>
            <div class="text-center">
            <p class="mb-0 text-black"><b>Han</b></p>
            <p class="mb-0">${player.gkRatings.handling}</p>
            </div>
            <div class="text-center">
            <p class="mb-0 text-black"><b>Kic</b></p>
            <p class="mb-0">${player.gkRatings.kicking}</p>
            </div>
            <div class="text-center">
            <p class="mb-0 text-black"><b>Ref</b></p>
            <p class="mb-0">${player.gkRatings.reflexes}</p>
            </div>
            <div class="text-center">
            <p class="mb-0 text-black"><b>Sp</b></p>
            <p class="mb-0">${player.gkRatings.speed}</p>
            </div>
            <div class="text-center">
            <p class="mb-0 text-black"><b>Pos</b></p>
            <p class="mb-0">${player.gkRatings.positioning}</p>
            </div>
        </div>

        <!-- Flags -->
        <div class="flex justify-center gap-1 ">
            <img src="${player.logo}" alt="Flag" class="w-4 h-4">
            <img src="${player.flag}" alt="Flag" class="w-4 h-4">
        </div>
      `;
      firstGkAdded = true; // GK is added, so set this flag to true
    } else if (player.position === "LB" && !firstLbAdded) {
      Lb.innerHTML = `
        <p class="font-bold text-lg absolute px-2 py-1 mt-5">${player.rating}</p>
        <p style="font-size: small; color: black;" class="absolute px-2 py-1 mt-10"><b>${player.position}</b></p>

        <!-- Player Image and Name -->
        <div class="flex flex-col items-center mt-4">
            <img src="${player.photo}" alt="" class="rounded-full w-16 h-16">
            <p class="font-semibold mt-2">${player.name}</p>
        </div>

        <!-- Player Stats -->
        <div style="gap: 1.5px;" class="flex justify-between text-xs mt-2">
            <div class="text-center">
            <p class="mb-0 text-black"><b>Pac</b></p>
            <p class="mb-0">${player.playerRatings.pace}</p>
            </div>
            <div class="text-center">
            <p class="mb-0 text-black"><b>Sho</b></p>
            <p class="mb-0">${player.playerRatings.shooting}</p>
            </div>
            <div class="text-center">
            <p class="mb-0 text-black"><b>Ps</b></p>
            <p class="mb-0">${player.playerRatings.passing}</p>
            </div>
            <div class="text-center">
            <p class="mb-0 text-black"><b>Dri</b></p>
            <p class="mb-0">${player.playerRatings.dribbling}</p>
            </div>
            <div class="text-center">
            <p class="mb-0 text-black"><b>Def</b></p>
            <p class="mb-0">${player.playerRatings.defending}</p>
            </div>
            <div class="text-center">
            <p class="mb-0 text-black"><b>Phy</b></p>
            <p class="mb-0">${player.playerRatings.physical}</p>
            </div>
        </div>

        <!-- Flags -->
        <div class="flex justify-center gap-1">
            <img src="${player.logo}" alt="Flag" class="w-4 h-4">
            <img src="${player.flag}" alt="Flag" class="w-4 h-4">
        </div>
      `;
      firstLbAdded = true; 
    }else if (player.position === "CBleft" && !firstCbLeftAdded) {
      CbLeft.innerHTML = `
        <p class="font-bold text-lg absolute px-2 py-1 mt-5">${player.rating}</p>
        <p style="font-size: small; color: black;" class="absolute px-2 py-1 mt-10"><b>CB</b></p>

        <!-- Player Image and Name -->
        <div class="flex flex-col items-center mt-4">
            <img src="${player.photo}" alt="" class="rounded-full w-16 h-16">
            <p class="font-semibold mt-2">${player.name}</p>
        </div>

        <!-- Player Stats -->
        <div style="gap: 1.5px;" class="flex justify-between text-xs mt-2">
            <div class="text-center">
            <p class="mb-0 text-black"><b>Pac</b></p>
            <p class="mb-0">${player.playerRatings.pace}</p>
            </div>
            <div class="text-center">
            <p class="mb-0 text-black"><b>Sho</b></p>
            <p class="mb-0">${player.playerRatings.shooting}</p>
            </div>
            <div class="text-center">
            <p class="mb-0 text-black"><b>Ps</b></p>
            <p class="mb-0">${player.playerRatings.passing}</p>
            </div>
            <div class="text-center">
            <p class="mb-0 text-black"><b>Dri</b></p>
            <p class="mb-0">${player.playerRatings.dribbling}</p>
            </div>
            <div class="text-center">
            <p class="mb-0 text-black"><b>Def</b></p>
            <p class="mb-0">${player.playerRatings.defending}</p>
            </div>
            <div class="text-center">
            <p class="mb-0 text-black"><b>Phy</b></p>
            <p class="mb-0">${player.playerRatings.physical}</p>
            </div>
        </div>

        <!-- Flags -->
        <div class="flex justify-center gap-1">
            <img src="${player.logo}" alt="Flag" class="w-4 h-4">
            <img src="${player.flag}" alt="Flag" class="w-4 h-4">
        </div>
      `;
      firstCbLeftAdded = true; 
    }else if (player.position === "CBright" && !firstCbRightAdded) {
      CbRight.innerHTML = `
        <p class="font-bold text-lg absolute px-2 py-1 mt-5">${player.rating}</p>
        <p style="font-size: small; color: black;" class="absolute px-2 py-1 mt-10"><b>CB</b></p>

        <!-- Player Image and Name -->
        <div class="flex flex-col items-center mt-4">
            <img src="${player.photo}" alt="" class="rounded-full w-16 h-16">
            <p class="font-semibold mt-2">${player.name}</p>
        </div>

        <!-- Player Stats -->
        <div style="gap: 1.5px;" class="flex justify-between text-xs mt-2">
            <div class="text-center">
            <p class="mb-0 text-black"><b>Pac</b></p>
            <p class="mb-0">${player.playerRatings.pace}</p>
            </div>
            <div class="text-center">
            <p class="mb-0 text-black"><b>Sho</b></p>
            <p class="mb-0">${player.playerRatings.shooting}</p>
            </div>
            <div class="text-center">
            <p class="mb-0 text-black"><b>Ps</b></p>
            <p class="mb-0">${player.playerRatings.passing}</p>
            </div>
            <div class="text-center">
            <p class="mb-0 text-black"><b>Dri</b></p>
            <p class="mb-0">${player.playerRatings.dribbling}</p>
            </div>
            <div class="text-center">
            <p class="mb-0 text-black"><b>Def</b></p>
            <p class="mb-0">${player.playerRatings.defending}</p>
            </div>
            <div class="text-center">
            <p class="mb-0 text-black"><b>Phy</b></p>
            <p class="mb-0">${player.playerRatings.physical}</p>
            </div>
        </div>

        <!-- Flags -->
        <div class="flex justify-center gap-1">
            <img src="${player.logo}" alt="Flag" class="w-4 h-4">
            <img src="${player.flag}" alt="Flag" class="w-4 h-4">
        </div>
      `;
      firstCbRightAdded = true; 
    }else if (player.position === "RB" && !firstRbAdded) {
      Rb.innerHTML = `
        <p class="font-bold text-lg absolute px-2 py-1 mt-5">${player.rating}</p>
        <p style="font-size: small; color: black;" class="absolute px-2 py-1 mt-10"><b>${player.position}</b></p>

        <!-- Player Image and Name -->
        <div class="flex flex-col items-center mt-4">
            <img src="${player.photo}" alt="" class="rounded-full w-16 h-16">
            <p class="font-semibold mt-2">${player.name}</p>
        </div>

        <!-- Player Stats -->
        <div style="gap: 1.5px;" class="flex justify-between text-xs mt-2">
            <div class="text-center">
            <p class="mb-0 text-black"><b>Pac</b></p>
            <p class="mb-0">${player.playerRatings.pace}</p>
            </div>
            <div class="text-center">
            <p class="mb-0 text-black"><b>Sho</b></p>
            <p class="mb-0">${player.playerRatings.shooting}</p>
            </div>
            <div class="text-center">
            <p class="mb-0 text-black"><b>Ps</b></p>
            <p class="mb-0">${player.playerRatings.passing}</p>
            </div>
            <div class="text-center">
            <p class="mb-0 text-black"><b>Dri</b></p>
            <p class="mb-0">${player.playerRatings.dribbling}</p>
            </div>
            <div class="text-center">
            <p class="mb-0 text-black"><b>Def</b></p>
            <p class="mb-0">${player.playerRatings.defending}</p>
            </div>
            <div class="text-center">
            <p class="mb-0 text-black"><b>Phy</b></p>
            <p class="mb-0">${player.playerRatings.physical}</p>
            </div>
        </div>

        <!-- Flags -->
        <div class="flex justify-center gap-1">
            <img src="${player.logo}" alt="Flag" class="w-4 h-4">
            <img src="${player.flag}" alt="Flag" class="w-4 h-4">
        </div>
      `;
      firstRbAdded = true; 
    }else if (player.position === "CMFleft" && !firstCmLeftAdded) {
      CmfLeft.innerHTML = `
        <p class="font-bold text-lg absolute px-2 py-1 mt-5">${player.rating}</p>
        <p style="font-size: small; color: black;" class="absolute px-2 py-1 mt-10"><b>CM</b></p>

        <!-- Player Image and Name -->
        <div class="flex flex-col items-center mt-4">
            <img src="${player.photo}" alt="" class="rounded-full w-16 h-16">
            <p class="font-semibold mt-2">${player.name}</p>
        </div>

        <!-- Player Stats -->
        <div style="gap: 1.5px;" class="flex justify-between text-xs mt-2">
            <div class="text-center">
            <p class="mb-0 text-black"><b>Pac</b></p>
            <p class="mb-0">${player.playerRatings.pace}</p>
            </div>
            <div class="text-center">
            <p class="mb-0 text-black"><b>Sho</b></p>
            <p class="mb-0">${player.playerRatings.shooting}</p>
            </div>
            <div class="text-center">
            <p class="mb-0 text-black"><b>Ps</b></p>
            <p class="mb-0">${player.playerRatings.passing}</p>
            </div>
            <div class="text-center">
            <p class="mb-0 text-black"><b>Dri</b></p>
            <p class="mb-0">${player.playerRatings.dribbling}</p>
            </div>
            <div class="text-center">
            <p class="mb-0 text-black"><b>Def</b></p>
            <p class="mb-0">${player.playerRatings.defending}</p>
            </div>
            <div class="text-center">
            <p class="mb-0 text-black"><b>Phy</b></p>
            <p class="mb-0">${player.playerRatings.physical}</p>
            </div>
        </div>

        <!-- Flags -->
        <div class="flex justify-center gap-1">
            <img src="${player.logo}" alt="Flag" class="w-4 h-4">
            <img src="${player.flag}" alt="Flag" class="w-4 h-4">
        </div>
      `;
      firstCmLeftAdded = true; 
    }else if (player.position === "DMF" && !firstDmfAdded) {
      Dmf.innerHTML = `
        <p class="font-bold text-lg absolute px-2 py-1 mt-5">${player.rating}</p>
        <p style="font-size: small; color: black;" class="absolute px-2 py-1 mt-10"><b>${player.position}</b></p>

        <!-- Player Image and Name -->
        <div class="flex flex-col items-center mt-4">
            <img src="${player.photo}" alt="" class="rounded-full w-16 h-16">
            <p class="font-semibold mt-2">${player.name}</p>
        </div>

        <!-- Player Stats -->
        <div style="gap: 1.5px;" class="flex justify-between text-xs mt-2">
            <div class="text-center">
            <p class="mb-0 text-black"><b>Pac</b></p>
            <p class="mb-0">${player.playerRatings.pace}</p>
            </div>
            <div class="text-center">
            <p class="mb-0 text-black"><b>Sho</b></p>
            <p class="mb-0">${player.playerRatings.shooting}</p>
            </div>
            <div class="text-center">
            <p class="mb-0 text-black"><b>Ps</b></p>
            <p class="mb-0">${player.playerRatings.passing}</p>
            </div>
            <div class="text-center">
            <p class="mb-0 text-black"><b>Dri</b></p>
            <p class="mb-0">${player.playerRatings.dribbling}</p>
            </div>
            <div class="text-center">
            <p class="mb-0 text-black"><b>Def</b></p>
            <p class="mb-0">${player.playerRatings.defending}</p>
            </div>
            <div class="text-center">
            <p class="mb-0 text-black"><b>Phy</b></p>
            <p class="mb-0">${player.playerRatings.physical}</p>
            </div>
        </div>

        <!-- Flags -->
        <div class="flex justify-center gap-1">
            <img src="${player.logo}" alt="Flag" class="w-4 h-4">
            <img src="${player.flag}" alt="Flag" class="w-4 h-4">
        </div>
      `;
      firstDmfAdded = true; 
    }else if (player.position === "CMFright" && !firstCmRightAdded) {
      CmfRight.innerHTML = `
        <p class="font-bold text-lg absolute px-2 py-1 mt-5">${player.rating}</p>
        <p style="font-size: small; color: black;" class="absolute px-2 py-1 mt-10"><b>CM</b></p>

        <!-- Player Image and Name -->
        <div class="flex flex-col items-center mt-4">
            <img src="${player.photo}" alt="" class="rounded-full w-16 h-16">
            <p class="font-semibold mt-2">${player.name}</p>
        </div>

        <!-- Player Stats -->
        <div style="gap: 1.5px;" class="flex justify-between text-xs mt-2">
            <div class="text-center">
            <p class="mb-0 text-black"><b>Pac</b></p>
            <p class="mb-0">${player.playerRatings.pace}</p>
            </div>
            <div class="text-center">
            <p class="mb-0 text-black"><b>Sho</b></p>
            <p class="mb-0">${player.playerRatings.shooting}</p>
            </div>
            <div class="text-center">
            <p class="mb-0 text-black"><b>Ps</b></p>
            <p class="mb-0">${player.playerRatings.passing}</p>
            </div>
            <div class="text-center">
            <p class="mb-0 text-black"><b>Dri</b></p>
            <p class="mb-0">${player.playerRatings.dribbling}</p>
            </div>
            <div class="text-center">
            <p class="mb-0 text-black"><b>Def</b></p>
            <p class="mb-0">${player.playerRatings.defending}</p>
            </div>
            <div class="text-center">
            <p class="mb-0 text-black"><b>Phy</b></p>
            <p class="mb-0">${player.playerRatings.physical}</p>
            </div>
        </div>

        <!-- Flags -->
        <div class="flex justify-center gap-1">
            <img src="${player.logo}" alt="Flag" class="w-4 h-4">
            <img src="${player.flag}" alt="Flag" class="w-4 h-4">
        </div>
      `;
      firstCmRightAdded = true; 
    }else if (player.position === "LWF" && !firstLwAdded) {
      Lwf.innerHTML = `
        <p class="font-bold text-lg absolute px-2 py-1 mt-5">${player.rating}</p>
        <p style="font-size: small; color: black;" class="absolute px-2 py-1 mt-10"><b>${player.position}</b></p>

        <!-- Player Image and Name -->
        <div class="flex flex-col items-center mt-4">
            <img src="${player.photo}" alt="" class="rounded-full w-16 h-16">
            <p class="font-semibold mt-2">${player.name}</p>
        </div>

        <!-- Player Stats -->
        <div style="gap: 1.5px;" class="flex justify-between text-xs mt-2">
            <div class="text-center">
            <p class="mb-0 text-black"><b>Pac</b></p>
            <p class="mb-0">${player.playerRatings.pace}</p>
            </div>
            <div class="text-center">
            <p class="mb-0 text-black"><b>Sho</b></p>
            <p class="mb-0">${player.playerRatings.shooting}</p>
            </div>
            <div class="text-center">
            <p class="mb-0 text-black"><b>Ps</b></p>
            <p class="mb-0">${player.playerRatings.passing}</p>
            </div>
            <div class="text-center">
            <p class="mb-0 text-black"><b>Dri</b></p>
            <p class="mb-0">${player.playerRatings.dribbling}</p>
            </div>
            <div class="text-center">
            <p class="mb-0 text-black"><b>Def</b></p>
            <p class="mb-0">${player.playerRatings.defending}</p>
            </div>
            <div class="text-center">
            <p class="mb-0 text-black"><b>Phy</b></p>
            <p class="mb-0">${player.playerRatings.physical}</p>
            </div>
        </div>

        <!-- Flags -->
        <div class="flex justify-center gap-1">
            <img src="${player.logo}" alt="Flag" class="w-4 h-4">
            <img src="${player.flag}" alt="Flag" class="w-4 h-4">
        </div>
      `;
      firstLwAdded = true; 
    }else if (player.position === "ST" && !firstStAdded) {
      St.innerHTML = `
        <p class="font-bold text-lg absolute px-2 py-1 mt-5">${player.rating}</p>
        <p style="font-size: small; color: black;" class="absolute px-2 py-1 mt-10"><b>${player.position}</b></p>

        <!-- Player Image and Name -->
        <div class="flex flex-col items-center mt-4">
            <img src="${player.photo}" alt="" class="rounded-full w-16 h-16">
            <p class="font-semibold mt-2">${player.name}</p>
        </div>

        <!-- Player Stats -->
        <div style="gap: 1.5px;" class="flex justify-between text-xs mt-2">
            <div class="text-center">
            <p class="mb-0 text-black"><b>Pac</b></p>
            <p class="mb-0">${player.playerRatings.pace}</p>
            </div>
            <div class="text-center">
            <p class="mb-0 text-black"><b>Sho</b></p>
            <p class="mb-0">${player.playerRatings.shooting}</p>
            </div>
            <div class="text-center">
            <p class="mb-0 text-black"><b>Ps</b></p>
            <p class="mb-0">${player.playerRatings.passing}</p>
            </div>
            <div class="text-center">
            <p class="mb-0 text-black"><b>Dri</b></p>
            <p class="mb-0">${player.playerRatings.dribbling}</p>
            </div>
            <div class="text-center">
            <p class="mb-0 text-black"><b>Def</b></p>
            <p class="mb-0">${player.playerRatings.defending}</p>
            </div>
            <div class="text-center">
            <p class="mb-0 text-black"><b>Phy</b></p>
            <p class="mb-0">${player.playerRatings.physical}</p>
            </div>
        </div>

        <!-- Flags -->
        <div class="flex justify-center gap-1">
            <img src="${player.logo}" alt="Flag" class="w-4 h-4">
            <img src="${player.flag}" alt="Flag" class="w-4 h-4">
        </div>
      `;
      firstStAdded = true; 
    }else if (player.position === "RWF" && !firstRwAdded) {
      Rwf.innerHTML = `
        <p class="font-bold text-lg absolute px-2 py-1 mt-5">${player.rating}</p>
        <p style="font-size: small; color: black;" class="absolute px-2 py-1 mt-10"><b>${player.position}</b></p>

        <!-- Player Image and Name -->
        <div class="flex flex-col items-center mt-4">
            <img src="${player.photo}" alt="" class="rounded-full w-16 h-16">
            <p class="font-semibold mt-2">${player.name}</p>
        </div>

        <!-- Player Stats -->
        <div style="gap: 1.5px;" class="flex justify-between text-xs mt-2">
            <div class="text-center">
            <p class="mb-0 text-black"><b>Pac</b></p>
            <p class="mb-0">${player.playerRatings.pace}</p>
            </div>
            <div class="text-center">
            <p class="mb-0 text-black"><b>Sho</b></p>
            <p class="mb-0">${player.playerRatings.shooting}</p>
            </div>
            <div class="text-center">
            <p class="mb-0 text-black"><b>Ps</b></p>
            <p class="mb-0">${player.playerRatings.passing}</p>
            </div>
            <div class="text-center">
            <p class="mb-0 text-black"><b>Dri</b></p>
            <p class="mb-0">${player.playerRatings.dribbling}</p>
            </div>
            <div class="text-center">
            <p class="mb-0 text-black"><b>Def</b></p>
            <p class="mb-0">${player.playerRatings.defending}</p>
            </div>
            <div class="text-center">
            <p class="mb-0 text-black"><b>Phy</b></p>
            <p class="mb-0">${player.playerRatings.physical}</p>
            </div>
        </div>

        <!-- Flags -->
        <div class="flex justify-center gap-1">
            <img src="${player.logo}" alt="Flag" class="w-4 h-4">
            <img src="${player.flag}" alt="Flag" class="w-4 h-4">
        </div>
      `;
      firstRwAdded = true; 
    } else {
      changements.push(player); 
    }
  });

  changements.forEach((player, index) => {
    if (changement[index]) {
      changement[index].innerHTML = `
        <p class="font-bold text-lg absolute px-2 py-1 mt-5">${player.rating}</p>
        <p style="font-size: small; color: black;" class="absolute px-2 py-1 mt-10"><b>${player.position}</b></p>

        <!-- Player Image and Name -->
        <div class="flex flex-col items-center mt-4">
          <div class="flex">
            <img src="${player.photo}" alt="" class="rounded-full w-16 h-16 ml-3">
            <button onclick="Delete(${index})" class="text-red-500 text-sm ">
                <i class="fas fa-trash-alt"></i> 
            </button>
          </div>
          <p class="font-semibold mt-2">${player.name}</p>
        </div>

        <!-- Player Stats -->
        <div style="gap: 1.5px;" class="flex justify-between text-xs mt-2">
          <div class="text-center">
            <p class="mb-0 text-black"><b>${player.position === "GK" ? "Div" : "Pac"}</b></p>
            <p class="mb-0">${player.position === "GK" ? player.gkRatings.diving : player.playerRatings.pace}</p>
          </div>
          <div class="text-center">
            <p class="mb-0 text-black"><b>${player.position === "GK" ? "Han" : "Sho"}</b></p>
            <p class="mb-0">${player.position === "GK" ? player.gkRatings.handling : player.playerRatings.shooting}</p>
          </div>
          <div class="text-center">
            <p class="mb-0 text-black"><b>${player.position === "GK" ? "Kic" : "Ps"}</b></p>
            <p class="mb-0">${player.position === "GK" ? player.gkRatings.kicking : player.playerRatings.passing}</p>
          </div>
          <div class="text-center">
            <p class="mb-0 text-black"><b>${player.position === "GK" ? "Ref" : "Dri"}</b></p>
            <p class="mb-0">${player.position === "GK" ? player.gkRatings.reflexes : player.playerRatings.dribbling}</p>
          </div>
          <div class="text-center">
            <p class="mb-0 text-black"><b>${player.position === "GK" ? "Sp" : "Def"}</b></p>
            <p class="mb-0">${player.position === "GK" ? player.gkRatings.speed : player.playerRatings.defending}</p>
          </div>
          <div class="text-center">
            <p class="mb-0 text-black"><b>${player.position === "GK" ? "Pos" : "Phy"}</b></p>
            <p class="mb-0">${player.position === "GK" ? player.gkRatings.positioning : player.playerRatings.physical}</p>
          </div>
        </div>

        <!-- Flags -->
        <div class="flex justify-center gap-1">
          <img src="${player.logo}" alt="Flag" class="w-4 h-4">
          <img src="${player.flag}" alt="Flag" class="w-4 h-4">
        </div>
        
        
      `;
    }
  });

  console.log(changements); 
};


const Add = (event) => {
  event.preventDefault();
  // name
  const name = document.getElementById("name").value;
  // image
  const inputPhotosUrl = document.querySelector("#photo").value;
  // position
  const position = document.getElementById("position").value;
  // Nationality
  const nationality = document.getElementById("nationality").value;
  // image
  const inputFlagsUrl = document.querySelector("#flag").value;
  // club
  const club = document.getElementById("club").value;
  // logo
  const inputLogosUrl = document.querySelector("#logo").value;
  // Player Rating
  const ratingPlayer = document.getElementById("ratingPlayer").value;
  const pac = document.getElementById("pace").value;
  const sho = document.getElementById("shooting").value;
  const ps = document.getElementById("passing").value;
  const dri = document.getElementById("dribbling").value;
  const def = document.getElementById("defending").value;
  const phy = document.getElementById("physical").value;
  // Gk Rating
  const ratingGk = document.getElementById("ratingGk").value;
  const div = document.getElementById("diving").value;
  const han = document.getElementById("handling").value;
  const kic = document.getElementById("kicking").value;
  const ref = document.getElementById("reflexes").value;
  const sp = document.getElementById("speed").value;
  const pos = document.getElementById("positioning").value;


  const player = {
    name: name,
    photo: inputPhotosUrl,
    position: position,
    nationality: nationality,
    flag: inputFlagsUrl,
    club: club,
    logo: inputLogosUrl,
    rating: position === "GK" ? ratingGk : ratingPlayer,
  };
  if (position === "GK") {
    player.gkRatings = {
      diving: div,
      handling: han,
      kicking: kic,
      reflexes: ref,
      speed: sp,
      positioning: pos,
    };
  } else {
    player.playerRatings = {
      pace: pac,
      shooting: sho,
      passing: ps,
      dribbling: dri,
      defending: def,
      physical: phy,
    };
  }

  data.push(player);

  localStorage.setItem("object", JSON.stringify(data));
  reset();
  ReadAll();
};

// show rating de players if gk or player
const divGk = document.getElementById("divGk"); 
const divPlayer = document.getElementById("divPlayer");
const position = document.getElementById("position"); 

position.addEventListener('change', () => {
  const selectedPos = position.value;

  if (selectedPos === 'GK') {
    divGk.classList.remove('hidden');
    divPlayer.classList.add('hidden');
  } else {
    divGk.classList.add('hidden'); 
    divPlayer.classList.remove('hidden');
  }
});


// reset forms
const reset = () => {

  document.getElementById("name").value = "";
  document.querySelector("#photo").value = "";
  document.getElementById("position").value = "";
  document.getElementById("nationality").value = "";
  document.querySelector("#flag").value = "";
  document.getElementById("club").value = "";
  document.querySelector("#logo").value = "";
  document.getElementById("ratingPlayer").value = "";
 
  document.getElementById("pace").value = "";
  document.getElementById("shooting").value = "";
  document.getElementById("passing").value = "";
  document.getElementById("dribbling").value = "";
  document.getElementById("defending").value = "";
  document.getElementById("physical").value = "";

  document.getElementById("ratingGk").value = "";
  document.getElementById("diving").value = "";
  document.getElementById("handling").value = "";
  document.getElementById("kicking").value = "";
  document.getElementById("reflexes").value = "";
  document.getElementById("speed").value = "";
  document.getElementById("positioning").value = "";
};


const Delete = (index) =>{
  if (confirm("Are you sure you want to delete this player?")) {
    data.splice(index, 1);
    localStorage.setItem("object", JSON.stringify(data));
    ReadAll();
  }
  ReadAll();
}

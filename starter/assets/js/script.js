const Gk = document.getElementById("gk");
const Lb = document.getElementById("lb");
const CbLeft = document.getElementById("cbLeft");
const CbRight = document.getElementById("cbRight");
const Rb = document.getElementById("rb");
const CmfLeft = document.getElementById("cmfLeft");
const Dmf = document.getElementById("dmf");
const CmfRight = document.getElementById("cmfRight");
const Lwf = document.getElementById("lwf");
const St = document.getElementById("st");
const Rwf = document.getElementById("rwf");


let data = JSON.parse(localStorage.getItem("object")) || [];

const updatePositionOrChangement = (positionDiv, player, changement) => {
  if (!positionDiv.innerHTML.trim()) { 
      positionDiv.innerHTML = `
      <p class="font-bold text-lg absolute top-9 left-4 px-2 py-1">${player.rating}</p>
      <p style="font-size: small; color: black;" class="absolute top-14 left-4 px-2 py-1"><b>GK</b></p>

        <!-- Player Image and Name -->
        <div class="flex flex-col items-center mt-4">
            <img src="${player.photo}" alt="GK Player" class="rounded-full w-16 h-16">
            <p class="font-semibold mt-2">${player.name}</p>
        </div>

        <!-- Player Stats -->
        <div style="gap: 1.5px;" class="flex justify-between text-xs mt-2">
            <div class="text-center">
            <p class="mb-0 text-black"><b>Div</b></p>
            <p class="mb-0"></p>
            </div>
            <div class="text-center">
            <p class="mb-0 text-black"><b>Han</b></p>
            <p class="mb-0"></p>
            </div>
            <div class="text-center">
            <p class="mb-0 text-black"><b>Kic</b></p>
            <p class="mb-0"></p>
            </div>
            <div class="text-center">
            <p class="mb-0 text-black"><b>Ref</b></p>
            <p class="mb-0"></p>
            </div>
            <div class="text-center">
            <p class="mb-0 text-black"><b>Sp</b></p>
            <p class="mb-0"></p>
            </div>
            <div class="text-center">
            <p class="mb-0 text-black"><b>Pos</b></p>
            <p class="mb-0"></p>
            </div>
        </div>

        <!-- Flags -->
        <div class="flex justify-center gap-1 ">
            <img src="${player.logo}" alt="Flag" class="w-4 h-4">
            <img src="${player.flag}" alt="Flag" class="w-4 h-4">
        </div>
      `;
  } else {
      if (!positionDiv.innerHTML.includes(player.name)) {
          const changeItem = document.createElement("div");
          changeItem.innerHTML = `
          <div style="background-image: url('./assets/img/badge_gold.webp');
                      background-size: cover;
                      width: 150px;
                      height: 200px; 
          " class="row-start-7 col-start-6 col-span-2 row-span-4 p-4 text-center text-white rounded-lg">
            <!-- Score -->
            <p class="font-bold text-lg absolute px-2 py-1 mt-5">90</p>
            <p style="font-size: small; color: black;" class="absolute px-2 py-1 mt-10 ml-1"><b>CF</b></p>

            <!-- Player Image and Name -->
            <div class="flex flex-col items-center mt-4">
              <img src="https://cdn.sofifa.net/players/158/023/25_120.png" alt="Messi" class="rounded-full w-16 h-16">
              <p class="font-semibold mt-2">${player.name}</p>
            </div>

            <!-- Player Stats -->
            <div style="gap: 1.5px;" class="flex justify-between text-xs mt-2">
              <div class="text-center">
                <p class="mb-0 text-black"><b>Pac</b></p>
                <p class="mb-0">90</p>
              </div>
              <div class="text-center">
                <p class=" mb-0 text-black"><b>Sho</b></p>
                <p class="mb-0">90</p>
              </div>
              <div class="text-center">
                <p class=" mb-0 text-black"><b>Ps</b></p>
                <p class="mb-0">90</p>
              </div>
              <div class="text-center">
                <p class=" mb-0 text-black"><b>Dri</b></p>
                <p class="mb-0">90</p>
              </div>
              <div class="text-center">
                <p class=" mb-0 text-black"><b>Def</b></p>
                <p class="mb-0">90</p>
              </div>
              <div class="text-center">
                <p class=" mb-0 text-black"><b>Phy</b></p>
                <p class="mb-0">90</p>
              </div>
            </div>

            <!-- Flags -->
            <div class="flex justify-center gap-1 ">
              <img src="./assets/img/bandeira-argentina-flag-0.png" alt="Flag" class="w-4 h-4">
              <img src="./assets/img/bandeira-argentina-flag-0.png" alt="Flag" class="w-4 h-4">
            </div>
          </div>
          `;
          changement.appendChild(changeItem);
      }
  }
};


const ReadAll = () => {
  
  const data = JSON.parse(localStorage.getItem("object")) || [];
  
  const changement = document.getElementById("changement");  
  
  changement.innerHTML = ``;
  
  data.forEach((player) => {
    if (player.position === "GK") {
      updatePositionOrChangement(Gk, player, changement);
    }else if(player.position === "LB"){
      updatePositionOrChangement(Lb, player, changement);
    }else if(player.position === "CBleft"){
      updatePositionOrChangement(CbLeft, player, changement);
    }else if(player.position === "CBright"){
      updatePositionOrChangement(CbRight, player, changement);
    }else if(player.position === "RB"){
      updatePositionOrChangement(Rb, player, changement);
    }else if(player.position === "CMFleft"){
      updatePositionOrChangement(CmfLeft, player, changement);
    }else if(player.position === "DMF"){
      updatePositionOrChangement(Dmf, player, changement);
    }else if(player.position === "CMFright"){
      updatePositionOrChangement(CmfRight, player, changement);
    }else if(player.position === "LWF"){
      updatePositionOrChangement(Lwf, player, changement);
    }else if(player.position === "ST"){
      updatePositionOrChangement(St, player, changement);
    }else if(player.position === "RWF"){
      updatePositionOrChangement(Rwf, player, changement);
    }
  });
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

  console.log(player);

  data.push(player);

  localStorage.setItem("object", JSON.stringify(data));
  
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


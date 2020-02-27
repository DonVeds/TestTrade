let mainChoosingSlide = document.querySelector(".mainChoosingSlide");
let descriptionTrade = document.querySelector(".mobile-card-description_trade");
let arrowTrade = document.querySelector(".mobile-card-arrow_trade");
let arrowInvest = document.querySelector(".mobile-card-arrow_invest");
let arrowInvite = document.querySelector(".mobile-card-arrow_invite");

let state = {
  tradeOpened: false,
  investOpened: false,
  inviteOpened: false,
  desctopOpened: "trade"
}

//TRADE

document.querySelector(".mobile-card_trade").onclick = () => {
  console.log('click')
  if (state.tradeOpened) {
    descriptionTrade.classList.add('disabled');
    mainChoosingSlide.style.background = "url('../img/bg.png') top center";
    mainChoosingSlide.style.backgroundSize = "cover";
    state.tradeOpened = 0
    arrowTrade.style.borderStyle = "hidden hidden solid solid"
  }
  else {
    descriptionTrade.classList.remove("disabled");
    mainChoosingSlide.style.background = "#f3f2da";
    state.tradeOpened = 1;
    arrowTrade.classList.add('rotate');
    arrowTrade.style.borderStyle = "solid solid hidden hidden";
  }
}

//INVEST

document.querySelector(".mobile-card_invest").onclick = () => {
  console.log("click");
  if (state.investOpened) {
    document.querySelector(".mobile-card-description_invest").classList.add("disabled");
    mainChoosingSlide.style.background = "url('../img/bg.png') top center";
    mainChoosingSlide.style.backgroundSize = "cover";
    state.investOpened = 0;
    arrowInvest.style.borderStyle = "hidden hidden solid solid"
  } else {
    document.querySelector(".mobile-card-description_invest").classList.remove("disabled");
    mainChoosingSlide.style.background = "#f3f2da";
    state.investOpened = 1;
    arrowInvest.style.borderStyle = "solid solid hidden hidden";
  }
};

//INVITE

document.querySelector(".mobile-card_invite").onclick = () => {
  console.log("click");
  if (state.inviteOpened) {
    document.querySelector(".mobile-card-description_invite").classList.add("disabled");
    mainChoosingSlide.style.background = "url('../img/bg.png') top center";
    mainChoosingSlide.style.backgroundSize = "cover";
    state.inviteOpened = 0;
    arrowInvite.style.borderStyle = "hidden hidden solid solid";
  } else {
    document
      .querySelector(".mobile-card-description_invite")
      .classList.remove("disabled");
    mainChoosingSlide.style.background = "#f3f2da";
    state.inviteOpened = 1;
    arrowInvite.style.borderStyle = "solid solid hidden hidden";
  }
};

if (state.desctopOpened === 'trade') {
  document.querySelector(".mainInfoSlide-nav-btn_trade").style.borderBottom="2px solid #00b596"
  document.querySelector(".mainInfoSlide-nav-btn_trade").style.color="#00b596"
}
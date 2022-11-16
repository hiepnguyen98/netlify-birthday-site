// setTimeout(() => {
//     setTimeout(() => {
//       const card = document.getElementById("flip-card-inner");
//       card.style.transform = "rotateY(180deg)";
//     }, 1500);
//   }, 1000);
  
  setTimeout(() => {
    setTimeout(openEnvelope, 1000);
  }, 1000);
  
  function openEnvelope() {
    setInterval(() => {
      document.getElementById("one").style.transform = "rotateX(90deg)";
      document.getElementById("two").style.transform = "rotateX(180deg)";
      document.getElementById("one").transitionDelay = "0.75s";
      document.getElementById("two").transitionDelay = "0.75s";
    }, 500);
  
    setTimeout(letterUp, 1000);
  }
  
  function letterUp() {
    const letter = document.getElementById("card");
    const one = document.getElementById("one");
    // const envelope = document.getElementById("envelope");
  
    one.style.zIndex = 1;
    //envelop
    letter.style.zIndex = 2;
    let i = 0;
    let id = null;
    clearInterval(id);
  
    id = setInterval(() => {
      if (i == 500) {
        clearInterval(id);
      } else {
        letter.style.top = -i + "px";
        i++;
      }
    }, 5);
  
    setTimeout(letterDown, 3000);
  }
  
  function letterDown() {
    const letter = document.getElementById("card");
    const card = document.getElementById("wrapper");
  
    letter.style.top = -500 + "px";
    letter.style.zIndex = 4;
  
    let i = 0;
    let id = null;
    clearInterval(id);
  
    id = setInterval(() => {
      if (i == 100) {
        // lastPos = -i;
        clearInterval(id);
      } else {
        letter.style.top = -400 + i * 5 + "px";
        letter.style.transform = "rotate(" + -i / 18 + "deg)";
  
        card.style.transform = "rotate(" + i / 18 + "deg)";
  
        i++;
      }
    }, 10);

    setTimeout(openCard, 3000);
}

    function openCard() {
        const letter = document.getElementById("card");
        const outside = document.getElementById("out-side");
        const inside = document.getElementById("in-side");
        let i = 0;
        let id = null;
        clearInterval(id);
      
        id = setInterval(() => {
          if (i == 100) {
            // lastPos = -i;
            clearInterval(id);
          } else {

            outside.style.transform = "rotateY(-180deg)";
            i++;
          }
        }, 10);
  }
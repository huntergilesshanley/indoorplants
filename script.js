/*const plants = [{"imageurl": 'hibiscus.jpg',
          "name": 'Hibiscus',
          "scientific_name": 'HB',
          "price": '30'}];*/

          let plants = [];

function genWord() {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var consts =  ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'qu', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z', 'tt', 'ch', 'sh'];
  
  var len = 5;
  
  var word = '';
  
  var is_vowel = false;
  
  var arr;
  
  word+=consts[Math.floor((Math.random()*consts.length))].toUpperCase();
  for (var i = 0; i < len; i++) {
  
    if (is_vowel) arr = vowels
    else arr = consts
    is_vowel = !is_vowel;
  
    word += arr[Math.round(Math.random()*(arr.length-1))];
  }
  
return word;
}
// generate random plants


  const elements = document.querySelector("#items");

let load = async () => {
  plants = [];
  for(i=0;i<25;i++) {
    let word = genWord();
    ///"https://source.unsplash.com/random/500x750/?fruit&seed="+genWord()
    plants.push( {
      imageurl: "' ("+((Math.floor(Math.random()*6))+1)+").webp'",
      name: word,
      scientific_name: word+ genWord(), 
      size: Math.random() > 0.5 ? 1 : 2,
      price: Math.floor(Math.random() * 150) + (Math.random() > 0.5 ? 0.5 : 0)
    });
  }
    /*
    let response = await fetch('plants.json');

    if (response.ok) { 
      let json = await response.json();
    } else {
      alert("HTTP-Error: " + response.status);
    }
    */
  
   plants.forEach(plant => {
        let elm = document.createElement("LI");
        let text=document.createElement("P");
        text.innerHTML = plant.name;
        text.classList.add("text");
        elm.appendChild(text);
        elm.style.display="flex";
        elm.ariaRoleDescription="img";
        elm.ariaLabel="An image of a " + plant.name;
        elm.style.flexDirection="column";
        elm.style.backgroundImage="url('"+plant.imageurl+"')";
        elm.style.backgroundRepeat="no-repeat";
        elm.style.backgroundSize="cover";
        elm.classList.add("shoudadonethisbefore");
elm.style.flexGrow="1";
let scientific_name = document.createElement("SMALL");
scientific_name.style.margin="5px";
scientific_name.style.color="#d1cece;";
text.appendChild(scientific_name);
scientific_name.innerHTML=`(${plant.scientific_name})`;
        elm.style.width=plant.size==1?"200px":"300px";
        let div = document.createElement("DIV");
        div.classList.add("controls");
        div.style.marginTop = "auto";
        let button = document.createElement("BUTTON");
        button.classList.add("buyButton");
        button.innerHTML="Buy $"+plant.price;
        div.appendChild(button);
        elm.appendChild(div);
        elements.appendChild(elm);
        button.onclick=()=>{alert("Buying "+plant.name)}
        
    });
}


window.onload = load;

document.querySelector("body").style.height = "1000px";

window.addEventListener("scroll", function() {
    var body = document.querySelector("body");
    var height = body.style.height;
    height = height.slice(0, -2);
    height = Number(height);
    return function() {
        if(height - window.scrollY < 700) {
         load();
            height += height / 2;
        }
        body.style.height = height + "px";
    };
}());

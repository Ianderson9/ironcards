var dark_blue,light_blue,white,grey,light_green;
var player;
// var back;
var computer;
var paper;
var assignments;
var questions;
var cards;
// var assignmentData;
function preload() {

  // assignmentData = loadJSON("js/assignments.json");
}
function setup() {
  createCanvas(1315*.8,912*.8);
  background(51);
  elements_setup();
  loadData();
  computer = loadImage('images/computer.png');
  paper = loadImage('images/paper.png');
  player = new Player();
  // console.log(data);
  // back = loadImage("interface.png");
}

function draw() {
  background(light_green);
  // image(back,0,0);
  elements_draw();
  fill(light_blue);
  textSize(34*.8);
  textAlign(LEFT);
  text("Time: " + player.time + "hrs",35*.8,587*.8+34*.8);
  text("Skill Lvl: " + player.skill,1108*.8,587*.8+34*.8);
  fill(white);
  textSize(26*.8);

  text("Train",1131*.8,758*.8+26*.8);
  text("Submit",1118*.8,817*.8+26*.8);
  // image(computer,49*.8,181*.8,computer.width,computer.height);
  // image(computer,49*.8,181*.8,computer.width/10,computer.height/10);
  // image(paper,531*.8,93*.8,270*.8,386*.8);
  fill(white);
  rect(49*.8,181*.8,416*.8,298*.8);
  rect(531*.8,93*.8,270*.8,386*.8);
  player.show();
  fill(dark_blue);
  rect(129*.8,692*.8,104*.8,166*.8,5);
}

function mouseClicked() {
  if(mouseX > 1100*.8 && mouseX < 1100*.8 + 116*.8 && mouseY > 815*.8 && mouseY < 815*.8+41*.8) {
    // console.log("Submit clicked");
    player.currentAssignment.addUpPoints();
    for(let i = 0; i < player.hand.length; i++) {
      if(player.hand[i].answered) {
        player.gotCards.push(new Card(player.hand[i].name,player.hand[i].skill,player.hand[i].time,player.hand[i].question));
        player.hand[i] = getCard();
      }
    }

    // console.log(player);
  }else if(mouseX > 1100*.8 && mouseX < 1100*.8+116*.8 && mouseY > 753*.8 && mouseY < 753*.8+41*.8) {
    player.skill += 5;
    player.time -= 10;
  }

}

function keyTyped() {
  console.log(player.hand)
}

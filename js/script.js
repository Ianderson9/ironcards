var dark_blue,light_blue,white,grey,light_green;
var player;
// var back;
var computer;
var paper;
var assignments;
var questions;
var cards;
var over;
var drops;
// var assignmentData;
function preload() {

  // assignmentData = loadJSON("js/assignments.json");
}
function setup() {
  createCanvas(1315*.8,912*.8+20);
  background(51);
  elements_setup();
  loadData();
  computer = loadImage('images/computer.png');
  paper = loadImage('images/paper.png');
  player = new Player();
  over = false;
  drops = [];
  for(let i = 0; i < 100; i++) {
    drops.push(new Drop());
  }
  // console.log(data);
  // back = loadImage("interface.png");
}

function draw() {
  background(light_green);
  for(let i = 0; i < drops.length; i++) {
    drops[i].show();
  }
  // image(back,0,0);
  elements_draw();
  fill(light_blue);
  textSize(34*.8);
  textAlign(LEFT);
  text("Time: " + player.time + "hrs",35*.8,587*.8+34*.8);
  text("Skill Lvl: " + floor(player.skill/11),1108*.8,587*.8+34*.8);
  fill(white);
  textSize(26*.8);
  for(let i = 0; i < max(player.skill,0)%11; i++) {
    fill(accent);
    rect(18*.8+116*.8*i,544*.8,116*.8,25*.8);
  }
  fill(white);
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
  fill(0,60);
  rect(0,height-15,width,50);
  if(player.time <= 0) {
    colorMode(HSB);
    fill(frameCount%255,100,100);
    rect(0,0,width,height);
    textSize(50);
    fill(white);
    text("Game Over!",width/2,height/2);
    if(over == false) {
      var go = createA("leaderboards.html");
    }
  }
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
Drop = function() {
  this.pos = createVector(random(width),random(height));
  this.vel = random(5,10);
  this.character = floor(random(2));
  this.show = function() {
    text(this.character,this.pos.x,this.pos.y);
    this.pos.y += this.vel;
    if(this.pos.y > height) {
      this.pos.y = -10;
    }
  }
}

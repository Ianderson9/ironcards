var dark_blue,light_blue,white,grey,light_green;
var score;
var skill;
var time;
// var back;
var computer;
var paper;
function setup() {
  createCanvas(1315*.8,912*.8);
  background(51);
  elements_setup();
  score = 0;
  skill = 0;
  time = 100;
  computer = loadImage('images/computer.png');
  paper = loadImage('images/paper.png');
  // back = loadImage("interface.png");
}

function draw() {
  background(light_green);
  // image(back,0,0);
  elements_draw();
  fill(light_blue);
  textSize(34*.8);
  text("Time: " + time + "hrs",35*.8,587*.8+34*.8);
  text("Skill Lvl: " + skill,1108*.8,587*.8+34*.8);
  fill(white);
  textSize(26*.8);
  text("Train",1131*.8,758*.8+26*.8);
  text("Submit",1118*.8,817*.8+26*.8);
  image(computer,49*.8,181*.8);
  // image(computer,49*.8,181*.8,computer.width/10,computer.height/10);
  image(paper,531*.8,93*.8,270*.8,386*.8);
  fill(grey);
  rect(49*.8,181*.8,416*.8,298*.8);
  rect(531*.8,93*.8,270*.8,386*.8);
}

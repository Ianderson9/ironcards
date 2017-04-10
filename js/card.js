Card = function(name,skill,time,q) {
  this.pos = createVector(129*.8,692*.8);
  this.target = createVector(129*.8,692*.8);
  this.name = name;
  this.skill = skill;
  this.time = time;
  this.question = getQuestion();
  this.flipped = false;
  this.answered = false;
  this.show = function() {
    this.pos.add(p5.Vector.sub(this.target,this.pos).div(10));
    fill(white);
    push();
    translate(this.pos.x,this.pos.y);
    rect(0,0,100*.8,162*.8,7*.8);
    textAlign(CENTER);
    textSize(15*.8);
    fill(dark_blue);
    text(this.name,(100*.8)/2,8+17*.8);
    fill(dark_blue);
    rect(0,50*.8,100*.8,80*.8);
    fill(light_green);
    textSize(16*.8);
    text("Skill: " + this.skill,(100*.8)/2,58*.8+16*.8);
    text("Time: " + this.time,(100*.8)/2,99*.8+16*.8);
    pop();
    if(this.flipped) {
      this.question.selected = true;
    } else {
      this.question.selected = false;
    }
    if(this.flipped) {
      this.question.show();
      // console.log(this.name);
    }
  }
}

function getCard() {
  var num = floor(random(cards.length));
  var card = new Card(cards[num].name,cards[num].skill,cards[num].time,cards[num].question);
  return card;

}

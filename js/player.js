Player = function() {
  this.deck = [];
  this.hand = [];
  var testq = new Question("The correct answer is a","a","b","c","d");
  this.hand.push(new Card("Extension",0,10,testq));
  this.hand.push(new Card("Extension",0,10,testq));
  this.hand.push(new Card("Extension",0,10,testq));
  this.hand.push(new Card("Extension",0,10,testq));
  this.hand.push(new Card("Extension",0,10,testq));
  this.score = 0;
  this.skill = 0;
  this.time = 100;
  this.show = function() {
    for(let i = 0; i < 5; i++) {
      fill(white);
      push();
      translate(358*.8 + i*126*.8,695*.8);
      rect(0,0,100*.8,162*.8,7*.8);
      textAlign(CENTER);
      textSize(17*.8);
      fill(dark_blue);
      text(this.hand[i].name,(100*.8)/2,8+17*.8);
      fill(dark_blue);
      rect(0,50*.8,100*.8,80*.8);
      fill(light_green);
      textSize(16*.8);
      text("Skill: +" + this.hand[i].skill,(100*.8)/2,58*.8+16*.8);
      text("Time: +" + this.hand[i].time,(100*.8)/2,99*.8+16*.8);
      pop();
    }
  }
}

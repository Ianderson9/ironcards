Player = function() {
  this.deck = [];
  this.hand = [];
  var testq = new Question("The correct answer is a I tell you, the correct answer is a","a","b","c","d");
  this.hand.push(new Card("Extension",0,10,testq));
  this.hand.push(new Card("Extension",0,10,testq));
  this.hand.push(new Card("Extension",0,10,testq));
  this.hand.push(new Card("Extension",0,10,testq));
  this.hand.push(new Card("Extension",0,10,testq));
  this.score = 0;
  this.skill = 0;
  this.time = 100;
  this.show = function() {
    for(let i = 0; i < this.hand.length; i++) {
      if(mouseIsPressed && mouseX > this.hand[i].pos.x && mouseX < this.hand[i].pos.x + 100*.8) {
        if(mouseY > this.hand[i].pos.y && mouseY < this.hand[i].pos.y + 162*.8) {
          this.hand[i].flipped = true;
          for(let j = 0; j < this.hand.length; j++) {
            if(i != j) {
              if(this.hand[j].answered == false) {
                this.hand[j].flipped = false;
              }
            }
          }

        }
      }
    }
    for(let i = 0; i < 5; i++) {
      if(this.hand[i].flipped == false) {
        this.hand[i].target = createVector(358*.8 + i*126*.8,695*.8);
      } else if(this.hand[i].answered == true){
        this.hand[i].target = createVector(358*.8 + i*126*.8,695*.8-50);
      } else if(this.hand[i].flipped == true){
        this.hand[i].target = createVector(358*.8 + i*126*.8,695*.8-50+sin(frameCount/5)*5);
        this.hand[i].question.show();
      }
      this.hand[i].show();
    }
  }
}

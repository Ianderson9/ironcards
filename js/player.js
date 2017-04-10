Player = function() {
  this.deck = [];
  this.hand = [];
  this.hand.push(getCard());
  this.hand.push(getCard());
  this.hand.push(getCard());
  this.hand.push(getCard());
  this.hand.push(getCard());
  this.score = 0;
  this.skill = 0;
  this.time = 100;
  this.gotCards = [];
  this.lostCards = [];
  this.assignments = [];
  this.currentAssignment = getAssignment();
  this.show = function() {

    // Test if mouse clicked card

    for(let i = 0; i < this.hand.length; i++) {
      if(mouseIsPressed && mouseX > this.hand[i].pos.x && mouseX < this.hand[i].pos.x + 100*.8 && mouseY > this.hand[i].pos.y && mouseY < this.hand[i].pos.y + 162*.8) {
        this.hand[i].flipped = true;
        // this.hand[i].question.selected = true;
        for(let j = 0; j < this.hand.length; j++) {
          if(i != j) {
            // console.log(i);
            // console.log(j);
            // this.hand[j].question.selected = false;
            this.hand[j].flipped = false;
            // if(this.hand[j].answered == false) {
            //   this.hand[j].flipped = false;
            // }
          }
        }
      }
    }

    // Handle flipped and answered

    for(let i = 0; i < 5; i++) {
      if(this.hand[i].answered == true){
        this.hand[i].target = createVector(358*.8 + i*126*.8,695*.8-50);
      } else if(this.hand[i].flipped == false) {
        this.hand[i].target = createVector(358*.8 + i*126*.8,695*.8);
      } else if(this.hand[i].flipped == true){
        // this.hand[i].question.selected = true;
        this.hand[i].target = createVector(358*.8 + i*126*.8,695*.8-50+sin(frameCount/5)*5);
        // this.hand[i].question.show();
      }
      // if(this.hand[i].question.selected) {
      //   this.hand[i].question.show();
      // }
      this.hand[i].show();
    }

    // Get if answerd

    for(let i = 0; i < this.hand.length; i++) {
      for(let j = 0; j < this.hand[i].question.boxes.length; j++) {
        if (this.hand[i].question.boxes[j] == 1) {
          // console.log(this.hand[i].name);
          this.hand[i].answered = true;
        }
      }
    }

    // Show assignment

    this.currentAssignment.show();
    if(this.currentAssignment.done) {
      this.assignments.push(new Assignment(this.currentAssignment.name,this.currentAssignment.time));
      this.currentAssignment = getAssignment();
      console.log(this.assignments);
    }

    // show score
    fill(light_green);
    ellipse(1080*.8,286*.8,154*.8,156*.8);
    fill(white);
    textSize(34);
    textAlign(CENTER);
    text(this.score+ "pts",1080*.8,300*.8);

    // show pts
    fill(light_blue);
    ellipse(673*.8,394*.8,80,80);
    textSize(25);
    textAlign(CENTER);
    fill(white);
    text(this.currentAssignment.score+"pts",673*.8,405*.8);
  }


}

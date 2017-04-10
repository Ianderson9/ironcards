Question = function(prompt,right,wronga,wrongb,wrongc) {
  this.prompt = prompt;
  this.right = right;
  this.wrong = [wronga,wrongb,wrongc];
  this.boxes = [0,0,0,0];
  this.selected = false;
  this.rightPosition = floor(random(4));
  this.answers = [];
  this.correct = false;
  var atrack = 0;
  for(let i = 0; i < 4; i++) {
    if(i == this.rightPosition) {
      this.answers.push(this.right);
    }else {
      this.answers.push(this.wrong[atrack]);
      atrack += 1;
    }
  }
  this.show = function() {
    fill(grey);
    textSize(19*.8);
    textAlign(CENTER);
    text(this.prompt,148*.8,208*.8,219*.8,78*.8);
    textSize(12);
    textAlign(CENTER);
    if(this.boxes[0] == 1) {
      fill(light_green);
    } else {
      fill(light_blue);
    }
    rect(135*.8,286*.8,244*.8,25*.8+5*.8);
    fill(grey);
    text(this.answers[0],221*.8,292*.8,100*.8,78*.8);
    for(let i = 0; i < this.wrong.length; i++) {
      if(this.boxes[i+1] == 1) {
        fill(light_green);
      } else {
        fill(light_blue);
      }

      rect(135*.8,286*.8+37*.8*i+37*.8+5*.8,244*.8,25*.8);
      fill(grey);
      text(this.answers[i+1],221*.8,292*.8+37*.8+i*37*.8,100*.8,78*.8);
    }

    // get answer

    for(let i = 0; i < this.boxes.length; i++) {
      if(mouseIsPressed && this.selected) {

        if(mouseX > 135*.8 && mouseX < 135*.8+244*.8) {
          if(mouseY > 286*.8+37*.8*i+5*.8 && mouseY < 286*.8+37*.8*i+5*.8+20*.8) {
            console.log(i);
            this.boxes[i] = 1;
            for(let j = 0; j < this.boxes.length; j++) {
              if(i != j) {
                this.boxes[j] = 0;
              }
            }
          }
        }
      }
    }

    for(let i = 0; i < this.boxes.length; i++) {
      if(i == this.rightPosition && this.boxes[i] == 1) {
        this.correct = true;
      }
    }
  }
}

function getQuestion() {
  var chosen = questions[floor(random(questions.length))];
  var q = new Question(chosen.prompt,chosen.right,chosen.wronga,chosen.wrongb,chosen.wrongc)
  return q;
}

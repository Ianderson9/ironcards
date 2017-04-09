Question = function(prompt,right,wronga,wrongb,wrongc) {
  this.prompt = prompt;
  this.right = right;
  this.wrong = [wronga,wrongb,wrongc];
  this.show = function() {
    fill(grey);
    textSize(19*.8);
    textAlign(CENTER);
    text(this.prompt,148*.8,208*.8,219*.8,78*.8);
    textSize(12);
    textAlign(CENTER);
    fill(light_blue);
    rect(135*.8,286*.8,244*.8,25*.8+5*.8);
    fill(grey);
    text(this.right,221*.8,292*.8,100*.8,78*.8);
    for(let i = 0; i < this.wrong.length; i++) {
      fill(light_blue);
      rect(135*.8,286*.8+37*.8*i+37*.8+5*.8,244*.8,25*.8);
      fill(grey);
      text(this.wrong[i],221*.8,292*.8+37*.8+i*37*.8,100*.8,78*.8);
    }
  }
}

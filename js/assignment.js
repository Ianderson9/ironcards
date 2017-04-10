
Assignment = function(name,t) {
  this.name = name;
  this.time = t;
  this.score = 0;
  this.bonuses = [];
  this.delay = 100;
  this.countdown = false;
  this.done = false;
  this.show = function() {
    textSize(20*.8);
    textAlign(LEFT);
    fill(grey);
    text(this.name+"("+this.time+")",589*.8,93*.8+39*.8);
    if(this.countdown) {
      for(let i = 0; i < this.bonuses.length; i++) {
        textSize(15*.8);
        fill(dark_blue);

        this.bonuses[i].target = createVector(584*.8,159*.8 + 30*i)
        if(this.bonuses[i].type == 0) {
          text(this.bonuses[i].name + ": " + this.bonuses[i].val + " time points",this.bonuses[i].pos.x,this.bonuses[i].pos.y,150,200);
        } else if(this.bonuses[i].type == 1) {
          text(this.bonuses[i].name + ": " + this.bonuses[i].val + " skill points",this.bonuses[i].pos.x,this.bonuses[i].pos.y,150,200);
        } else if(this.bonuses[i].type == 2) {
          text(this.bonuses[i].name + ": " + this.bonuses[i].val + " Global points",this.bonuses[i].pos.x,this.bonuses[i].pos.y,150,200);
        } else if(this.bonuses[i].type == 3) {
          text(this.bonuses[i].name + ": " + this.bonuses[i].val + " Global life points",this.bonuses[i].pos.x,this.bonuses[i].pos.y,150,200);
        }

        this.bonuses[i].update();
      }
      this.delay -= 1;
      if(this.delay <= 0) {
        this.done = true;
      }
    }
  }
  this.addUpPoints = function() {
    // 0 = time
    // 1 = skill
    // 2 = points
    // 3 = life
    this.bonuses.push(new Bonus("Base skill deduct",0,player.skill));
    this.bonuses.push(new Bonus("Points for skill level",2,max(player.skill,0)));
    this.bonuses.push(new Bonus("Assignment points",2,this.score));
    for(let i = 0; i < player.hand.length; i++) {
      if(player.hand[i].answered) {
        if(player.hand[i].question.correct) {
          this.bonuses.push(new Bonus(player.hand[i].name,0,player.hand[i].time));
          this.bonuses.push(new Bonus(player.hand[i].name,1,player.hand[i].skill));
        } else {
          this.bonuses.push(new Bonus(player.hand[i].name,0,player.hand[i].time*-1));
          this.bonuses.push(new Bonus(player.hand[i].name,1,player.hand[i].skill*-1));
        }
      }
    }
    var t = this.time;
    for(let i = 0; i < this.bonuses.length; i++) {
      if(this.bonuses[i].type == 0) {
        t -= this.bonuses[i].val;
      }
    }
    this.bonuses.push(new Bonus("Remaining assignment time",3,t*-1));

    for(let i = 0; i < this.bonuses.length; i++) {
      if(this.bonuses[i].type == 0) {
        this.time -= this.bonuses[i].val;
      } else if(this.bonuses[i].type == 1) {
        player.skill += this.bonuses[i].val;
      } else if(this.bonuses[i].type == 2) {
        player.score += this.bonuses[i].val;
      } else if(this.bonuses[i].type == 3) {
        player.time += this.bonuses[i].val;
      }
    }



    this.countdown = true;


  }
}

Bonus = function(name,type,val) {
  this.name = name;
  this.type = type;
  this.val = val;
  this.pos = createVector(584*.8,140*.8);
  this.target = createVector(584*.8,140*.8);
  this.update = function() {
    this.pos.add(p5.Vector.sub(this.target,this.pos).div(10));
  }
}

function getAssignment() {
  var chosen = floor(random(assignments.length));
  var a = new Assignment(assignments[chosen].name,assignments[chosen].time);
  a.score = assignments[chosen].score;
  return a;
}

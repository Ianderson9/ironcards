var elements;
function elements_setup() {
  dark_blue =color('#202F37');
  light_blue =color('#4EC4CF');
  white = color('#E6E6E6');
  grey = color('#6C6F7F');
  light_green = color('#56E39F');
  accent = color('#A80874');
  elements = [];
  elements.push (new UIElement(18,23,846,513,10,dark_blue));
  elements.push (new UIElement(864,23,433,513,10,grey));
  elements.push (new UIElement(18,544,1280,25,5,grey));
  elements.push (new UIElement(20,580,1279,315,0,grey));
  elements.push (new UIElement(20,580,219,61,0,dark_blue));
  elements.push (new UIElement(1080,580,219,61,0,dark_blue));
  elements.push (new UIElement(1100,760,116,41,9,color('#418A91')));
  elements.push (new UIElement(1100,753,116,41,9,light_blue));
  elements.push (new UIElement(1100,822,116,41,9,color('#418A91')));
  elements.push (new UIElement(1100,815,116,41,9,light_green));
}

function elements_draw() {
  for(let i = 0; i < elements.length; i++) {
    elements[i].show();
  }
}

UIElement = function(x,y,w,h,r,c) {
  this.pos = createVector(x*.8,y*.8);
  this.w = w*.8;
  this.h = h*.8;
  this.r = r*.8;
  this.c = c;

  this.show = function() {
    noStroke();
    fill(this.c);
    rect(this.pos.x,this.pos.y,this.w,this.h,this.r);
  }
}

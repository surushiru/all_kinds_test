today = new Date();
now = today.toLocaleDateString();

function preload() {
  character = [];
  for (i = 0; i < 18; i++) {
    character[i] = loadImage("./img/" + i + ".png");
  }
}
function setup() {
  print(windowWidth, windowHeight);
  createCanvas(windowWidth, windowHeight);
  background(120);
  // push()
  // fill("#4A4A4A")
  // textSize(32);
  // text("請點擊螢幕", windowWidth/2.3, windowHeight/2.2);
  // pop()
  //計算點擊數字
  // push();
  // fill(120);
  // noStroke();
  // ellipse(60, 60, 55, 55);
  // pop();
  // textSize(32);
  // text(0, 40, 70);
}
function draw() {}

let clicknumber = 0;

function touchStarted() {
  let randomCharacter = random(character);
  let size = random(120, 120);
  image(randomCharacter, mouseX - 40, mouseY - 40, size, size);

  //計算點擊數字
  clicknumber++;
  // push();
  // fill(120);
  // noStroke();
  // ellipse(60, 60, 55, 55);
  // pop();
  // textSize(32);
  // text(clicknumber, 40, 70);
}

function keyTyped() {
  if (key === "s") {
    saveCanvas(now, "jpg");
  }
}

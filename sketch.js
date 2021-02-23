const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var money = 100;
var harvest_seasonb = false;
var harvest_seasonc = false;
var harvest_seasonw = false;
var harvest_seasonbl = false;
var harvest_seasonca = false;
var harvest_seasonch = false;
var harvest_seasonco = false;
var harvest_seasonha = false;

var start_button,
  shop_button,
  harvest_buttonb,
  harvest_buttonc,
  harvest_buttonw,
  harvest_buttonbl,
  harvest_buttonca,
  harvest_buttonch,
  harvest_buttonco,
  harvest_buttonha,
  start_positionxb = 115;
start_positionyb = 150;

start_positionxw = 115;
start_positionyw = 470;

start_positionxc = 450;
start_positionyc = 160;

start_positionxca = 450;
start_positionyca = 470;

start_positionxco = 800;
start_positionyco = 100;

start_positionxch = 780;
start_positionych = 460;

start_positionxbl = 1110;
start_positionybl = 150;

start_positionxha = 1120;
start_positionyha = 470;
var banana = [],
  banana_price = 5,
  banana_revenue = 15,
  banana_available = 9,
  banana_purchased = 0,
  banana_counter,
  banana_image;

var wheat = [],
  wheat_price = 7,
  wheat_revenue = 20,
  wheat_available = 9,
  wheat_purchased = 0,
  wheat_counter,
  wheat_image;

var carrot = [],
  carrot_price = 10,
  carrot_revenue = 30,
  carrot_available = 9,
  carrot_purchased = 0,
  carrot_counter,
  carrot_image;

var blueberry = [],
  blueberry_price = 20,
  blueberry_revenue = 50,
  blueberry_available = 9,
  blueberry_purchased = 0,
  blueberry_counter,
  blueberry_image;

var cauliflower = [],
  cauliflower_price = 7,
  cauliflower_revenue = 16,
  cauliflower_available = 9,
  cauliflower_purchased = 0,
  cauliflower_counter,
  cauliflower_image;

var chili = [],
  chili_price = 8,
  chili_revenue = 20,
  chili_available = 9,
  chili_purchased = 0,
  chili_counter,
  chili_image;

var corn = [],
  corn_price = 9,
  corn_revenue = 21,
  corn_available = 9,
  corn_purchased = 0,
  corn_counter,
  corn_image;

var hamimelon = [],
  hamimelon_price = 16,
  hamimelon_revenue = 30,
  hamimelon_available = 9,
  hamimelon_purchased = 0,
  hamimelon_counter,
  hamimelon_image;

var state = "intro";

function preload() {
  bg = loadImage("plant/background.png");
  banana_image = loadImage("plant/banana.svg");
  wheat_image = loadImage("plant/wheat.svg");
  carrot_image = loadImage("plant/carrot.svg");
  blueberry_image = loadImage("plant/blueberry.svg");
  cauliflower_image = loadImage("plant/cauliflower.svg");
  chili_image = loadImage("plant/chili.svg");
  corn_image = loadImage("plant/corn.svg");
  hamimelon_image = loadImage("plant/hamimelon.svg");
}

function setup() {
  var canvas = createCanvas(1440, 800);
  engine = Engine.create();
  world = engine.world;

  // About Page
  about_button = createButton("How to Play");
  about_button.mousePressed(about_state);
  about_button.position(770, 400);

  //first page
  main = new Plant(1100, 358.5, 500, 500);
  main.image = loadImage("logo.png");

  title = new Plant(500, 300, 700, 100);
  title.image = loadImage("name.png");

  start_button = createButton("Start");
  start_button.mousePressed(play_state);
  start_button.position(720, 400);

  //Harvesting
  harvest_buttonb = createButton("Harvest");
  harvest_buttonb.position(189, 80);

  harvest_buttonc = createButton("Harvest");
  harvest_buttonc.position(489, 80);

  harvest_buttonw = createButton("Harvest");
  harvest_buttonw.position(789, 80);

  harvest_buttonbl = createButton("Harvest");
  harvest_buttonbl.position(1089, 80);

  harvest_buttonca = createButton("Harvest");
  harvest_buttonca.position(189, 750);

  harvest_buttonch = createButton("Harvest");
  harvest_buttonch.position(489, 750);

  harvest_buttonco = createButton("Harvest");
  harvest_buttonco.position(789, 750);

  harvest_buttonha = createButton("Harvest");
  harvest_buttonha.position(1089, 750);

  //shopping page
  shop_button = createButton("Shop");
  shop_button.mousePressed(shoppin_state);
  shop_button.position(88, 56);

  back_button = createButton("Back");
  back_button.mousePressed(intro_state);
  back_button.position(1289, 70);
  back1_button = createButton("Back");
  back1_button.mousePressed(intro_state);
  back1_button.position(1289, 80);
  back2_button = createButton("Back");
  back2_button.mousePressed(play_state);
  back2_button.position(1289, 80);

  //Counters

  banana_counter = createSprite(100, 200, 40, 40);
  banana_counter.addImage(banana_image);
  wheat_counter = createSprite(100, 350, 40, 40);
  wheat_counter.addImage(wheat_image);
  blueberry_counter = createSprite(100, 500, 40, 40);
  blueberry_counter.addImage(blueberry_image);
  cauliflower_counter = createSprite(100, 650, 40, 40);
  cauliflower_counter.addImage(cauliflower_image);
  chili_counter = createSprite(800, 200, 40, 40);
  chili_counter.addImage(chili_image);
  corn_counter = createSprite(800, 350, 40, 40);
  corn_counter.addImage(corn_image);
  hamimelon_counter = createSprite(800, 500, 40, 40);
  hamimelon_counter.addImage(hamimelon_image);
  carrot_counter = createSprite(800, 650, 40, 40);
  carrot_counter.addImage(carrot_image);

  // End page
  main1 = new Plant(680, 550, 500, 500);
  main1.image = loadImage("logo.png");
  streamer = new Plant(250, 550, 500, 500);
  streamer.image = loadImage("confetti.png");
  streamer1 = new Plant(1110, 550, 500, 500);
  streamer1.image = loadImage("confetti1.png");
}

function draw() {
  Engine.update(engine);

  //first page
  if (state === "intro") {
    background("white");
    main.display();
    title.display();
    start_button.show();
    shop_button.hide();
    about_button.show();
    harvest_buttonb.hide();
    harvest_buttonw.hide();
    harvest_buttonc.hide();
    harvest_buttonbl.hide();
    harvest_buttonca.hide();
    harvest_buttonch.hide();
    harvest_buttonco.hide();
    harvest_buttonha.hide();
    back_button.hide();
    back1_button.hide();
    back2_button.hide();

    banana_counter.visible = false;
    wheat_counter.visible = false;
    carrot_counter.visible = false;
    cauliflower_counter.visible = false;
    chili_counter.visible = false;
    blueberry_counter.visible = false;
    corn_counter.visible = false;
    wheat_counter.visible = false;
    hamimelon_counter.visible = false;
  }
  // About
  else if (state === "about") {
    background("white");
    back_button.show();
    back1_button.hide();
    back2_button.hide();
    textSize(100);
    text("HOW TO PLAY", 300, 100);
    textSize(30);
    text(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut \n labore et dolore  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco \n ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit \n cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in \n culpa qui officia deserunt mollit anim id est laborum.",
      100,
      200
    );
    start_button.hide();
    about_button.hide();
  }

  //farm
  else if (state === "play") {
    background(bg);

    about_button.hide();
    start_button.hide();
    back_button.hide();
    manure_charge();
    labour_charge();
    back1_button.show();
    back2_button.hide();
    harvest_buttonb.show();
    harvest_buttonc.show();
    harvest_buttonw.show();
    harvest_buttonbl.show();
    harvest_buttonca.show();
    harvest_buttonch.show();
    harvest_buttonco.show();
    harvest_buttonha.show();

    harvest_buttonb.mousePressed(after_harvest_banana);
    harvest_buttonw.mousePressed(after_harvest_wheat);
    harvest_buttonc.mousePressed(after_harvest_carrot);
    harvest_buttonbl.mousePressed(after_harvest_blueberry);
    harvest_buttonca.mousePressed(after_harvest_cauliflower);
    harvest_buttonch.mousePressed(after_harvest_chili);
    harvest_buttonco.mousePressed(after_harvest_corn);
    harvest_buttonha.mousePressed(after_harvest_hamimelon);

    banana_counter.visible = false;
    wheat_counter.visible = false;
    carrot_counter.visible = false;
    cauliflower_counter.visible = false;
    chili_counter.visible = false;
    blueberry_counter.visible = false;
    corn_counter.visible = false;
    hamimelon_counter.visible = false;

    shop_button.show();
    //console.log(banana_purchased);
    for (var i = 0; i < banana.length; i++) {
      banana[i].display();
    }
    for (var i = 0; i < wheat.length; i++) {
      wheat[i].display();
    }
    for (var i = 0; i < carrot.length; i++) {
      carrot[i].display();
    }
    for (var i = 0; i < blueberry.length; i++) {
      blueberry[i].display();
    }
    for (var i = 0; i < cauliflower.length; i++) {
      cauliflower[i].display();
    }
    for (var i = 0; i < corn.length; i++) {
      corn[i].display();
    }
    for (var i = 0; i < chili.length; i++) {
      chili[i].display();
    }
    for (var i = 0; i < hamimelon.length; i++) {
      hamimelon[i].display();
    }

    text("Money in wallet: " + money, 80, 125);
  }

  //shopping page
  else if (state == "shopping") {
    background("white");

    back_button.hide();
    back1_button.hide();
    back2_button.show();
    manure_charge();
    labour_charge();
    banana_counter.visible = true;
    wheat_counter.visible = true;
    carrot_counter.visible = true;
    cauliflower_counter.visible = true;
    chili_counter.visible = true;
    blueberry_counter.visible = true;
    corn_counter.visible = true;
    hamimelon_counter.visible = true;

    textSize(110);
    text("SHOP", 450, 100);
    textSize(15);
    text(
      "Price: " +
        banana_price +
        "\nRevenue: " +
        banana_revenue +
        "\nMoney in wallet: " +
        money,
      200,
      180
    );
    text(
      "Price: " +
        wheat_price +
        "\nRevenue: " +
        wheat_revenue +
        "\nMoney in wallet: " +
        money,
      200,
      330
    );
    text(
      "Price: " +
        carrot_price +
        "\nRevenue: " +
        carrot_revenue +
        "\nMoney in wallet: " +
        money,
      200,
      480
    );
    text(
      "Price: " +
        blueberry_price +
        "\nRevenue: " +
        blueberry_revenue +
        "\nMoney in wallet: " +
        money,
      200,
      630
    );
    text(
      "Price: " +
        chili_price +
        "\nRevenue: " +
        chili_revenue +
        "\nMoney in wallet: " +
        money,
      900,
      180
    );
    text(
      "Price: " +
        corn_price +
        "\nRevenue: " +
        corn_revenue +
        "\nMoney in wallet: " +
        money,
      900,
      330
    );
    text(
      "Price: " +
        cauliflower_price +
        "\nRevenue: " +
        cauliflower_revenue +
        "\nMoney in wallet: " +
        money,
      900,
      480
    );
    text(
      "Price: " +
        hamimelon_price +
        "\nRevenue: " +
        hamimelon_revenue +
        "\nMoney in wallet: " +
        money,
      900,
      630
    );
    shop_button.hide();
    about_button.hide();
    harvest_buttonb.hide();
    harvest_buttonc.hide();
    harvest_buttonw.hide();
    harvest_buttonbl.hide();
    harvest_buttonca.hide();
    harvest_buttonch.hide();
    harvest_buttonco.hide();
    harvest_buttonha.hide();

    if (mousePressedOver(banana_counter)) {
      if (banana_purchased < banana_available && money >= banana_price) {
        money -= banana_price;
        banana_purchased += 1;
        plant_banana();
      }
      play_state();
    }

    if (mousePressedOver(wheat_counter)) {
      if (wheat_purchased < wheat_available && money >= wheat_price) {
        money -= wheat_price;
        wheat_purchased += 1;
        plant_wheat();
      }
      play_state();
    }

    if (mousePressedOver(carrot_counter)) {
      if (carrot_purchased < carrot_available && money >= carrot_price) {
        money -= carrot_price;
        carrot_purchased += 1;
        plant_carrot();
      }
      play_state();
    }

    if (mousePressedOver(blueberry_counter)) {
      if (
        blueberry_purchased < blueberry_available &&
        money >= blueberry_price
      ) {
        money -= blueberry_price;
        blueberry_purchased += 1;
        plant_blueberry();
      }
      play_state();
    }
    if (mousePressedOver(chili_counter)) {
      if (chili_purchased < chili_available && money >= chili_price) {
        money -= chili_price;
        chili_purchased += 1;
        plant_chili();
      }
      play_state();
    }
    if (mousePressedOver(corn_counter)) {
      if (corn_purchased < corn_available && money >= corn_price) {
        money -= corn_price;
        corn_purchased += 1;
        plant_corn();
      }
      play_state();
    }
    if (mousePressedOver(cauliflower_counter)) {
      if (
        cauliflower_purchased < cauliflower_available &&
        money >= cauliflower_price
      ) {
        money -= cauliflower_price;
        cauliflower_purchased += 1;
        plant_cauliflower();
      }
      play_state();
    }
    if (mousePressedOver(hamimelon_counter)) {
      if (
        hamimelon_purchased < hamimelon_available &&
        money >= hamimelon_price
      ) {
        money -= hamimelon_price;
        hamimelon_purchased += 1;
        plant_hamimelon();
      }
      play_state();
    }
  }

  // End Page
  else if (state == "end") {
    background("white");
    textSize(70);
    text(
      "Amazing, You were able to make a \n                   1000 rupees! ",
      100,
      150
    );
    streamer.display();
    streamer1.display();
    main1.display();
    harvest_buttonb.hide();
    harvest_buttonbl.hide();
    harvest_buttonc.hide();
    harvest_buttonca.hide();
    harvest_buttonch.hide();
    harvest_buttonco.hide();
    harvest_buttonw.hide();
    harvest_buttonha.hide();
    shop_button.hide();
    back1_button.hide();
    back2_button.hide();
    back_button.hide();
    start_button.hide();
    about_button.hide();
  }

  if (money >= 1000) {
    state = "end";
  }

  drawSprites();
  //if(banana[0].timer)
  //text(banana[0].timer, width-200 , 50)
}

function play_state() {
  state = "play";
}

function about_state() {
  state = "about";
}

function intro_state() {
  state = "intro";
}

function shoppin_state() {
  state = "shopping";
}
var plantb = 0;
function plant_banana() {
  for (
    plantb = plantb;
    start_positionxb < width, plantb < banana_purchased;
    plantb++
  ) {
    banana.push(new Banana(start_positionxb, start_positionyb, 150, 150));
    console.log(banana_purchased);
    start_positionxb += 100;
    if (start_positionxb > 380) {
      start_positionxb = 100;
      start_positionyb += 100;
    }
    if (start_positionyb > 350) {
      start_positionxb = 115;
      start_positionyb = 150;
    }
  }
}
var plantw = 0;
function plant_wheat() {
  for (
    plantw = plantw;
    start_positionxw < width, plantw < wheat_purchased;
    plantw++
  ) {
    wheat.push(new Wheat(start_positionxw, start_positionyw, 100, 100));
    console.log(wheat);
    start_positionxw += 100;
    if (start_positionxw > 380) {
      start_positionxw = 115;
      start_positionyw += 100;
    }
    if (start_positionyw > 700) {
      start_positionxw = 115;
      start_positionyw = 470;
    }
  }
}

var plantc = 0;
function plant_carrot() {
  for (
    plantc = plantc;
    start_positionxc < width, plantc < carrot_purchased;
    plantc++
  ) {
    carrot.push(new Carrot(start_positionxc, start_positionyc, 100, 100));
    console.log(carrot);
    start_positionxc += 100;
    if (start_positionxc > 740) {
      start_positionxc = 450;
      start_positionyc += 100;
    }
    if (start_positionyc > 350) {
      start_positionxc = 450;
      start_positionyc = 160;
    }
  }
}
var plantca = 0;
function plant_cauliflower() {
  for (
    plantca = plantca;
    start_positionxca < width, plantca < cauliflower_purchased;
    plantca++
  ) {
    cauliflower.push(
      new Cauliflower(start_positionxca, start_positionyca, 100, 100)
    );
    console.log(cauliflower);
    start_positionxca += 100;
    if (start_positionxca > 740) {
      start_positionxca = 450;
      start_positionyca += 100;
    }
    if (start_positionyca > 800) {
      start_positionxca = 450;
      start_positionyca = 470;
    }
  }
}
var plantco = 0;
function plant_corn() {
  for (
    var plantco = plantco;
    start_positionxco < width, plantco < corn_purchased;
    plantco++
  ) {
    corn.push(new Corn(start_positionxco, start_positionyco, 100, 100));
    console.log(corn);
    start_positionxco += 100;
    /*if (start_positionxco > 1080) {
      start_positionxco = 800;
      start_positionyco += 100;
    }*/
  }
}
var plantch = 0;
function plant_chili() {
  for (
    plantch = plantch;
    start_positionxch < width, plantch < chili_purchased;
    plantch++
  ) {
    chili.push(new Chili(start_positionxch, start_positionych, 100, 100));
    console.log(chili);
    start_positionxch += 100;
    if (start_positionxch > 1050) {
      start_positionxch = 780;
      start_positionych += 100;
    }
    if (start_positionych > 800) {
      start_positionxch = 780;
      start_positionych = 460;
    }
  }
}
var plantbl = 0;
function plant_blueberry() {
  for (
    plantbl = plantbl;
    start_positionxbl < width, plantbl < blueberry_purchased;
    plantbl++
  ) {
    blueberry.push(
      new Blueberry(start_positionxbl, start_positionybl, 100, 100)
    );
    console.log(blueberry);
    start_positionxbl += 100;
    if (start_positionxbl > 1350) {
      start_positionxbl = 1110;
      start_positionybl += 100;
    }
    if (start_positionybl > 350) {
      start_positionxbl = 1110;
      start_positionybl = 150;
    }
  }
}
var plantha = 0;
function plant_hamimelon() {
  for (
    plantha = plantha;
    start_positionxha < width, plantha < hamimelon_purchased;
    plantha++
  ) {
    hamimelon.push(
      new Hamimelon(start_positionxha, start_positionyha, 100, 100)
    );
    console.log(hamimelon);
    start_positionxha += 100;
    if (start_positionxha > 1350) {
      start_positionxha = 1120;
      start_positionyha += 100;
    }
    if (start_positionyha > 770) {
      start_positionxha = 1120;
      start_positionyha = 470;
    }
  }
}

function after_harvest_banana() {
  if (harvest_seasonb === true && banana_purchased >= 0) {
    money = money + banana_revenue;
    banana.shift();
    banana_available += 1;
    console.log(banana_purchased);
  }
}

function after_harvest_wheat() {
  if (harvest_seasonw === true && wheat_purchased >= 0) {
    money = money + wheat_revenue;
    wheat.shift();
    wheat_available += 1;
  }
}
function after_harvest_carrot() {
  if (harvest_seasonc === true && carrot_purchased >= 0) {
    money = money + carrot_revenue;
    carrot.shift();
    carrot_available += 1;
  }
}

function after_harvest_blueberry() {
  if (harvest_seasonbl === true && blueberry_purchased >= 0) {
    money = money + blueberry_revenue;
    blueberry.shift();
    blueberry_available += 1;
  }
}

function after_harvest_chili() {
  if (harvest_seasonch === true && chili_purchased >= 0) {
    money = money + chili_revenue;
    chili.shift();
    chili_available += 1;
  }
}

function after_harvest_cauliflower() {
  if (harvest_seasonca === true && cauliflower_purchased >= 0) {
    money = money + cauliflower_revenue;
    cauliflower.shift();
    cauliflower_available += 1;
  }
}

function after_harvest_corn() {
  if (harvest_seasonco === true && corn__purchased >= 0) {
    money = money + corn_revenue;
    corn.shift();
    corn_available += 1;
  }
}

function after_harvest_hamimelon() {
  if (harvest_seasonha === true && hamimelon_purchased >= 0) {
    money = money + hamimelon_revenue;
    hamimelon.shift();
    hamimelon_available += 1;
  }
}

function labour_charge() {
  if (frameCount % 3000 === 0) {
    money -= 20;
    alert(
      "20 rupees have been deducted from your account to pay the labourers salary"
    );
  }
}
function manure_charge() {
  if (frameCount % 1000 === 0) {
    money -= 5;
    alert("5 rupees have been deducted from your account to pay for manure");
  }
}

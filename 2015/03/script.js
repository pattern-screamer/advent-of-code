const fs = require('node:fs');

function isHouseInArray(posX, posY, houseArray) {
  for (let houseIndex = 0; houseIndex < houseArray.length; houseIndex++) {
    if (posX === houseArray[houseIndex][0] && posY === houseArray[houseIndex][1]) {
      return houseIndex;
    }
  }
  return false;
}

const input = fs.readFileSync('./input.txt', { encoding: 'utf8', flag: 'r' });

const directions = input.split('');

// Array will resemble houses and the amount of times they are visited like: [[posX, posY, visits], [posX, posY, visits], ...]
let houseCoordinatesAndVisits = [[0, 0, 1]];

let posX = 0;
let posY = 0;
for (const direction of directions) {
  switch (direction) {
    case '^':
      posY++;
      break;
    case '>':
      posX++;
      break;
    case 'v':
      posY--;
      break;
    case '<':
      posX--;
      break;
  }

  const houseIndex = isHouseInArray(posX, posY, houseCoordinatesAndVisits);
  if (houseIndex !== false) {
    houseCoordinatesAndVisits[houseIndex][2] += 1;
    continue;
  }

  houseCoordinatesAndVisits.push([posX, posY, 1]);
}

console.log(`Amount of houses visited that receive at least one present (Part 1): ${houseCoordinatesAndVisits.length}`);

const houseCoordinatesAndVisitsSantaAndRobot = [[0, 0, 2]];

const directionsSanta = directions.filter((direction, index) => index % 2 === 0);

posX = 0;
posY = 0;
for (const direction of directionsSanta) {
  switch (direction) {
    case '^':
      posY++;
      break;
    case '>':
      posX++;
      break;
    case 'v':
      posY--;
      break;
    case '<':
      posX--;
      break;
  }

  const houseIndex = isHouseInArray(posX, posY, houseCoordinatesAndVisitsSantaAndRobot);
  if (houseIndex !== false) {
    houseCoordinatesAndVisitsSantaAndRobot[houseIndex][2] += 1;
    continue;
  }

  houseCoordinatesAndVisitsSantaAndRobot.push([posX, posY, 1]);
}

const directionsRobot = directions.filter((direction, index) => index % 2 === 1);
posX = 0;
posY = 0;
for (const direction of directionsRobot) {
  switch (direction) {
    case '^':
      posY++;
      break;
    case '>':
      posX++;
      break;
    case 'v':
      posY--;
      break;
    case '<':
      posX--;
      break;
  }

  const houseIndex = isHouseInArray(posX, posY, houseCoordinatesAndVisitsSantaAndRobot);
  if (houseIndex !== false) {
    houseCoordinatesAndVisitsSantaAndRobot[houseIndex][2] += 1;
    continue;
  }

  houseCoordinatesAndVisitsSantaAndRobot.push([posX, posY, 1]);
}

console.log(`Amount of houses visited that receive at least one present (Part 2): ${
  houseCoordinatesAndVisitsSantaAndRobot.length
}`);
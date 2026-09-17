const fs = require('node:fs');

function calculateBoxSurfaceArea(length, width, height) {
  return 2 * (length * width + width * height + length * height);
}

function calculateAreaSmallestSide(dimensions) {
  dimensions.sort((a, b) => a - b);
  return dimensions[0] * dimensions[1];
}

const input = fs.readFileSync('./input.txt', { encoding: 'utf8', flag: 'r' });
const listOfDimensions = input.split('\n');
const totalWrappingArea = listOfDimensions.reduce((area, dimensions) => {
  const splitDimensions = dimensions.split('x').map((side) => +side);
  return area + 
  calculateBoxSurfaceArea(...splitDimensions) + 
  calculateAreaSmallestSide(splitDimensions);
}, 0);

console.log(`Total wrapping area required to pack all the presents is: 
  ${totalWrappingArea}`);

function calculateRibbonWrap(dimensions) {
  dimensions.sort((a, b) => a - b);
  return 2 * (dimensions[0] + dimensions[1]);
}

function calculateBoxVolumne(dimensions) {
  return dimensions.reduce((volume, side) => volume * side, 1);
}

const totalRibbonLength = listOfDimensions.reduce((length, dimensions) => {
  const splitDimensions = dimensions.split('x').map((side) => +side);
  return length +
    calculateRibbonWrap(splitDimensions) +
    calculateBoxVolumne(splitDimensions)
}, 0);

console.log(`Total ribbon length required: 
  ${totalRibbonLength}`);
import { argv } from 'process'

let position = {
  x: 0,
  y: 0,
  direction: "North"
}

let arrWalk = [];
let count = 0;

const walking = (command) => {
  for (let i = 0; i < command.length; i++) {
    if (command[i] === 'R') {
      position.direction = updateDirection(position.direction)
    }

    if (command[i] === 'L') {
      position.direction = updateDirection(position.direction)
    }

    if (command[i] === 'W') {
      const numberOfWalks = parseInt(getNumberOfWalking(arrWalk[count]));
      updatePosition(position.direction, numberOfWalks);
      count++
    }
  }
}

const updateDirection = (direction) => {
  if (direction === "North") {
    direction = "East";
  } else if (direction === "East") {
    direction = "South";
  } else if (direction === "South") {
    direction = "West";
  } else if (direction === "West") {
    direction = "North";
  }
  return direction;
}

const updatePosition = (direction, numberOfWalks) => {
  if (direction === "North") {
    position.y += numberOfWalks;
  } else if (direction === "East") {
    position.x += numberOfWalks;
  } else if (direction === "South") {
    position.y -= numberOfWalks;
  } else if (direction === "West") {
    position.x -= numberOfWalks;
  }
}

const getWalkingPosition = (command) => {
  const regex = /([W])\d+/gi;
  const found = command.match(regex);
  if (found) return found;
}

const getNumberOfWalking = (text) => {
  const regex = /(\d+)/gi;
  const found = text.match(regex);
  if (found) return found[0];
}

// Prints Process Arguments
argv.forEach((val, index) => {
  if (index === 2) {
    arrWalk = getWalkingPosition(val)
    walking(val)
    console.log(` X: ${position.x} Y: ${position.y} Direction: ${position.direction}`);
  }
});
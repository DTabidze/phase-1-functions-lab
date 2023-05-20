// Code your solution in this file!

function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks - 42);
}

function distanceFromHqInFeet(feet) {
    const feetValue = distanceFromHqInBlocks(feet);
    return feetValue * 264;
}

function distanceTravelledInFeet(startBlock,endBlock) {
    return Math.abs(startBlock - endBlock) * 264;
}

function calculatesFarePrice (start,destination) {
    const distanceCovered = distanceTravelledInFeet(start,destination);
    if (distanceCovered <= 400) {
        return 0;
    } else if (distanceCovered <= 2000) {
        return (distanceCovered - 400) * 0.02; 
    } else if (distanceCovered <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}
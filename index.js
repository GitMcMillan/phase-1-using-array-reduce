const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here


let sum = 0
batteryBatches.forEach(element => {
  sum = sum + element
})

console.log(sum);

const totalBatteries = ((batteryBatches.reduce((a, b) => a + b)));


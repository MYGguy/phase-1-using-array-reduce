const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// let totalBatteries = 0;
// batteryBatches.reduce(() => {
//     let total = 0;
//     for (batteryCount of batteryBatches) {
//         total += batteryCount;
//     }
//     totalBatteries = total;
// }, totalBatteries);

// console.log(totalBatteries);

let totalBatteries = batteryBatches.reduce((accumulator, element) => {
    accumulator += element;
    return accumulator;
}, 0)

console.log(totalBatteries);
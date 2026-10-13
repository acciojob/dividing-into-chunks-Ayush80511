
const divide = (arr, n) => {
    let result = [];
    let chunk = [];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (sum + arr[i] > n) {
            result.push(chunk);
            chunk = [];
            sum = 0;
        }

        chunk.push(arr[i]);
        sum += arr[i];
    }

    if (chunk.length > 0) {
        result.push(chunk);
    }

    return result;
};

// Take input from the user
const arr = prompt("Enter array elements separated by commas")
    .split(",")
    .map(Number);

const n = Number(prompt("Enter maximum sum"));

// Display the result using alert
alert(JSON.stringify(divide(arr, n)));




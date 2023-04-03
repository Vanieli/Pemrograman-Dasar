let array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i=0; i<array4.length; i++) {
    if (array4[i]%2===0) {
        document.writeln(`${array4[i]} <br>`);
    }
}

// ATAU

// for (let kata of array4) {
//     document.writeln(`${kata} <br><br>`);
// }

// ATAU

// let genaps = array4.filter(item => item %2 === 0);
// for

for(let i=0; i<10; i++){
    const element = i;
    // console.log(element);
}

for(let i=0; i<=10; i++){
    // console.log(`Outer loop value: ${i}`);
    for(let j=0; j<=10; j++){
        // console.log(`Inner lop value ${j} and inner loop ${i}`);
        // console.log(i + '*' + j + ' = ' + i*j);
    }
}

let myArray = ["flash", "batman", "superman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// break and continue

for(let i=1; i<=20; i++){
    if(i == 5){
        // console.log("detected 5");
        break
    }
    // console.log(`Value of i is ${i}`);
}

for(let i=1; i<=20; i++){
    if(i == 5){
        console.log("detected 5");
        continue
    }
    console.log(`Value of i is ${i}`);
}
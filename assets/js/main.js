function startAction() {
    const numArray = [];
   

    for(let i = 0; i < 6; i++) {
        const number = Math.random() * 45 + 1;
        const nextNumber = Math.floor(number);

        numArray.push(nextNumber)
    }
    
    console.log(numArray)
}
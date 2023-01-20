//BUSINESS LOGIC

const userInput = "78";
convertKeyElementstoPhrases(userInput);

function convertKeyElementstoPhrases(userInput) {
    const increment = parseInt(userInput);
    const array = [];
    for (let i = 0; i < increment; i++) {
        array.push(i.toString());
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i].includes(3)) {
            array[i] = "Won't you be my neighbor?";
        } else if (array[i].includes("2")) {
            array[i] = "Boop!";
        } else if (array[i].includes("1")) {
            array[i] = "Beep!";
        }
    }

    console.log(array);
}


//UI LOGIC



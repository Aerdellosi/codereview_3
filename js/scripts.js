//BUSINESS LOGIC

// const userInput = "78";
// console.log(convertKeyElementsToPhrases(userInput));

function convertKeyElementsToPhrases(userInput) {
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

    return array;
}


//UI LOGIC


window.onload = function() {

    let stringInput = document.getElementById("numberInput");

    stringInput.addEventListener("submit", function(e) {
        e.preventDefault();
        let resettableDiv = document.createElement("div");
        resettableDiv.classList.add("reset");
        console.log(resettableDiv);
        document.querySelector(".innerDiv").append(resettableDiv);
        let userInput = document.getElementById("integerInput").value;
        let arrayUI = convertKeyElementsToPhrases(userInput);
        arrayUI.forEach(function(element) {
            let p = document.createElement("p");
            p.innerText = element;
            document.querySelector(".reset").append(p);

        });
        let resetButton = document.querySelector(".hidden");
        resetButton.classList.remove("hidden");
    }
    );

    stringInput.addEventListener("reset", function() {
        document.querySelector(".reset").remove();
        let resetButton = document.querySelector(".resetButton");
        resetButton.classList.add("hidden");

    });





}
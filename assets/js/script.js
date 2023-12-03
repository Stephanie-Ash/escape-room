const submitBtn = document.getElementById("submit");
const resetBtn = document.getElementById("reset");

const getValues = () => {
    //Get user inputs
    let codeOne = document.getElementById("code-1").value.trim();
    let codeTwo = document.getElementById("code-2").value.trim();
    let codeThree = document.getElementById("code-3").value.trim();
    let codeFour = document.getElementById("code-4").value.trim();
    let codeFive = document.getElementById("code-5").value.trim();
    let inputCode = [
        codeOne.toLowerCase(),
        codeTwo.toLowerCase(),
        codeThree.toLowerCase(),
        codeFour.toLowerCase(),
        codeFive.toLowerCase()
    ];

    if (!codeOne || !codeTwo || !codeThree || !codeFour || !codeFive) {
        alert("You must enter all five values");
    } else {
        checkCode(inputCode)
    }

}

const checkCode = (inputCode) => {
    let doorCode = ["ben", "ashdown", "smells", "supercalifragilisticly", "bad"];
    let result;
    if (inputCode.toString() === doorCode.toString()) {
        result = true
    } else {
        result = false
    }

    displayResult(result);
}

const displayResult = (result) => {
    let console = document.getElementById("result-console");
    let waiting = document.createElement("p")
    let showResult = document.createElement("p")
    waiting.innerText = "Checking passcode..."
    
    if (result) {
        showResult.innerText = "Valid passcode ACCESS GRANTED!!"
    } else {
        showResult.innerText = "Invalid passcode ACCESS DENIED!!"
    }

    console.appendChild(waiting);
    console.appendChild(showResult);
}

submitBtn.onclick = getValues;

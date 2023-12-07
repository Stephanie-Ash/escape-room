const submitBtn = document.getElementById("submit");
const resetBtn = document.getElementById("reset");
const wrongAudio = document.getElementById("wrong-audio");
wrongAudio.src = "wrong.mp3";
wrongAudio.load();
const successAudio = document.getElementById("success-audio");
successAudio.src = "http://soundbible.com/grab.php?id=1003&type=mp3";
successAudio.load();

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
        checkCode(inputCode);
    }

}

const checkCode = (inputCode) => {
    let doorCode = ["ben", "ashdown", "smells", "supercalifragilisticly", "bad"];
    let result;
    if (inputCode.toString() === doorCode.toString()) {
        result = true;
    } else {
        result = false;
    }

    displayResult(result);
}

const displayResult = (result) => {
    let console = document.getElementById("result-console");
    let consoleArea = document.getElementById("scroll-console");
    let checking = document.createElement("p");
    let showResult = document.createElement("p");
    let waiting = document.createElement("p");
    waiting.innerText = "Waiting for door code...";
    checking.innerText = "Checking door code...";
    
    if (result) {
        showResult.innerText = "Valid door code ACCESS GRANTED!!";
    } else {
        showResult.innerText = "Invalid door code ACCESS DENIED!!";
        showResult.classList.add("wrong-code");
    }

    resetInputs();
    console.appendChild(checking)
    setTimeout(() => console.appendChild(showResult), 1000)

    if (! result) {
        wrongAudio.play();
        setTimeout(() => console.appendChild(waiting), 2000)
    } else {
        successAudio.play();
        stopTimer();
    }
    consoleArea.scrollTop = consoleArea.scrollHeight;
}

const resetInputs = () => {
    let inputs = document.getElementsByClassName("boxes");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
}

const reset = () => {
    resetInputs();
    let console = document.getElementById("result-console");

    while (console.childElementCount > 1) {
        console.removeChild(console.lastElementChild);
    }
}

submitBtn.onclick = getValues;
resetBtn.onclick = reset;

const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");

checkBtn.addEventListener("click", () => {
    const input = textInput.value.trim();
    
    if (input === ''){
        alert('Please input a value');
        return;
    }

    const cleanedInput = input.replace(/[^a-z0-9]/gi, '').toLowerCase();
    const reversedInput = cleanedInput.split('').reverse().join('');

    if (cleanedInput === reversedInput){
        result.textContent = `${input} is a palindrome`;
    } else {
        result.textContent = `${input} is not a palindrome`;
    }
});

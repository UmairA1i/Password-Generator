function updateLengthValue(value) {
    document.getElementById('lengthValue').innerText = value;
}

function password(event) {
    event.preventDefault();
    let uppercase = document.getElementById('uppercase').checked;
    let lowercase = document.getElementById('lowercase').checked;
    let numbers = document.getElementById('numbers').checked;
    let specialCharacters = document.getElementById('specialCharacters').checked;
    let length = document.getElementById('length').value; 

    let password = "";
    let characters = "";

    if (uppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) characters += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) characters += "0123456789";
    if (specialCharacters) characters += "!@#$%^&*()[]+-./;:";

    if (characters.length === 0) {
        document.getElementById('password').innerText = "Please select at least one option.";
        return;
    }

    for (let i = 0; i < length; i++) { 
        let randomIndex = Math.floor(Math.random() * characters.length);
        password += characters.charAt(randomIndex);
    }

    document.getElementById('password').innerText = password; 
}

function copyPassword() {
    let passwordText = document.getElementById('password').innerText;
    if (passwordText) {
        navigator.clipboard.writeText(passwordText).then(function() {
            console.log('Password copied to clipboard!');
        }, function(err) {
            console.log('Failed to copy password: ', err);
        });
    } else {
        console.log('No password to copy. Please generate a password first.');
    }
}
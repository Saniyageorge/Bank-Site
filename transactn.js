// Function to check if the user is logged in
function isLoggedIn() {
    const loggedInUser = localStorage.getItem("loggedInUser");
    return loggedInUser !== null;
}

function deposit() {
    if (!isLoggedIn()) {
        alert("Please log in to deposit money.");
        return;
    }

    const amntInput = document.getElementById("depositAmnt").value.trim();
    const password = document.getElementById("depositPassword").value.trim();

    if (!password) {
        alert('Please enter your password.');
        return;
    }

    if (!/^\d+(\.\d{1,2})?$/.test(amntInput)) {
        alert('Please enter a valid numeric deposit amount.');
        return;
    }

    const amnt = parseFloat(amntInput);
    if (amnt <= 0) {
        alert('Please enter a valid deposit amount greater than 0.');
        return;
    }

    const loggedInUser = localStorage.getItem("loggedInUser");
    const userDetails = JSON.parse(localStorage.getItem(loggedInUser));

    if (password === userDetails.password) {
        let currentBalance = parseFloat(userDetails.balance) || 0;

        currentBalance += amnt;
        userDetails.balance = currentBalance;

        localStorage.setItem(loggedInUser, JSON.stringify(userDetails));

        alert('Amount added successfully. New Balance: ' + currentBalance);
    } else {
        alert("Incorrect password");
    }

    document.getElementById("depositForm").reset();
}
function withdraw() {
    if (!isLoggedIn()) {
        alert("Please log in to withdraw money.");
        return;
    }

    const amntInput = document.getElementById("withdrawAmnt").value.trim();
    const password = document.getElementById("withdrawPassword").value.trim();

    if (!password) {
        alert('Please enter your password.');
        return;
    }

    if (!/^\d+(\.\d{1,2})?$/.test(amntInput)) {
        alert('Please enter a valid numeric withdrawal amount.');
        return;
    }

    const amnt = parseFloat(amntInput);
    if (amnt <= 0) {
        alert('Please enter a valid withdrawal amount greater than 0.');
        return;
    }

    const loggedInUser = localStorage.getItem("loggedInUser");
    const userDetails = JSON.parse(localStorage.getItem(loggedInUser));

    if (password === userDetails.password) {
        let currentBalance = parseFloat(userDetails.balance) || 0;

        if (amnt > currentBalance) {
            alert('Insufficient balance for this withdrawal.');
            return;
        }

        currentBalance -= amnt;
        userDetails.balance = currentBalance;

        localStorage.setItem(loggedInUser, JSON.stringify(userDetails));

        alert('Withdrawal successful. Remaining Balance: ' + currentBalance);
    } else {
        alert("Incorrect password");
    }

    document.getElementById("withdrawForm").reset();
}
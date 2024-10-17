function Registration(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const acno = document.getElementById("acno").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === '' || acno === '' || password === '') {
        alert("Please enter all details");
        return;
    }

    const userDetails = {
        username: username,
        acno: acno,
        password: password,
        balance: 0 // Initialize balance to 0 for new users
    };

    // Check if the account number already exists
    if (localStorage.getItem(acno)) {
        alert("Account number already exists");
    } else {
        localStorage.setItem(acno, JSON.stringify(userDetails));
        alert("User registered successfully");
        window.location.href = "./login.html"; // Redirect to login page after successful registration
    }

    document.getElementById("myform").reset();
}
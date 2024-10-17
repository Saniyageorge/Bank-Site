function retrieveData(event) {
    event.preventDefault(); 

    const acno = document.getElementById("acno").value.trim();
    const password = document.getElementById("password").value.trim();

    // Retrieve the stored user details using the account number
    const storedUserDetails = localStorage.getItem(acno);

    if (storedUserDetails !== null) {
        const userDetails = JSON.parse(storedUserDetails);

        // Check if the entered password matches the stored password
        if (password === userDetails.password) {
            alert("Login successful!");

            // Store logged-in user in localStorage for future transactions
            localStorage.setItem("loggedInUser", acno);

            // Redirect to transaction page
            window.location.href = "./transaction.html";
        } else {
            alert("Incorrect password");
        }
    } else {
        alert("Account number not found");
    }

    document.getElementById("loginForm").reset();
}
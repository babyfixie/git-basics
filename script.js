function showForm() {
    var form = document.getElementById("subscribe-form");
    if (form.style.display === "block") {
        form.style.display = "none";
    } else {
        form.style.display = "block";
    }
}

function subscribe(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;

    alert("Successfully subscribed with " + email);
    console.log("Email: " + email);
    document.getElementById("subscribe-form").style.display = "none";
    document.getElementById("subscribe-form").reset();
}

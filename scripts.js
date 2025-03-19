function checkVisa() {
    const country = document.getElementById("country").value;
    let message = "";

    switch (country) {
        case "USA":
            message = "Visa required for most applicants.";
            break;
        case "Canada":
            message = "Visa required unless you have an eTA.";
            break;
        case "India":
            message = "Visa required before travel.";
            break;
        case "UK":
            message = "Visa depends on the duration of stay.";
            break;
        case "Australia":
            message = "eVisa available for eligible travelers.";
            break;
        default:
            message = "Please select a country.";
    }

    document.getElementById("visaResult").innerText = message;
}

function validateForm() {
    const passport = document.getElementById("passport").value;
    const country = document.getElementById("visaCountry").value;
    const messageElement = document.getElementById("applicationMessage");
    let message = "";

    if (!passport || !country) {
        message = "All fields are required!";
    } else if (passport.length < 8 || passport.length > 10) {
        message = "Invalid passport number!";
    } else {
        message = "Visa application submitted successfully!";
    }

    messageElement.innerText = message;
    return false; // Prevent form submission for demonstration
}


const form = document.getElementById("studentForm");

const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Jammu and Kashmir",
    "Ladakh",
    "Lakshadweep",
    "Puducherry"
];

function showError(id, message) {
    const errorElement = document.getElementById(id + "Error");

    if (errorElement) {
        errorElement.textContent = message;
    } else {
        alert(message);
    }
}

function clearErrors() {
    document.querySelectorAll(".error").forEach(function(element) {
        element.textContent = "";
    });
}

form.addEventListener("submit", function(event) {
    event.preventDefault();
    clearErrors();

    const name = document.getElementById("name").value.trim();
    const address = document.getElementById("address").value.trim();
    const city = document.getElementById("city").value.trim();
    const state = document.getElementById("state").value.trim();
    const gender = document.getElementById("gender").value;
    const mobile = document.getElementById("mobile").value.trim();
    const email = document.getElementById("email").value.trim();

    let valid = true;

    // Full name: letters and spaces only
    if (name === "") {
        showError("name", "Please enter your full name.");
        valid = false;
    } else if (!/^[A-Za-z]+(?:\s+[A-Za-z]+)+$/.test(name)) {
        showError("name", "Please enter your full name using letters and spaces only.");
        valid = false;
    }

    // Address
    if (address === "") {
        showError("address", "Please enter your address.");
        valid = false;
    }

    // City: letters and spaces only
    if (city === "") {
        showError("city", "Please enter your city.");
        valid = false;
    } else if (!/^[A-Za-z]+(?:[\s-][A-Za-z]+)*$/.test(city)) {
        showError("city", "Please enter a valid city name.");
        valid = false;
    }

    // Indian states and union territories
    if (state === "") {
        showError("state", "Please select your state or union territory.");
        valid = false;
    } else if (!indianStates.some(
        item => item.toLowerCase() === state.toLowerCase()
    )) {
        showError("state", "Please enter a valid Indian state or union territory.");
        valid = false;
    }

    // Gender
    if (gender === "") {
        showError("gender", "Please select your gender.");
        valid = false;
    }

    // Indian mobile number: 10 digits, starting from 6 to 9
    if (mobile === "") {
        showError("mobile", "Please enter your mobile number.");
        valid = false;
    } else if (!/^[6-9]\d{9}$/.test(mobile)) {
        showError("mobile", "Please enter a valid 10-digit Indian mobile number.");
        valid = false;
    }

    // Email: alphanumeric username followed by @email.com
    if (email === "") {
        showError("email", "Please enter your email ID.");
        valid = false;
    } else if (!/^[A-Za-z0-9]+@email\.com$/.test(email)) {
        showError(
            "email",
            "Please enter a valid email ID, e.g., jinesha123@email.com."
        );
        valid = false;
    }

    // Stop if any validation fails
    if (!valid) {
        return;
    }

    // Store details for the welcome page
    const student = {
        name: name,
        address: address,
        city: city,
        state: indianStates.find(
            item => item.toLowerCase() === state.toLowerCase()
        ),
        gender: gender,
        mobile: mobile,
        email: email
    };

    sessionStorage.setItem(
        "studentInformation",
        JSON.stringify(student)
    );

    // Open the separate congratulations page
    window.location.href = "welcome.html";
});

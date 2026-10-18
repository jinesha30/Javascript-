let arr = null;
let maxLength = 0;

function parseValue(input) {
    const value = input.trim();

    if (value === "") {
        throw new Error("Please enter a value.");
    }

    if (value === "true") {
        return true;
    }

    if (value === "false") {
        return false;
    }

    if (value === "null") {
        return null;
    }

    if (!Number.isNaN(Number(value))) {
        return Number(value);
    }

    try {
        return JSON.parse(value);
    } catch {
        return value;
    }
}

function formatArray(array) {
    return "[ " +
        array.map(value => JSON.stringify(value)).join(", ") +
        " ]";
}

function createArray() {
    const size = Number(document.getElementById("size").value);

    if (!Number.isInteger(size) || size <= 0) {
        document.getElementById("len").textContent =
            "Please enter a valid maximum array length.";
        return;
    }

    maxLength = size;
    arr = [];

    document.getElementById("len").textContent =
        "Maximum array length set to " + size + ".";

    document.getElementById("arr2").textContent = "";
    document.getElementById("appendStatus").textContent = "";
    document.getElementById("appendedValue").textContent = "";
    document.getElementById("arrayCheck").textContent = "";

    updateArrayViews();
}

function updateArrayViews() {
    const display = formatArray(arr || []);

    document.getElementById("arr1").textContent = display;
    document.getElementById("currentArray").textContent = display;

    if (arr && arr.length === maxLength) {
        document.getElementById("arr2").textContent =
            "Array limit reached. You can now append a new object.";

        document.getElementById("appendHelp").textContent =
            "The initial array has reached its maximum length. " +
            "Enter a new object or value to append it to the array.";
    } else if (arr) {
        document.getElementById("appendHelp").textContent =
            "Fill the array to its maximum length before appending " +
            "a new object or value.";
    }
}

function append() {
    if (!arr) {
        document.getElementById("arr2").textContent =
            "Set the array length first.";
        return;
    }

    if (arr.length >= maxLength) {
        document.getElementById("arr2").textContent =
            "Array limit reached. Element was not inserted; " +
            "append a new object instead.";
        return;
    }

    try {
        const value = parseValue(
            document.getElementById("arrayValue").value
        );

        arr.push(value);

    } catch (error) {
        document.getElementById("arr2").textContent =
            error.message;
        return;
    }

    document.getElementById("arrayValue").value = "";

    updateArrayViews();

    if (arr.length < maxLength) {
        document.getElementById("arr2").textContent =
            "Element added.";
    }
}

function appendObject() {
    if (!arr) {
        document.getElementById("appendStatus").textContent =
            "Set the array length and enter the initial elements first.";
        return;
    }

    if (arr.length < maxLength) {
        document.getElementById("appendStatus").textContent =
            "Fill the initial array to its maximum length first.";
        return;
    }

    let value;

    try {
        value = parseValue(
            document.getElementById("objectValue").value
        );

    } catch (error) {
        document.getElementById("appendStatus").textContent =
            error.message;
        return;
    }

    arr.push(value);

    document.getElementById("objectValue").value = "";

    document.getElementById("appendedValue").textContent =
        JSON.stringify(value);

    document.getElementById("arrayCheck").textContent =
        Array.isArray(value)
            ? "Yes. The newly appended object is an array."
            : "No. The newly appended object is not an array.";

    document.getElementById("appendStatus").textContent =
        "New object appended successfully.";

    updateArrayViews();
}
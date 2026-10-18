let arr = [];


// Create input fields for the array
function createArray() {

    let n = parseInt(document.getElementById("arrayLength").value);
    let area = document.getElementById("arrayInputs");

    area.innerHTML = "";

    if (isNaN(n) || n <= 0) {
        alert("Enter a valid array length.");
        return;
    }

    for (let i = 0; i < n; i++) {

        area.innerHTML +=
            '<input type="text" id="element' + i +
            '" placeholder="Element ' + (i + 1) + '">';
    }
}


// Store array elements
function storeArray() {

    let n = parseInt(document.getElementById("arrayLength").value);

    if (isNaN(n) || n <= 0) {
        alert("Create a valid array first.");
        return;
    }

    arr = [];

    for (let i = 0; i < n; i++) {

        let element = document.getElementById("element" + i).value;

        arr[arr.length] = element;
    }

    document.getElementById("arrayDisplay").innerHTML =
        "Original Array: [" + arr.join(", ") + "]";
}


// Remove element using splice()
function removeUsingMethod() {

    let value = document.getElementById("deleteElement").value;

    if (arr.length === 0) {
        document.getElementById("deleteResult").innerHTML =
            "Array is empty.";
        return;
    }

    let original = arr.join(", ");

    let index = arr.indexOf(value);

    if (index !== -1) {

        arr.splice(index, 1);

        document.getElementById("deleteResult").innerHTML =
            "Original Array: [" + original + "]<br>" +
            "Element Removed: " + value + "<br>" +
            "Array After Removal: [" + arr.join(", ") + "]";

    } else {

        document.getElementById("deleteResult").innerHTML =
            "Element " + value + " is not present in the array.";
    }
}


// Remove element without using array methods
function removeWithoutMethod() {

    let value = document.getElementById("deleteElement").value;

    if (arr.length === 0) {
        document.getElementById("deleteResult").innerHTML =
            "Array is empty.";
        return;
    }

    let original = arr.join(", ");
    let newArray = [];
    let found = false;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === value && found === false) {

            found = true;

        } else {

            newArray[newArray.length] = arr[i];
        }
    }

    if (found) {

        arr = newArray;

        document.getElementById("deleteResult").innerHTML =
            "Original Array: [" + original + "]<br>" +
            "Element Removed: " + value + "<br>" +
            "Array After Removal: [" + arr.join(", ") + "]";

    } else {

        document.getElementById("deleteResult").innerHTML =
            "Element " + value + " is not present in the array.";
    }
}


// Check element using includes()
function checkUsingMethod() {

    let value = document.getElementById("searchElement").value;

    if (arr.length === 0) {
        document.getElementById("searchResult").innerHTML =
            "Array is empty.";
        return;
    }

    let found = arr.includes(value);

    if (found) {

        document.getElementById("searchResult").innerHTML =
            "Array: [" + arr.join(", ") + "]<br>" +
            "Search Element: " + value + "<br>" +
            "Result: " + value + " is present in the array.";

    } else {

        document.getElementById("searchResult").innerHTML =
            "Array: [" + arr.join(", ") + "]<br>" +
            "Search Element: " + value + "<br>" +
            "Result: " + value + " is not present in the array.";
    }
}


// Check element without using array methods
function checkWithoutMethod() {

    let value = document.getElementById("searchElement").value;

    if (arr.length === 0) {
        document.getElementById("searchResult").innerHTML =
            "Array is empty.";
        return;
    }

    let found = false;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === value) {

            found = true;
            break;
        }
    }

    if (found) {

        document.getElementById("searchResult").innerHTML =
            "Array: [" + arr.join(", ") + "]<br>" +
            "Search Element: " + value + "<br>" +
            "Result: " + value + " is present in the array.";

    } else {

        document.getElementById("searchResult").innerHTML =
            "Array: [" + arr.join(", ") + "]<br>" +
            "Search Element: " + value + "<br>" +
            "Result: " + value + " is not present in the array.";
    }
}


// Empty array using length = 0
function emptyUsingMethod() {

    let original = arr.join(", ");

    arr.length = 0;

    document.getElementById("emptyResult").innerHTML =
        "Original Array: [" + original + "]<br>" +
        "Array After Emptying: [" + arr.join(", ") + "]";
}


// Empty array without using array method
function emptyWithoutMethod() {

    let original = arr.join(", ");

    let newArray = [];

    arr = newArray;

    document.getElementById("emptyResult").innerHTML =
        "Original Array: [" + original + "]<br>" +
        "Array After Emptying: [" + arr.join(", ") + "]";
}


// Reset everything
function resetPage() {

    arr = [];

    document.getElementById("arrayLength").value = "";

    document.getElementById("arrayInputs").innerHTML = "";

    document.getElementById("arrayDisplay").innerHTML = "";

    document.getElementById("deleteElement").value = "";

    document.getElementById("searchElement").value = "";

    document.getElementById("deleteResult").innerHTML = "";

    document.getElementById("searchResult").innerHTML = "";

    document.getElementById("emptyResult").innerHTML = "";
}
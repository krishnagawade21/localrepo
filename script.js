viralet inputfield = document.getElementById("inputfield");
let button = document.getElementById("button");
let listcontainer = document.getElementById("listcontainer");

button.addEventListener("click", function () {
    if (inputfield.value == "") {
        alert("You Must Enter a Task");
    } else {
        let li = document.createElement("li");
        li.textContent = inputfield.value;
        listcontainer.appendChild(li);

        let span = document.createElement("span");
        span.textContent = "remove";
        li.appendChild(span);
    }

    inputfield.value = "";
});
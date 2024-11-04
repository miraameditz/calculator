let input = document.getElementById("input")
let numValue = document.querySelectorAll("button")
let arr = []
let plus = document.getElementById("plus")
let minus = document.getElementById("minus")

numValue.forEach(function(button) {
    arr.push(button)
})

arr.forEach(function(button) {
    button.addEventListener("click", function() {
        console.log(button.innerHTML);
        input.value += button.innerHTML
    });
});


function equal() {
    input.value = eval(input.value);
}

function ac() {
    input.value = "";
}

function cut() {
    input.value = input.value.slice(0 , -1)
}
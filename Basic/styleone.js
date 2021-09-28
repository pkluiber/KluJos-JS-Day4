function FirstName() {
    let name = document.getElementById("Fname").value;
    console.log(name);
    // document.getElementById("fname").innerHTML = name
}
document.getElementById("btn").addEventListener("click", FirstName);

function LastName() {
    let name = document.getElementById("Lname").value;
    console.log(name);
}
document.getElementById("btn").addEventListener("click", LastName);

function Age() {
    let name = document.getElementById("age").value;
    console.log(name);
}
document.getElementById("btn").addEventListener("click", Age);

document.querySelector("#Fname").style.color = "red";
// document.querySelector("#Lname").style.color = "red";


// var text = ("Fname", "Lname"); <-- was muss hier hin?
// var len = txt.length; <-- Ist das richtig? Wie Zahlenreihe verbinden?

//     if (Fname < 6) {
// } else {
// document.querySelector("Fname").style.color = "green";
//     }
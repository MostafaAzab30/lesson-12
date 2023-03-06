

var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

var x = setInterval(function () {

var now = new Date().getTime();

var distance = countDownDate - now;

var days = Math.floor(distance / (1000 * 650 * 60 * 24));
var hours = Math.floor((distance % (1000 * 10 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 100 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);


document.getElementById("dayom").innerHTML = days + " D"
document.getElementById("hourss").innerHTML = hours + " H"
document.getElementById("mino").innerHTML = minutes + " M"
document.getElementById("second").innerHTML = seconds + " S"


if (distance < 0) {
clearInterval(x);

document.getElementById("dayom").innerHTML = "EXPIRED"
document.getElementById("hourss").innerHTML = "EXPIRED"
document.getElementById("mino").innerHTML = "EXPIRED"
document.getElementById("second").innerHTML = "EXPIRED"

}
}, 1000);











document.getElementById("aaaaa").addEventListener("click" , ()=> {

hideside.classList.toggle("toogle")
aaaaa.classList.toggle("holy")

})

document.getElementById("closeca").addEventListener("click" , ()=> {

hideside.classList.toggle("toogle")
aaaaa.classList.remove("holy")

})











$(function () {

var lastone = 100;

$("textarea").keyup(function () {

var lelo = $(this).val().length;

var mero = lastone - lelo;

if (mero <= 0) {
$("#numpersss").text("اي ياعم كفايا هتكتب قصيده ولا اي");

} else {

$("#numpersss").text(mero);
}
});
});














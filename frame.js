// frame = document.getElementById("frame")
frame = document.querySelector("#frame")

// ABOVE BOTH SELECTORS ARE WORKING

btn1 = document.getElementById("btn1")
btn2 = document.getElementById("btn2")
btn3 = document.getElementById("btn3")

btn1.addEventListener("click", open1);
btn2.addEventListener("click", open2);
btn3.addEventListener("click", open3);

function open1() {
    // frame.removeAttribute("src");
    frame.setAttribute("src", "./myresume.html");
}
function open2() {
    frame.setAttribute("src", "./timetable.html");
}
function open3() {
    frame.setAttribute("src", "./railway.html");
}
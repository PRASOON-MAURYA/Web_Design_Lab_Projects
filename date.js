window.addEventListener("load", CurrentTime)

function CurrentTime() {
        clr = setInterval(func = () => {
            date = new Date();

            dgM=date.getMonth()+1

            box.innerHTML = "Today's Date is:- " + date.getDate() + "/" + dgM + "/" + date.getFullYear() + "<br>Current Time is:- " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
        }, 1000);    
}


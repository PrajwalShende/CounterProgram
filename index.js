const decreseBtn = document.getElementById("decreseBtn");
const resetBtn = document.getElementById("resetBtn");
const increseBtn = document.getElementById("increseBtn");
const countlabel = document.getElementById("countLabel");
let count = 0;


increseBtn.onclick = function() {
    count++;
    countlabel.textContent = count;
}

decreseBtn.onclick = function() {
    count--;
    countlabel.textContent = count;
}

resetBtn.onclick = function() {
    count =0;
    countlabel.textContent = count;
}
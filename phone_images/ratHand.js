function removeRatHand(){
    document.getElementById("rathand").style.display="none";
}

var ratHandTimeout;

function setRatHandTimeout() {
    ratHandTimeout = setTimeout(removeRatHand, 600);
}

function showRatHandPets() {
    document.getElementById("rathand").style.bottom="-4%";
    document.getElementById("rathand").style.display="block";
    setRatHandTimeout();
}

function showRatHandEmotes() {
    document.getElementById("rathand").style.bottom="-23%";
    document.getElementById("rathand").style.display="block";
    setRatHandTimeout();
}
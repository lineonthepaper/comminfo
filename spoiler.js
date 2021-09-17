function toggleSpoiler(clicked_id) {
  var x = document.getElementById(clicked_id).nextElementSibling;
  if (x.style.maxHeight === "0px") {
    x.style.maxHeight = "20em";
    x.style.opacity = "1";
  } else {
    x.style.maxHeight = "0px";
    x.style.opacity = "0";
  }
}

/*function toggleSpoiler1() {
  var x = document.getElementById("hidden1");
  if (x.style.maxHeight === "0px") {
    x.style.maxHeight = "20em";
    x.style.opacity = "1";
  } else {
    x.style.maxHeight = "0px";
    x.style.opacity = "0";
  }
}

function toggleSpoiler2() {
  var y = document.getElementById("hidden2");
  if (y.style.maxHeight === "0px") {
    y.style.maxHeight = "20em";
    y.style.opacity = "1";
  } else {
    y.style.maxHeight = "0px";
    y.style.opacity = "0";
  }
}

function toggleSpoiler3() {
  var x = document.getElementById("hidden3");
  if (x.style.maxHeight === "0px") {
    x.style.maxHeight = "20em";
    x.style.opacity = "1";
  } else {
    x.style.maxHeight = "0px";
    x.style.opacity = "0";
  }
}
*/
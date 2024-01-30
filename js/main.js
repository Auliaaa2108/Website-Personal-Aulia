/*
The openNav function is used to open side navigation upto 60% width
*/
function openNav() {
  document.getElementById("myNav").style.width = "60%";
}
/*
The openNav function is used to set side navigation upto 0% width
i.e. side navigation will not be visible
*/
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

/*
This function displays time in element with id time and refreshes it every 0.5s using setinterval function
*/
setInterval(displayClock, 500);
function displayClock() {
  document.getElementById("time").innerHTML = new Date().toLocaleTimeString(
    "en-US",
    { hour: "numeric", hour12: true, minute: "numeric", second: "numeric" }
  );
}

/*
the below code is for changing background image of banner area. 5 images are stored in array. 
The images are selected randomly and change background every 5 seconds.
*/
window.onload = function () {
  /*The below code is used to make greeting according to local time. It will check current time in system and greet according to time for 5s and hides after 5s*/
  var greeting;
  var time = new Date().getHours();
  if (time < 12) {
    greeting = "Good morning";
  } else if (time < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }
  document.getElementById("greet").innerHTML = greeting;
  setTimeout(function () {
    document.getElementById("greet").style.visibility = "hidden";
  }, 5000);

  function changeImage() {
    var BackgroundImg = [
      "./images/proyek/crm2.png",
      "./images/bps.png",
      "./images/unand.png",
      "./images/proyek/crm1.png",
      "./images/proyek/mobTA.png",
      "./images/mta.png",
    ];
    var i = Math.floor(Math.random() * 6);
    document.getElementById("home").style.backgroundImage =
      'url("' + BackgroundImg[i] + '")';
  }
  window.setInterval(changeImage, 5000);
};
function myFunction(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Get the image text
  var imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
}

function tweetCheck() {
  var inputText = document.getElementById("tweet").value;

  var len = inputText.length;

  if(len > 140){
        var slicedTweet = inputText.slice(0,140);
        var otherTweet = inputText.slice(140, len);
        document.getElementById("tweet").value = slicedTweet;
        alert("Sliced!");
  }
  inputText = document.getElementById("tweet").value;

  var numShow = document.getElementById("numShow");
  numShow.innerHTML = "" + (140 - len);

  if (numShow.innerText < 0) {
    numShow.style.color = "red";

  }
  if (numShow.innerText === 0 || numShow.innerText > 0) {
    numShow.style.color = "rgb(29, 209, 29)";
  }
}

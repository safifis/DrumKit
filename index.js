
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function handleClick() {
    alert("I got clicked!");
  });
  
}

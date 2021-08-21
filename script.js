console.log('nikla');
let num = 15
let img1  = document.getElementById('photo-grid1');
let img2  = document.getElementById('photo-grid2');
let img3  = document.getElementById('photo-grid3');
function createImageNode(n) {
    var img = document.createElement('img');
    img.classList.add("images");
    img.src = `./Images/img/i (${n}).jpg`
    return img;
}
    let i =1
    while(i<16){
        img1.appendChild(createImageNode(i));
        img2.appendChild(createImageNode(i+1));
        img3.appendChild(createImageNode(i+2));
        i=i+3;
    }
// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

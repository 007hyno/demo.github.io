// $("#mygallery").justifiedGallery();
console.log('nikla');
let num = 15
// var x = window.matchMedia()
// console.log(`here - ${x}`);
let img1  = document.getElementById('photo-grid1');
let img2  = document.getElementById('photo-grid2');
let img3  = document.getElementById('photo-grid3');
function createImageNode(n) {
    var img = document.createElement('img');
    img.classList.add("images");
    img.src = `./Images/img/i (${n}).jpg`
    // img.width = "450";
    // img.style.margin = "10px";
    return img;
}

// for (let i = 1; i < num; i++) {
//     img.appendChild(createImageNode(i));
//       }

    let i =1
    while(i<16){
        img1.appendChild(createImageNode(i));
        img2.appendChild(createImageNode(i+1));
        img3.appendChild(createImageNode(i+2));
        // img.appendChild(createImageNode(i+1));
        i=i+3;
        // img.appendChild(createImageNode(i+1))
        // img.appendChild(createImageNode(i+2))
    }


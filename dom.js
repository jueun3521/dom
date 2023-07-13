var bigPic = document.querySelector("#cup");
var smallPics = document.querySelector(".small");
for (var i = 0; i < smallPics.length; i++) {
    smallPics[i].addEventListner("click" , changePic);
}
function changePic(){
    var newPic = this.src;
    bigPic.setAttribute("src" , newPic);
    
}
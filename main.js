// RESPONSIVE NAVBAR
var menuList = document.getElementById("menuList");
menuList[0].style.maxHeight = "0px";


function toggleMenu(){
 if(menuList.style.maxHeight == "0px"){
   menuList.style.maxHeight = "170px";
 }
 else{
   menuList.style.maxHeight = "0px";
 }
}
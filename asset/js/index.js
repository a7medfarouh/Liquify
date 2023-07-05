let prev= document.getElementById("prev");
let next= document.getElementById("next");
let length =6 ;
var currentIndex =1;
var textslide =document.querySelector("#textslide");
// console.log(textslide );

next.addEventListener("click",function(){
    prev.style.display = "block";
})
prev.addEventListener('click', function() {
    // console.log("aaaaaaaaa")

   

    currentIndex--;
    // console.log(currentSlide)
if(currentIndex>0){
    console.log(currentIndex);
    console.log(length);
    textslide.textContent = currentIndex + ' out of ' + length;

}
else if(currentIndex == 0){
    currentIndex =length;
    console.log(currentIndex);
    console.log(length);
    textslide.textContent = currentIndex + ' out of ' + length;

}

   
  });
  next.addEventListener('click', function() {
    // console.log("aaaaaaaaa")

   
    currentIndex++;
    
    // console.log(currentSlide)
if(currentIndex<=6){
    
    console.log(currentIndex);
    console.log(length);
    textslide.textContent = currentIndex + ' out of ' + length;

}
else if(currentIndex<=0 ||currentIndex>6){
    currentIndex =1;
    textslide.textContent = currentIndex + ' out of ' + length;
}
   
  });

var myImages =["http://images5.backpage.com/imager/u/large/563732967/9359d145302ad59dfea1588c9e68871d.jpg","https://i1.wp.com/dogloversshow.com.au/directory/wp-content/uploads/sites/4/2016/06/Finnish-Lapphund_LR.jpg?fit=420%2C350&ssl=1","http://amazinganimalstories.com/wp-content/uploads/2014/04/Funny-Boston-Terrier-Dog-Likes-His-Belly-Tickled-HILARIOUS.jpg","https://thumbs.dreamstime.com/b/funny-smiling-black-tan-havanese-puppy-dog-sitting-isolated-white-background-36579786.jpg","https://tailandfur.com/wp-content/uploads/2016/06/40-Cute-Siberian-Husky-Puppy-Pictures-4.jpg"];


var captionImages =["French Bulldog","Lapphund","Boston Terrier","Havanese","Siberian Husky"];

 var index=0;

 function updateImage(){
 document.getElementById("slideshow").src = myImages[index];
 document.getElementById("slideshow").alt= captionImages[index];
 document.getElementById("caption").textContent = captionImages[index];
}

function next(){
 if (myImages.length == index+1)
 index=0;
 else
 index++;
 updateImage();
}


function back(){
 if (index===0)
 index=myImages.length-1;
 else
 index--;

 updateImage();
}

var nextButton = document.getElementById("next");
var previousButton = document.getElementById("previous");

previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false);

function autoSlide(){
if (document.getElementById("auto").checked)
 next();
}


setInterval(autoSlide,2000); // Next

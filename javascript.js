const left = document.getElementById('left');
const right = document.getElementById('right');
const slider = document.getElementById('slider');
let countIndex = 0;


const sliders = [
   
    {
    	url: 'https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75',
    	img: 'images/img1.jpg',
    	title: 'title 1'
    },

     {
    	url: 'https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75',
    	img: 'images/img2.jpg',
    	title: 'title 2'
    },

     {
    	url: 'https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75',
    	img: 'images/img3.jpg',
    	title: 'title 3'
    },

];








//Functions 







let createTtitle = (title) => {
    let titleElement = document.createElement('h3');
        titleElement.innerHTML = title;
        titleElement.id = 'title';
        return titleElement;
}

let createLink = (url) => { //Create link
  let linkElement = document.createElement('a');
      linkElement.href = url;
      return linkElement;
}


let createImg = (img) => {
   let imgElement = document.createElement('img');
       imgElement.src = img;
       imgElement.id = 'imgSlider';
       return imgElement;
}


let sliderIndex = () => {
  let currentIndex = sliders[countIndex];
  let link = createLink(currentIndex.url);
      link.appendChild(createImg(currentIndex.img));
      console.log(link);
      slider.innerHTML = '';
      slider.appendChild(link);
      slider.appendChild(createTtitle(currentIndex.title));
  
}


left.addEventListener('click', function (){
     leftArrow();
}); 

right.addEventListener('click', function (){
     rightArrow();
});






let leftArrow = () => { //left
   if (countIndex >= sliders.length - 1){
   	countIndex = 0 - 1;
   }
   if (countIndex <= sliders.length){
   	   countIndex++;
   	   sliderIndex(countIndex);
   	   console.log(countIndex);
   }
}

let rightArrow = () => { //right

   if (countIndex == 0){
       countIndex = sliders.length;
       
   }

   if (countIndex <= sliders.length) {
   	  countIndex --;
   	  sliderIndex(countIndex);
   	  console.log(countIndex);
   }
}

sliderIndex(countIndex);






let effectControl = () => {

	let title = document.getElementById('title');
	    title.style.animation = 'titleAnimation 1s 1';
	    title.style.display = 'flex';
	    title.style.left = '30px';
}


let nextSlideEffect = () => {
	let sliderNext = document.getElementById('imgSlider');
	    sliderNext.style.animation = 'nextSlider 2s 1';
	    console.log(sliderNext);
}




//for effect 
setInterval(()=>{
 effectControl();

}, 100);

setInterval(()=>{ //next slide
  leftArrow();
   nextSlideEffect();
}, 5000);


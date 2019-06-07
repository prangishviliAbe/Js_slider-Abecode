var left = document.getElementById('left');
var right = document.getElementById('right');
var slider = document.getElementById('slider');
var current_index = 0;


var sliderData = [
  {
      url: 'http://net.adjara.com/',
      img: 'images/img1.jpg',
      title: 'title 1'
  },

  {
    url: 'http://net.adjara.com/',
    img: 'images/img2.jpg',
    title: 'title 2'
},


{
    url: 'http://net.adjara.com/',
    img: 'images/img3.jpg',
    title: 'title 3'
},
];



//set img elements 
function set_img (img){
   let imgElement = document.createElement('img');
       imgElement.src = img;
       return imgElement;
}

//set link elements 
function create_link (url){
    let linkElement = document.createElement('a');
        linkElement.href = url;
        return linkElement;
 }


//set slider index
function indexSlider (index){
let currentSlider = sliderData[index];
let elements = create_link(currentSlider.url);
    elements.appendChild(set_img(currentSlider.img));
    slider.innerHTML = '';
    slider.appendChild(elements);
}


function leftArrow (){
    if (current_index  >=  sliderData.length - 1){
        current_index  = 0 - 1;
       
    }
    if (current_index < sliderData.length - 1){
        current_index ++;
        indexSlider(current_index);
    }
    console.log('Left');
    console.log(current_index);
}

function rightArrow (){
    if (current_index == 0){
        current_index = sliderData.length;
    }
    if (current_index == current_index){
        current_index --;
        indexSlider(current_index);
    }
    console.log(current_index);
}



left.addEventListener('click', function (){
    leftArrow();
}); 



right.addEventListener('click', function (){  
    rightArrow();
});


setInterval(function (){
    leftArrow();
}, 5000)


var next = 1;
setInterval(function (){
  var dp = next += 0.001;
  document.getElementsByTagName('img')[0].style.transform = "scale("+dp+")";

}, 100);





indexSlider(current_index);
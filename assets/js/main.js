var items = document.getElementsByClassName('item');
var slideItem = document.getElementById('slide-item');
var next = document.getElementById('next');
var prev = document.getElementById('prev');
var close = document.getElementById('close');
var slide = document.getElementById('slide');

var imgs = items.length;

var index = 0;

close.addEventListener('click',function(){
    slide.classList.remove('active');
})

for(var i=0; i<imgs; i++){
    items[i].addEventListener('click',function(e){
        console.log(slideItem.childNodes);
        var ele = e.target.parentNode;
        var currentIndex = Array.from(items).indexOf(ele);
        var img = e.target.src;
        slideItem.childNodes[3].setAttribute('src', img);
        slideItem.childNodes[1].innerHTML = `${currentIndex+1}/${imgs}`;
        slide.classList.add('active');
        index = currentIndex;
    });
}

prev.addEventListener('click',function(){
    changeImg(index -1);
});

next.addEventListener('click',function(){
    changeImg(index +1); 
});

function changeImg (i){
    if (i>=imgs){
        index = 0;
    }
    else if (i<0){
        index = imgs-1
    }
    else{
        index = i;
    }
    let img = items[index].childNodes[1].getAttribute('src');
    slideItem.childNodes[3].setAttribute('src',img);

    slideItem.childNodes[1].innerHTML = `${index+1}/${imgs}`;
}

document.onkeydown = function(e){
    var code = e.keyCode;
    if (code==39){
        next.click();
    }
    else if (code==37){
        prev.click();
    }
    else if (code==27){
        close.click();
    }
}
// JavaScript Document
(function() {

function Slideshow( element ) {
this.el = document.querySelector( element );
this.init();
}

Slideshow.prototype = {
init: function() {
this.wrapper = this.el.querySelector( ".slider-wrapper" );
this.slides = this.el.querySelectorAll( ".slide" );
this.previous = this.el.querySelector( ".slider-previous" );
this.next = this.el.querySelector( ".slider-next" );
this.index = 0;
this.total = this.slides.length;

window.onload=function()
{
var img1=document.getElementById("supercar");
var img2=document.getElementById("sedan");
var img3=document.getElementById("sport");
var img4=document.getElementById("suv");
var img5=document.getElementById("Muscle");
var img6=document.getElementById("van");
img1.onmousemove=function()
{
img1.src="super1.gif";
};
img1.onmouseout=function()
{
img1.src="super.jpg";
};
img2.onmousemove=function()
{
img2.src="sedan1.gif";
};

img2.onmouseout=function()
{
img2.src="sedan.jpg";
};
img3.onmousemove=function()
{
img3.src="sport1.gif";
};
img3.onmouseout=function()
{
img3.src="sport.jpg";
};
img4.onmousemove=function()
{
img4.src="suv1.gif";
};
img4.onmouseout=function()
{
img4.src="SUV.jpg";
};
img5.onmousemove=function()
{
img5.src="muscle1.gif";
};
img5.onmouseout=function()
{
img5.src="Muscle.png";
};
img6.onmousemove=function()
{
img6.src="van1.gif";
};
img6.onmouseout=function()
{
img6.src="van.png";
};
};

this.actions();
},
_slideTo: function( slide ) {
var currentSlide = this.slides[slide];
currentSlide.style.opacity = 1;

for( var i = 0; i < this.slides.length; i++ ) {
var slide = this.slides[i];
if( slide !== currentSlide ) {
slide.style.opacity = 0;
}
}
},
actions: function() {
var self = this;
self.next.addEventListener( "click", function() {
self.index++;
self.previous.style.display = "block";

if( self.index == self.total - 1 ) {
self.index = self.total - 1;
self.next.style.display = "none";
}

self._slideTo( self.index );

}, false);

self.previous.addEventListener( "click", function() {
self.index--;
self.next.style.display = "block";

if( self.index == 0 ) {
self.index = 0;
self.previous.style.display = "none";
}

self._slideTo( self.index );

}, false);
}


};

document.addEventListener( "DOMContentLoaded", function() {

var slider = new Slideshow( "#main-slider" );

});


})();
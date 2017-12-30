window.addEventListener("load",function(event) {
	showDivs(slideIndex, "");
	sliderTimerFunction();
}, false);

var slideIndex = 1;
var slideIndexPre = 0;
var slideTimer = 0;
var sliderRunning = true;

// MS / MS_per_frame
var timePerSlide = 3500 / 25;

var mouse = {x: 0, y: 0};

function mouseTracking(e) {
    mouse.x = e.clientX || e.pageX;
    mouse.y = e.clientY || e.pageY;
    var containerRectangle = document.getElementById("mySliderContainer").getBoundingClientRect();

    if (mouse.x > containerRectangle.left && mouse.x < containerRectangle.right &&
            mouse.y > containerRectangle.top && mouse.y < containerRectangle.bottom) {
        sliderRunning = false;
    } else {
        sliderRunning = true;
    }
}
document.onmousemove = function () {
    if (document.addEventListener) {
        document.addEventListener('mousemove', function (e) {
            mouseTracking(e);
        }, false);
    } else if (document.attachEvent) {
        mouseTracking(window.event);
    }
};


function plusDivs(n, s) {
	slideIndexPre = slideIndex;
	showDivs(slideIndex += n, s);
}

function currentDiv(n) {
	
	var s;
	
	if (slideIndex < n) {
		s = "l";
	}
	else {
		s = "r";
	}
	
	slideIndexPre = slideIndex;
	showDivs(slideIndex = n, s);
}

function showDivs(n, s) {
	var i;
	var x = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("mySliderButton");
	if (n > x.length) {
		slideIndex = 1;
	}    
	if (n < 1) {slideIndex = x.length}
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
		x[i].style.zIndex = "0";
	}
	for (i = 0; i < dots.length; i++) {
	   dots[i].className = dots[i].className.replace(" mySliderButtonOn", "");
	   
	   /*
	   var size = Math.max(0, 2 - Math.abs((n - i - 1))) * 4;
	   
	   dots[i].style.width = 10 + size + "px";
	   dots[i].style.height = 10 + size + "px";
	   dots[i].style.marginBottom = (4 - size / 2) + "px";
	   */
	}
	var ci = slideIndex-1;
	var cj = slideIndexPre-1;
	if (cj < 0) cj = x.length - 1;
	
	x[ci].style.display = "block";
	x[cj].style.display = "block";
	
	if (s === "l" || s === "r") {
		x[ci].style.animationDuration = "1s";
		x[cj].style.animationDuration = "1s";
		
		if (s === "l") {
			x[ci].style.animationName = "fadeInLeft";
			x[cj].style.animationName = "fadeOutRight";
		}
		else {
			x[ci].style.animationName = "fadeInRight";
			x[cj].style.animationName = "fadeOutLeft";
		}
	}
	
	dots[ci].className += " mySliderButtonOn";
	
	x[ci].style.zIndex = "1";
	
	slideTimer = 0;
	document.getElementById("sliderTimer").style.width = "0";
}

function sliderTimerFunction() {
	
	if (sliderRunning) {
		slideTimer += 1;
		
		// 3000ms / 25ms = 160 frames
		if (slideTimer > timePerSlide) {
			slideTimer = 0;
			
			slideIndexPre = slideIndex;
			showDivs(slideIndex += 1, "l");
		}
		document.getElementById("sliderTimer").style.width = slideTimer / (timePerSlide / 100) + "%";
	}
	setTimeout(sliderTimerFunction, 25);
}
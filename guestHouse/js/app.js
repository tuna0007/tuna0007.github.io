if( $(document).height() <= $(window).height() ){		
    $(".footer").addClass("fixed-bottom");
  }



/* Progress Bar */
const progress = document.getElementById("progress");
const stepCircles = document.querySelectorAll(".circle");
let currentActive = 1;

//1=0%
//2=50%
//3=100%
update(1);

function update(currentActive) {
  stepCircles.forEach((circle, i) => {
    if (i < currentActive) {
        circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const activeCircles = document.querySelectorAll(".active");
  progress.style.width =
    ((activeCircles.length - 1) / (stepCircles.length - 1)) * 100 + "%";
    console.log('Ширина = progress.style.width = ' + progress.style.width)
}

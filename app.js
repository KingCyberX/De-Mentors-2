
(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();
/**
 * Hero type effect
 */
document.addEventListener("DOMContentLoaded", function() {
    const typed = document.querySelector('.typed'); // Use document.querySelector
    if (typed) {
        let typed_strings = typed.getAttribute('data-typed-items');
        typed_strings = typed_strings.split(',');
        new Typed('.typed', {
            strings: typed_strings,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000
        });
    }
});

/**
 * NewsLetter
 */

document.querySelector('.submit-email').addEventListener('mousedown', (e) => {
    e.preventDefault();
    document.querySelector('.subscription').classList.add('done');
  });

/* Slick Slider Css Ruls */

  $(document).ready(function(){
    $(".SlickCarousel").slick({
      rtl: false, // If RTL Make it true & .slick-slide{float:right;}
      autoplay: true,
      autoplaySpeed: 2000, // Slide Delay (in milliseconds)
      speed: 300, // Decrease this value to increase the sliding speed (in milliseconds)
      slidesToShow: 4, // Number Of Carousel
      slidesToScroll: 1, // Slide To Move 
      pauseOnHover: false,
      easing: "linear",
      responsive: [
        {breakpoint: 801, settings: {
          slidesToShow: 3,
        }},
        {breakpoint: 641, settings: {
          slidesToShow: 3,
        }},
        {breakpoint: 481, settings: {
          slidesToShow: 1,
        }},
      ],
    });
});
/* Slick Slider Css Ruls end */



/* invitation letter  */

document.addEventListener("DOMContentLoaded", function() {

    $(document).ready(function() {
        $('.frame').click(function() {
            $('.l-top').addClass('open');
            $('.message').addClass('pull');
        });
    });

    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});
/* invitation letter end  */

// popular destinatoin 
 
$(".cbox") .click (function () {
    $ (".cbox") .removeClass ("gactive");
    $ (this) .addClass ("gactive");
});

// popular destination end 
// circle progress start 
$(".circle_percent").each(function() {
    var $this = $(this),
		$dataV = $this.data("percent"),
		$dataDeg = $dataV * 3.6,
		$round = $this.find(".round_per");
	$round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");	
	$this.append('<div class="circle_inbox"><span class="percent_text"></span></div>');
	$this.prop('Counter', 0).animate({Counter: $dataV},
	{
		duration: 2000, 
		easing: 'swing', 
		step: function (now) {
            $this.find(".percent_text").text(Math.ceil(now)+"%");
        }
    });
	if($dataV >= 51){
		$round.css("transform", "rotate(" + 360 + "deg)");
		setTimeout(function(){
			$this.addClass("percent_more");
		},1000);
		setTimeout(function(){
			$round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
		},1000);
	} 
});
// ciricle progress end 
// off pathner 

// $(document).ready(function(){
//     $('.customer-logos').slick({
//         slidesToShow: 6,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 1500,
//         arrows: false,
//         dots: false,
//         pauseOnHover: false,
//         responsive: [{
//             breakpoint: 768,
//             settings: {
//                 slidesToShow: 4
//             }
//         }, {
//             breakpoint: 520,
//             settings: {
//                 slidesToShow: 3
//             }
//         }]
//     });
// });
// off pathner end 
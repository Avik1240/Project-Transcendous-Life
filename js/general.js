/*---------------------------------------------------------------------*/ ;
(function($) {

    /*================= Global Variable Start =================*/
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    var IEbellow9 = !$.support.leadingWhitespace;
    var iPhoneAndiPad = /iPhone|iPod/i.test(navigator.userAgent);
    var isIE = navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0;

    function isIEver() {
        var myNav = navigator.userAgent.toLowerCase();
        return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
    }
    
    var ww = document.body.clientWidth,
        wh = document.body.clientHeight;
    var mobilePort = 800,
        ipadView = 1024,
        wideScreen = 1600;

    /*================= Global Variable End =================*/


    /*================= On Document Load Start =================*/
    $(document).ready(function() {
        $('body').removeClass('noJS').addClass("hasJS");
        $(this).scrollTop(0);
        getWidth();
        menuMove();


        // library page Image popup 
       
        $(function() {
            $('.pop').on('click', function() {
                $('.imagepreview').attr('src', $(this).find('img').attr('src'));
                $('#imagemodal').modal('toggle');   
                return false;
            });  
        });
        // datepicker

          $('.dateselect').datepicker({
                format: 'mm/dd/yyyy',
                // startDate: '-3d'
            });
          
        
        // Image Upload in Registration
        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
                    $('#imagePreview').hide();
                    $('#imagePreview').fadeIn(650);
                }
                reader.readAsDataURL(input.files[0]);
            }
        }
        $("#imageUpload").change(function() {
            readURL(this);
        });

        //Media gallery popup
        $('.libraryGallery').magnificPopup({
          delegate: 'a',
          type: 'image',
          tLoading: 'Loading image #%curr%...',
          closeBtnInside: false,
          removalDelay: 100,
          mainClass: 'my-mfp-zoom-in',
          gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1]
          },
          image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
              return item.el.attr('title');
            }
          }
        });

        // icheck checked effect
        $(document).on("change", "input[type='checkbox']", function () {
            $(this).parent().parent().parent().parent().parent()[this.checked ? "addClass" : "removeClass"]("checked");
        });

        $(document).on("change", "input[type='radio']", function () {
            $("input[type='radio']").parent().parent().removeClass('checked');
            if(this.checked){
                $(this).parent().parent().addClass("checked");
            }
        });
        

        // password show hide login dropdown

        $('#Loginpswd').click(function() {
            if ($(this).hasClass('fa-eye-slash')) {
                $(this).removeClass('fa-eye-slash');
                $(this).addClass('fa-eye');
                $('#lpwd').attr('type', 'text');
            } else {
                $(this).removeClass('fa-eye');
                $(this).addClass('fa-eye-slash');
                $('#lpwd').attr('type', 'password');
            }
        });

        // password show hide register page

        $('#pswd').click(function() {
            if ($(this).hasClass('fa-eye-slash')) {
                $(this).removeClass('fa-eye-slash');
                $(this).addClass('fa-eye');
                $('#pwd').attr('type', 'text');
            } else {
                $(this).removeClass('fa-eye');
                $(this).addClass('fa-eye-slash');
                $('#pwd').attr('type', 'password');
            }
        });
        $('#cpswd').click(function() {
            if ($(this).hasClass('fa-eye-slash')) {
                $(this).removeClass('fa-eye-slash');
                $(this).addClass('fa-eye');
                $('#cpwd').attr('type', 'text');
            } else {
                $(this).removeClass('fa-eye');
                $(this).addClass('fa-eye-slash');
                $('#cpwd').attr('type', 'password');
            }
        });
       // testimonials Slider	
        if ($(".testimonials").length) {
            var homeSlider = new Swiper(".testimonials", {
                spaceBetween: 0,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                  },
                loop: true,
                navigation:false,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            });
        }
        // stories slider
        if ($(".stories").length) {
            var logoSlider = new Swiper(".stories", {
                spaceBetween: 30,
                slidesPerView: 4,
                loop: true,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                pagination:false,
				breakpoints: {
					320: {
					  slidesPerView: 1,
					  spaceBetween: 20,
					},
					575: {
						slidesPerView: 2,
						spaceBetween: 20,
					  },
					768: {
					  slidesPerView: 3,
					  spaceBetween: 30,
					},
					1024: {
					  slidesPerView: 4,
					  spaceBetween: 30,
					},
				  },
            });
        }


        // program slider
        if ($(".program-slider").length) {
            var logoSlider = new Swiper(".program-slider", {
                spaceBetween: 30,
                slidesPerView: 3,
                loop: true,
                navigation:false,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
				breakpoints: {
					1: {
					  slidesPerView: 1,
					  spaceBetween: 20,
					},
					575: {
						slidesPerView: 2,
						spaceBetween: 20,
					  },
					768: {
					  slidesPerView: 2,
					  spaceBetween: 30,
					},
					992: {
					  slidesPerView: 3,
					  spaceBetween: 30,
					},
				  },
            });
        }

        // people say slider
        if ($(".peopleSay").length) {
            var logoSlider = new Swiper(".peopleSay", {
                spaceBetween: 30,
                slidesPerView: 3,
                loop: true,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                pagination:false,
                breakpoints: {
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    575: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                      },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                  },
            });
        }

        // why us slider
        if ($(".why-us-slider").length) {
            var logoSlider = new Swiper(".why-us-slider", {
                spaceBetween: 30,
                slidesPerView: 3,
                loop: true,
                navigation:false,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                breakpoints: {
                    1: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    575: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                      },
                    768: {
                      slidesPerView: 1,
                      spaceBetween: 30,
                    },
                    992: {
                      slidesPerView: 1,
                      spaceBetween: 30,
                    },
                  },
            });
        }
        // Vision slider
        if ($(".visionBoxSlider").length) {
            var logoSlider = new Swiper(".visionBoxSlider", {
                spaceBetween: 30,
                slidesPerView: 3,
                loop: true,
                pagination:false,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                breakpoints: {
                    1: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    575: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                      },
                    768: {
                      slidesPerView: 1,
                      spaceBetween: 30,
                    },
                    992: {
                      slidesPerView: 1,
                      spaceBetween: 30,
                    },
                  },
            });
        }
        
        // user dashboard Chart

        (function ($){
                  $.fn.bekeyProgressbar = function(options){

                    options = $.extend({
                        animate     : true,
                      animateText : true
                    }, options);
                    $.each($('.ProgressBar'), function( index, value ) {
                        var $this = $(value);
                        var $progressBar = $this;
                        var $progressCount = $progressBar.find('.ProgressBar-percentage--count');
                        var $circle = $progressBar.find('.ProgressBar-circle');
                        var percentageProgress = $progressBar.attr('data-progress');
                        var percentageRemaining = (100 - percentageProgress);
                        var percentageText = $progressCount.parent().attr('data-progress');
                        var radius = $circle.attr('r');
                        var diameter = radius * 2;
                        var circumference = Math.round(Math.PI * diameter);
                        var percentage =  circumference * percentageRemaining / 100;

                        $circle.css({
                          'stroke-dasharray' : circumference,
                          'stroke-dashoffset' : percentage
                        })
                        
                        if(options.animate === true){
                          $circle.css({
                            'stroke-dashoffset' : circumference
                          }).animate({
                            'stroke-dashoffset' : percentage
                          }, 3000 )
                        }
                        
                        if(options.animateText == true){
                 
                          $({ Counter: 0 }).animate(
                            { Counter: percentageText },
                            { duration: 3000,
                             step: function () {
                               $progressCount.text( Math.ceil(this.Counter));
                             }
                            });

                        }else{
                          $progressCount.text( percentageText);
                        }
                      });
                };

            })(jQuery);
            

        $(document).ready(function(){
          
          $('.ProgressBar--animateNone').bekeyProgressbar({
            animate : false,
            animateText : false
          });
          
          $('.ProgressBar--animateCircle').bekeyProgressbar({
            animate : true,
            animateText : false
          });
          
          $('.ProgressBar--animateText').bekeyProgressbar({
            animate : false,
            animateText : true
          });
          
          $('.ProgressBar--animateAll').bekeyProgressbar();
          
        })

        //Inner pages banner bgimage
	if($(".innerBanner").length){
		$(".bannerImg").each(function(){
			  var imagePath=$(this).find("img").attr("src");
			  $(this).css("background-image","url( "+imagePath+" )");
		});
	}

        

        // Marquee
        if ($(".marqueeScrolling li").length > 1) {
            var $mq = $('.marquee').marquee({
                speed: 25000,
                gap: 0,
                duplicated: true,
                pauseOnHover: true
            });
            $(".btnMPause").toggle(function() {
                $(this).addClass('play');
                $(this).text('Play');
                $mq.marquee('pause');
            }, function() {
                $(this).removeClass('play');
                $(this).text('Pause');
                $mq.marquee('resume');
                return false;
            });
        };

        // Multiple Ticker	
        if ($(".ticker").length) {
            $('.ticker').each(function(i) {
                $(this).addClass('tickerDiv' + i).attr('id', 'ticker' + i);
                $('#ticker' + i).find('.tickerDivBlock').first().addClass('newsTikker' + i).attr('id', 'newsTikker' + i);
                $('#ticker' + i).find('a.playPause').attr('id', 'stopNews' + i)
                $('#newsTikker' + i).vTicker({
                    speed: 1E3,
                    pause: 4E3,
                    animation: "fade",
                    mousePause: false,
                    showItems: 3,
                    height: 150,
                    direction: 'up'
                })
                $("#stopNews" + i).click(function() {
                    if ($(this).hasClass('stop')) {
                        $(this).removeClass("stop").addClass("play").text("Play").attr('title', 'Play');
                    } else {
                        $(this).removeClass("play").addClass("stop").text("Pause").attr('title', 'pause');
                    }
                    return false;
                });
            });
        };


        // Back to Top function
        if ($("#backtotop").length) {
            $(window).scroll(function() {
                if ($(window).scrollTop() > 120) {
                    $('#backtotop').fadeIn('250').css('display', 'block');
                } else {
                    $('#backtotop').fadeOut('250');
                }
            });
            $('#backtotop').click(function() {
                $('html, body').animate({
                    scrollTop: 0
                }, '200');
                return false;
            });
        };

        // For device checking
        if (isMobile == false) {
        };

        /*================= On Document Load and Resize Start =================*/
        $(window).on('resize', function() {
            ww = document.body.clientWidth;
            wh = document.body.clientHeight;           
            if ($("body").hasClass("mobilePort")) {
                $("body").removeClass("wob");
            }
        }).trigger('resize');
        /*================= On Document Load and Resize End =================*/

        //Navigation
        if ($("#navMob").length) {
            if ($(".toggleMenu").length == 0) {
                $("#mainNav").prepend('<div class="menuBar"><a href="#" class="toggleMenu"><i class="fa fa-bars"></i></a></div>');
            }
            $(".toggleMenu").click(function() {
                $(this).toggleClass("active");

                $("body").addClass("activeMobNav");
                return false;
            });
            $("#navMob li a").each(function() {
                if ($(this).next().length) {
                    $(this).parent().addClass("parent");
                };
            })
            $("#navMob li.parent").each(function() {
                if ($(this).has(".menuIcon").length <= 0) $(this).append('<i class="menuIcon fa fa-angle-down"></i>')
            });
            dropdown('nav', 'hover', 1);
            adjustMenu();

        };
    });
    /*================= On Document Load End =================*/

    /*================= On Window Resize Start =================*/
    $(window).bind('resize orientationchange', function() {
        getWidth();
        adjustMenu();
        menuMove();
    });
    /*================= On Window Resize End =================*/

    /*================= On Window Load Start =================*/
    $(window).load(function() {
    });
    /*================= On Document Load End =================*/


    function getWidth() {
        ww = document.body.clientWidth;
        if (ww > wideScreen) {
            $('body').removeClass('device').addClass('desktop widerDesktop');
        }
        if (ww > mobilePort && ww <= wideScreen) {
            $('body').removeClass('device widerDesktop').addClass('desktop');
        }
        if (ww <= mobilePort) {
            $('body').removeClass('desktop widerDesktop').addClass('device');
        }
        if (ww > 767 && ww < 1025) {
            $('body').addClass('ipad');
        } else {
            $('body').removeClass('ipad');
        }
    }

})(jQuery);


function validate() {
    return false;
};




// Magnific Popup
$(document).ready(function() {
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            }
        }
    });

	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
		closeBtnInside: false,
	});
});




// Bootsrape Tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

// Mobile Menu
function menuMove() {
    if ($(".mobileNav").length == 0) {
        var navigation = $('#nav').clone();
        $(navigation).appendTo("body").wrap("<div class='mobileNav'></div>");
        if ($(".mobileNav #navMob").length == 0) {
            $(".mobileNav #nav").attr("id", "navMob");
            $(".mobileNav").append("<span class='menuClose'><i class='fa fa-xmark'></i></span>");

            //$(".mobileNav").append("<span class='logoText'><span class='logoIcon homeSprite'></span></span>");
            $(".mobileNav .menuClose").click(function() {
                $("body").removeClass("activeMobNav");
            });
        }
    }
}

if ($(window).width() <= 991){ 
    $(".wow").removeClass("wow");
    }
new WOW().init();




$(function() {
    $('.chart').easyPieChart({
      size: 72,
      barColor: "#0A4A0A",
      scaleLength: 0,
      lineWidth:4,
      trackColor: "#ffe187",
      lineCap: "circle",
      animate: 2000,
    });
  });


  /*$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 10) {
        $("#header").addClass("headerFixed");
    } else {
        $("#header").removeClass("headerFixed");
    }
});*/
  
    // video play pause

    var video = document.getElementById("myVideo");
    var btn = document.getElementById("myBtn");

    function myFunction() {
      if (video.paused) {
        video.play();
        btn.innerHTML = "<i class='fa fa-pause'></i>";
      } else {
        video.pause();
        btn.innerHTML = "<i class='fa fa-play'></i>";
      }
    }


  // Date & Time Picker
(function($){
    $(function(){
     
        $('#birth').datetimepicker({
            "allowInputToggle": true,
            "showClose": true,
            "showClear": true,
            "showTodayButton": true,
            "format": "MM/DD/YYYY",
        });
    });
    
// Program Video
        const video = document.getElementById("video");
        const circlePlayButton = document.getElementById("circle-play-b");

        function togglePlay() {
            if (video.paused || video.ended) {
                video.play();
            } else {
                video.pause();
            }
        }

        circlePlayButton.addEventListener("click", togglePlay);
        video.addEventListener("playing", function () {
            circlePlayButton.style.opacity = 0;
        });
        video.addEventListener("pause", function () {
            circlePlayButton.style.opacity = 1;
        });
})(jQuery);
/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Home Slider
4. Init Header Search
5. Init Menu
6. Init Causes Slider
7. Init Timer
8. Init Google Map
9. Init Pastors Slider
10. Init Svg


******************************/

$(document).ready(function()
{
	"use strict";

	// initHomeSlider();
	// initCausesSlider();
	// initPastorsSlider();
	// initSvg();


	/*

	3. Init Home Slider

	*/

	function initHomeSlider()
	{
		if($('.home_slider').length)
		{
			var homeSlider = $('.home_slider');
			// Initialize Slider
			homeSlider.owlCarousel(
			{
				items:1,
				autoplay:true,
				autoplayTimeout:5000,
				autoplayHoverPause:false,
				loop:true,
				nav:false,
				dots:false,
				smartSpeed:1200
			});

			// Handle next navigation button
			if($('.home_slider_nav').length)
			{
				$('.home_slider_nav').on('click', function()
				{
					homeSlider.trigger('next.owl.carousel');
				});
			}
		}
	}


	/*

	6. Init Causes Slider

	*/

	function initCausesSlider()
	{
		if($('.causes_slider').length)
		{
			var causesSlider = $('.causes_slider');
			causesSlider.owlCarousel(
			{
				loop:true,
				autoplay:true,
				autoplayTimeout:5000,
				autoplayHoverPause:false,
				dots:false,
				nav:false,
				margin:30,
				smartSpeed:1200,
				responsive:
				{
					0:
					{
						items:1
					},
					991:
					{
						items:2
					},
					1199:
					{
						items:4
					}
				}
			});

			if($('.causes_slider_prev').length)
			{
				$('.causes_slider_prev').on('click', function()
				{
					causesSlider.trigger('prev.owl.carousel');
				});
			}

			if($('.causes_slider_next').length)
			{
				$('.causes_slider_next').on('click', function()
				{
					causesSlider.trigger('next.owl.carousel');
				});
			}
		}
	}


	/*

	9. Init Pastors Slider

	*/

	function initPastorsSlider()
	{
		if($('.pastors_slider').length)
		{
			var pastorsSlider = $('.pastors_slider');
			pastorsSlider.owlCarousel(
			{
				loop:true,
				autoplay:true,
				autoplayTimeout:5000,
				autoplayHoverPause:false,
				dots:false,
				nav:false,
				margin:30,
				smartSpeed:1200,
				responsive:
				{
					0:
					{
						items:1
					},
					768:
					{
						items:2
					},
					991:
					{
						items:3
					},
					1199:
					{
						items:4
					}
				}
			});

			if($('.pastors_slider_prev').length)
			{
				$('.pastors_slider_prev').on('click', function()
				{
					pastorsSlider.trigger('prev.owl.carousel');
				});
			}

			if($('.pastors_slider_next').length)
			{
				$('.pastors_slider_next').on('click', function()
				{
					pastorsSlider.trigger('next.owl.carousel');
				});
			}
		}
	}

	/*

	10. Init SVG

	*/

	function initSvg()
	{
		jQuery('img.svg').each(function()
		{
			var $img = jQuery(this);
			var imgID = $img.attr('id');
			var imgClass = $img.attr('class');
			var imgURL = $img.attr('src');

			jQuery.get(imgURL, function(data)
			{
				// Get the SVG tag, ignore the rest
				var $svg = jQuery(data).find('svg');

				// Add replaced image's ID to the new SVG
				if(typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
				}
				// Add replaced image's classes to the new SVG
				if(typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass+' replaced-svg');
				}

				// Remove any invalid XML tags as per http://validator.w3.org
				$svg = $svg.removeAttr('xmlns:a');

				// Replace image with new SVG
				$img.replaceWith($svg);
			}, 'xml');
		});
	}

});


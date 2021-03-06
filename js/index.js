// ACCORDION SCRIPT
(function($) {
    // $('.accordion > li:eq(0) a').addClass('active').next().slideDown();

    $('.accordion a').click(function(j) {
        var dropDown = $(this).closest('li').find('p');

        $(this).closest('.accordion').find('p').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });
})(jQuery);

// DAVE'S ANIMATION SCROLLING TRIGGER
$(document).on('scroll',function(){
  if($(document).scrollTop() > 650 ) {
    $('.d_pic').addClass('slidefromright land_right')
  };
});

// HAMPTON'S ANIMATION SCROLLING TRIGGER
$(document).on('scroll',function(){
  if($(document).scrollTop() > 650 ) {
    $('.h_pic').addClass('slidefromleft land_left')
  };
});

// Scroll to Hosts section on click
$("#scrollHosts").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#scrollToHosts").offset().top
    }, 1500);
});

// Scroll to Quotes section on click
$("#scrollQuotes").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#scrollToQuotes").offset().top
    }, 1500);
});

// QUOTE GENERATOR
	$(document).ready(function(){
		var quoteSource=[
		{
			quote: "I love tiny 9/11!",
			name:"Dave Ross"
	    },
	    {
	    	quote:"Dude, I'm glad you're alive.",
	    	name:"Hampton Yount"
	    },
	    {
	    	quote:"Interesting fact about 9/11: that was the day I lost my viginity...to a building.",
	    	name:"Dave Ross"
	    },
	    {
	    	quote:"My sketch group and I...",
	    	name:"Dave Ross"
	    },
	    {
	    	quote:"Ragtime was the emo of that generation.",
	    	name:"Hampton Yount"
	    },
	    {
	    	quote:"I tell ya, sometimes it's not even worth it being a Nazi.",
	    	name:"Hampton Yount"
	    },
	    {
	    	quote:"It's always the pieces of shit who actually like themseves.",
	    	name:"Dave Ross"
	    },
	    {
	    	quote:"Whatever doesn't kill me makes me five times stronger. That's a scientific fact. If you stab me, now I can survive stabbings.",
	    	name:"Hampton Yount"
	    },
	    {
	    	quote:"Expect problems and eat them for breakfast.",
	    	name:"Alfred A. Montapert"
	    },
	    {
	    	quote:"Start where you are. Use what you have. Do what you can.",
	    	name:"Arthur Ashe"
	    },
	    {
	    	quote:"If you're feeling suicidal, please immediately call the national suicide prevention lifeline at 1-800-273-TALK.",
	    	name:"Dave Ross"
	    },
	    {
	    	quote:"Be yourself; everyone else is already taken.",
	    	name:"Oscar Wilde"
	    },
	    {
	    	quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
	    	name:"Albert Einstein"
	    },
	    {
	    	quote:"If you're feeling suicidal, please immediately call the national suicide prevention lifeline at 1-800-273-TALK.",
	    	name:"Hampton Yount"
	    },
	    {
	    	quote:"Do not take life too seriously. You will never get out of it alive.",
	    	name:"Elbert Hubbard"
	    },
	    {
	    	quote:"Reason for death: case of the Mondays.",
	    	name:"Hampton Yount"
	    },
	    {
	    	quote:"Procrastination is the art of keeping up with yesterday.",
	    	name:"Don Marquis"
	    },
	    {
	    	quote:"I've said it before and I'll say it again, Nicholas Sparks needs to make a Godzilla movie.",
	    	name:"Dave Ross"
	    },
	    {
	    	quote:"A day without sunshine is like, you know, night.",
	    	name:"Steve Martin"
	    },
      {
	    	quote:"Bang! I kill you!",
	    	name:"Hampton Yount"
	    },
	    {
	    	quote:"My grandmother started walking five miles a day when she was sixty. She's ninety-seven now, and we don't know where the hell she is.",
	    	name:"Ellen DeGeneres"
	    },
	    {
	    	quote:"Don't sweat the petty things and don't pet the sweaty things.",
	    	name:"George Carlin"
	    },
	    {
	    	quote:"Get rich or die horny.",
	    	name:"Dave Ross"
	    },
	    {
	    	quote:"I'm a flat mooner.",
	    	name:"Dave Ross"
	    },
	    {
	    	quote:"Hapiness is not something ready made. It comes from your own actions.",
	    	name:"Dalai Lama"
	    }

	];
		

		$('#quoteButton').click(function(evt){
			//define the containers of the info we target
			var quote = $('#quoteContainer p').text();
			var quoteGenius = $('#quoteGenius').text();
			//prevent browser's default action
			evt.preventDefault();
			//getting a new random number to attach to a quote and setting a limit
			var sourceLength = quoteSource.length;
			var randomNumber= Math.floor(Math.random()*sourceLength);
			//set a new quote
			for(i=0;i<=sourceLength;i+=1){
			var newQuoteText = quoteSource[randomNumber].quote;
			var newQuoteGenius = quoteSource[randomNumber].name;
			//console.log(newQuoteText,newQuoteGenius);
      var timeAnimation = 500;
      var quoteContainer = $('#quoteContainer');
      //fade out animation with callback
      quoteContainer.fadeOut(timeAnimation, function(){
        quoteContainer.html('');
				quoteContainer.append('<p>'+newQuoteText+'</p>'+'<p id="quoteGenius">'+'-								'+newQuoteGenius+'</p>');
        //fadein animation.
        quoteContainer.fadeIn(timeAnimation);
      });  
			
			break;
		}//end for loop
	
	});//end quoteButton function
		
		
});//end document ready

// ===========================
// Hamburger Animation
// ===========================
var menu = document.getElementById("menu");
menu.addEventListener("click", toggleAnimation);

function toggleAnimation() {
  var menuLineOne = menu.querySelector(".menu span:nth-child(1)");
  var menuLineTwo = menu.querySelector(".menu span:nth-child(2)");
  var menuLineThree = menu.querySelector(".menu span:nth-child(3)");
  menuLineOne.classList.toggle("animated");
  menuLineTwo.classList.toggle("animated");
  menuLineThree.classList.toggle("animated");
//   dropdown animation
  $('#nav_2_dropdown').slideToggle();
}



// Menu slider animation
// let toggleButton = $('#toggleButton');

// toggleButton.click(function() {
//   $('#nav_2_dropdown').slideToggle();
// }
// );

// If the screen is less than 768 wide, remove inline styles from #dropDown
$(window).resize(function() {
  if ($(window).width() < 425) {
     console.log('Less than 768');
  }
 else {
    console.log('More than 768');
   $('#nav_2_dropdown').removeAttr("style");
 }
});

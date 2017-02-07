

$( document ).ready(function() {
    var userInfo = {
        firstName: 'Jane',
        lastName: 'Doe'
    };
    var voteCounts = {
        great: 0,
        greatest: 0,
        total: 0
    };

		$('#login-form.btn').on('click',  function(event){
      // hide login
		$('#login-form').hide(300); 
	   // Fill the user's first and last name into `div.user-info`.
    $('.user-fullname').text(userInfo.firstName +'  '+  userInfo.lastName); 
      
    $('user-info').show();

  }); 


  $('.view-details').on('click', function(event){
    console.log(event); 
   var targetElement = event.target; 
   // view details buttion 
   var container = targetElement.parentElement.parentElement;
   $(container).find('.details').each(function(index, el){
     if($(el).is(':visible')){
       $(el).fadeOut();
       // view details 
       targetElement.innerText = "View Details"
       // view details button will read "hide details".  
     } else { $(el).fadeIn();
       targetElement.innerText = "Hide Details"
     
    }
   });    
  });



});

//event listener on the buttons with the `vote` class.
    $('.vote').on('click', function(event){
//When the button is clicked, look at the `data-vote` attribute to determine  what the user is voting for ("great" or "greatest").
if($(this).attr('data-vote') === 'great'){		
   voteCounts.great = voteCounts.great + 1;}
//Increment the counter for whichever vote talley is affected.
else { voteCounts.greatest = voteCounts.greatest + 1;}  
      voteCounts.total = voteCounts.total + 1;
var greatPercent = voteCounts.great/voteCounts.total;
var greatestPercent = voteCounts.greatest/voteCounts.total;
// Modifed the `width` attribute on each progress bar to set the updated percentage.
     $('.great-Progress').css('width', greatPercent + '%');
     $('.greates-Progress').css('width', greatestPercent + '%');     
    });

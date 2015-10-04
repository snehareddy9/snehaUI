$(document).ready(function () {
        $('ul> li').click(function (e) {
            
            $('ul> li').removeClass('active');
            $(this).addClass('active');                    
        }); 
          
    });


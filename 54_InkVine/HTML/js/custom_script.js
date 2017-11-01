$(document).ready(function() {
	$(window).load(function() {
//        $(".landing-header").load("common_module/header.html");
        $(".landing-footer").load("common_module/footer.html");
		
    });
    
    if ($(window).width() > 1200) {
        var middleframeHeight = $('.middle-content-row').height();
        var leftlisitingHeight = $('.middle-content-row .left-side-col').height();
        if(middleframeHeight >= leftlisitingHeight) {
            $('.middle-content-row .left-side-col').css('minHeight', middleframeHeight);
        }
    }else {
        
    }// Left Listing Min Height Functionality End///
   
    
    //Right Side Setting Col show Functionality
    $('.user-option-col li.icon-setting').click(function(event){
        $('.profile-config-frame').show({ right: "100%"} , 4000);
       
    })//Right Side Setting Col show Functionality End//
    
    //Right Side Setting Col show Functionality
    $('.top-option-list li.icon-setting').click(function(event){       
        $('.profile-config-frame').hide({ right: "100%"} , 4000);       
    })//Right Side Setting Col show Functionality End//
    
    $('.config-options-list li').each(function(){
       $(this).click(function(){
            var listDataId = $(this).attr('data-id');
            console.log(listDataId);
            $('#'+listDataId).show();
       });       
    })
    
   
   
});//document Ready End//

$(window).resize(function(){
    var screenHeight = window.innerHeight;
    //console.log(screenHeight);
	//$('.content-area').css('minHeight', screenHeight - 80);
});//Window Resize End//

$(document).on('click', '.list-content-frame .back-arrow', function(){
    $(this).parent().hide(500);
});


$(document).on('click', '.social-links-section li .icon', function(){
    $('.social-links-form').show();
});


$(document).on('click', '.side-menu-list', function(){
    if($('.left-side-col').is(':hidden')){
//            alert("Hide hai");
        $('.left-side-col').show(500);
        $('.side-menu-list').addClass('activeMenu');
    }
    else {
//            alert("visible hai");
        $('.left-side-col').hide();
        $('.side-menu-list').removeClass('activeMenu');
    }
});


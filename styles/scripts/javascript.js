var $;
$("#arrow").on("click", function () {
    $("body, html").animate({
        scrollTop: $("main").offset().top
    }, 1200)
})

$(function(){
  
    $(".active_tab").css("display", "block");
    
    $(document).everyTime(10000, function(i) {
        
        $(".active_tab").fadeOut("normal", function(){

            if($(".active_tab").next("li").html() == null)
           {
                $(".active_tab").removeClass("active_tab");
                $("#tabs > li:first").addClass("active_tab");
                $(".active_tab").fadeIn("normal");  
            }
            else
            {
                $(".active_tab").removeClass("active_tab").next("li").addClass("active_tab");
                $(".active_tab").fadeIn("normal");          
            }
                
        });
    });
});

 $(document).ready(function(){
     $('#bigmen').click(function(){
            $('ul').toggleClass('aktywny');
       })
 })


 $(document).ready(function(){
     $('.menubutton').click(function(){
             $('.menu').toggleClass('active')
    })
})
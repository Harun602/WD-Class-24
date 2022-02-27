

//  $ - Universal Accesor  -- Dom theke kauke dhore ana

// DOM - Document Object Model


// hide() -- show()  --- toggle()
// slideUp() -- slideDown()  -- slideToggle()
// fadeOut() -- fadeIn()  -- fadeToggle()

// Jquery event list


$(document).ready(function(){

    $(".button #hide-button").on("click",function(){

        //$(".text p").hide(1000);
        //$(".text p").slideUp(1000);
        $(".text p").fadeOut(1000);

    });

    $(".button #show-button").on("click",function(){

        //$(".text p").show(1000);
        $(".text p").slideDown(1000);
        //$(".text p").fadeIn(1000);

    });

    $(".button #show-button").on("click",function(){

        //$(".text p").show(1000);
        $(".text p").slideDown(1000);
        //$(".text p").fadeIn(1000);

    });

    $(".button #toggle-button").on("click",function(){

        //$(".text p").toggle(1000);
        $(".text p").slideToggle(1000);
        //$(".text p").fadeToggle(1000);

    });



    $(".my-form button").on("click",function(){
        var inputValue = $(".my-form input").val();
        alert(inputValue);
    });
















});
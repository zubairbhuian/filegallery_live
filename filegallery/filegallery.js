// sidebar start here
$(".bars-icon").click(function () {
    $(".sidebar").toggleClass("widht-reduce");
    $(".bars-icon").toggleClass("add-fa-bars");
  });
  
  $(".side-nav-link.nav-link").click(function () {
    
    if ($(window).width() > 991) {
      $(".sidebar").removeClass("widht-reduce");
    }
  // $(this).toggleClass("active");
     if($(this).parent().hasClass("active")){
      $(this).parent().removeClass("active");
     
    }else{
      
      $(".side-nav-item").removeClass("active");
      $(this).parent().addClass("active");
    }
  });

// active list grid
$(document).ready(function(){
  $(".grid-list-btn").click(function(){
    $(".grid-list-btn").removeClass("active");
    $(this).addClass("active");
  });
});
$(document).ready(function(){
  $("#list").click(function(){
    $(".file-gallery").removeClass("grid-view").addClass("list-view");
    
  });
});
$(document).ready(function(){
  $("#grid").click(function(){
    $(".file-gallery").removeClass("list-view").addClass("grid-view");
  });
});
$(document).ready(function(){
  $(".love-icon").click(function(){
    $(this).toggleClass("active")
  });
});

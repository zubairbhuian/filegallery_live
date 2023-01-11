$(document).ready(function(){

    $(".audio-card").click(function(){
      
        // Active card
        $(".audio-card-main").removeClass("active")
        $(this).parent().addClass("active")
        // Dom img
       var imgSrc= $(this).children('.audio-card-img').children().attr('src')
       $('.thum-audio').children().attr("src", imgSrc)
       // Dom title
       var title= $(this).children('.audio-card-text').children(".audio-title").text()
       $('.audio-player-title').text(title)
       // Dom subTitle
       var subTitle= $(this).children('.audio-card-text').children(".short-long-text").children('.first-text').text()
       var subTitle2= $(this).children('.audio-card-text').children(".short-long-text").children('.second-text').text()
       var subTitle3= $(this).children('.audio-card-text').children(".short-long-text").children('.third-text').text()
       $('.audio-player-subtitle').text(subTitle+' '+subTitle2)
       // Dom audio src
       var audioSrc= $(this).children('audio').children('.card-mp3-src').attr('src')
       $('#player').attr("src", audioSrc)
    });
  });


  $(document).ready(function(){
    $(".audio-card-love-btn").click(function(){
        $(this).toggleClass("active");
    });
  });
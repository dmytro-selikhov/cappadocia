$(document).ready(function()
{

    $('.toggle-button').on('click', function(){
        $(this).next().slideToggle(200)
        $(this).find('span').toggleClass('rotate')
    })


});

$(function(){
    $('.thrumb').mouseenter(function(){
        $('img', this).stop().animate({marginTop: '80%', opacity: 0},600);
    }).mouseleave(function(e){

        $('img', this).stop().animate({marginTop: '0%', opacity: 1},600);
    });
});

$('.gang-name').click(function(){
    if($(this).hasClass("collapsed")){
        $(this).nextUntil('tr.gang-name')
            .find('td')
            .parent()
            .find('td > div')
            .slideDown("fast", function(){
                var $set = $(this);
                $set.replaceWith($set.contents());
            });
        $(this).removeClass("collapsed");
    } else {
        $(this).nextUntil('tr.gang-name')
            .find('td')
            .wrapInner('<div style="display: block;" />')
            .parent()
            .find('td > div')
            .slideUp("fast");
        $(this).addClass("collapsed");
    }
});

import $ from 'jquery';

$(document).ready(init);

function init() {
    // console.log('init');
    var specialDivs = $('.specialDiv');

    // console.log(specialDivs);

    specialDivs.each(function() {
        $(this).click(() => {
            // console.log('sono speciale');
            var specialChildren = $(this).children('.specialChildren').first();
            var specialValue = specialChildren.data('specialvalue');
            if(specialValue) {
                console.log(specialValue);
            }

            specialChildren.toggleClass('active');
        })
    });
}
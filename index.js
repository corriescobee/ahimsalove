window.setInterval(function() {

    var current = new Date();

    var day1 = new Date("May 24, 2022 13:20:02")
    var day2 = new Date("May 24, 2022 13:20:04");
    var day3 = new Date("May 24, 2022 13:20:06");
    var day4 = new Date("May 24, 2022 13:20:08");
    var day5 = new Date("May 24, 2022 13:20:10");
    var day6 = new Date("May 24, 2022 13:20:12");
    var day7 = new Date("May 24, 2022 13:20:14");

    /*var day1 = new Date("May 27, 2022 2:00:00");
    var day2 = new Date("May 28, 2022 2:00:00");
    var day3 = new Date("May 29, 2022 2:00:00");
    var day4 = new Date("May 30, 2022 2:00:00");
    var day5 = new Date("May 31, 2022 2:00:00");
    var day6 = new Date("June 1, 2022 2:00:00");
    var day7 = new Date("June 2, 2022 2:00:00");*/

    if (current.getTime() > day1.getTime()) {
        $('#contact').show();
        $('#day1pic img').css({
            'filter':'none' 
        })
    }
      
    if (current.getTime() > day2.getTime()) {
        $('#contact2').show();
        $('#day2pic img').css({
            'filter':'none' 
        })
    }

    if (current.getTime() > day3.getTime()) {
        $('#contact3').show();
        $('#day3pic img').css({
            'filter':'none' 
        })
    }

    if (current.getTime() > day4.getTime()) {
        $('#contact4').show();
        $('#day4pic img').css({
            'filter':'none' 
        })
    }

    if (current.getTime() > day5.getTime()) {
        $('#contact5').show();
        $('#day5pic img').css({
            'filter':'none' 
        })
    }

    if (current.getTime() > day6.getTime()) {
        $('#contact6').show();
        $('#day6pic img').css({
            'filter':'none' 
        })
    }

    if (current.getTime() > day7.getTime()) {
        $('#contact7').show();
        $('#day7pic img').css({
            'filter':'none' 
        })
    }
}, 0);        

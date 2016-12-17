"use strict";

var _duration = 200;
var _easing = 'linear';

var myApp = {
    init: function () {
//                $('*').removeClass('selected');
        $('dd').hide();
        $('dd').first().show({
            duration: _duration,
            easing: _easing,
            complete: function () {
                $(this).toggleClass('selected');
            }
        })
    }
}

$(document).ready( function() {
    $('div[w3-include-header]').load($('div[w3-include-header]').attr('w3-include-header'));
    $('div[w3-include-footer]').load($('div[w3-include-footer]').attr('w3-include-footer'));

    myApp.init();

    // 찾기 버튼에 토글 달기
    $('body').on('click', '#btn1', function (e) {
        $('#content').slideToggle({
            duration: _duration,
            easing: _easing,
            complete: function () {
                $('.type_text').focus();
            }
        });
    });

    //recurit
    $('dt').click(function (e) {
        //방법1
        var _callback = function(){}
        var selected = $('dt.selected');
        if (selected.index() == $(this).index()) {
            $('*').removeClass('selected');
            $(this).next('dd').slideUp({
                duration: _duration,
                easing: _easing,
                complete: _callback()
            });
        }
        else {
            myApp.init();
            // $(this).siblings('dd').hide();
            $(this).toggleClass('selected');
            $(this).next('dd').slideToggle({
                duration: _duration,
                easing: _easing,
                complete: _callback()
            });
        }
    });
});




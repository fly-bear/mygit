/**********************************/
/*
/* jquery fancy textbox plugin
/* author: Muhammad Shahbaz Saleem
/* url: http://www.egrappler.com
/* licnese: http://www.egrappler.com/license
/*
/**********************************/

(function ($) {
    $.fn.extend({
        ftext: function () {
            return this.each(function () {
                var cls = 'fancy-textbox';
                var textbox = $(this);

                var id = textbox.attr('id');
                if (id == null || id == undefined || id == '') {
                    id = cls + '-' + $('.' + cls).size() + 1;
                    textbox.attr('id', id);
                }

                var label = textbox.attr('data-label');
                var animation = textbox.attr('data-animation');
                var mask = textbox.attr('data-mask');
                var icon = textbox.attr('data-icon');

                if (label == undefined) label = '';
                if (mask == undefined) mask = '';
                if (icon == undefined) icon = '';

                var labelControl = null;
                if (label != '' && icon == '')
                    labelControl = $('<label class="label" for="' + id + '">' + label + '</label>');
                else if (label != '' && icon != '')
                    labelControl = $('<label class="label icon text" no-repeat left center;" for="' + id + '"><i class="' + icon + '"></i>' + label + '</label>');
                else if (label == '' && icon != '')
                    labelControl = $('<label class="label icon" for="' + id + '"><i class="' + icon + '"></i></label>');

                //add a wrapper around the text box and place the textbox within that wrapper, this will help positioning and animating the label

                var wrapper = $('<div class="' + cls + '-wrapper"></div>');
                textbox.before(wrapper);
                textbox.addClass(cls).addClass('masked');


                if (animation == 'box-3d' || animation == 'box-3d-in' || animation == 'box-3d-up' || animation == 'box-3d-out') {
                    wrapper.append('<div class="wrap-3d"><div class="face front"> </div> <div class="face back">  </div> </div>');
                    textbox.appendTo(wrapper.find('.back'));
                    labelControl.appendTo(wrapper.find('.front'));
                }
                else {
                    textbox.appendTo(wrapper);
                    textbox.after(labelControl);
                }

                //add animation class to wrapper, label will be styled and positioned based on this animation class
                //fancy-textbox.css contains all the styles for available animation classes, you can modify the css
                //file to suit your requirements.

                wrapper.addClass(animation);

                var labelWidth = parseFloat(textbox.parent().find('label').outerWidth());
                textbox.css('text-indent', labelWidth + 'px');

                if (animation == 'balloon') {
                    var arrow = $('<label class="arrow"></label>');
                    labelControl.after(arrow);
                    arrow.css('left', labelWidth / 2 + 'px');
                }

                textbox.val(mask);

                wrapper.find('input').focus(function () {

                    if ($(this).parent().hasClass('slide')) {
                        var indent = $(this).css('text-indent');
                        $(this).data('text-indent', indent);
                        $(this).css('text-indent', 0).removeClass('masked');
                        $(this).parent().find('label').css({ 'transform': 'translateX(-100%)', '-webkit-transform': 'translateX(-100%)', '-moz-transform': 'translateX(-100%)' });
                    }
                    if ($(this).parent().hasClass('up')) {
                        var indent = $(this).css('text-indent');
                        $(this).data('text-indent', indent);
                        $(this).css('text-indent', 0).removeClass('masked');
                        $(this).parent().find('label').css({ 'transform': 'translateY(-110%)', '-webkit-transform': 'translateY(-110%)', '-moz-transform': 'translateY(-110%)' });
                    }
                    else if ($(this).parent().hasClass('clean-slide')) {
                        var indent = $(this).css('text-indent');
                        $(this).data('text-indent', indent);
                        $(this).css('text-indent', 0).removeClass('masked');
                        $(this).parent().find('label').css({ 'transform': 'translateX(-100%)', '-webkit-transform': 'translateX(-100%)', '-moz-transform': 'translateX(-100%)' });
                        $(this).parent().find('label').css('background-color', $(this).attr('data-label-bg')).css('color', $(this).attr('data-label-color'));
                    }
                    else if ($(this).parent().hasClass('gate')) {
                        var indent = $(this).css('text-indent');
                        $(this).data('text-indent', indent);
                        $(this).css('text-indent', 0).removeClass('masked');
                        $(this).parent().find('label').css({ 'transform': 'rotate(-66deg)', '-webkit-transform': 'rotate(-66deg)', '-moz-transform': 'rotate(-66deg)' });
                    }
                    else if ($(this).parent().hasClass('swing')) {
                        var indent = $(this).css('text-indent');
                        $(this).data('text-indent', indent);
                        $(this).css('text-indent', 0).removeClass('masked');
                        $(this).parent().find('label').css({ 'transform': 'rotate(-290deg)', '-webkit-transform': 'rotate(-290deg)', '-moz-transform': 'rotate(-290deg)' });
                    }
                    else if ($(this).parent().hasClass('balloon')) {
                        var indent = $(this).css('text-indent');
                        var top = $(this).outerHeight();
                        $(this).data('text-indent', indent);
                        $(this).css('text-indent', 0).removeClass('masked');
                        $(this).parent().find('label:first').css({ 'transform': 'translateY(-' + top + 'px)', '-webkit-transform': 'translateY(-' + top + 'px)', '-moz-transform': 'translateY(-' + top + 'px)' }).css('background-color', $(this).attr('data-label-bg')).css('color', $(this).attr('data-label-color'));
                        $(this).parent().find('label.arrow').css({ 'transform': 'translateY(-' + (top + 8) + 'px)', '-webkit-transform': 'translateY(-' + (top + 8) + 'px)', '-moz-transform': 'translateY(-' + (top + 8) + 'px)' }).css('border-top', '3px solid #7AB893');
                    }
                    else if ($(this).parent().hasClass('fade')) {
                        var indent = $(this).css('text-indent');
                        var top = $(this).outerHeight();
                        $(this).data('text-indent', indent);
                        $(this).css('text-indent', 0).removeClass('masked');
                        $(this).parent().find('label').css('opacity', '0');
                    }
                    else if ($(this).parent().hasClass('scale')) {
                        var indent = $(this).css('text-indent');
                        var top = $(this).outerHeight();
                        $(this).data('text-indent', indent);
                        $(this).css('text-indent', 0).removeClass('masked');
                        $(this).parent().find('label').css({ 'transform': 'scale(10)', '-webkit-transform': 'scale(10)', '-moz-transform': 'scale(10)' }).css('opacity', '0');
                    }
                    else if ($(this).parent().hasClass('scale-down')) {
                        var indent = $(this).css('text-indent');
                        var top = $(this).outerHeight();
                        $(this).data('text-indent', indent);
                        $(this).css('text-indent', 0).removeClass('masked');
                        $(this).parent().find('label').css({ 'transform': 'scale(0)', '-wbkit-transform': 'scale(0)', '-moz-transform': 'scale(0)' }).css('opacity', '0');
                    }
                    else if ($(this).parent().hasClass('rotate')) {
                        var indent = $(this).css('text-indent');
                        var top = $(this).outerHeight();
                        $(this).data('text-indent', indent);
                        $(this).css('text-indent', 0).removeClass('masked');
                        $(this).parent().find('label').css({ 'transform': 'rotate(360deg)', '-webkit-transform': 'rotate(360deg)', '-moz-transform': 'rotate(360deg)' }).css('opacity', '0');
                    }
                    else if ($(this).parent().hasClass('rotate-3d')) {
                        var indent = $(this).css('text-indent');
                        var top = $(this).outerHeight();
                        $(this).data('text-indent', indent);
                        $(this).css('text-indent', 0).removeClass('masked');
                        $(this).parent().find('label').addClass('hover');
                    }
                    else if ($(this).parent().hasClass('rotate-3d-down')) {
                        var indent = $(this).css('text-indent');
                        var top = $(this).outerHeight();
                        $(this).data('text-indent', indent);
                        $(this).css('text-indent', 0).removeClass('masked');
                        $(this).parent().find('label').addClass('hover');
                    }
                    else if ($(this).parent().hasClass('rotate-3d-left')) {
                        var indent = $(this).css('text-indent');
                        var top = $(this).outerHeight();
                        $(this).data('text-indent', indent);
                        $(this).css('text-indent', 0).removeClass('masked');
                        $(this).parent().find('label').addClass('hover');
                    }
                    else if ($(this).parent().hasClass('flip')) {
                        var indent = $(this).css('text-indent');
                        var top = $(this).outerHeight();
                        $(this).data('text-indent', indent);
                        $(this).css('text-indent', 0).removeClass('masked');
                        $(this).parent().find('label').addClass('hover');
                    }
                    else if ($(this).parent().hasClass('flip-down')) {
                        var indent = $(this).css('text-indent');
                        var top = $(this).outerHeight();
                        $(this).data('text-indent', indent);
                        $(this).css('text-indent', 0).removeClass('masked');
                        $(this).parent().find('label').addClass('hover');
                    }
                    else if ($(this).parent().hasClass('flip-left')) {
                        var indent = $(this).css('text-indent');
                        var top = $(this).outerHeight();
                        $(this).data('text-indent', indent);
                        $(this).css('text-indent', 0).removeClass('masked');
                        $(this).parent().find('label').addClass('hover');
                    }                  
                    
                    //handle input mask
                    if ($(this).val() == $(this).attr('data-mask')) {
                        $(this).val('');
                    }
                });

                wrapper.find('input').blur(function () {
                    if ($(this).parent().hasClass('slide')) {
                        $(this).css('text-indent', $(this).data('text-indent')).addClass('masked');
                        $(this).parent().find('label').css({ 'transform': 'translateX(0)', '-webkit-transform': 'translateX(0)', '-moz-transform': 'translateX(0)' });
                    }
                    else if ($(this).parent().hasClass('up')) {
                        $(this).css('text-indent', $(this).data('text-indent')).addClass('masked');
                        $(this).parent().find('label').css({ 'transform': 'translateY(0)', '-webkit-transform': 'translateY(0)', '-moz-transform': 'translateY(0)' });
                    }
                    else if ($(this).parent().hasClass('clean-slide')) {
                        $(this).css('text-indent', $(this).data('text-indent')).addClass('masked');
                        $(this).parent().find('label').css({ 'transform': 'translateX(0)', '-webkit-transform': 'translateX(0)', '-moz-transform': 'translateX(0)' }).css('background-color', '').css('color', '');
                    }
                    else if ($(this).parent().hasClass('gate')) {
                        $(this).css('text-indent', $(this).data('text-indent')).addClass('masked');
                        $(this).parent().find('label').css({ 'transform': 'rotate(0deg)', '-wbkit-transform': 'rotate(0deg)', '-moz-transform': 'rotate(0deg)' });
                    }
                    else if ($(this).parent().hasClass('swing')) {
                        $(this).css('text-indent', $(this).data('text-indent')).addClass('masked');
                        $(this).parent().find('label').css({ 'transform': 'rotate(0deg)', '-wbkit-transform': 'rotate(0deg)', '-moz-transform': 'rotate(0deg)' });
                    }
                    else if ($(this).parent().hasClass('balloon')) {
                        $(this).css('text-indent', $(this).data('text-indent')).addClass('masked');
                        $(this).parent().find('label').css({ 'transform': 'translateY(0)', '-webkit-transform': 'translateY(0)', '-moz-transform': 'translateY(0)' }).css('background-color', '').css('color', '');
                        $(this).parent().find('label:last').css('border-top', '');
                    }
                    else if ($(this).parent().hasClass('fade')) {
                        $(this).css('text-indent', $(this).data('text-indent')).addClass('masked');
                        $(this).parent().find('label').css('opacity', '1');
                    }
                    else if ($(this).parent().hasClass('scale')) {
                        $(this).css('text-indent', $(this).data('text-indent')).addClass('masked');
                        $(this).parent().find('label').css({ 'transform': 'scale(1)', '-webkit-transform': 'scale(1)', '-moz-transform': 'scale(1)' }).css('opacity', '1');
                    }
                    else if ($(this).parent().hasClass('scale-down')) {
                        $(this).css('text-indent', $(this).data('text-indent')).addClass('masked');
                        $(this).parent().find('label').css({ 'transform': 'scale(1)', '-webkit-transform': 'scale(1)', '-moz-transform': 'scale(1)' }).css('opacity', '1');
                    }
                    else if ($(this).parent().hasClass('rotate')) {
                        $(this).css('text-indent', $(this).data('text-indent')).addClass('masked');
                        $(this).parent().find('label').css({ 'transform': 'rotate(0deg)', '-wbkit-transform': 'rotate(0deg)', '-moz-transform': 'rotate(0deg)' }).css('opacity', '1');
                    }
                    else if ($(this).parent().hasClass('rotate-3d')) {
                        $(this).css('text-indent', $(this).data('text-indent')).addClass('masked');
                        $(this).parent().find('label').removeClass('hover');
                    }
                    else if ($(this).parent().hasClass('rotate-3d-down')) {
                        $(this).css('text-indent', $(this).data('text-indent')).addClass('masked');
                        $(this).parent().find('label').removeClass('hover');
                    }
                    else if ($(this).parent().hasClass('rotate-3d-left')) {
                        $(this).css('text-indent', $(this).data('text-indent')).addClass('masked');
                        $(this).parent().find('label').removeClass('hover');
                    }

                    else if ($(this).parent().hasClass('flip')) {
                        $(this).css('text-indent', $(this).data('text-indent')).addClass('masked');
                        $(this).parent().find('label').removeClass('hover');
                    }
                    else if ($(this).parent().hasClass('flip-down')) {
                        $(this).css('text-indent', $(this).data('text-indent')).addClass('masked');
                        $(this).parent().find('label').removeClass('hover');
                    }
                    else if ($(this).parent().hasClass('flip-left')) {
                        $(this).css('text-indent', $(this).data('text-indent')).addClass('masked');
                        $(this).parent().find('label').removeClass('hover');
                    }
                    else if ($(this).parent().hasClass('flip-left')) {
                        $(this).css('text-indent', $(this).data('text-indent')).addClass('masked');
                        $(this).parent().find('label').removeClass('hover');
                    }

                    //handle input mask
                    if ($(this).val() == '') {
                        $(this).val($(this).attr('data-mask'));
                    }
                });
            });
        }
    });
})(jQuery);


/**
 * tooltip - bootstrap 4 tooltip equivalent
 *
 * @version 0.0.1
 * @author April Sacil <aprilvsacil@gmail.com>
 * @website https://github.com/aprilsacil/jquery-tooltip
 * @license MIT
 */
/*
 * $(element).tooltip();
 */
jQuery.fn.extend({
    tooltip: function (options) {
        return this.each(function () {
            var elem = $(this);
            var content = elem.attr('title');
            var position = elem.data('placement') ?? 'right';
            elem.addClass('tooltip');
            elem.attr('title', '');

            elem.append('<span class="tooltiptext tooltip-'+position+'">'+content+'</div>');
        });
    }
});

$('*[data-toggle="tooltip"]').tooltip();
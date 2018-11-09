;(function ($) {
    $.fn.watermark = function(options) {
        var defaultOptions = {
            text: '',
            overlap: false,
            tileHeight: '200',
            tileWidth: '300',
            font: 'Microsoft JhengHei',
            fontSize: '16px'
        };
        var opts = $.extend(defaultOptions, options);

        var mask = document.createElement('div');
        var canvas = document.createElement('canvas');

        mask.style.height = Math.max(document.body.scrollHeight, document.body.clientHeight) + 'px';
        mask.style.width = Math.max(document.body.scrollWidth, document.body.clientWidth) + 'px';
        mask.style.position = "absolute";
        mask.style.top = '0px';
        mask.style.left = '0px';
        mask.style.zIndex = 1000;
        mask.style.pointerEvents = "none";
        if (opts.overlap) {
            mask.style.zIndex = -1000;
        }

        mask.appendChild(canvas);

        canvas.width = opts.tileWidth;
        canvas.height = opts.tileHeight;
        canvas.style.display = 'none';

        var context = canvas.getContext('2d');
        context.rotate(-20 * Math.PI / 180);
        // context.font = "16px Microsoft JhengHei";
        context.font = opts.fontSize + ' ' + opts.font;
        context.fillStyle = "rgba(17, 17, 17, 0.50)";
        context.textAlign = 'center';
        context.textBaseline = 'Middle';
        context.fillText(opts.text, canvas.width / 3, canvas.height / 2);

        mask.style.backgroundImage = "url(" + canvas.toDataURL("image/png") + ")";

        this.each(function (index, item) {
            $(item).append(mask);
        });
    };
})(jQuery);
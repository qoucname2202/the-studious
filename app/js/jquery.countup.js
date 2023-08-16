(function ($) {
    "use strict";

    $.fn.countUp = function (options) {
        let settings = $.extend({
            'time': 2000,
            'delay': 10
        }, options);

        return this.each(function () {
            let $this = $(this);
            let $settings = settings;

            const counterUpper = function () {
                if (!$this.data('counterupTo')) {
                    $this.data('counterupTo', $this.text());
                }
                let time = parseInt($this.data("counter-time")) > 0
                    ? parseInt($this.data("counter-time"))
                    : $settings.time;
                let delay = parseInt($this.data("counter-delay")) > 0
                    ? parseInt($this.data("counter-delay"))
                    : $settings.delay;
                let divisions = time / delay;
                let num = $this.data('counterupTo');
                let nums = [num];
                let isComma = /[0-9]+,[0-9]+/.test(num);
                num = num.replace(/,/g, '');
                let isInt = /^[0-9]+$/.test(num);
                let isFloat = /^[0-9]+\.[0-9]+$/.test(num);
                let decimalPlaces = isFloat ? (num.split('.')[1] || []).length : 0;
                for (let i = divisions; i >= 1; i--) {
                    let newNum = parseInt(Math.round(num / divisions * i));
                    if (isFloat) {
                        newNum = parseFloat(num / divisions * i).toFixed(decimalPlaces);
                    }
                    if (isComma) {
                        while (/(\d+)(\d{3})/.test(newNum.toString())) {
                            newNum = newNum.toString().replace(/(\d+)(\d{3})/, '$1' + ',' + '$2');
                        }
                    }
                    nums.unshift(newNum);
                }
                $this.data('counterup-nums', nums);
                $this.text('0');
                const f = function () {
                    $this.text($this.data('counterup-nums').shift());
                    if ($this.data('counterup-nums').length) {
                        setTimeout($this.data('counterup-func'), delay);
                    } else {
                        delete $this.data('counterup-nums');
                        $this.data('counterup-nums', null);
                        $this.data('counterup-func', null);
                    }
                };
                $this.data('counterup-func', f);
                setTimeout($this.data('counterup-func'), delay);
            };
            $this.waypoint(counterUpper, {offset: '100%', triggerOnce: true});
        });

    };
})(jQuery);

function utils(game) {
    this.setSize = function(sprite, param, len) {
        if (param === 'height') {
            var precent = len / sprite.height
            sprite.height = len
            sprite.width = sprite.width * precent
        } else {
            var precent = len / sprite.width
            sprite.width = len
            sprite.height = sprite.height * precent
        }
    }
    this.setFull = function(obj) {
        var Ratio = window.devicePixelRatio
        var w = document.documentElement.clientWidth || document.body.clientWidth
        var h = document.documentElement.clientHeight || document.body.clientHeight

        var ww = Ratio * w
        var hh = Ratio * h
        obj.width = ww
        obj.height = hh
    }
    this.cw = function(num) {
        var w = document.documentElement.clientWidth || document.body.clientWidth;
        var res = w * (num / 100)
        return res
    }
    this.ch = function(num) {
        var h = document.documentElement.clientHeight;
        var res = h * (num / 100)
        return res
    }

   
}
// 动画特效
/*
 Back
 Bounce
 Circular
 Cubic
 Elastic
 Exponential
 Linear
 Quadratic
 Quartic
 Quintic
 Sinusoidal
 */

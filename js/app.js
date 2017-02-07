/**
 * Created by lsc on 2016/11/21.
 */
(function(win) {
    'use strict';
    // 设置图片目录
    var baseURI = '../..'

    localStorage.baseURI = baseURI





    document.getElementById('game-container').style.height = document.body.clientHeight + 'px';
    var Ratio = window.devicePixelRatio
    var w = document.documentElement.clientWidth || document.body.clientWidth
    var h = document.documentElement.clientHeight || document.body.clientHeight
    var ww = Ratio * w
    var hh = Ratio * h
    console.log(Ratio, ww, hh);



    var game = new Phaser.Game(ww, hh, Phaser.AUTO, 'game-container');

    // var game = new Phaser.Game(w, h, Phaser.AUTO, 'game-container')

    game.state.add('Boot', Boot);
    game.state.add('Preloader', Preloader);
    //添加场景
    game.state.add('State1', State1)
    game.state.add('State2', State2)
    game.state.add('State3', State3)
    game.state.add('State4', State4)

    game.state.start('Boot')



})(window)

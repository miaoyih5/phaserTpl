var Boot = function(game) {
    var baseURI = localStorage.baseURI
    this.init = function() {



        if (!game.device.desktop) {


            game.stage.backgroundColor = '#d4d8d3';
            game.input.maxPointers = 1;
            game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            game.scale.pageAlignHorizontally = true;
            game.scale.pageAlignVertically = true;


            game.scale.forceOrientation(false, true);
            game.scale.enterIncorrectOrientation.add(enterIncorrectOrientation, this);
            game.scale.leaveIncorrectOrientation.add(leaveIncorrectOrientation, this);
        }
        game.scale.pageAlignHorizontally = true
        game.scale.pageAlignVertically = true
    }
    this.preload = function() {
        game.load.crossOrigin = true
    }
    this.create = function() {
        game.state.start('Preloader');
    }
    this.update = function() {}
    this.render = function() {}

    function gameResized(width, height) {}

    function enterIncorrectOrientation() {
        document.getElementById('orientation').style.display = 'block';
    }

    function leaveIncorrectOrientation() {
        document.getElementById('orientation').style.display = 'none';
    }

}

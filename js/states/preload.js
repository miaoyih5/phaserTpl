var Preloader = function(game) {
    var baseURI = localStorage.baseURI
    this.init = function() {}
    this.preload = function() {
        game.load.crossOrigin = true
        game.load.onFileComplete.add(function(progess) {
            console.log(progess);
            document.getElementById('progress').innerHTML = progess + '%'
        })
        game.load.onLoadComplete .add(function() {
            document.getElementById('loading').style.display = 'none'
            game.state.start('State1')
        })
    }
    this.create = function() {

    }
}

var State4 = function(game) {
    var time = 0;
    this.init = function() {
        time = 0
    }
    this.create = function() {}

    function as(key, x, y, sizeType, size) {
        var tempSprite = game.add.sprite(x, y, key);
        tempSprite.anchor.set(.5)
        if (sizeType === "width") {
            tool.setSize(tempSprite, 'width', size)
        } else if (sizeType === "height") {
            tool.setSize(tempSprite, 'height', size)
        } else if (sizeType === 'full') {
            tool.setFull(tempSprite)
        }
        return tempSprite
    }
}

function Camera(position,width,height,zoom) {
    this.screen = new v2d(c.width/2,c.height/2)
    this.mousePos = new v2d()
    this.position = position
}

Camera.prototype.update = function(){

}


Camera.prototype.focusOn = function(){

}

Camera.prototype.focusOnPosition = function(){

}

Camera.prototype.draw = function() {

}

Camera.prototype.mouseToWorld = function (mousePosition) {
    this.mouse.setVector(mousePos)
    this.mouse.sub(this.screen)
    this.cam.setVector(this.mousePos)
    this.mouse.scale((1/zoom)*10)
    this.cam.add(this.mouse)
}


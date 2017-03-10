function Controls(player) {

}

document.onkeydown=function(k) {
    if(k.keyCode==38 || k.keyCode==90){ /*up&z*/
        player.thrustUp = true//player.thrust>=100 ? 100 : player.thrust++
    }
    if(k.keyCode==40 || k.keyCode==83){ /*down&s*/
        player.thrustDown = true//player.thrust<=0 ? 0 : player.thrust-
        player.thrustDown = true//player.thrust<=0 ? 0 : player.thrust-
    }
    if(k.keyCode==37 || k.keyCode==81){ /*left&q*/
        player.left = true;
    }
    if(k.keyCode==39 || k.keyCode==68){ /*right&d*/
        player.right = true
    }
    // zoom on o & p
    if(k.keyCode == 34) {
        nz = nz <= 0 ? 0 : nz / 2
    }

    if(k.keyCode == 33) {
        nz = nz >= 1000 ? 1000 : nz * 2
    }
    if(k.keyCode == 32) {
        if(!player.stages[0].isOn)
            player.stage()
    }

    if(state == 1 && k.keyCode == 80) {
        pause()
        state = 4
    } else if(state == 4 && k.keyCode == 80) {
        state = 1
        unpause()
    }
}



document.onmousewheel = function(e) {
    camera.position.z += e.deltaY
}


document.onmousemove = function(e) {
    mousePos.x = e.clientX
    mousePos.y = e.clientY
}


document.onkeyup=function(k) {
    if(k.keyCode==38 || k.keyCode==90){ /*up&z*/
        player.thrustUp = false
    }
    if(k.keyCode==40 || k.keyCode==83){ /*down&s*/
        player.thrustDown = false
    }
    if(k.keyCode==37 || k.keyCode==81){ /*left&q*/
        player.left = false;
    }
    if(k.keyCode==39 || k.keyCode==68){ /*right&d*/
        player.right = false
    }
}

document.onmousedown = function(e) {

    if(manover.state == 0 && state == 1) {
        manover.state = 1
    }
    if(manover.state == 3 && state == 1) {
        manover.state = 0
    }
}

document.onmouseup = function() {
    if(manover.state == 2) {
        manover.state = 3
    }
}
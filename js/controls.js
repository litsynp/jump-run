// key based controls:

function hideControls() {
    document.getElementById("pad-controls").style.visibility = "hidden"
}

function is_touch_device() {
    return !!('ontouchstart' in window);
}


function registerControls() {
    window.onkeydown = function (e) {
        switch (e.keyCode) {
            case 37: // left
                held.left = true;
                break;
            case 32: // space
                held.up = true;
                break;
            case 38: // up
                held.up = true;
                break;
            case 39: // right
                held.right = true;
                break;
            case 40: // down
                held.down = true;
                break;
            case 27: // escape
                initGame()
            default:
                return;
        }
        return false;
    };

    window.onkeyup = function (e) {
        switch (e.keyCode) {
            case 37: // left
                held.left = false;
                break;
            case 32: // space
                held.up = false;
                break;
            case 38: // up
                held.up = false;
                break;
            case 39: // right
                held.right = false;
                break;
            case 40: // down
                held.down = false;
                break;
            default:
                return;
        }
        return false;
    };


    // touch based controls:

    if (is_touch_device()) {
        document.getElementById("pad-controls").style.visibility = "visible"
    }

    // prevent scrolling
    document.body.addEventListener('touchmove', function (event) {
        event.preventDefault();
    }, false);

    var left = document.getElementById("control-left");
    left.addEventListener('touchstart', function (event) {
        held.right = false;
        held.left = true;
        left.style.backgroundImage = "url('images/arrow-left-active.png')"
    }, false);
    left.addEventListener('touchend', function (event) {
        held.right = false;
        held.left = false;
        left.style.backgroundImage = "url('images/arrow-left.png')"
    }, false);

    var up = document.getElementById("control-up");
    up.addEventListener('touchstart', function (event) {
        held.up = true;
        up.style.backgroundImage = "url('images/arrow-up-active.png')"
    }, false);
    up.addEventListener('touchend', function (event) {
        held.up = false;
        up.style.backgroundImage = "url('images/arrow-up.png')"
    }, false);

    var right = document.getElementById("control-right");
    right.addEventListener('touchstart', function (event) {
        held.left = false;
        held.right = true;
        right.style.backgroundImage = "url('images/arrow-right-active.png')"
    }, false);
    right.addEventListener('touchend', function (event) {
        held.left = false;
        held.right = false;
        right.style.backgroundImage = "url('images/arrow-right.png')"
    }, false);

}
javascript: function start() {
    var ask = prompt("Hello, My name is Bubbles. How can I help you? \n  |  | \n|___|");
    var answer = ask.toLowerCase();
    var calculator = answer;
    var feedBack = true;
    if (calculator.indexOf("+") != -1) {
        var plus = calculator.indexOf("+");
        num1 = calculator.slice(0,plus);
        num2 = calculator.slice(plus + 1,calculator.length);
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        ans = num1 + num2;
        alert(ans);
        feedBack = false;
    }

    if (calculator.indexOf("-") != -1) {
        var minus = calculator.indexOf("-");
        num1 = calculator.slice(0,minus);
        num2 = calculator.slice(minus + 1,calculator.length);
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        ans = num1 - num2;
        alert(ans);
        feedBack = false;
    }

    if (calculator.indexOf("*") != -1) {
        var times = calculator.indexOf("*");
        num1 = calculator.slice(0,times);
        num2 = calculator.slice(times + 1,calculator.length);
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        ans = num1 * num2;
        alert(ans);
        feedBack = false;
    }

    if (calculator.indexOf("/") != -1) {
        var devide = calculator.indexOf("/");
        num1 = calculator.slice(0,devide);
        num2 = calculator.slice(devide + 1,calculator.length);
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        ans = num1 / num2;
        alert(ans);
        feedBack = false;
    }
    switch (answer) {
        case "hello":
            alert("Hello, Sir.");
            break;
        case "flash":
            color();
            break;
        case "bubbles":
            cir();
            break;
        case "smile":
            smile();
            break;
        case "background color":
            backColor();
            break;
        case "paint":
            smileyPaint();
            break;
        case "sticker":
            smileySticker();
            break;
        case "google":
            g00gle();
            break;
        case "timer":
            timer();
            break;
        case "dice":
            dice();
            break;
        case "coin flip":
            flip();
            break;
        case "map":
            map();
            break;
        
        case "help":
            help();
            break;
        default:
            if (feedBack === true) {
                alert("Sorry Sir, please retry.");
                start();
            }
    }
}

function color() {
    function blue() {
        var list = document.getElementsByTagName("p");
        length = list.length;
        var count = 0;
        while (count < length) {
            var one = list[count];
            count = count + 1;
            one.style.color = "blue";
        }
    }

    function red() {
        var list = document.getElementsByTagName("p");
        length = list.length;
        var count = 0;
        while (count < length) {
            var one = list[count];
            count = count + 1;
            one.style.color = "red";
        }
    }

    function lime() {
        var list = document.getElementsByTagName("p");
        length = list.length;
        var count = 0;
        while (count < length) {
            var one = list[count];
            count = count + 1;
            one.style.color = "lime";
        }
    }

    function purple() {
        var list = document.getElementsByTagName("p");
        length = list.length;
        var count = 0;
        while (count < length) {
            var one = list[count];
            count = count + 1;
            one.style.color = "purple";
        }
    }

    function go() {
        setTimeout(blue, 250);
        setTimeout(red, 500);
        setTimeout(lime, 750);
        setTimeout(purple, 1000);
    }
    setInterval(go, 1100);
}

function cir() {
    function bubbles() {
        var bubble = document.createElement("DIV");
        var ml = 0;
        var mu = 1;

        function create() {
            var rand = Math.floor((Math.random() * 60) + 1);
            var rand2 = Math.floor((Math.random() * 100) + 1);
            bubble.style.backgroundColor = "lightblue";
            bubble.style.width = "5em";
            bubble.style.height = "5em";
            bubble.style.left = rand + "%";
            bubble.style.top = rand2 + "%";
            bubble.style.borderRadius = "50%";
            bubble.style.position = "absolute";
            bubble.style.zIndex = 100;
            bubble.onclick = destroy;
            document.body.appendChild(bubble);
            setInterval(movetwo, 10);
        }

        function destroy() {
            document.body.removeChild(bubble);
        }

        function move() {
            var left = parseFloat(bubble.style.left);
            var top = parseFloat(bubble.style.top);
            var rand = Math.floor((Math.random() * 2) + 1);
            if (rand === 1) {
                bubble.style.top = top - .5 + "%";
            }
            if (rand === 2) {
                bubble.style.top = top + .5 + "%";
            }
        }

        function movetwo() {
            var left = parseFloat(bubble.style.left);
            var top = parseFloat(bubble.style.top);
            if (ml === 0) {
                bubble.style.left = left + .1 + "%";
                if (left > 93) {
                    ml = 1;
                }
            }
            if (ml === 1) {
                bubble.style.left = left - .1 + "%";
                if (left < 2) {
                    ml = 0;
                }
            }
            if (mu === 0) {
                bubble.style.top = top + .05 + "%";
                if (top > 90) {
                    mu = 1;
                }
            }
            if (mu === 1) {
                bubble.style.top = top - .05 + "%";
                if (top < 5) {
                    mu = 0;
                }
            }
        }
        create();
    }
    var count = prompt("How many bubbles");
    var zero = 0;
    while (zero < count) {
        bubbles();
        zero = zero + 1;
    }
}

function smile() {
    function make() {
        var top = Math.floor((Math.random() * 95) + 1);
        var left = Math.floor((Math.random() * 95) + 1);
        var smile = String.fromCharCode(9787);
        if (top > 82) {
            top = top - 23;
        }
        var mouse = document.createTextNode(smile);
        var cat = document.createElement("P");
        cat.style.fontSize = "3em";
        cat.style.position = "absolute";
        cat.style.zIndex = "100";
        cat.style.left = left + "%";
        cat.style.top = top + "%";
        cat.appendChild(mouse);
        document.body.appendChild(cat);

        function destroy() {
            document.body.removeChild(cat);
        }
        setTimeout(destroy, 500);
    }

    function snow() {
        var top = Math.floor((Math.random() * 95) + 1);
        var left = Math.floor((Math.random() * 95) + 1);
        var smile = String.fromCharCode(9924);
        if (top > 82) {
            top = top - 23;
        }
        var mouse = document.createTextNode(smile);
        var cat = document.createElement("P");
        cat.style.fontSize = "3em";
        cat.style.position = "absolute";
        cat.style.zIndex = "100";
        cat.style.left = left + "%";
        cat.style.top = top + "%";
        cat.appendChild(mouse);
        document.body.appendChild(cat);

        function destroy() {
            document.body.removeChild(cat);
        }
        setTimeout(destroy, 500);
    }
    setInterval(make, 10);
    setInterval(snow, 10);
}

function backColor() {
    var b = prompt("(What color do you want to change the background to?");
    var c = document.getElementsByTagName("BODY")[0];
    c.style.backgroundColor = b;
}

function smileySticker() {
    function place(event) {
        var x = event.clientX;
        var y = event.clientY;
        var smile = String.fromCharCode(9787);
        var Draw = document.createElement("p");
        Draw.style.color = "yellow";
        document.body.appendChild(Draw);
        Draw.style.position = "absolute";
        Draw.innerHTML = smile;
        Draw.style.left = x - 50 + "px";
        Draw.style.top = y - 150 + "px";
        Draw.style.fontSize = "600%";
        Draw.style.width = "0px";
        Draw.style.height = "0px";
    }
    document.body.onclick = place;
}

function smileyPaint() {
    document.addEventListener("touchmove", function(event) {
        stuff(event);
    });
    document.body.onmousemove = try3;

    function try3(e) {
        x2 = e.clientX;
        y2 = e.clientY;
        draw2(x2, y2);
    }

    function stuff(e) {
        var x = e.changedTouches[0].pageX;
        var y = e.changedTouches[0].pageY;
        draw(x, y);
    }

    function draw(x, y) {
        var smile = String.fromCharCode(9787);
        var smiley = document.createTextNode(smile);
        var Draw = document.createElement("p");
        Draw.style.color = "yellow";
        Draw.appendChild(smiley);
        document.body.appendChild(Draw);
        Draw.style.position = "absolute";
        Draw.style.left = x - 10 + "px";
        Draw.style.top = y - 40 + "px";
        Draw.style.fontSize = "200%";
    }

    function draw2(x2, y2) {
        var smile = String.fromCharCode(9787);
        var smiley = document.createTextNode(smile);
        var Draw = document.createElement("p");
        Draw.style.color = "yellow";
        Draw.appendChild(smiley);
        document.body.appendChild(Draw);
        Draw.style.position = "absolute";
        Draw.style.left = x2 - 10 + "px";
        Draw.style.top = y2 - 40 + "px";
        Draw.style.fontSize = "200%";
    }
}

function g00gle() {
    var search = prompt("What do you want to search for?");
    window.location = "https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=" + search;
}

function help() {
    alert("Command list:\nhello\nflash\nbubbles\nsmile\nbackground color\npaint\nsticker\ngoogle\ntimer\ndice\ncoin flip\n email \nmap\nhelp");
    start();
}

function flip() {
    var flipp = Math.floor((Math.random() * 2) + 1);
    if (flipp == 1) {
        alert("Heads");
    }
    if (flipp == 2) {
        alert("Tails");
    }
}

function timer() {
    var set = prompt("How long (in seconds)?");
    var tock = 0;
    function tick() {
        tock = tock + 1;
        timerText.innerHTML = set - tock;
        if (tock == parseFloat(set)){
            clearInterval(go);
            alert("Time is up");
        }
    }
    var go = setInterval(tick, 1000);
    var timerText;
    function graphic() {
        timerText = document.createElement("DIV");
        timerText.style.position = "absolute";
        timerText.style.width = "10%";
        timerText.style.top = "10%";
        timerText.style.left = "50%";
        timerText.style.height = "10%";
        timerText.innerHTML = set;
        timerText.style.color = "blue";
        timerText.style.fontSize = "500%";
        document.body.appendChild(timerText);
    }
    
    graphic();
    
}

function dice() {
    var roll = Math.floor((Math.random() * 6) + 1);
    alert(roll);
}




function map() {
    var where = prompt("Give me a location sir.");
    window.location = "https://www.google.com/maps/place/" + where;
}








start();

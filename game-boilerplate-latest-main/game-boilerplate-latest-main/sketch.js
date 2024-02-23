var gameState="wait"
var splash;
var playbutton
var aboutbutton

function preload(){
splash=loadImage("assets/CupidsLoveAffair.gif")
}

function setup(){
    createCanvas(windowWidth, windowHeight)

    playbutton = createImg("assets/playButton.png")
    playbutton.position(600, 350)
    playbutton.size(200, 100)
    playbutton.hide()

    aboutbutton = createImg("assets/aboutButton.png")
    aboutbutton.position(600, 250)
    aboutbutton.size(200, 100)
    aboutbutton.hide()
}

function draw(){
    if (gameState === "wait") {


        background(splash)
        playbutton.show()
        aboutbutton.show()
        //background_music.play();
    }

    aboutbutton.mousePressed(() => {
        playbutton.hide();
        aboutbutton.hide();
        gameState = "about";
    })

    if (gameState == "about") {
        aboutgame();
    }
}

function aboutgame() {

    swal({
        title: "About Game === How to Play!!",
        text: "Shoot the hearts and escape from the black hearts!\nUse Arrow Keys to move up and down and Space Bar to release the Arrows",
        textAlign: "center",
        imageUrl: "assets/CupidsLoveAffair.gif",
        imageSize: "200x200",
        confirmButtonText: "Let's fly!",
        confirmButtonColor: "purple",
    },

        function () {
            gameState = "wait"
        }
    )

}
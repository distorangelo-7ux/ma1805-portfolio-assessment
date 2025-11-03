class Slideshow {
    constructor() {
        this.imgArray;
        this.imageSize = windowWidth / 4
    }

    setArray(imgArray) {
        this.imgArray = imgArray;
    }

    displayImage(i) {
        this.appear = int(random(0, 25))
        if (this.appear == 2) {
            this.imageSize = windowWidth;
        } else {
            this.imageSize = windowWidth / 4
        } 

        image(this.imgArray[i], 0, 0, this.imageSize, this.imageSize)
    }

    displayVideo(i) {
        image(this.imgArray[i], 0, 0, windowWidth, windowHeight);
        this.imgArray[i].play();
    }

    stopVideo(i) {
        this.imgArray[i].stop();
    }
    
}
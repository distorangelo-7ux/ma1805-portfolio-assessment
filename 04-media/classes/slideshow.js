class Slideshow {
    constructor() {
        this.imgArray;
        this.imageSize = windowWidth / 16
    }

    setArray(imgArray) {
        this.imgArray = imgArray;
    }

    displayImage(i) {
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
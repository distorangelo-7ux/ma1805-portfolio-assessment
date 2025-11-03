class Timer {
  constructor(timeInterval) {
      this.started = false
      this.currentTime = 0;
      this.startTime = 0;
      this.timeDisplay = 0.0;
      this.timeDiff = 0;
      
      this.timeInterval = timeInterval;
  }

  display(x, y) {
    text(this.timeDisplay, (windowWidth / 2) - x, (windowWidth / 2) - y);
  }

  initiateTimer() {
    this.startTime = this.currentTime;
    this.started = true;
  }

  timerLoop() {
    this.currentTime = int(millis());
    if (!this.started) {
      this.initiateTimer();
    }

    this.timeDiff = this.currentTime - this.startTime;
    if (this.timeDiff >= this.timeInterval) {
      this.timeDisplay += this.timeInterval / 1000;
      this.startTime = this.currentTime;
      this.timeDiff = 0;
    }
  }

  timerAction(timerLimit) {
    this.timerLimit = timerLimit;
    if (this.timeDisplay == timerLimit) {
      return true;
    }
    return false;
  }

  timerReset() {
    this.started = false;
    this.timeDisplay = 0;
    this.timeDiff = 0;
  }
}
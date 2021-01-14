class Example {
  constructor() {
    this.bg = 0;
    this.window = false;
  }

  display() {
    background(this.bg);

    if (this.window) {
      this.displayWindow();
    }
  }

  displayWindow() {
    rect(100, 100, 100, 100);
  }

  mousePressed() {
    setTimeout(this.toggleWindow.bind(this), 1000);
  }

  toggleWindow() {
    this.window = true;
    setTimeout(this.hideWindow.bind(this), 2000);
  }

  hideWindow() {
    this.window = false;
  }

}
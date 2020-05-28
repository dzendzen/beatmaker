class DrumKit {
  constructor() {
    this.pads = document.querySelectorAll(".pad");
    this.kickAudio = document.querySelectorAll(".kick-sound");
    this.snareAudio = document.querySelectorAll(".snare-sound");
    this.hihatAudio = document.querySelectorAll(".hihat-sound");
    this.index = 0;
    this.bpm = 150;
  }
  //add a repeater
  repeat() {
    let step = this.index % 8;
    const activeBars = document.querySelectorAll(`.b${step}`);
    this.index++;
  }
  start() {
    const interval = (60 / this.bpm) * 1000; //
    setInterval(() => {
      this.repeat();
    }, interval);
  }
}

const drumKit = new DrumKit();
drumKit.start();

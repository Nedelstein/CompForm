function sequencer() {
  const kick = new Tone.Player("audio/kick-electro02.wav").toMaster();
  const snare = new Tone.Player("audio/snare-noise.wav").toMaster();
  const hihat = new Tone.Player("audio/hihat-digital.wav").toMaster();
  const clap = new Tone.Player("audio/clap-tape.wav").toMaster();
  const cowbell = new Tone.Player("audio/cowbell-808.wav").toMaster();

  let index = 0;

  Tone.Transport.scheduleRepeat(repeat, "8n");
  Tone.Transport.start();
  function repeat() {
    let step = index % 8;
    let kickInputs = document.querySelector(
      `.kick input:nth-child(${step + 1})`
    );
    let snareInputs = document.querySelector(
      `.snare input:nth-child(${step + 1})`
    );
    let hihatInputs = document.querySelector(
      `.hihat input:nth-child(${step + 1})`
    );
    let clapInputs = document.querySelector(
      `.clap input:nth-child(${step + 1})`
    );
    let cowbellInputs = document.querySelector(
      `.cowbell input:nth-child(${step + 1})`
    );
    if (kickInputs.checked) {
      kick.start();
    }
    if (snareInputs.checked) {
      snare.start();
    }
    if (hihatInputs.checked) {
      hihat.start();
    }
    if (clapInputs.checked) {
      clap.start();
    }
    if (cowbellInputs.checked) {
      cowbell.start();
    }
    index++;
  }
}

sequencer();

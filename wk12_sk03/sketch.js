const synth = new Tone.Synth({
  oscillator: {
    type: "sine"
  },
  envelope: {
    attack: 0.15,
    decay: 0.06,
    sustain: 0.5,
    release: 1
  }
});

// const synth = new Tone.FMSynth().toMaster();

const reverb = new Tone.Reverb(1);
Tone.Transport.bpm.value = 200;

synth.connect(reverb);
synth.toMaster();

const cminor = ["C4", "D4", "Eb4", "F4", "G4", "Ab4", "B4"];

const notes = cminor;

let degree = 0;

synth.modulation = window.onmousedown = () => {
  const triad = generateSong();
  play(triad);
};

function generateSong() {
  degree = randomInt(0, 20);

  const a = generateTriad();
  const b = generateTriad();
  const c = generateTriad();
  return [].concat(a, a, b, a, c, a, b, a, c);
}

function generateTriad() {
  const m = [];

  let timeLeft = Tone.Time("1m");
  while (timeLeft.toSeconds() > 0) {
    const change = sample([0, 3, 5]);
    degree = constrain(degree + change, 0, 6);
    const note = notes[degree];

    let length = Tone.Time("4n");
    if (Math.random() < 0.5) {
      length = Tone.Time("8n");
    }
    if (length.toMilliseconds() > timeLeft.toMilliseconds()) {
      length = timeLeft;
    }
    timeLeft = Tone.Time(timeLeft - length);
    m.push([note, length]);
  }
  return m;
}

function play(triad) {
  let t = Tone.now();

  for (const note of triad) {
    if (note[0] !== "rest") {
      synth.triggerAttackRelease(note[0], Tone.Time(note[1]) - 0.1, t);
    }
    t += Tone.Time(note[1]);
  }
}

function constrain(v, min, max) {
  return Math.min(max, Math.max(min, v));
}

function sample(data) {
  const index = Math.floor(Math.random(data.length));
  return data[index];
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

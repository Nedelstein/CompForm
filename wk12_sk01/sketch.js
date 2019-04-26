// const synth = new Tone.Synth().toMaster();
const synth = new Tone.FMSynth().toMaster();

const synthBass = new Tone.Synth().toMaster();

Tone.Transport.bpm.value = 200;

const cmajor = ["C4", "D4", "E4", "F4", "G4", "A4", "B4"];

const bassC = ["C2", "D2", "E2", "F2", "G2", "A2", "B2"];
const notes = cmajor;
const bassNotes = bassC;

let degree = 0;

synth.modulation = window.onmousedown = () => {
  const melody = generateSong();
  const bassLine = generateBassMeasure();
  play(melody);
  play(bassLine);
};

function generateSong() {
  degree = randomInt(0, 20);

  const a = generateMeasure();
  const b = generateMeasure();
  const c = generateMeasure();

  return [].concat(a, a, b, a, c, a, b, a, c);
}

function generateMeasure() {
  const m = [];

  let timeLeft = Tone.Time("1m");

  while (timeLeft.toSeconds() > 0) {
    const change = sample([-1, -2, -2, 1, -5, 2, 3, 5, -3]);
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

function generateBassMeasure() {
  const mBass = [];
  let timeLeft = Tone.Time("1m");

  while (timeLeft.toSeconds() > 0) {
    const change = sample([-1, -2, -2, 1, -5, 2, 3, 5, -3]);
    degree = constrain(degree + change, 0, 6);
    const bass = bassNotes[degree];

    let length = Tone.Time("4n");
    if (Math.random() < 0.5) {
      length = Tone.Time("2n");
    }
    if (length.toMilliseconds() > timeLeft.toMilliseconds()) {
      length = timeLeft;
    }
    timeLeft = Tone.Time(timeLeft - length);
    mBass.push([bass, length]);
  }
  return mBass;
}

function play(melody) {
  let t = Tone.now();
  let b = Tone.now();

  for (const note of melody) {
    if (note[0] !== "rest") {
      synth.triggerAttackRelease(note[0], Tone.Time(note[1]) - 0.1, t);
    }
    t += Tone.Time(note[1]);
  }
  for (const bass of melody) {
    if (bass[0] !== "rest") {
      synthBass.triggerAttackRelease(bass[0], Tone.Time(bass[1]) - 0.1, b);
    }
    b += Tone.Time(bass[1]);
  }
}
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function sample(data) {
  const index = Math.floor(Math.random(data.length));
  return data[index];
}

function constrain(v, min, max) {
  return Math.min(max, Math.max(min, v));
}

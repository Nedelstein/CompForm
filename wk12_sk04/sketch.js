let synth = new Tone.PolySynth(6, Tone.Synth).toMaster();

synth.set("detune", -600);

let chords = [cTriad(), dTriad(), eTriad(), fTriad(), gTriad()];
let degree = 0;

window.onkeypress = function(event) {
  let x = event.which || event.keyCode;

  if (x == 49) {
    cTriad();
  } else if (x == 50) {
    dTriad();
  } else if (x == 51) {
    eTriad();
  } else if (x == 52) {
    fTriad();
  } else if (x == 53) {
    gTriad();
  } else if (x == 54) {
    bTriad();
  }
};

function cTriad() {
  let c = synth.triggerAttackRelease(["C5", "E5", "G5"], "4n");
  return c;
  //   chords.push(c);
}

function dTriad() {
  let d = synth.triggerAttackRelease(["D5", "F5", "A5"], "4n");
  return d;
  //   chords.push(d);
}

function eTriad() {
  let e = synth.triggerAttackRelease(["E5", "G5", "B5"], "4n");
  return e;
  //   chords.push(e);
}

function fTriad() {
  let f = synth.triggerAttackRelease(["F5", "A5", "C6"], "4n");
  return f;
  //   chords.push(f);
}

function gTriad() {
  let g = synth.triggerAttackRelease(["G5", "B5", "D6"], "4n");
  return g;
  //   chords.push(g);
}

function bTriad() {
  let b = synth.triggerAttackRelease(["B5", "D6", "F6"], "4n");
  return b;
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function constrain(v, min, max) {
  return Math.min(max, Math.max(min, v));
}

function sample(data) {
  const index = Math.floor(Math.random(data.length));
  return data[index];
}

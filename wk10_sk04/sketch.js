let lines;
let markov;
let output;

let slider;

function preload() {
  linesA = loadStrings("watts.txt");
  linesB = loadStrings("kanye.txt");
}

Array.prototype.choice = function() {
  let i = floor(random(this.length));
  return this[i];
};

function setup() {
  noCanvas();
  let button = select("#button");
  button.mousePressed(generate);

  output = select("#output");

  slider = select("#slider");
}

function MarkovGenerator(n, max) {
  this.n = n;
  this.max = max;
  this.ngrams = {};

  this.beginnings = [];

  this.feed = function(text) {
    if (text.length < this.n) {
      return false;
    }

    let beginning = text.substring(0, this.n);
    this.beginnings.push(beginning);

    for (let i = 0; i < text.length - this.n; i++) {
      let gram = text.substring(i, i + this.n);
      let next = text.charAt(i + this.n);

      if (!this.ngrams.hasOwnProperty(gram)) {
        this.ngrams[gram] = [];
      }
      this.ngrams[gram].push(next);
    }
  };
  this.generate = function() {
    let current = this.beginnings.choice();
    output = current;

    for (let i = 0; i < this.max; i++) {
      if (this.ngrams.hasOwnProperty(current)) {
        let possible_next = this.ngrams[current];

        let next = possible_next.choice();
        output += next;

        current = output.substring(output.length - this.n, output.length);
      } else {
        break;
      }
    }
    return output;
  };
}

function generate() {
  markov = new MarkovGenerator(5, 200);

  let repeat = floor(slider.value() / 10);

  let totalA = 10 - repeat;
  let totalB = repeat;

  for (let n = 0; n < totalA; n++) {
    for (let i = 0; i < linesA.length; i++) {
      markov.feed(linesA[i]);
    }
  }
  for (let n = 0; n < totalB; n++) {
    for (let i = 0; i < linesB.length; i++) {
      markov.feed(linesB[i]);
    }
  }
  let generated = markov.generate();
  document.getElementById("output").innerHTML = generated;
  // output.html(generated);
}

// let txt =
// "The evidence for a flat earth is derived from many different facets of science and philosophy. The simplest is by relying on ones own senses to discern the true nature of the world around us. The world looks flat, the bottoms of clouds are flat, the movement of the Sun; these are all examples of your senses telling you that we do not live on a spherical heliocentric world. This is using what's called an empirical approach, or an approach that relies on information from your senses. Alternatively, when using Descartes' method of Cartesian doubt to skeptically view the world around us, one quickly finds that the notion of a spherical world is the theory which has the burden of proof and not flat earth theory. Perhaps the best example of flat earth proof is the Bedford Level Experiment. In short, this was an experiment performed many times on a six-mile stretch of water that proved the surface of the water to be flat. It did not conform to the curvature of the earth that round earth proponents teach. ";
let order = 4;
let ngrams = {};
let button;

let tweets;
let beginnings = [];

function preload() {
  tweets = loadStrings("kanye.txt");
  console.log(tweets);
}

function setup() {
  noCanvas();
  for (let j = 0; j < tweets.length; j++) {
    let txt = tweets[j];
    for (let i = 0; i < txt.length - order; i++) {
      let gram = txt.substring(i, i + order);
      if (i == 0) {
        beginnings.push(gram);
      }

      if (!ngrams[gram]) {
        ngrams[gram] = [];
      }
      ngrams[gram].push(txt.charAt(i + order));
    }
  }
  button = createButton("generate");
  button.mousePressed(markovIt);
  console.log(ngrams);
}

function markovIt() {
  let currentGram = random(beginnings);
  let result = currentGram;
  for (let i = 0; i < 60; i++) {
    let possibilities = ngrams[currentGram];
    if (!possibilities) {
      break;
    }

    let next = random(possibilities);
    result += next;
    let len = result.length;
    currentGram = result.substring(len - order, len);
  }
  createP(result);
}

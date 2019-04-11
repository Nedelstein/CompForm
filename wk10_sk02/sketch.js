let story = {
  start: "#[character:#hero#]story#",
  dark: [
    "dark",
    "super dark",
    "sooo dark",
    "like really dark my dude",
    "dark dark dark",
    "kinda bright but mainly dark",
    "dim"
  ],
  verb: [
    "pushed",
    "popped",
    "swam",
    "splashed",
    "hobbled",
    "revolutionized",
    "stroked",
    "licked",
    "tickled"
  ],
  adj: [
    "amiable",
    "polite",
    "diplomatic",
    "inconsequential",
    "straight-forward",
    "unspecial",
    "banal",
    "helpful",
    "efficient",
    "practical",
    "proactive",
    "just great"
  ],
  hero: [
    "BossMan",
    "Ja-Rule",
    "Slim Shady",
    "Riff Raff",
    "Bubbles",
    "Frog from Frod and Toad",
    "Garth from Wayne's World",
    "Eeyore you know from Winnie-the-Pooh",
    "Grand Moff Pascal Tarkin Governor of the Imperial Outland Regions and commander of the Death Star",
    "Oswald Chesterfield Cobblepot aka the Penguin the villain from Batman Returns",
    "Memphis Raines who Nicolas Cage plays in the critically acclaimed film Gone in 60 Seconds",
    "Castor Troy who Nicolas Cage plays in the critically acclaimed film Face/Off",
    "Benjamin Franklin Gates who Nicolas Cage plays in the critically acclaimed film National Treasure"
  ],
  animal: [
    "toad",
    "bum",
    "poopy man",
    "turducken",
    "tasselled wobbegong",
    "lumpsucker",
    "goblin shark",
    "screaming hairy armadillo",
    "monkeyface prickleback",
    "harbour porpoise",
    "inverse panda",
    "sharknado",
    "house elf",
    "ewok",
    "hippogriff",
    "laser-toothed wombat",
    "horse with long toes",
    "shaved centaur"
  ],
  precipitation: [
    "rain",
    "hail",
    "dolla dolla bills yall",
    "big big snow flakes"
  ],
  milk: [
    "milk",
    "cookies",
    "gatorade",
    "four-loko",
    "pediasure",
    "baby formula",
    "skittle juice"
  ],
  spilt: ["spilt", "spoiled", "rotten", "thrown", "organic"],
  story: [
    "It was a #dark# and stormy night. #character# was in a #adj# type of mood. You know, not too #adj#, but kinda #adj#. Suddenly, #character# saw a wild #animal#, which was unhappy with its own form so it turned into a #adj# #animal#. #precipitation.capitalize# was falling from the sky, for it was a #adj# storm for sure.'What mythical beast lies thither?' yelled #character#. To which the beast, which had yet again become unhappy with its current form and morphed into a new #animal# replied, 'It is I, #hero#, you fool! Do you not remember me?' Frankly, #character# did not. 'Let us be #adj# about this,' proclaimed #character#. 'There is no need to cry over #spilt# #milk#. Shall we put this behind us, or have we #verb# too far? What say you?' At this point, the beast was once agian unsatisfied with it's current form and morphed into a #adj# #animal#. 'You are right, #character#. Nobody wants to spend tonight alone as the #precipitation# falls from the sky. Let me come inside and tell you the story of #hero# who I met the other day while I was hanging with the ever-#adj# #hero#."
  ]
};

let grammar;

function setup() {
  noCanvas();
  grammar = tracery.createGrammar(story);

  let result = grammar.flatten("#start#");
  console.log(result);

  document.body.innerHTML = result;
  document.body.style.font = "30px courier";
  document.body.style.textAlign = "justified";
  document.body.style.margin = "30px";
  document.body.style.color = "purple";
  document.body.style.border = "dashed green 10px";
}

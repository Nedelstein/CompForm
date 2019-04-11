const name = {
  // top: ["#div#"],
  sentence: "#noun#, the #adj# #conj# #adj# #noun2#",
  noun: [
    "Crayon",
    "Boban",
    "Brad",
    "Felix",
    "Brooke",
    "Akshansh",
    "Janice",
    "Anna",
    "Katherin",
    "Phoebe",
    "Ray",
    "Tinsley",
    "Noah",
    "Batool",
    "Andrew",
    "Alonso",
    "Ivy",
    "Jo",
    "Jungu",
    "Archit",
    "Kevin",
    "Justin"
  ],
  adj: [
    "slimy",
    "grumpy",
    "sneezy",
    "bear-hugging",
    "wet",
    "arcadian",
    "calamatous",
    "egregious",
    "histronic",
    "luminous",
    "radiant",
    "bearded",
    "sticky",
    "magical",
    "blathering",
    "dusty",
    "thirsty",
    "moist",
    "raspy",
    "cuddly",
    "damp",
    "stale",
    "silky",
    "tart",
    "morose",
    "coarse",
    "knee-slapping",
    "crabby",
    "mushy",
    "elderly",
    "aloof",
    "plastic",
    "macho",
    "educated",
    "neighborly",
    "maniacal",
    "useless",
    "plump"
  ],
  conj: ["but", "yet", "and", "if not"],
  noun2: [
    "piglet",
    "starfish",
    "anaconda",
    "choir boy",
    "chair",
    "step stool",
    "bump",
    "lump",
    "llama",
    "goblin shark",
    "narwhal",
    "panda",
    "spiny lumpsucker",
    "fungus beetle",
    "pink fair armadillo",
    "ant",
    "satanic leaf-tailed gecko",
    "womp womp",
    "chicken turtle",
    "blobfish",
    "tertahedron",
    "smart person",
    "grandma",
    "grandpa",
    "uncle",
    "aunt",
    "band-aid",
    "trust fund",
    "cleaver",
    "sandwich",
    "panini",
    "egg mc muffin",
    "failure",
    "dirtbag",
    "nibblet",
    "mistake",
    "apologist",
    "baby",
    "flat-earther",
    "muggle",
    "incident",
    "pizza cutter",
    "salami",
    "bloomin onion",
    "flap",
    "gastrointerologist"
  ],
  // div: [
  //   '<div style="border: 10px #borderType# #borderColor#; margin-top: 50px; text-align: center; text-transform: uppercase; font-size: 50px; font-family: helvetica;">#sentence#</div>'
  // ],
  borderType: ["dashed", "dotted", "solid"],
  borderColor: ["cyan", "fuschia", "purple", "navy", "green"]
};

function main() {
  let grammar = tracery.createGrammar(name);
  let story = grammar.flatten("#sentence#");

  const storyDiv = document.createElement("div");
  storyDiv.style =
    "border: 10px cyan dotted; margin: 60px; text-align: center; color: fuchsia; text-shadow: 2px 2px 2px cyan; text-transform: uppercase; font-size: 50px; font-family: courier-new";

  storyDiv.textContent = story;

  document.body.insertAdjacentElement("beforeend", storyDiv);
  console.log(story);
}

setTimeout(main, 10);

const fs = require("fs");

String.prototype.replaceAll = function(search, replacement) {
  var target = this;
  return target.replace(new RegExp(search, "g"), replacement);
};

const variants = [
  {
    front: "front.svg",
    back: "back.svg",
    generate: e => e
  }
];

function generateTShirt({ name, variantId }) {
  const variant = variants[variantId];
  const back = variant
    .generate(fs.readFileSync("src/" + variant.back, { encoding: "utf8" }))
    .replaceAll("Dawid", name);
  const front = variant.generate(
    fs.readFileSync("src/" + variant.front, { encoding: "utf8" })
  );

  fs.writeFileSync(`build/${name}-front.svg`, front);
  fs.writeFileSync(`build/${name}-back.svg`, back);
}

[
  { name: "Dawid", variantId: 0 },
  { name: "Mateusz", variantId: 0 },
  { name: "Marcin", variantId: 0 },
  { name: "Pyroxar", variantId: 0 },
  { name: "Kossa", variantId: 0 },
  { name: "ej szymon", variantId: 0 },
  { name: "roertbb", variantId: 0 },
  { name: "Rafał", variantId: 0 },
  { name: "Marta", variantId: 0 },
  { name: "Cherit", variantId: 0 },
  { name: "Piotr", variantId: 0 }
].forEach(async e => generateTShirt(e));

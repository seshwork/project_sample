const example = {
  name: "Example",
  description: "This is an example object",
  version: "1.0.0",
};

module.exports = {
  example,
  displayExample: function () {
    console.log(`Name: ${this.example.name}`);
    console.log(`Description: ${this.example.description}`);
    console.log(`Version: ${this.example.version}`);
  },
};

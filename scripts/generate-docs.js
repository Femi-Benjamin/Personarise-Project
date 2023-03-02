const fs = require("fs");

const generateDocs = () => {
  // Code to generate documentation
  fs.writeFileSync("docs/api.md", "API documentation");
};

generateDocs();

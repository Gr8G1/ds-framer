const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter the input directory path: ', (inputDirectory) => {
  rl.question('Enter the output file path: ', (outputFile) => {
    rl.close();
    const interfaces = [];

    fs.readdirSync(inputDirectory).forEach((file) => {
      if (path.extname(file) === '.ts') {
        const filePath = path.join(inputDirectory, file);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const interfaceMatches = fileContent.match(/interface\s+(\w+)/g);

        if (interfaceMatches) {
          interfaceMatches.forEach((match) => {
            const interfaceName = match.match(/interface\s+(\w+)/)[1];
            interfaces.push(interfaceName);
          });
        }
      }
    });

    const exportStatements = interfaces.map((interfaceName) => `export { ${interfaceName} } from './${interfaceName}';`).join('\n');
    fs.writeFileSync(outputFile, exportStatements);

    console.log(`Export statements have been written to ${outputFile}`);
  });
});

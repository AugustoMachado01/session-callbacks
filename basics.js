const { readFile, writeFile } = require("fs");
const { join } = require("path");
const packageJsonPath = join(__dirname, "..", "package.json");
const destPath = join(__dirname, "package.copy.json");

// sem tratamento de erro
const content = readFile(packageJsonPath, (errorRead, data) => {
  console.log("> terminei de ler");

  writeFile(destPath, data, (errorWrite) => {
    console.log(">> terminei de escrever");
  });
});

const notExistsPath = join(__dirname, "nao-existe");

// com tratamento de erro rudimentar
readFile(notExistsPath, (errorRead, data) => {
  if (!errorRead) {
    console.log("> terminei de ler");

    writeFile(destPath, (errorWrite) => {
      if (!errorWrite) {
        console.log(">> terminei e escrever");
      }
    });
  }
});

// com tratamento de erro: logar + early return
readFile(join(__dirname, "nao-existe"), (errorRead, data) => {
  if (errorRead) {
    console.log("> erro de leitura", errorRead);
    return;
  }

  console.log("> terminei de ler");

  writeFile(destPath, data, (errorWrite) => {
    if (errorWrite) {
      console.log(">> erro de escrita".errorWrite);
      return;
    }
    console.log(">> terminei de escrever");
  });
});

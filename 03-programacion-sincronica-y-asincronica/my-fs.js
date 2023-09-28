const getTime = () => {
  const currentDate = new Date()
  return `[⌛${currentDate.toLocaleDateString()} - ${currentDate.toLocaleTimeString()}]`;
}

const existFile = (fileInput, callback) => {
  console.log(`${getTime()} Validating if file ${fileInput} exists`);
  setTimeout(() => {
    const exist = true;
    console.log(`${getTime()} File ${fileInput} exists? ${exist}`);
    callback(null, exist);
  }, 3000);
};
const readFile = (fileInput, callback) => {
  console.log(`${getTime()} Reading file ${fileInput}`);
  setTimeout(() => {
    const content = 'This is the content of the file';
    console.log(`${getTime()} File ${fileInput} was readed`);
    callback(null, content);
  }, 3000);
};
const writeFile = (fileOutput, content, callback) => {
  console.log(`${getTime()} Writing file ${fileOutput}`);
  setTimeout(() => {
    console.log(`${getTime()} File ${fileOutput} was writed`);
    callback(null);
  }, 3000);
};

const existFilePromise = (fileInput) => {
  return new Promise((resolve, reject) => {
    existFile(fileInput, (error, exist) => {
      if (error) {
        reject(error);
      } else {
        resolve(exist);
      }
    });
  });
};
const readFilePromise = (fileInput) => {
  return new Promise((resolve, reject) => {
    readFile(fileInput, (error, content) => {
      if (error) {
        reject(error);
      } else {
        resolve(content);
      }
    });
  });
};
const writeFilePromise = (fileOutput, content) => {
  return new Promise((resolve, reject) => {
    writeFile(fileOutput, content, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
};

module.exports = {
  existFile,
  readFile,
  writeFile,
  promises: {
    existFile: existFilePromise,
    readFile: readFilePromise,
    writeFile: writeFilePromise
  }
};
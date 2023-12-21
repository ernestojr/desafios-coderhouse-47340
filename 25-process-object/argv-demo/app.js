console.log('process.argv', process.argv);

const mongoInde = process.argv.findIndex((argument) => argument === '--mongodb_uri');

const mongodbUri = process.argv[mongoInde + 1];

console.log('mongodbUri', mongodbUri);

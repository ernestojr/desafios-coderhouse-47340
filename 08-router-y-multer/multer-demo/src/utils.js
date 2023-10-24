const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    const folderPath = path.join(__dirname, '../public/img');
    console.log('folderPath', folderPath);
    callback(null, folderPath);
  },
  filename: (req, file, callback) => {
    callback(null, `${Date.now()}-${file.originalname}`);
  },
});

module.exports = {
  uploader: multer({ storage }),
};

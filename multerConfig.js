import multer from 'multer';

const storage_multer = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads'); // Specify the folder where files will be stored
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname); // Generate a unique filename
    }
  });
  const upload = multer({ storage: storage_multer });
  export default upload
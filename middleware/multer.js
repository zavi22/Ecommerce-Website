// You use Multer because express.json() cannot handle image files.

import multer from "multer";

const storage = multer.diskStorage({
    filename: function (req, file, cb){
        cb(null, file.originalname);
    }
});

const upload = multer({storage});

export default upload;
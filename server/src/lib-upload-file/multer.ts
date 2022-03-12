import multer from 'multer'
import path from 'path'
import uuid from 'uuid'
// Settings
const storage = multer.diskStorage({
    destination: 'uploaded-files',
    filename: (req, file, cb) => {
        cb(null,file.originalname)
    }
});
export default multer({storage});
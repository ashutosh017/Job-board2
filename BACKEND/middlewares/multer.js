import multer from "multer";
const storage = multer.memoryStorage();
export const singleIUpload = multer({ storage: storage }).single("file");

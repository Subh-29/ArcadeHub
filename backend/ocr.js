

// import Tesseract from 'tesseract.js';
// import sharp from 'sharp';
// import axios from 'axios';
// import { v4 as uuid } from 'uuid';
// import fs from 'fs/promises';
// import path from 'path';

// export async function extractTextFromImage(url) {
//     try {
//         const id = uuid();
//         const tmpDir = "tmp";
//         const imagePath = path.join(tmpDir, `${id}.jpg`);

//         // Ensure the tmp folder exists
//         await fs.mkdir(tmpDir, { recursive: true });

//         // Download + resize the image
//         const response = await axios.get(url, { responseType: 'arraybuffer' });
//         const buffer = Buffer.from(response.data, 'binary');

//         await sharp(buffer)
//             .resize({ width: 300 })
//             .jpeg({ quality: 70 })
//             .toFile(imagePath);

//         // OCR
//         const result = await Tesseract.recognize(imagePath, 'eng');

//         // Clean up
//         await fs.unlink(imagePath);

//         return result.data.text;
//     } catch (err) {
//         console.error("OCR Error:", err.message);
//         return "";
//     }
// }


// ocr.mjs or ocr.js (with type: module in package.json)

import { createWorker } from 'tesseract.js';
import sharp from 'sharp';
import axios from 'axios';

const worker = await createWorker();

await worker.load();
// await worker.loadLanguage('eng');
// await worker.initialize('eng');

export async function extractTextFromImage(url) {
    try {
        const response = await axios.get(url, { responseType: 'arraybuffer' });
        const buffer = Buffer.from(response.data, 'binary');

        const image = sharp(buffer);
        const metadata = await image.metadata();

        // Crop lower 50%
        const cropped = image.extract({
            left: 0,
            top: Math.floor(metadata.height * 0.75),
            width: metadata.width,
            height: Math.floor(metadata.height * 0.25),
        });

        // Apply sharp processing on cropped image
        const processedBuffer = await cropped
            .resize({ width: 400 })
            .grayscale()
            .threshold(150)
            .normalise()
            .sharpen()
            // .png()
            .toBuffer();


        const { data } = await worker.recognize(processedBuffer);
        // console.log(data.text);

        return data.text;
    } catch (err) {
        console.error("OCR Error:", err.message);
        return "";
    }
}

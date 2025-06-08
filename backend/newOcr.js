import sharp from 'sharp';
import axios from 'axios';
import fs from 'fs';

// URL of the image you want to test
const imageUrl = 'https://cdn.qwiklabs.com/ghdleu8oJKyZfdn6jNbMwnotrKgM3b8JcUTOTigN7jw%3D';

// Preprocessing function with cropping lower 50%
async function preprocessAndSaveImage(url, outputPath) {
    try {
        // Download image as buffer
        const response = await axios.get(url, { responseType: 'arraybuffer' });
        const buffer = Buffer.from(response.data);

        // Load image with sharp to get metadata
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

        // Save to file
        await fs.promises.writeFile(outputPath, processedBuffer);
        console.log(`Processed image saved to ${outputPath}`);
    } catch (err) {
        console.error('Error processing image:', err);
    }
}

// Call it
preprocessAndSaveImage(imageUrl, 'processed_image.png');

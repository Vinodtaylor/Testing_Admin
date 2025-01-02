import imageCompression, { Options } from "browser-image-compression";

async function compressImage(file: File): Promise<File> {
  const options: Options = {
    maxSizeMB: 1, 
    maxWidthOrHeight: 1024, 
    useWebWorker: true, 
    fileType: "image/png", 
    onProgress: (progress: number) => console.log(`Compression Progress: ${progress}%`),
  };

  try {
    console.log("Original File Details:");
    console.log(`Size: ${(file.size / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Type: ${file.type}`);
    
    const start = performance.now(); 

    const compressedFile = await imageCompression(file, options);

    const end = performance.now(); // End timing
    const duration = (end - start).toFixed(2); // Duration in milliseconds

    console.log("Compressed File Details:");
    console.log(`Size: ${(compressedFile.size / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Type: ${compressedFile.type}`);
    console.log(`Compression Duration: ${duration} ms`);

    return compressedFile;
  } catch (error) {
    console.error("Compression Error:", error);
    throw error; 
  }
}

export default compressImage;

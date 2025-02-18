import fs from 'fs';

const checkingFileExistence = async (path) => {
    return new Promise((resolve, reject) => fs.access(path, (err) => {
        if (err) {
            return reject(new Error(`FS operation failed`));
        } else {
            return resolve();
        }
    }))
}

const removeFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.rm(path, (error) => {
        if (error) {
            return reject(error.message);
        }

        resolve();
    }))
}

const remove = async () => {
    const filePath = './files/fileToRemove.txt';

    checkingFileExistence(filePath)
        .then(() => removeFileAsync(filePath))
        .catch(err => console.log(err));
};

await remove();
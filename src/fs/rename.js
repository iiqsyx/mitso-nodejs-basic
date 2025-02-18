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

const renameFileAsync = async (wrongFilePath, properFilePath) => {
    return new Promise((resolve, reject) => fs.rename(wrongFilePath, properFilePath, (err) => {
        if (err) {
            return reject(new Error(`FS operation failed`));
        }

        resolve();
    }))
}

const rename = async () => {
    const wrongFilePath = './files/wrongFilename.txt';
    const properFilePath = './files/properFilename.md';

    checkingFileExistence(wrongFilePath)
        .then(() => renameFileAsync(wrongFilePath, properFilePath))
        .catch(err => console.log(err));
};

await rename();
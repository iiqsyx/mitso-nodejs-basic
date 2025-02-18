import fs from 'fs';
import path from 'path';

const checkingFolderExistence = async (path) => {
    return new Promise((resolve, reject) => fs.access(path, (err) => {
        if (err) {
            return reject(new Error(`FS operation failed`));
        } else {
            return resolve();
        }
    }))
}

const readFolderAsync = async (dirPath) => {
    return new Promise((resolve, reject) => fs.readdir(dirPath, (err, data) => {
        if (err) {
            return reject(err.message);
        } else{
            return resolve(data);
        }
    }))
}

const list = async () => {
    const folderPath = './files';

    checkingFolderExistence(folderPath)
        .then(() => readFolderAsync(folderPath))
        .then((data) => console.log(data))
        .catch(err => console.log(err));
};

await list();
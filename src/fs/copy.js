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

const mkdirAsync = async (dirPath) => {
    return new Promise((resolve, reject) => fs.mkdir(dirPath, (err) => {
        if (err) {
            return reject(new Error(`FS operation failed`));
        }

        resolve();
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

const copyFileAsync = async (mainFilePath, copyFilePath) => {
    return new Promise((resolve, reject) => fs.copyFile(mainFilePath, copyFilePath, (err) => {
        if (err) {
            return reject(err.message);
        } else{
            return resolve();
        }
    }))
}

const copy = async () => {
    const mainFolderPath = './files';
    const copyFolderPath = './files_copy';

    checkingFolderExistence(mainFolderPath)
        .then(() => mkdirAsync(copyFolderPath))
        .then(() => readFolderAsync(mainFolderPath))
        .then((data) => {
            for (const file of data) {
                const mainFilePath = path.join(mainFolderPath, file);
                const copyFilePath = path.join(copyFolderPath, file);

                copyFileAsync(mainFilePath, copyFilePath);
            }
        })
        .catch(err => console.log(err));
};

await copy();

import fs from 'fs';

const checkingFileExistence = async (path) => {
    return new Promise((resolve, reject) => fs.access(path, (err) => {
        if (err) {
            return resolve();
        } else {
            return reject(new Error(`FS operation failed`));
        }
    }))
}

const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
        if (err) {
            return reject(err.message);
        }

        resolve();
    }))
}

const create = async () => {
    const filePath = './files/fresh.txt';
    const data = 'I\'m fresh and young';

    checkingFileExistence(filePath)
        .then(() => writeFileAsync(filePath, data))
        .catch(err => console.log(err));
};

await create();
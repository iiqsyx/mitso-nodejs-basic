import fs from 'fs';

const readFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.readFile(path, {encoding: 'utf-8'}, (error, data) => {
        if (error) {
            return reject(new Error(`FS operation failed`));
        }

        resolve(data);
    }))
}

const read = async () => {
    const folderPath = './files/fileToRead.txt';

    readFileAsync(folderPath)
        .then(data => console.log(data))
        .catch(err => console.log(err));
};

await read();
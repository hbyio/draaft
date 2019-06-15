import * as fs from 'fs';
import * as interf from './interfaces';

export function createFolder(hierarchy: string): void {
    try {
        if (!fs.existsSync(hierarchy)) {
            fs.mkdirSync(hierarchy, { recursive: true });
        }
    } catch (err) {
        console.error(err)
    }
}

export function createFile(filename: string, filepath: string, filecargo: string): void {
    let writer = fs.createWriteStream(filepath + '/' + filename);
    writer.write(filecargo);
    writer.on('error', function (err) {
        console.log(err);
        writer.end();
    });
}

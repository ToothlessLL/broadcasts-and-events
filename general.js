import fspromise from 'node:fs/promises';

export async function writeFile (url, image) {
    const result = fspromise.writeFile(url, image)
    .catch(err => console.error(err));
    return await result;
}
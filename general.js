import fspromise from 'node:fs/promises';

export async function writeFile (url, image) {
    const result = fspromise.writeFile(url, image)
    .catch(err => console.error(err));
    return await result;
}

export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
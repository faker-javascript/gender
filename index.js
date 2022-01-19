import path from 'node:path';
import {loadJsonFileSync} from 'load-json-file';

export default function gender(options) {
    options = options || {};
    const locale = options.locale || 'en_US';
    const filePath = `./locales/${locale}/gender.json`;
    let genders = [];

    try {
        genders = loadJsonFileSync(filePath);
    } catch {
        genders = loadJsonFileSync(path.resolve('node_modules/@fakerjs/gender/', filePath));
    }

    const gendersWithExtra = [...genders, ...options.extra || []];
    const randomGender = gendersWithExtra[Math.floor(Math.random() * gendersWithExtra.length)];
    return randomGender;
}

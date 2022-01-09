export default function fakeGender(options) {
    options = options || {};
    let genders = {
        "en_US": [
            "Male", 
            "Female"
        ],
        "ru_RU": [
            "Мужской", 
            "Женский"
        ],
    };
    let locale = options.locale || 'en_US';
    let gendersWithExtra = genders[locale].concat(options.extra || []);
    let randomGender = gendersWithExtra[Math.floor(Math.random() * gendersWithExtra.length)];
    return randomGender;
};
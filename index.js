/* eslint camelcase: ["error", {properties: "never"}] */
export default function gender(options) {
    options = options || {};
    const genders = {
        en_US: [
            'Male',
            'Female',
        ],
        ru_RU: [
            'Мужской',
            'Женский',
        ],
    };
    const locale = options.locale || 'en_US';
    const gendersWithExtra = [...genders[locale], ...options.extra || []];
    const randomGender = gendersWithExtra[Math.floor(Math.random() * gendersWithExtra.length)];
    return randomGender;
}

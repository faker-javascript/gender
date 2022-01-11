import test from 'ava';
import gender from './index.js';

test('gender return type to be string', t => {
    t.is(typeof gender(), 'string');
});

test('gender with locale and extra return type to be string', t => {
    t.is(typeof gender({locale: 'ru_RU', extra: ['gender']}), 'string');
});

test('gender with locale ru_RU includes', t => {
    t.true(['Женский', 'Мужской'].includes(gender({locale: 'ru_RU'})));
    t.false(['foo', 'bar'].includes(gender({locale: 'ru_RU'})));
});

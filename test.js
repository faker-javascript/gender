import fakeGender from './index.js';
import test from 'ava';

test('fakeGender return type to be string', t => {
	t.is(typeof fakeGender(), 'string');
});

test('fakeGender with locale and extra return type to be string', t => {
	t.is(typeof fakeGender({locale: 'ru_RU', extra: ['gender']}), 'string');
});

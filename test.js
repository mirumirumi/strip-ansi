import test from 'ava';
import m from '.';

test('strip color from string', t => {
	t.is(m('\u001B[0m\u001B[4m\u001B[42m\u001B[31mfoo\u001B[39m\u001B[49m\u001B[24mfoo\u001B[0m'), 'foofoo');
});

test('strip color from ls command', t => {
	t.is(m('\u001B[00;38;5;244m\u001B[m\u001B[00;38;5;33mfoo\u001B[0m'), 'foo');
});

test('strip reset;setfg;setbg;italics;strike;underline sequence from string', t => {
	t.is(m('\u001B[0;33;49;3;9;4mbar\u001B[0m'), 'bar');
});

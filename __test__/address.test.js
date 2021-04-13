import {toHex, fromHex} from '../utils.js';

it('to hex', async () => {
    const hex = await toHex('0xe483797f10196536ea26a0101506629ee585a229')
    console.log(hex);
});

it('to hex', async () => {
    const base58 = await fromHex('0xe483797f10196536ea26a0101506629ee585a229')
    console.log(base58);
});
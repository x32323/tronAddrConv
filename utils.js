import tronweb from './loadTronweb.js';

export async function toHex(base58Address){
    const hexAddress = await tronweb.address.toHex(base58Address);
    return hexAddress;
}

export async function fromHex(hexAddress){
    const base58Address = await tronweb.address.fromHex(hexAddress);
    return base58Address;
}
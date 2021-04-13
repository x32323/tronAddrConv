import Tronweb from 'tronweb'

const url = 'https://api.trongrid.io';
const HttpProvider = Tronweb.providers.HttpProvider;
const fullNode = new HttpProvider(url);
const solidityNode = new HttpProvider(url);
const eventServer = new HttpProvider(url);
const privateKey = '';

const tronweb = new Tronweb(
    fullNode, solidityNode, eventServer, privateKey
);

export default tronweb;
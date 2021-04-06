import io from 'socket.io-client';

const ENDPOINT = `http://localhost:5000`; // 就不用設定proxy了

export let socket = io(ENDPOINT);

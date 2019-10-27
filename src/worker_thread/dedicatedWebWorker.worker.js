import Calculation from './calculation/calculation'

onmessage = onSendToMainThread;


const calculation = new Calculation();

function onSendToMainThread(evt) {
    const arr = evt.data;
    const count = calculation.calcData(evt.data);
    postMessage(count)
}
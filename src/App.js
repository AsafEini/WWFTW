import React, {useEffect, useState} from 'react';
import CountDownComponent from './components/countDown/count-down-component'
import DedicatedWorker from './worker_thread/dedicatedWebWorker.worker';
import './App.css';

let dedicatedWorker = new DedicatedWorker();

function App() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const getAllRecords = (evt) => {
            console.log(evt.data + ' YESH!!')
        };
        dedicatedWorker.onmessage = getAllRecords;
    }, []);

    const iterate10kOnMainThread = () => {
        const arr = [];
        for (let i = 0; i < 1000000; i++) {
            const userCard = {
                name: 'whatever',
                age: 999
            };
            userCard.dob = new Date().getDate();
            arr.push(userCard);
        }
        setCount(arr.length);
        console.log('finished', count);

    };
    const iterate10kOnWorkerThread = () => {
        dedicatedWorker.postMessage([]);
        dedicatedWorker.onmessage =((evt) => {
            setCount(evt.data)
        });
        console.log('finished');
    };

    return (
        <div className="App">
            <div className="controllers">
                <button onClick={iterate10kOnMainThread}>start iteration - main thread</button>
                <button onClick={iterate10kOnWorkerThread}>start iteration - worker thread</button>
            </div>
            <div className="counter">
                <CountDownComponent count={count}/>
            </div>
        </div>
    );
}

export default App;

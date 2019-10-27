export default class Calculation {

    constructor() {
        this.data = [];
    }

    calcData(arr) {
        console.log('start');
        for(let i=0; i < 1000000; i++) {
            const userCard = {
                name:'whatever',
                age: 999
            };
            userCard.dob = new Date().getDate();
            arr.push(userCard)
        };
        console.log('finished');
        return arr.length;
    }
}
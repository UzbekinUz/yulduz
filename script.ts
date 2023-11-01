// // const firstName:string = "Muzaffar";
// // let age:any = 16;
// //  age = 16 as Number
// // const lacation:string = "Xo'jaobod";
// // const member1: (string | number)[] = [firstName,age,lacation]
// // const members: (string | number | (string | number)[])[] = [member1, '2', 34]

// // console.log(members);
// // console.log(typeof age);

// const carsInfo = (car: {name: string, year: number}) => {
//     return `${car.name } nomli mashina, ${car.year}-yilda ishlab chiqarilgan`
// }

// console.log(carsInfo({name: 'BMW', year: 1999}));

// const numbers: number[] = [1, 2, 3, 4, 5]

// const arr:any = []
//  numbers.map((num: number) => arr.push(num.toFixed))

// console.log(arr);
interface CostC {
    price?: number;
    discount?: number;
    purePrice?: number;
}

interface SpeedC {
    max?: number,
    min?: number
}

interface ICar extends CostC, SpeedC {
    name?: string;
    orgonized?: string;
    color?: string;
    model?: string;
    status?: string;
}

function CarInterface(d: ICar): void {
    console.log(d);

}

// interface Idetail {
//     color: string;
//     highSpeed: string;
// }

// interface ICar {
//     name: string;
//     year?: string;
// }

// interface BMW extends ICar, Idetail {
//     extraBaloon: boolean;
// }
// const logger = (data: BMW): void => {
//     console.log(data.highSpeed);

// }
CarInterface({ name: "BMW" });



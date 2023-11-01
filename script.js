// // const firstName:string = "Muzaffar";
// // let age:any = 16;
// //  age = 16 as Number
// // const lacation:string = "Xo'jaobod";
// // const member1: (string | number)[] = [firstName,age,lacation]
// // const members: (string | number | (string | number)[])[] = [member1, '2', 34]
function CarInterface(d) {
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

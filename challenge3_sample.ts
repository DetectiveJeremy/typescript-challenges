export {};

interface Car {
    model: string;
    manufacturer: string;
    year: number;
    color: string;
    inWarranty: boolean;
    miles?: number;
}

const Corolla: Car = {
    model: "Corolla",
    manufacturer: "Toyota",
    year: 2006,
    color: "Red",
    inWarranty: true
}

console.log(Corolla)

interface Computer {
gpu?:string | Array<string>;
cpu:string;
OS:string;
SSD?: boolean;
HDD?:boolean;
PSU: string | Array<string>
};

const someonesComputer: Computer = {
gpu:"3070 trinity TI",
cpu: "i5 10000 series",
OS: "Windows",
SSD: true,
HDD: true,
PSU: "Corsair 750"
};

console.log(someonesComputer)
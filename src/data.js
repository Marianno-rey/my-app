// This page is full of dummy data being fed to the shopping page

import item from "./components/Item";

let items = [
    {
        name: "T-shirt",
        number: 1995,
        amount: "$10,800",
        due: "12/05/1995",
    },
    {
        name: "Leather jacket",
        number: 2000,
        amount: "$8,000",
        due: "10/31/2000",
    },
    {
        name: "Leather shoes",
        number: 2003,
        amount: "$9,500",
        due: "07/22/2003",
    },
    {
        name: "Sweat pants",
        number: 1997,
        amount: "$14,000",
        due: "09/01/1997",
    },
    {
        name: "Gucci flip flops",
        number: 1998,
        amount: "$4,600",
        due: "01/27/1998",
    },
];

export function getItems() {
    return items;
}

export function getItem(number) {
    return item.find(
        (item) => item.number === number
    );
}

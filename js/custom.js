// total amount js from array
const orders = [
    {
        id: "1", lines: [
            { type: "book", amount: 90.25 }
        ]
    },
    {
        id: "2",
        lines:
            [
                { type: "shirt", amount: 200 },
                { type: "music", amount: 67 }
            ]
    },
    {
        id: "3",
        lines:
            [
                { type: "book", amount: 5.25 },
                { type: "shirt", amount: 30.25 }
            ]
    },
    {
        id: "4",
        lines: [
            
            { type: "shirt", amount: 50.25 }]
    }
];
let totalAmount = 0;
// global function 
function getAmountByType(orderType){
    orders.forEach(function(order) {
        order.lines.forEach(function(line){
            if(line.type === orderType){
                console.log(line.amount);
                totalAmount += line.amount;
                console.log('totalAmount is', totalAmount);
            }
        });
    });
    let mainDiv = document.createElement("div");
    let amount = document.createElement("p");
    mainDiv.appendChild(amount);
    document.getElementById("mainSection").appendChild(mainDiv);
    amount.innerHTML = totalAmount;
}

getAmountByType("book");


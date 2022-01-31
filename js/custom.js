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
orders.forEach(function(data){
    let mainDiv = document.createElement("div");
    let Samount = document.createElement("p");
    mainDiv.appendChild(Samount);
    
    if(data.lines[0]=="shirt"){
        console.log(data);
        return true;
    }
    
    Samount.innerHTML = data.lines[0].amount;
    document.getElementById("mainSection").appendChild(mainDiv);
    // console.log(data.lines[0].amount)
});
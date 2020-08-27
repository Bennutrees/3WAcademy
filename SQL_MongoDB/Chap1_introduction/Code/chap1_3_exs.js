// 1. Solution 1
const cursorInventory = (restriction, projection = null) =>  {
    if(projection === null) {
        return db.inventory.find(restriction);
    } else {
        return db.inventory.find(restriction, projection);
    }
}

let total = 0;

cursorInventory( { type : "journal" } ).forEach( doc => {
    const { qty } = doc;
    total += qty;
    //total += doc.qty;    
});

// 1. Solution 2
db.inventory.find( { type : "journal" } ).forEach( doc => {
    const { qty } = doc; // destructuration
    total += qty;
});



// 2.
cursorInventory( { year : { $gte : 2018 } } ).forEach( doc => {
    const { society, qty } = doc;
    print(society, qty);
    //print(doc.society, doc.qty);
});


// 3.
cursorInventory( { society : /^A/ } ).forEach( doc => {
    const { society, type } = doc;
    print(society, type);
});


// 4.
cursorInventory( { qty : { $gt : 45 } } ).forEach( doc => {
    const { society, qty } = doc;
    print (society, qty);
});


// 5.
cursorInventory( { $and : [ { qty : { $gt : 45 } }, { qty : { $lt : 90 } } ] } ).forEach( doc => {
    const { society, qty } = doc;
    print (society, qty);
});


// 6.
cursorInventory( { $or : [ { status : "A" }, { type : "journal" } ] } ).forEach( doc => {
    const { society, status, type } = doc;
    if (status == "A" && type != "journal") {
        print (`${society.toUpperCase()} is a society with a status : ${status}`);
    } else if (type == "journal" && status != "A") {
        print (`${society.toUpperCase()} is a society of type : ${type}`);
    } else {
        print (`${society.toUpperCase()} is a society of type : ${type} with a status : ${status}`);
    }
});


// 7.
cursorInventory( { $or : [ { status : "A" }, { type: "journal", qty : { $lt : 100 } } ] } ).forEach( doc => {
    const { society, status, type, qty } = doc;
    let hasStatusA = (status == "A");
    let hasMoreThan100Journals = (type == "journal" && qty < 100);
    if (hasStatusA && !hasMoreThan100Journals) {
        print (`${society.toUpperCase()} is a society with a status : ${status}`);
    } else if (hasMoreThan100Journals && !hasStatusA) {
        print (`${society.toUpperCase()} is a society of type : ${type} and a quantity of : ${qty}`);
    } else {
        print (`${society.toUpperCase()} is a society of type : ${type}, a quantity of : ${qty} and with a status : ${status}`);
    }
});


// 8.
cursorInventory({
    $or : [
        {
            price : { $in : [0.99, 1.99] },
            sale : true
        },
        {
            qty : { $lt : 45 }
        }
    ]
}).forEach( doc => {
    const { society, sale, price, qty } = doc;
    let isSaleable = (sale == true);
    let isCheap = (price == 0.99 || price == 1.99);
    let hasFewQuantity = (qty < 45);
    if (isSaleable && isCheap && !hasFewQuantity) {
        print (`${society.toUpperCase()} is a society selling its products at : ${price}`);
    } else if (hasFewQuantity && !(isSaleable && isCheap)) {
        print (`${society.toUpperCase()} is a society having a quantity of ${qty} of its products, but not selling it or being too expensive`);
    } else {
        print (`${society.toUpperCase()} is a society selling its ${qty} products at : ${price}`);
    }
});


// 9.
cursorInventory( { tags : { $exists : true } } ).forEach( doc => {
    const { society, tags } = doc;
    print (`The society ${society.toUpperCase()} has the tags : ${tags.join(', ')}`)
});


// 10.
cursorInventory( { tags : { $in : ["blank"] } } ).forEach( doc => {
    const { society } = doc;
    print (`The society ${society.toUpperCase()} has the tag blank`)
});




// ForEach
// 1.
const updateFirstInInventory = (query, update, options = null) => {
    if (options === null) {
        return db.inventory.updateOne(query, update);
    } else {
        return db.inventory.updateOne(query, update, options);
    }
}

cursorInventory( { status : { $in : ["C", "D"] } } ).forEach( doc => {
    const { society, qty } = doc;
    print(`The society ${society.toUpperCase()} had ${qty} products`);
    updateFirstInInventory( { _id : doc._id }, { $mul : { "qty" : 1.5 } } );
    print(`The society ${society.toUpperCase()} has now ${qty * 1.5} products`)
});


// 2.
const updateManyInInventory = (query, update, options = null) => {
    if (options === null) {
        return db.inventory.updateMany(query, update);
    } else {
        return db.inventory.updateMany(query, update, options);
    }
}

cursorInventory({ $and: [{ status: { $in: ["A", "B"] }, tags: "blank" }] }, { tags : 1, _id : 1 }).forEach(
    doc => {
        const { tags, _id  } = doc;
        let count = 0 ;

        if(tags)
            doc.tags.forEach( tag => { if( tag === "blank") count++  })

        if (count > 2) {
            db.inventory.updateOne({ _id: _id }, { $mul: { "qty": 2.5 } })
        }
    }
)

// 3.
updateFirstInInventory({
    level: { $exists: true }
},{
    $unset: { level: "" }
});




// Switch
// 1.

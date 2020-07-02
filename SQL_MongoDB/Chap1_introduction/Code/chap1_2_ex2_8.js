const coffeeShopsAndRestaurantsinBronx = db.restaurants.find({
    "name" : {
        $and : [ 
            { $in : [
                { $regex : /[Cc]offee/ },
                { $regex : /[Rr]estaurant/ }
            ] },
            { $not : { $regex : /[Ss]tarbucks/ } }
        ]
    },
    "borough" : "Bronx"
},
{
    "_id" : 0,
    "name" : 1,
    "borough" : 1,
});

print(coffeeShopsAndRestaurantsinBronx);
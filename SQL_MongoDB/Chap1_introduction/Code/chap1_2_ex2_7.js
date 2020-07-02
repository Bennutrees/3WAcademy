const coffeeShops = db.restaurants.find({
    "name" : { $regex : /[Cc]offee/}
    //"name" : { $regex : /coffee/i}
},
{
    "_id" : 0,
    "name" : 1,
});

print(coffeeShops);
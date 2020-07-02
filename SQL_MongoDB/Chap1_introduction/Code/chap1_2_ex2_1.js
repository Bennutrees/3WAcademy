const badItalianRestaurants = db.restaurants.find({
    $and : [
        {
            "cuisine" : "Italian"
        },
        {
            "grades.score" : { $not : { $gt : 10 } }
        }
    ]
},
{
    "_id" : 0,
    "name" : 1,
    "grades.score" : 1,
    "address.coord" : 1
}).sort({ "name" : -1 });

print(badItalianRestaurants);

print(badItalianRestaurants.count());
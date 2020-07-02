const goodItalianRestaurants = db.restaurants.find({
    "grades" : {
        $elemMatch : {
            "grade" : "A",
            "score" : { $gte : 20 }
        }
    }
},
{
    "_id" : 0,
    "name" : 1,
    "grades.grade" : 1
}).sort({ "name" : -1 });

print(goodItalianRestaurants);

print(goodItalianRestaurants.count());
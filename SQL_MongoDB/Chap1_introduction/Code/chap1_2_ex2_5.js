const goodBronxRestaurants = db.restaurants.find({
    "grades.grade" : { $in : ["A", "B"]},
    "borough" : "Bronx"
},
{
    "_id" : 0,
    "name" : 1,
    "grades.grade" : 1,
    "borough": 1
});

print(goodBronxRestaurants);
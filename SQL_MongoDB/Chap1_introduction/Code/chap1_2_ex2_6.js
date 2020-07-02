const lastlyGoodBronxRestaurants = db.restaurants.find({
    "grades.0.grade" : { $in : ["A", "B"]},
    "borough" : "Bronx"
},
{
    "_id" : 0,
    "name" : 1,
    "grades.grade" : 1,
    "borough": 1
});

print(lastlyGoodBronxRestaurants);
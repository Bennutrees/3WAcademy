let coffeeOrRestaurant = { $in : [ /coffee/i, /restaurant/i ] };

let notAStarbucks = { $not : { $regex : /starbucks/i } };

const coffeeShopsAndRestaurantsorNotStarbucksBronx = db.restaurants.find({
    $or : [
        { "name" : coffeeOrRestaurant },
        {
            "name" : notAStarbucks,
            "borough" : "Bronx"
        }
    ]
},
{
    "_id" : 0,
    "name" : 1,
    "borough" : 1,
});

print(coffeeShopsAndRestaurantsorNotStarbucksBronx);




db.restaurants.find( {
    $and : [
        { name : /coffee/i },
        { $or : [ 
            { borough : "Bronx" },
            { borough : "Brooklyn" }
        ]},
        { "grades.0.grade" : "A" },
        { "grades.date" : {
            $gte : ISODate("2012-10-24T00:00:00Z"),
            $not : { $lt : ISODate("2012-10-24T00:00:00Z") }
        }}
    ]
},
{
    "_id" : 0,
    "name" : 1,
    "grades.grade" : 1,
    borough : 1
}.sort({ borough : 1, name : 1}).forEach(
    doc => {
        const { name, grades, borough } = doc // destructurateur pour assigner

        print("----------------------------------")
        print(`Borough : ${borough.toUpperCase()}`)
        print()
        print(`name : ${name.toUpperCase()} Numbers grades : ${grades.length}`)
        print(`Last grade date : ${grades[0].date} \n
                First grade date : ${grades[grades.length - 1].date}
        `)
    }
))
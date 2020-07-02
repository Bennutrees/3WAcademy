const resBrooklyn = db.restaurants.find({
    borough : "Brooklyn"
},
{
    "name" : 1
});

let count = 0;
resBrooklyn.forEach( doc => {
    count = count + 1;
});

print(count);

print(resBrooklyn.count());

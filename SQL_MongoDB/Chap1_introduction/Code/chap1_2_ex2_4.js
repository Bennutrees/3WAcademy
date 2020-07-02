const allCookingTypesInBronx = db.restaurants.distinct("cuisine", {"borough" : "Bronx"});

print(allCookingTypesInBronx);
const allBoroughs = db.restaurants.distinct("borough");

print(allBoroughs);
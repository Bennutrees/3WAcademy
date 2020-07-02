// Recherche de Restaurants à proximité d'un Lieu
// On cherche les restos qui sont dans un périmètre de 5 miles par rapport au point coordinate

const METERS_PER_MILE = 1609.34; // en m
const coordinate = [ -73.93414657, 40.82302903 ]; // mon ami qui habite NY

db.restaurants.find({ 
    "address.coord":  // 2dsphere  pour Mongo
    { $nearSphere: 
        { $geometry: { type: "Point", coordinates: coordinate }, 
        $maxDistance: 5 * METERS_PER_MILE }
    } 
}, {borough :1, name : 1, "address.coord" : 1 , _id : 0}).forEach(
    doc => {
        const { name, address, borough} = doc;
        print("----------------------------------")
        print(`Borough : ${borough.toUpperCase()}`)
        print()
        print(`name : ${name.toUpperCase()} coordinate : ${address.coord.join(' ')}`)
    }
)
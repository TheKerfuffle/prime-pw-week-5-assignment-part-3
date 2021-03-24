console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished) {
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  }
  collection.push(album);
}

function showCollection(aCollection) {
  console.log('Number of objects in this collection:', aCollection.length);
  for (let record in aCollection){
    console.log(`${aCollection[record].title} by ${aCollection[record].artist}, published in ${aCollection[record].yearPublished}`);
  }
}

addToCollection('2112', 'Rush', 1976);
console.log(collection[collection.length-1]);
addToCollection('Moving Pictures', 'Rush', 1981)
console.log(collection[collection.length-1]);
addToCollection('Running With Scissors', 'Weird Al', 1999)
console.log(collection[collection.length-1]);
addToCollection('Boston', 'Boston', 1976)
console.log(collection[collection.length-1]);
addToCollection('Cold Dark Place', 'Mastodon', 2017)
console.log(collection[collection.length-1]);
addToCollection('Echoes, Silence, Patience & Grace', 'Foo Fighters', 2007)
console.log(collection[collection.length-1]);
console.log(collection);

showCollection(collection);

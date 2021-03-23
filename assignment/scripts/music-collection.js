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

addToCollection('2112', 'Rush', 1976);
addToCollection('Moving Pictures', 'Rush', 1981)
console.log(collection);

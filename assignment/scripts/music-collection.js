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

// Takes an artist string as input and will return all entries of collection that have the same artist
function findByArtist (artist) {
  let results = [];
  for (let record in collection) {
    if (collection[record].artist === artist){
      results.push(collection[record]);
    }
  }
  return results;
}

// Takes a year number as input and will return all entries of collection that have the same year published
function findByYear (year){
  let results = [];
  for (let record in collection) {
    if (collection[record].yearPublished === year){
      results.push(collection[record]);
    }
  }
  return results;
}

// Takes a title string as input and will return all entries of collection that have the same title
function findByTitle (title){
  let results = [];
  for (let record in collection) {
    if (collection[record].title === title){
      results.push(collection[record]);
    }
  }
  return results;
}

// search function should take in a single object with 3 POSSIBLE key value pairs, artist, title and year
// and return an array with all matching possibilities and no repeated titles.
function search ( searchParameter ) {
  // initialize variables
  let artist = searchParameter.artist;
  let year = searchParameter.year;
  let title = searchParameter.title;
  let result = [];
  let toRemove = [];
  let finalResult = [];

  // Case 1: empty object for search parameter
  if (artist === undefined && year === undefined && title === undefined) {
    return collection;
  }

  if (artist !== undefined) {
    for (let i in collection) {
      if (collection[i].artist === artist){
        console.log('pushing');
        result.push(collection[i]);
      }
    }
  }

  if (title !== undefined) {
    for (let i in collection) {
      if (collection[i].title === title){
        console.log('pushing');
        result.push(collection[record]);
      }
    }
  }

  if (year !== undefined) {
    for (let i in collection) {
      if (collection[i].yearPublished === year){
        // for (let j in result) {
        //   if (result[j] === collection[i])
        // }
        console.log('pushing');
        result.push(collection[i]);
      }
    }
  }


  if (artist !== undefined) {
    for (let i in result) {
      if (result[i].artist !== artist) {
        result.splice(i, 1);
      }
    }
  }

  if (title !== undefined) {
    for (let i in result) {
      if (result[i].title !== title) {
        result.splice(i, 1);
      }
    }
  }

  if (year !== undefined) {
    for (let i in result) {
      if (result[i].yearPublished !== year) {
        result.splice(i, 1);
      }
    }
  }

  for (let i in result) {
    for (let j in result) {
      if (i === j){
      } else {
        if (result[i].artist === result[j].artist && result[i].title === result[j].title && result[i].yearPublished === result[j].yearPublished) {
          result.splice(i,1);
        }
      }
    }
  }
  return result;
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

console.log(findByArtist('Rush'));
console.log(findByArtist('Led Zeppelin'));
console.log(findByArtist('Foo Fighters'));

let thisSearch = {artist: 'Rush'};
console.log(search(thisSearch));

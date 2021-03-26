console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished, trackArray) {
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    tracks: trackArray
  }
  collection.push(album);
} // END addToCollection, adjusted for individual tracks.

function showCollection(aCollection) {
  console.log('Number of objects in this collection:', aCollection.length);
  for (let album in aCollection){
    console.log(`${aCollection[album].title} by ${aCollection[album].artist}, published in ${aCollection[album].yearPublished}`);
    for (let track in aCollection[album].tracks) {
      // Need to correct track in order to begin ordering tracks from 1 rather than from 0 in the console log.
      let trackNumberCorrection = Number(track)+1;
      let trackNumber = trackNumberCorrection.toString();
      console.log(`${trackNumber}. ${aCollection[album].tracks[track].name}: ${aCollection[album].tracks[track].duration}`);
    }
  }
} // END showCollection, will now log each album as requested by STRETCH GOALS

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

// search function should take in a single object with 3 POSSIBLE key value pairs, artist, title and year
// and return an array with all matching possibilities and no repeated titles.
function search ( searchParameter ) {
  // initialize variables
  let artist = searchParameter.artist;
  let year = searchParameter.year;
  let title = searchParameter.title;
  let trackName = searchParameter.name;
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
        console.log('pushing');
        result.push(collection[i]);
      }
    }
  }

  if (trackName !== undefined) {
    for (let i in collection) {
      for (let j in collection[i].tracks){
        if (collection[i].tracks[j].name === trackName){
          console.log('pushing');
          result.push(collection[i]);
        }
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
addToCollection('2112', 'Rush', 1976,
[{name: '2112', duration: '20:34'},
{name: 'A Passage to Bangkok', duration: '3:34'},
{name: 'The Twilight Zone', duration: '3:17'},
{name: 'Lessons', duration: '3:51'},
{name: 'Tears', duration: '3:31'},
{name: 'Something For Nothing', duration: '3:59'}]);

console.log(collection[collection.length-1]);
addToCollection('Moving Pictures', 'Rush', 1981,
[{name: 'Tom Sawyer', duration: '4:33'},
{name: 'Red Barchetta', duration: '6:06'},
{name: 'YYZ', duration: '4:24'},
{name: 'Limelight', duration: '4:19'},
{name: 'The Camera Eye', duration: '10:56'},
{name: 'Witch Hunt', duration: '4:43'},
{name: 'Vital Signs', duration: '4:33'}])

console.log(collection[collection.length-1]);
addToCollection('Running With Scissors', 'Weird Al', 1999,
[{name: 'The Saga Begins', duration: '5:29'},
{name: 'My Babys In Love With Eddie Vedder', duration: '3:26'},
{name: 'Pretty Fly for a Rabbi', duration: '3:03'},
{name: 'The Weird Al Show Theme', duration: '1:14'},
{name: 'Jerry Springer', duration: '2:43'},
{name: 'Germs', duration: '4:39'},
{name: 'Polka Power!', duration: '4:21'},
{name: 'Your Horoscope For Today', duration: '3:59'},
{name: 'Its All About The Pentiums', duration: '3:35'},
{name: 'Truck Drivin Song', duration: '2:27'},
{name: 'Grapefruit Diet', duration: '3:34'},
{name: 'Albuquerque', duration: '11:23'}])

console.log(collection[collection.length-1]);
addToCollection('Boston', 'Boston', 1976,
[{name: 'More Than a Feeling', duration: '4:46'},
{name: 'Peace of Mind', duration: '5:02'},
{name: 'Foreplay/Long Time', duration: '7:47'},
{name: 'Rock & Roll Band', duration: '3:00'},
{name: 'Smokin', duration: '4:20'},
{name: 'Hitch a Ride', duration: '4:12'},
{name: 'Something About You', duration: '3:48'},
{name: 'Let Me Take You Home Tonight', duration: '4:44'}])

console.log(collection[collection.length-1]);
addToCollection('Cold Dark Place', 'Mastodon', 2017,
[{name: 'North Side Star', duration: '6:10'},
{name: 'Blue Walsh', duration: '5:13'},
{name: 'Toe to Toes', duration: '4:29'},
{name: 'Cold Dark Place', duration: '5:59'}])

console.log(collection[collection.length-1]);
addToCollection('Echoes, Silence, Patience & Grace', 'Foo Fighters', 2007,
[{name: 'The Pretender', duration: '4:28'},
{name: 'Let It Die', duration: '4:05'},
{name: 'Erase-Replace', duration: '4:13'},
{name: 'Long Road To Ruin', duration: '3:45'},
{name: 'Come Alive', duration: '5:11'},
{name: 'Stranger Things Have Happened', duration: '5:21'},
{name: 'Cheer Up, Boys', duration: '3:41'},
{name: 'Summers End', duration: '4:38'},
{name: 'Ballad of the Beaconsfield Miners', duration: '2:32'},
{name: 'Statues', duration: '3:48'},
{name: 'But, Honestly', duration: '4:36'},
{name: 'Home', duration: '4:53'},
{name: 'One & For All', duration: '3:48'}])

console.log(collection[collection.length-1]);
console.log(collection);

showCollection(collection);

console.log(findByArtist('Rush'));
console.log(findByArtist('Led Zeppelin'));
console.log(findByArtist('Foo Fighters'));

// A good search because this should initially be triggered by 4 seperate entries
// The code will have to narrow down to the one correct result (Rush 2112)
let thisSearch = {artist: 'Rush', year: 1976, name: 'Lessons'};
console.log(search(thisSearch));

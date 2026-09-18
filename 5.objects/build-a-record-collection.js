const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};


function updateRecords(records, id, prop, value) {
  // If value is an empty string, delete the given prop property from the album
  if (value === "") {
    delete records[id][prop];
  } 
  // If prop is tracks and value isn't an empty string
  else if (prop === "tracks") {
    // If the album doesn't have a tracks property, create an empty array and add value to it
    if (!records[id].hasOwnProperty("tracks")) {
      records[id]["tracks"] = [value];
    } else {
      // Add value to the end of the album's existing tracks array
      records[id]["tracks"].push(value);
    }
  } 
  // If prop isn't tracks and value isn't an empty string, assign the value to that album's prop
  else {
    records[id][prop] = value;
  }

  // Always return the entire records object
  return records;
}
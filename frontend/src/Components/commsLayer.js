let translation = [
  { id: 0, value: [0, 0] },
  { id: 1, value: [0, 1] },
  { id: 2, value: [0, 2] },
  { id: 3, value: [1, 0] },
  { id: 4, value: [1, 1] },
  { id: 5, value: [1, 2] },
  { id: 6, value: [2, 0] },
  { id: 7, value: [2, 1] },
  { id: 8, value: [2, 2] },
];

export function commsLayer(a) {
  let match;

  for (let i = 0; i < translation.length; i++) {
    if (JSON.stringify(translation[i].value) === JSON.stringify(a)) {
      match = translation[i].id;
      console.log(match)
      return match;
    }
  }
}



export function boardManipulation(id, marker, array) { 
  let match;

  for (let i = 0; i < translation.length; i++) {
    if(JSON.stringify(translation[i].id) === JSON.stringify(id)) {
      match = translation[i].value;
      array[match[0]][match[1]] = marker;
      return array;
    } 
  } 
}



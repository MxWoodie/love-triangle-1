/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let count = 0;

  for(let i=0;i<preferences.length;i++){

    let firstPreference = preferences[i];
    let secondPreference = preferences[firstPreference-1];
    let thirdPreference = preferences[secondPreference-1];

    if(i === thirdPreference-1 && firstPreference !== secondPreference && secondPreference !== thirdPreference){
      count++;
    }
  }

  return count/3;
};

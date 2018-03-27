function steamrollArray(arr) {
  // I'm a steamroller, baby
  var hasArrays=true;
  var dummy;
  var i=0;
  while (hasArrays){                         
    if (Array.isArray(arr[i])){
      dummy=arr[i];
      if (arr[i].length!==0){
        for (var j=0;j<dummy.length;j++){
          arr.splice(i+j+1,0,dummy[j]);
        }
      }
      arr.splice(i,1);
    } else {
      i++;
    }
    hasArrays=false;
    for (var k=0;k<arr.length;k++){
      if (Array.isArray(arr[k])){
        hasArrays=true;
      }
    }
  }
  return arr;
}

steamrollArray([1, [], [3, [[4]]]]);

// Code your solution in this file!

function logDriverNames(arr){
  arr.forEach(function(el){
    console.log(el.name);
  });
}

function logDriversByHometown(arr, location){
  arr.forEach(function(el){
    if (el.location === location){
    console.log(el.name);
    }
  });
}

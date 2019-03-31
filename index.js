// Code your solution in this file!

function logDriverNames(arr){
  arr.forEach(function(el){
    console.log(el.name);
  });
}

function logDriversByHometown(arr, home){

  arr.forEach(function(el){
    if (el.hometown === home){
    console.log(el.name);
  }
  });
}

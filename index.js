// Code your solution in this file!

function logDriverNames(arr){
  arr.forEach(el => console.log(el.name));
}

function logDriversByHometown(arr, home){

  arr.forEach(function(el){
    if (el.hometown === home){
    console.log(el.name);
  }
  });
}

function driversByRevenue(arr){
  let newArr = [...arr];
  return newArr.sort((a,b) => a.revenue - b.revenue );
}

function driversByName(arr){
  let newArr = [...arr];
  return newArr.sort((a,b) => a.toUpperCase() - b.toUpperCase() );
}


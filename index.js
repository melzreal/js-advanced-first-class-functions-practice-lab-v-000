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
  return newArr.sort(function(a,b){
  const nameA = a.toUpperCase();
  const nameb = b.toUpperCase();
  if( nameA > nameb){ 
    return -1 ;
  else {
    return 1;
  }
  return 0;
});

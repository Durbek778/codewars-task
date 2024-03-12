function getSum(a, b) {
  let { min, max, total } = {
    min: a > b ? b : a,
    max: a > b ? a : b,
    total: [],
  };
  for (let i = min; i <= max; i++) {
    total.push(i);
  }
  return a !== b ? total.reduce((a, b) => a + b, 0) : a;
}
console.log(getSum(0, -1));

// const comp({darkmode})=>{
// return(
//    { darkmode ? <div></div> : <div>darkmode emas</div>}
// )

// }

// <Comp darkmode={true} />>

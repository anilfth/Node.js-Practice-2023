const add = (a, b) => {
     return a + b;
}
 const sub = (a,b) => {
    return a-b;
 }
  const mult = (a,b) => {
     return a * b;
  }
    const div = (a, b) => {
        return a / b;
    } 
    
 // first method: object property
     
//  module.exports.add = add 
// module.exports.sub = sub
// module.exports.mult = mult
// module.exports.div = div
 
//  using object destructuring 
 
module.exports = {add, sub, mult, div}
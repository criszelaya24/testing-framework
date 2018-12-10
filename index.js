
function adder(a, b) {
  return a + b 
}

function square(lenght){
  area = lenght * lenght
  return area
}

describe('adder', () => {
  it('adds two numbers', () => {
    const result = adder(1, 2)
    expect(result).toBe(3)
  })
})

describe('Area', function(){
  it('Compare are of square', function(){
    const area = square(5)
    expect(area).toBe(252)
  });
});


// describe('Area of rectangle',function(){

// });

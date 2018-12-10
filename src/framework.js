const describe = (desc, fn) => {
  console.log(desc)
  fn()
}

const it = (msg, fn) => describe('  ' + msg, fn)

const matchers = (exp) => ({
  toBe: (comparation) => {
    if (exp === comparation) {
      console.log('pass')
      $(document).ready(function(){
        pass();
      });
   
      return true
    } else {
      console.log('fail')
     $(document).ready(function(){
        fail(comparation, exp);
      });
      return false
    }
  }
})

const expect = (exp) => matchers(exp)

function pass() {
  document.getElementById("pass").innerHTML = " Test pass";
}

function fail(expec, actual) {
  document.getElementById("fail").innerHTML =  " Test fail, expected: " + expec + " got: " + actual;
}
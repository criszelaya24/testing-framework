const describe = (desc, fn) => {
  console.log(desc)
  $(document).ready(function(){
    showMessage(desc);
  })
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
// Create element for message
function showMessage (value) {
  var title = document.createElement("H1");  
  var t = document.createTextNode(value);       
  title.appendChild(t);                               
  document.body.appendChild(title);

}

function showResult(value) {
  var title = document.createElement("H2");  
  var t = document.createTextNode(value);
  if (value === 'Pass') {
    title.style.color = 'Green';
  }else{
    title.style.color = 'Red';
  }
  title.appendChild(t);                               
  document.body.appendChild(title);
}
function pass() {
  showResult("Pass")
}

function fail(expec, actual) {
  showResult("Fail")
}
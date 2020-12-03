const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');

let motherInfo = 'The mother cats are called ';
let kittenInfo;

fetch('sample.json')
.then(response => response.text())
.then(text => displayCatInfo(text))

function displayCatInfo(catString) {
  let total = 0;
  let male = 0;

  // Add your code here
  let requestURL='https://github.com/mdn/learning-area/blob/master/javascript/oojs/tasks/json/sample.json'
  let request=new XMLHttpRequest()

  request.open('GET',requestURL)

  request.responseType='json'
  request.send()

  request.onload=function(){
      const cat=request.response
      displayCatInfo(cat)

  }




// Don't edit the code below here!

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;
}

section.appendChild(para1);
section.appendChild(para2);
    
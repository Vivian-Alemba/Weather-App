
const header=document.querySelector('header')
const section=document.querySelector('section')

//obtaining the json

//storing the variable of url we want to retrieve
let requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
//creating a request
let request=new XMLHttpRequest()

// Now we need to open the request using the open() method.
// The HTTP method of making network request is GET
//The URL to making this request, we declared it earlier
request.open('GET',requestURL)

// setting the responseType to JSON, 
// so that XHR knows that the server will be returning JSON,
// request.responseType='json'
request.responseType='text' //now are getting a string
request.send()

// waiting for response to return from the server
request.onload=function(){
    const superHeroesText=request.response  //get the string from the response
    // const superHeroes=request.response
    const superHeroes=JSON.parse(superHeroesText)  //convert it to an object
    populateHeader(superHeroes)
    showHeroes(superHeroes)
}


//populating the header
function populateHeader(obj){
    const myH1=document.createElement('h1')
    myH1.textContent=obj['squadName']
    header.appendChild(myH1)

    const myPara=document.createElement('p')
    myPara.textContent='Hometown: '+obj['homeTown'] + ' // formed :' +obj['formed'] + 
    'active: ' +obj['active']
    header.appendChild(myPara)
}

function showHeroes(obj){
    const heroes=obj['members']
    for(let i=0; i< heroes.length; i++){
        const myArticle=document.createElement('article')
        const myH2=document.createElement('h2')
        const myPara1=document.createElement('p')
        const myPara2=document.createElement('p')
        const myPara3=document.createElement('p')
        const myList=document.createElement('ul')



        myH2.textContent=heroes[i].name
        myPara1.textContent='secret identity: ' + heroes[i].secretIdentity
        myPara2.textContent='Age: ' + heroes[i].age
        myPara3.textContent='Superpowers: '


        const superpowers=heroes[i].powers
        for(let j=0; j<superpowers.length; j++){
            const listItem=document.createElement('li')
            listItem.textContent=superpowers[j]
            myList.appendChild(listItem)
        }


        myArticle.appendChild(myH2)
        myArticle.appendChild(myPara1)
        myArticle.appendChild(myPara2)
        myArticle.appendChild(myPara3)
        myArticle.appendChild(myList)

        section.appendChild(myArticle)
    




    }

}
 



























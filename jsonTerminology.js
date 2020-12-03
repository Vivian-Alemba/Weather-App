// json.parse() method
let obj=JSON.parse('{"name":"vivian","age":"38","city":"Newyork"}')
console.log(obj)


const p=document.getElementById("demo")
// p.innerHTML=obj.name + ", " + obj.age

let xmlhttp=new XMLHttpRequest()
xmlhttp.onreadystatechange=function(){
    if(this.readyState ==4 && this.status==200){
        let myObj=JSON.parse(this.responseText)
        document.getElementById("demo").innerHTML=myObj.name + " "+ myObj.age +" "+ myObj.Gender +" "+
         myObj.Career + " "+ myObj.hobbies['entertainment']
    }
}

xmlhttp.open('GET','json.txt',true)
xmlhttp.send()





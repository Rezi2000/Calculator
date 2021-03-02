(function(){
    output = document.querySelector(".input_output")

    buttons = document.querySelectorAll("[data = 'number']")

    delete_all = document.getElementById("delete_all")

    del = document.getElementById("delete")

    sequence = "";

    array = [];
    

    document.getElementById("divide").addEventListener("click",()=>output.innerText += "/")
})()




buttons.forEach(button=>{
    button.addEventListener("click",()=>{

      output.innerText += button.innerText
      output.innerHtml += "<h1></h1>"
      sequence = output.innerText

     

    })

})



delete_all.addEventListener("click",()=>{
    output.innerText = ""
    sequence = ""
})


del.addEventListener("click",()=>{
    sequence = sequence.slice(0,sequence.length - 1)
    output.innerText = output.innerText.slice(0,output.innerText.length - 1)
    
    
})



equal.addEventListener("click",()=>{
    ParseString(sequence)
    ParseOperations(array,output)    
    array = []
})





function ParseOperations(array,elem){
    let result = 0;
    let element;
    let nextElement;
    let nextNextElement;

    for(let i=0;i<array.length;i++){
        element = array[i]
        nextElement = array[i+1]
        nextNextElement = array[i+2]

        let currentElement = 0;


        if(nextElement === "x" || nextElement === "/"){
            nextElement === "x" ? currentElement = element * nextNextElement : ""
            nextElement === "/" ? currentElement = element / nextNextElement : ""
            array.splice(i,2)
            array[i] = currentElement
            i--
        }
    }


    array.forEach(element => {
        result += element
    });

    

    elem.innerText = result
    
   
    
}






let ParseString = (str)=>{
    
   
    let number_text = ""
    let element;
    let number = 0;

    

    for(let i=0;i<str.length;i++){
        element = str[i]
        
    
        if(element === "+" || element === "-" || element === "=" || element === "x" || element ==="/"){
            number = parseFloat(number_text)
            number_text = ""

            !isNaN(number) ? array.push(number) : ""

            element === "-" ? number_text += "-" : ""
            element === "x" ? array.push(element) : ""
            element === "/" ? array.push(element) : ""
            
        }else{
            number_text += element
        }


        
    }


    
}


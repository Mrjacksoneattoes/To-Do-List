let bouton = document.querySelector('.btn-1');
let input = document.getElementById("task");
let container = document.querySelector(".container");
let listeTache = document.createElement("ul");
container.appendChild(listeTache)


function takeValueInput(){
    bouton.addEventListener("click", (e)=>{
        let inputValue = input.value
        if(inputValue !== ""){
            let li = document.createElement("li");
            let del = document.createElement("img");
            del.height = "25"
            del.src = "/assets/delete2.png"
            del.classList.add("suppr");
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox"
            li.textContent = inputValue
            li.appendChild(del)
            li.appendChild(checkbox)
            listeTache.appendChild(li)
            input.value = ""
       
        
        del.addEventListener("click", (e)=>{
            listeTache.removeChild(li)

        })
        checkbox.addEventListener("click", (e)=>{
            if(checkbox.checked){
                li.classList.add("line")
            }else if(!checkbox.checked){
                li.classList.remove("line")
            }
        })
        }
        
        
    
    })

    
}




function lancerScript(){
takeValueInput()

}
lancerScript()
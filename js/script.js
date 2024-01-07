
var siteNameInput = document.getElementById("siteNameInput")
var siteLinkInput = document.getElementById("siteLinkInput")


var listBook =[]
function addBook(){
     
    var book ={
        
        name: siteNameInput.value,
        link: siteLinkInput.value,
        

    }

    listBook.push(book)
    clear()
    displayData()
  
}

function clear(){
    siteNameInput.value = "";
    siteLinkInput.value = "";
   

}

function displayData(){
    var cartona= "";
    for(var i=0; i<listBook.length ; i++){
       cartona += `
       <tr>
            <td>${i}</td>
            <td> ${listBook[i].name} </td>
             
            <td>
            <a href="${listBook[i].link}"
            <button class="btn   bg-info btn-sm">visit</button>
            </a>
            </td>
            <td>
            
            <button onclick="deleteItem(${i})" class="btn bg-danger   btn-sm">Delete</button>
            </td>

        </tr>
       `
    }
    document.getElementById("tableBody").innerHTML = cartona;
}

function deleteItem(index){
    listBook.splice( index , 1);
    displayData()

}


function validationName(){
    var text = siteNameInput.value;
    var regexName = /^[A-Z][a-z]{3,8}$/;
    
    if( regexName.test(text) ){
        siteNameInput.classList.add("is-valid");
        siteNameInput.classList.remove("is-invalid");
    }
    else{
        siteNameInput.classList.add("is-invalid")
        siteNameInput.classList.remove("is-valid")
    }
    
}
function validationLink(){
    var link = siteLinkInput.value;
    var regexName = /^(https:\/\/)?[A-Za-z0-9_\.]{1,}\.[a-z]{3}$/;
    
    if( regexName.test(link) ){
        siteLinkInput.classList.add("is-valid");
        siteLinkInput.classList.remove("is-invalid");
    }
    else{
        siteLinkInput.classList.add("is-invalid")
        siteLinkInput.classList.remove("is-valid")
    }
    
}
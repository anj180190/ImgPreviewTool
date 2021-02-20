//For Url
const imageUrl=document.querySelector('.url');
if(imageUrl){
    imageUrl.addEventListener('change',handleUrlImage,false);
}


function handleUrlImage(e){
    let url= e.target.value;
    let img =document.querySelector('img');      
    if(!checkURL(url)){
        alert("Please Enter Image Url");
    }else{
        img.style="display:block";
        img.src=url;
    }
}

function checkURL(url){
    return (url.match(/\.(jpeg|jpg|gif|png)$/)!=null);
}

//For Drag and drop

const fileImg= document.querySelector('.fileImg');
if(fileImg){
fileImg.addEventListener('change',handleFileImage,false);
}
function handleFileImage(e){
    let img =document.querySelector('img');   
    let reader = new FileReader();
    reader.onload = function (event) {
        console.log(event.target.result);
        if (!event.target.result.includes('data:image/jpeg')
             &&!event.target.result.includes('data:image/jpg')
             &&!event.target.result.includes('data:image/gif')
             &&!event.target.result.includes('data:image/png')) {
          return alert('Wrong file type - Image only.')
        }
        img.style="display:block";
        img.src=event.target.result;
    
    }
    reader.readAsDataURL(e.target.files[0]);
}

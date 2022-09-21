// const myText=document.getElementById("nameid");
// const btn=document.getElementById("btn");

// myText.addEventListener("keypress",function(e){
//     if(e.key==='Enter')
//     {
//         e.preventDefault();
//         alert("pressed");
//     }
// })



// document.getElementById("btn").addEventListener("click", function()
// {
//     // const val=document.getElementById("nameid").value;
//     alert("hello");
//     // console.log(val);

// });

function getValue() {
    const str= document.getElementById("nameid");
    
    const img=document.getElementById('image');
    img.setAttribute('src',`https://joeschmoe.io/api/v1/${str.value}`);

    const inputs=document.querySelectorAll('input');
    inputs.forEach(input=> input.value="");
}



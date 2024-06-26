var tablinks = document.getElementsByClassName('tab-links')
var col2contents = document.getElementsByClassName('col2-contents')
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(col2content of col2contents){
        col2content.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


// -----------------------------
// let change=(n)=>{
//     n.map((elem)=>{
//         elem.addEventListener("click",(e)=>{
//             let tabname=e.target.getAttribute("data-tab");
//             opentab(tabname);
//             })
            
//     })
// }
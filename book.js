/*
const table=document.getElementById("table");
console.log(table);
const row=document.createElement('tr');
row.innerHTML=`<td>${Title}</td>
               <td>${Author}</td>
               <td>${UniqueId}</td>
               <td><button Onclick=remove()>Remove</td>`;
               table.appendChild(row);
  const form=document.getElementById("form");
  form.addEventListener("submit",formsubmit);
  function formsubmit(event){
    event.preventDefault();
    const obj={
        booktitle:event.target.booktitle.value,
        authorname:event.target.AuthorName.value,
        id:event.target.BookId.value
    }
    addbookstoUI(obj)
  }  
  window.addEventListener("DOMContentLoaded",()=>{
    let localmemory=localStorage;
    let keys=Object.keys(localmemory);
    for(let i=0;i<keys.length;i++){
        const key=keys[i];
        const value=localmemory[key];
        const userdetails=JSON.parse(value);
        addbookstoUI(userdetails);
    }
})    
  function addbookstoUI(obj){
    const table=document.getElementById("table");
    const row=document.createElement('tr');
    row.innerHTML=row.innerHTML+`<td>${obj.booktitle}</td>
               <td>${obj.authorname}</td>
               <td>${obj.id}</td>
               <td><button Onclick=remove()>Remove</td>`;
               table.appendChild(row);
  }   */

  
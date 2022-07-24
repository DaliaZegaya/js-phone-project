const USER_API = "https://my-json-server.typicode.com/Jeck99/fake-server/users";

async function getUserData() {
  let counter=0
  gifDiv.innerHTML= '<img style= "width:7vw" src= /images/loading.gif> </img>'
  try {
    let arrayObj = await fetch(USER_API).then((res) => res.json());
    console.log(arrayObj)
    arrayObj.forEach((element) => {
      document.querySelector(
        ".t_body"
      ).innerHTML +=
       `<tr id="tr_${element._id}">
        <td >${element.name["first"]} ${element.name["last"]}</td>
        <td >${element.age}</td>
        <td>${element.email}</td>
        <td  >${element.phone}</td>
        <td >
        <img
        src="https://randomuser.me/api/portraits/med/women/${counter++}.jpg"
        style="width: 50px; height: 50px"
        class="rounded-circle"
        />
        </td>
        <td  > <button onclick="removeTableRow('tr_${element._id}')" class="btn btn-dark";>DELETE</button></td>
        </tr>`;
    });
  } catch (err) {
    console.log(err);
  } finally {
    gifDiv.innerHTML= ""
  }
}
getUserData();

async function deleteUser(id){
  try{
    removeTableRow(`tr_${id}`)
    let response = await fetch(`${USER_API}/${id}`,{
      method: 'DELETE',
      headers: {'Content-type': 'application/json;'}
    })
} catch(error){error}
finally{}
 }
 function removeTableRow(id){
  document.getElementById(id).style.display = 'none'
 }
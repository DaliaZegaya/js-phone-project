const USER_API = "https://my-json-server.typicode.com/Jeck99/fake-server/users";

async function getUserData() {
  gifDiv.innerHTML= '<img style= "width:7vw" src= /images/loading.gif> </img>'
  try {
    let arrayObj = await fetch(USER_API).then((res) => res.json());
    arrayObj.forEach((element) => {
      document.querySelector(
        ".t_body"
      ).innerHTML +=
       `<tr>
        <td >${element.name["first"]} ${element.name["last"]}</td>
        <td >${element.age}</td>
        <td>${element.email}</td>
        <td  >${element.phone}</td>
        <td >
        <img
        src="https://mdbootstrap.com/img/new/avatars/8.jpg"
        alt=""
        style="width: 50px; height: 50px"
        class="rounded-circle"
        />
        </td>
        <td  > <button class="btn btn-dark";>DELETE</button></td>
        </tr>`;
    });
  } catch (err) {
    console.log(err);
  } finally {
    gifDiv.innerHTML= ""
  }
}
getUserData();
const DEVICE_API="https://my-json-server.typicode.com/Jeck99/fake-server/devices"
async function getDevices(){
    try {
        return await fetch (DEVICE_API)
        .then(res=>res.json())
    }
    catch(error) {}
    finally {}

}

let imagesArray = [
    'phone0.webp',
    'phone1.webp',
    'phone2.jpg',
    'phone3.webp',
    'phone4.jpg',
    'phone5.webp',
    'phone6.webp',
    'phone7.webp',
    'phone8.jpg',
    'phone9.webp',
    'phone10.webp',
    'phone11.jpg'
]

function printDeviceToScreen() {
  gifDiv.innerHTML= '<img style= "width:7vw" src= /images/loading.gif> </img>'

    getDevices()
      .then((result) => {
        result.forEach((item,index) => {
          mainDeviceDiv.innerHTML +=
          `<div class="card col-md-4 col-sm-12">
              <img src="/images/${imagesArray[index] ? imagesArray[index] : imagesArray[0]}" class="card-img-top"/>
              <div class="card-body card-page">
              <p>Brand:${item.brand}</p>
               <p>Phone Price:${item.price}</p>
               <p>Stock:${item.isAvailable}</p>
               <p>Phone Date:${item.createdAt}</p>
               <p>Color:${item.color}</p>
               <p>Ram:${item.ram}</p>
               <button class="btn bg-warning">BUY NOW</button>
               
               <button class="btn bg-warning">WATCH REVIEW</button>
             </div>
          </div>`;
        });
      })
      .catch(() => {})
      .finally(() => {
        gifDiv.innerHTML= ""
      });
  }
  printDeviceToScreen();

  // function unboxVideo(){
  //   let video= document.querySelector(".unbox_video")
  //   video.classList.toggle("active")
  //   unbox_video.innerHTML="<div class='unbox_video'>"+
  //   "<video src='/images/videoplayback.mp4' controls='true'></video>"+
  //   "<img onclick='unboxVideo()' src='/images/closepic.png' class='close'>"+
  //   "</div>"
  // }




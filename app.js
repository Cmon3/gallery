/*const URL =
  "https://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/photos.json";

/*!!! HINT: REMEMBER THE STRUCTURE !!!
fetch('url')
.then(Resolve)
.then(Reject) OR .catch(Reject)

OR directly 

fetch('url').then(ResolveFuntion, RejectFuntion)



let photos = null;

fetch(URL)
.then(response => onSuccessFetch(response))
.then(error => console.log('This is an error: ', error))

const app = document.querySelector("#app");
const divRow = document.createElement("div");
divRow.className = 'row';

const divColumn = document.createElement("div");
divColumn.className = 'column';

/*fetch(URL)
  .then((resolve) => {
    console.log('2')
    resolve.json()
  })
  .then((photossResponse) => {
    photos = photossResponse
    console.log(photossResponse[0]);
    console.log('3')
  });

const onPhotoResponse = (photos) => {
  console.log('3.5', photos);
}

const onSuccessFetch = (resolve) => {
  resolve.json()
  .then((photos) => {
    for (indexOfPhoto in photos) {
    console.log(photos[indexOfPhoto].url, (indexOfPhoto % 4) + 1);
    
    const img = document.createElement("img");
    img.src = photos[indexOfPhoto].url;
    divColumn.appendChild(img);
    

    app.appendChild(divRow);
    }
  })
};
*/


//divRow.appendChild

const URL =
  "https://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/photos.json";
​


fetch(URL)
.then(response => onSuccessFetch(response))
.then(error => console.log('this is an error: ', error));
​
const app = document.getElementById('app');
​
const divRow = document.createElement("div");
divRow.className = 'row';
​
​
const divColumn1 = document.createElement("div");
      divColumn1.className = 'column';
      divRow.appendChild(divColumn1);
​
const divColumn2 = document.createElement("div");
      divColumn2.className = 'column';
      divRow.appendChild(divColumn2);
​
const divColumn3 = document.createElement("div");
      divColumn3.className = 'column';
      divRow.appendChild(divColumn3);
​
const divColumn4 = document.createElement("div");
      divColumn4.className = 'column';
      divRow.appendChild(divColumn4);
​
​
const onSuccessFetch = (resolve) => {
  resolve.json()
  .then((photos) => {
    for (indexOfThePhoto in photos) {
​
      console.log(photos[indexOfThePhoto].url, (indexOfThePhoto % 4) + 1);
​
      const img = document.createElement('img');
      img.src = photos[indexOfThePhoto].url;
      
      switch ((indexOfThePhoto % 4) + 1) {
        case 1:
          divColumn1.appendChild(img);
          break;
​
        case 2:
          divColumn2.appendChild(img);
          break;
​
        case 3:
          divColumn3.appendChild(img);
          break;
​
        case 4:
          divColumn4.appendChild(img);
          break;
      
        default:
          break;
      }
      
      app.appendChild(divRow);
    }
  })
};

let myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
let requestOptions = {
  method: "get",
  headers: myHeaders,
  redirect: "follow"
};

let datas;


fetch('', requestOptions)
  .then(response => response.text())
  .then(result => {
    let parsedData = JSON.parse(result).data;
    datas = parsedData;


  })
  .catch(error => console.log("error", error));

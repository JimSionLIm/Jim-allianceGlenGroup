function getFromServer() {
  var requestOptions = {
    method: "GET",
    // redirect: "follow",
  };

  fetch("http://localhost:3000/customer/all", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      var text = "<ul>";
      data.forEach(function (item) {
        text += `<li>
        id: ${item.member_id} <br>
        givenName: ${item.givenName} <br>
        lastName: ${item.lastName} <br>
        nob: ${item.nob} <br>
        location: ${item.location} <br>
        budget: ${item.budget}
        </li>`;
      });
      text += "</ul>";
      $(".mypanel").html(text);
    })
    .catch((error) => console.log("error", error));
}

function postData() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  // Populate this data from e.g. form.
  // var raw = JSON.stringify({
  //   givenName: "dixant",
  //   lastName: "mittal",
  //   nob: 2,
  //   location: "Bugis",
  //   budget : 1000
  // });
 /// const = myForm = document.getElementbyID('myForm');
//  console.log("this is the data reveived: " + myHeaders);
 /// console.log("my form: " + myForm);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  fetch("http://localhost:3000/customer/add", requestOptions)
    .then((response) => response.text())
    .then((result) => $(".mypanel").html(result))
    .catch((error) => console.log("error", error));
}

function deleteData() {
  var requestOptions = {
    method: "DELETE",
  };
  fetch("http://localhost:3000/customer/delete?id=74", requestOptions)
    .then((response) => response.text())
    .then((result) => $(".mypanel").html(result))
    .catch((error) => console.log("error", error));
}

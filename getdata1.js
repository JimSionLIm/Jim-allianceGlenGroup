function getFromServer() {
    var requestOptions = {
      method: "GET",
      };
  
    fetch("http://localhost:4000/member/all", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        var text = "<ul>";
        data.forEach(function (item) {
          text += `<li>
          id: ${item.MemberID} <br>
          GivenName: ${item.GivenName} <br>
          LastName: ${item.LastName} <br>
          NoOfBedrooms: ${item.NoOfBedrooms} <br>
          Budget: ${item.Budget}<br>
          Loc: ${item.Loc}
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
  
    // We need to take the data from the form in webpage. We gather them by getting the element by id code
    //at the end we put .value to identify what was type in that field and then store them in a variable
  
    let given = document.getElementById("GivenName").value;
    let last = document.getElementById("LastName").value;
    let bedrooms = document.getElementById("NoOfBedrooms").value;
    let budget = document.getElementById("Budget").value;
    let loc = document.getElementById("Loc").value;

//we use the same variable above to be given in the exact same syntax we coded in VSC POST /ADD function
//menaing "given" must match the syntax in that file... "given" which is what will be used in that syntax there... request.body.xxxxx <----  the xxxxx part
    var raw = JSON.stringify({
      GivenName: `${given}`,
      LastName: `${last}`,
      NoOfBedrooms: `${bedrooms}`,
      Budget: `${budget}`,
      Loc: `${loc}`,
    });
  
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };
  
    fetch("http://localhost:4000/member/add", requestOptions)
      .then((response) => response.text())
      .then((result) => $(".mypanel").html(result))
      .catch((error) => console.log("error", error));
  }
  

  

  function deleteData() {
/* for DELETE function, we need to create the getelementby id form to capture the value keyed in to just the ID field
Then we take that value and concattenakabpomb it to the URL and then let that URL be a variable called address or any other name u like
We need to ensure the URL has to be matching with the one in postman etc, with the memberid == to the one we coded in the DELETE function 
so the URL will end with something like /member/delete?memberid=${memberid}`
  */
    let memberid = document.getElementById("MemberID").value;
    let address =  `http://localhost:4000/member/delete?memberid=${memberid}`;

    var requestOptions = {
      method: "DELETE",
    };

    fetch(address, requestOptions)
      .then((response) => response.text())
      .then((result) => $(".mypanel").html(result))
      .catch((error) => console.log("error", error));
  }



  function updateData() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    // Populate this data from e.g. form.
  
    let given = document.getElementById("GivenName").value;
    let last = document.getElementById("LastName").value;
    let bedrooms = document.getElementById("NoOfBedrooms").value;
    let budget = document.getElementById("Budget").value;
    let loc = document.getElementById("Loc").value;
    let memberid = document.getElementById("MemberID").value;
    let address =  `http://localhost:4000/member/update?memberid=${memberid}`;


    var raw = JSON.stringify({
      GivenName: `${given}`,
      LastName: `${last}`,
      NoOfBedrooms: `${bedrooms}`,
      Budget: `${budget}`,
      Loc: `${loc}`,
    });

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,

    };
  
    fetch(address, requestOptions)
      .then((response) => response.text())
      .then((result) => $(".mypanel").html(result))
      .catch((error) => console.log("error", error));
  }

  
  
  /* to link to form then
  to change the URL to /member/update?id=${MemberID}`
  */







     
      

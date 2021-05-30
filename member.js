const database = require("./database1");
const express = require("express");

router = express.Router();

router.get("/member/all", (request, response) => {
  database.connection.query("select * from member", (errors, results) => {
    if (errors) {
      response.status(500).send("Some error occurred");
    } else {
      response.status(200).send(results);
    }
  });
});


router.get("/member/id", (request, response) => {
  database.connection.query(
    `select * from member where MemberID = ${request.query.id}`,
    (errors, results) => {
      if (errors) {
        response.status(500).send("Some error occurred");
      } else {
        response.status(200).send(results);
      }
    }
  );
});


router.post("/member/add", (request, response) => {
  database.connection.query(
    `insert into member (GivenName, LastName, NoOfBedrooms, Budget, Loc) values ('${request.body.GivenName}','${request.body.LastName}','${request.body.NoOfBedrooms}','${request.body.Budget}', '${request.body.Loc}')`,
    (errors, results) => {
      if (errors) {
        response.status(500).send("Some error occurred");
      } else {
        response.status(200).send("Record saved successfully!");
      }
    }
  );
});

// POST + PUT = Body, GET + DELETE = Query
router.delete("/member/delete", (request, response) => {
  database.connection.query(
    `delete from member where MemberID = '${request.query.memberid}'`,
    (errors, results) => {
      if (errors) {
        response.status(500).send("Some error occurred");
      } else {
        response.status(200).send("Record deleted successfully!");
      }
    }
  );
});


router.put("/member/update", (request, response) => {
    database.connection.query(
      `update member set 
      GivenName = '${request.body.GivenName}'
      ,LastName = '${request.body.LastName}'
      ,NoOfBedrooms = '${request.body.NoOfBedrooms}'
      ,Budget = '${request.body.Budget}'
      ,Loc = '${request.body.Loc}'
      where MemberID = '${request.query.memberid}'`,
      (errors, results) => {
        if (errors) {
          response.status(500).send(errors);
        } else {
          response.status(200).send("Record updated successfully!");
        }
      }
    );
  });
  


module.exports = {
  router,
};

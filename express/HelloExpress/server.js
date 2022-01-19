const express = require("express");
const app = express();
const port=8000
// req is short for request
// res is short for response

app.get("/api", (req, res) => {
  res.json({ message: "Hello World" });
});
// we can hard code some users like this
// later on we will want to store users in a database
const users = [
  { firstName: "Reimu",  lastName: "Hakurei"    },
  { firstName: "Marisa", lastName: "Kirisame"   },
  { firstName: "Sanae",  lastName: "Kochiya"    },
  { firstName: "Sakuya", lastName: "Izayoi"     },
  { firstName: "Momiji", lastName: "Inubashiri" }
];
  
app.get("/api/users", (req, res) => {
    res.json( users);
});

// this needs to below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );

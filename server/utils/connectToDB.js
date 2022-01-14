const mongoose = require("mongoose");
const Realm = require("realm-web");

const APP_ID = "<Your App ID>";
const graphqlUri = `https://realm.mongodb.com/api/client/v2.0/app/${APP_ID}/graphql`;

async function connectToDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://sergeydirko:<sergeydev2019>@cluster0.m1r5e.mongodb.net/todos",
      {
        useNewUrlParser: true,
        useFindAndModify: false,
      }
    );
    // app.listen(())
  } catch (error) {}
}

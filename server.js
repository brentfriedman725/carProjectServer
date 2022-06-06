const express = require('express');
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
const Role = require('./models/roleModel.js');
const Car = require('./models/carModel');
const { graphqlHTTP } = require('express-graphql');
const graphQLSchema = require('./graphql/schema/carSchema');
const graphqlResolver = require('./graphql/resolver/carRes')



var corsOptions = {
    origin: "*"
  };
app.use(cors(corsOptions));
mongoose.connect(process.env.DB_ACCESS, () => {
    console.log("Connected")
    initial();
    });
    
app.use('/graphql', graphqlHTTP({
  schema: graphQLSchema,
  rootValue: graphqlResolver,
  graphiql: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use('/user', userRouteURLs);

function initial() {
    Role.estimatedDocumentCount((err, count) => {
      if (!err && count === 0) {
        new Role({
          name: "user"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
          console.log("added 'user' to roles collection");
        });
        new Role({
          name: "admin"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
          console.log("added 'admin' to roles collection");
        });
      }
    });
  }

app.listen(process.env.PORT || 8000, () => console.log("Server running."));
require('./route/authRoutes')(app);
require('./route/userRoutes')(app);
require('./route/detailRoutes')(app);
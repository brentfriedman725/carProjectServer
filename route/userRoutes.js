const { authToken } = require("../middleware/index");
const controller = require("../controllers/userController");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/api/test/all", controller.allAccess);
  app.get("/api/cars", [authToken.verifyToken], controller.userBoard);
  app.get(
    "/api/carsadd",
    [authToken.verifyToken, authToken.isAdmin],
    controller.adminBoard
  );
};
const controller = require("../controllers/detailController");
const { authToken } = require("../middleware/index");

module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
    app.get('/car/details', [authToken.verifyToken], controller.filter);
}
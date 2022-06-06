const Car = require('../models/carModel.js');
exports.fullDetail = async (req, res) => {
    res.status(200).send(await Car.find({
        model_make_id: req.query.make,
        model_name: req.query.model,
        model_trim: req.query.trim
    }));
}
exports.filter = (req, res) => {
    if (req.query.cmd) {
        if (req.query.cmd === 'getMakes') {
            getMakes(req, res);
        } else if (req.query.cmd === 'getModels') {
            getModels(req, res);
        } else if (req.query.cmd === 'getTrims') {
            getTrims(req, res);
        }
    } else if (req.query.make && req.query.model && req.query.trim) {
        getResult(req, res);
    }
}
getMakes = async (req, res) => {
    res.status(200).send(await Car.distinct("model_make_id"));
}

getModels = async (req, res) => {
    console.log(req);
    res.status(200).send(await Car.distinct("model_name").where("model_make_id").equals(req.query.make));
}

getTrims = async (req, res) => {
    res.status(200).send(await Car.distinct("model_trim").where("model_name").equals(req.query.model).where("model_make_id").equals(req.query.make));
}

getResult = async (req, res) => {
    if (req.query.trim === "Default") {
        res.status(200).send(await Car.find({
            model_make_id: req.query.make,
            model_name: req.query.model,
            model_trim: ""
        }));
    } else {
        res.status(200).send(await Car.find({
            model_make_id: req.query.make,
            model_name: req.query.model,
            model_trim: req.query.trim
        }));
    }

}
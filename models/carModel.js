const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const carSchema = new Schema({
    model_id: {
        type: String,
        required: false
    },
    model_make_id: {
        type: String,
        required: false
    },
    model_name: {
        type: String,
        required: false
    },
    model_trim: {
        type: String,
        required: false
    },
    model_year: {
        type: String,
        required: false
    },
    model_body: {
        type: String,
        required: false
    },
    model_engine_position: {
        type: String,
        required: false
    },
    model_engine_cc: {
        type: String,
        required: false
    },
    model_engine_cyl: {
        type: String,
        required: false
    },
    model_engine_type: {
        type: String,
        required: false
    },
    model_engine_valves_per_cyl: {
        type: String,
        required: false
    },
    model_engine_power_ps: {
        type: String,
        required: false
    },
    model_engine_power_rpm: {
        type: String,
        required: false
    },
    model_engine_torque_nm: {
        type: String,
        required: false
    },
    model_engine_torque_rpm: {
        type: String,
        required: false
    },
    model_engine_bore_mm: {
        type: String,
        required: false
    },
    model_engine_stroke_mm: {
        type: String,
        required: false
    },
    model_engine_compression: {
        type: String,
        required: false
    },
    model_engine_fuel: {
        type: String,
        required: false
    },
    model_top_speed_kph: {
        type: String,
        required: false
    },
    model_0_to_100_kph: {
        type: String,
        required: false
    },
    model_drive: {
        type: String,
        required: false
    },
    model_transmission_type: {
        type: String,
        required: false
    },
    model_seats: {
        type: String,
        required: false
    },
});

module.exports = mongoose.model('Car', carSchema);

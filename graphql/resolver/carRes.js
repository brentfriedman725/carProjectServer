const Car = require('../../models/carModel');

module.exports = {
    makeCar: (args) => {
        const car = new Car({
            model_id: args.input.model_id,
            model_make_id: args.input.model_make_id,
            model_name: args.input.model_name,
            model_trim: args.input.model_trim,
            model_year: args.input.model_year,
            model_body: args.input.model_body,
            model_engine_position: args.input.model_engine_position,
            model_engine_cc: args.input.model_engine_cc,
            model_engine_cyl: args.input.model_engine_cyl,
            model_engine_type: args.input.model_engine_type,
            model_engine_valves_per_cyl: args.input.model_engine_valves_per_cyl,
            model_engine_power_ps: args.input.model_engine_power_ps,
            model_engine_power_rpm: args.input.model_engine_power_rpm,
            model_engine_torque_nm: args.input.model_engine_torque_nm,
            model_engine_torque_rpm: args.input.model_engine_torque_rpm,
            model_engine_bore_mm: args.input.model_engine_bore_mm,
            model_engine_stroke_mm: args.input.model_engine_stroke_mm,
            model_engine_compression: args.input.model_engine_compression,
            model_engine_fuel: args.input.model_engine_fuel,
            model_top_speed_kph: args.input.model_top_speed_kph,
            model_0_to_100_kph: args.input.model_0_to_100_kph,
            model_drive: args.input.model_drive,
            model_transmission_type: args.input.model_transmission_type,
            model_seats: args.input.model_seats

        })
        console.log(car);
        return car.save()
        .then(
            result => {
                return {... result._doc};
            }
        )
        .catch(err => {
            console.log(err);
            throw err;
        });

 
   }
}
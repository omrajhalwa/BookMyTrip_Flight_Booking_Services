const axios = require('axios');
const {StatusCodes} = require('http-status-codes')
const { BookingRepository} = require('../repositories')

const db = require('../models');
const { FLIGHT_SERVICE } = require('../config/server-config');
const AppError = require('../utils/errors/app-error');

async function createBooking(data) {
 return new Promise((resolve, reject) => {
    
        const result = db.sequelize.transaction(async function  bookingImpl(t) {
            
            const flight = await axios.get(`${FLIGHT_SERVICE}/api/v1/flights/${data.flightId}`);
          //  console.log(flight);
            const flightData = flight.data.data;
            if(data.noofSeats > flightData.totalSeats){
                reject(new AppError('Not enough seats available',StatusCodes.BAD_REQUEST));
            }

            resolve(true);
        })
 

       


})
}



module.exports = {
    createBooking
}
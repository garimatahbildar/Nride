const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
  rideId: {
    type: String,
    unique: true,
    required: true
  },
  rider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  driver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Driver',
    default: null
  },
  pickupLocation: {
    address: String,
    latitude: {
      type: Number,
      required: true
    },
    longitude: {
      type: Number,
      required: true
    }
  },
  dropLocation: {
    address: String,
    latitude: {
      type: Number,
      required: true
    },
    longitude: {
      type: Number,
      required: true
    }
  },
  rideType: {
    type: String,
    enum: ['bike', 'auto', 'car'],
    required: true
  },
  status: {
    type: String,
    enum: ['requested', 'accepted', 'ongoing', 'completed', 'cancelled'],
    default: 'requested'
  },
  fare: {
    baseFare: Number,
    distanceFare: Number,
    timeFare: Number,
    totalFare: Number,
    paymentMethod: {
      type: String,
      enum: ['cash', 'card', 'wallet'],
      default: 'cash'
    },
    paymentStatus: {
      type: String,
      enum: ['pending', 'completed'],
      default: 'pending'
    }
  },
  distance: Number, // in kilometers
  duration: Number, // in minutes
  route: [
    {
      latitude: Number,
      longitude: Number,
      timestamp: Date
    }
  ],
  riderRating: {
    rating: {
      type: Number,
      min: 1,
      max: 5
    },
    review: String,
    ratedAt: Date
  },
  driverRating: {
    rating: {
      type: Number,
      min: 1,
      max: 5
    },
    review: String,
    ratedAt: Date
  },
  requestedAt: {
    type: Date,
    default: Date.now
  },
  acceptedAt: Date,
  startedAt: Date,
  completedAt: Date,
  cancelledAt: Date,
  cancellationReason: String
});

module.exports = mongoose.model('Ride', rideSchema);

# Nride - Ride Sharing App for Nalbari

Nride is a ride-sharing application designed specifically for Nalbari city, inspired by Rapido's simple and efficient ride-sharing model.

## Features

- **Easy Ride Booking**: Quick and simple booking process
- **Real-time Tracking**: Track your ride in real-time
- **Driver Matching**: Intelligent algorithm to match riders with nearby drivers
- **Safe Transactions**: Secure payment gateway integration
- **User Ratings**: Rate your rides and drivers
- **Multiple Ride Options**: Auto, Bike, and more

## Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Google Maps API
- Redux for state management

### Backend
- Node.js with Express
- MongoDB for database
- Socket.io for real-time features
- JWT for authentication

### Infrastructure
- Docker for containerization
- AWS/Firebase deployment ready

## Project Structure

```
Nride/
├── client/          # React frontend
├── server/          # Node.js backend
├── docker-compose.yml
├── package.json
└── README.md
```

## Getting Started

### Prerequisites
- Node.js v16+
- MongoDB
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/garimatahbildar/Nride.git
cd Nride

# Install dependencies
npm install

# Create .env files in client and server directories
cp .env.example .env

# Start the application
npm start
```

## Environment Setup

### Server (.env)
```
MONGODB_URI=mongodb://localhost:27017/nride
PORT=5000
JWT_SECRET=your_jwt_secret_here
GOOGLE_MAPS_API_KEY=your_api_key_here
```

### Client (.env)
```
REACT_APP_API_URL=http://localhost:5000
REACT_APP_GOOGLE_MAPS_KEY=your_api_key_here
```

## Features in Development

- [x] Project setup
- [ ] User authentication (signup/login)
- [ ] Driver onboarding
- [ ] Ride booking system
- [ ] Real-time tracking
- [ ] Payment integration
- [ ] Rating system
- [ ] Admin dashboard

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

MIT License - see LICENSE file for details

## Contact

For support, email: support@nride.local

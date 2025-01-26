const movieCollection = [
    {
        title: "Inception",
        price: 200,
        seatsAvailable: 50,
        ratings: 4.5
    },
    {
        title: "The Dark Knight",
        price: 250,
        seatsAvailable: 0,
        ratings: 4.8
    },
    {
        title: "Interstellar",
        price: 220,
        seatsAvailable: 30,
        ratings: 4.7
    },
    {
        title: "Tenet",
        price: 180,
        seatsAvailable: 20,
        ratings: 4.0
    },
    {
        title: "Oppenheimer",
        price: 300,
        seatsAvailable: 0,
        ratings: 4.6
    }
];



// Function to check if it's a weekend
const isWeekend = () => {
    const today = new Date();
    const day = today.getDay(); // Get the current day
    return day === 0 || day === 6;
};

const allMovies = movieCollection.map(movie => {
    return {
        title: movie.title,
        price: movie.price,
        seatsAvailable: movie.seatsAvailable,
        rating: movie.ratings,
        status: movie.seatsAvailable > 0 ? "Available" : "Sold Out"
    }
})
console.log(allMovies);

console.log("================================ Availabale Movies ================================");


const availabileMovies = movieCollection.map(movie => {
    return {
        title: movie.title,
        availabileStatus: movie.seatsAvailable > 0 ? "Available" : "Sold Out"
    }
})
console.log(availabileMovies);

console.log("================================weekend Surge price================================");



// Task 3: Use map to apply weekend surge pricing
const moviesWithSurgePricing = movieCollection.map(movie => {
    return {
        weekendPrice: isWeekend() ? movie.price + 50 : movie.price
    }
})
console.log("Movies with Weekend Surge Pricing:", moviesWithSurgePricing);





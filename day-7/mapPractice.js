
const numbers = ['1', '2', '3', '4', '5', '6'];

const double = numbers.map(number => number * 2);

console.log("original" + numbers);

console.log("doubled" + double);

const moviesList = [
    { title: 'titanic', price: 300 },
    { title: 'star wars', price: 400 },
    { title: 'avengers', price: 500 },
    { title: 'inception', price: 600 },
    { title: 'bahubali ', price: 700 }
]



const formattedMovies = moviesList.map(movie => {
    return {
        title: movie.title,
        formattedPrice: `₹${movie.price}`
    }
})

console.log('Formatted movies: ', formattedMovies);


const showTimings = [
    {

        time: '10:00 AM',
        seats: 50
    },
    {
        time: '12:00 PM',
        seats: 70
    },
    {
        time: '2:00 PM',
        seats: 40
    },
    {
        time: '4:00 PM',
        seats: 0
    }

]

const availabilityStatus = showTimings.map(show => {
    return {
        time: show.time,
        availabiltityStatus: show.seats > 0 ? "Available" : "Housefull",
        seats: show.seats
    }
})

console.log("Show Availability:", availabilityStatus);









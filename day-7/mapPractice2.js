const movies = [
    { title: "Inception", rating: 8.8, price: 300 },
    { title: "The Dark Knight", rating: 9.0, price: 350 },
    { title: "Interstellar", rating: 6.5, price: 280 },
    { title: "Tenet", rating: 7.5, price: 250 },
    { title: "Oppenheimer", rating: 8.4, price: 320 },
    { title: "titanic", rating: 7.0, price: 300 },

];

const moviesWithPremiumPrice = movies.map(movie => {
    return movie.price + 100
});

console.log("Movies with Premium Prices:" + moviesWithPremiumPrice);

const movieRecommendations = movies.map(movie => {
    return {
        title: movie.title,
        rating: movie.rating,
        recomondation: movie.rating >= 8.5
            ? "Highly Recommended"
            : movie.rating >= 7
                ? "Recommended"
                : "Not Recommended"

    }
})

console.log("Movie Recommendations:", movieRecommendations);



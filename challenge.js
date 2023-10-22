function calculatePoints(winning_points,drawn_games,lost_games){
    points=winning_points+drawn_games+lost_games;
   
    if(points>17){
        return`The team won with ${winning_points} , ${drawn_games} and ${lost_games} with a total points of a ${points}`
    }if (points<17) {
        return`the team lost with  ${winning_points} , ${drawn_games} and ${lost_games} with a total points of a ${points}`
    } else {
        return`There is no game at all !`
        
    }
}

todays_game = calculatePoints(2,4,7);
console.log(todays_game)
Turn score = one that player earns on every roll;
Game score = Total turn score;

Specs:
# Behavior: user press's roll button and gets number that is added to turn score
* Input: roll 3
* output: turn score = 3

# Behavior: if user rolls a 1 it will reset turn score to 0 and become other players turn
* Input: 1
* Output: turn score = 0;

# Behavior: The user continues to roll until they decide to hold.
* Input: keep rolling
* output: Game score  += turn score

# Behavior: if user decides to hold it will add turn score to Game score
* Input: 2-3-5 hold
* output: 10 + game score


# Behavior: If the game score reaches 100, declare the player as a winner.
* Input: game score >= 100
* Output: alert ("Hey, you are a winner!!.You played very well ")
# End the game .

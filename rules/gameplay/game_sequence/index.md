# Game Sequence

A game of Dragon's Money Laundering flows through series of sequences. These sequences are nested in nature, some of them are repeated for each Player, and some might trigger unexpectedly due to dice rolling or drawing a specific card from the Global Event Deck. Every step during these sequences happens in series, so there should be no ambiguity on what resolves and when. Any unexpected sequences will return to their spawn-point and the game will continue from the next step of the spawning sequence.

Dragon's Money Laundering is divided to three main game stages: Setup Phase, Game Phase, End Phase. Each one of these Phases have a base sequence that consists of subsequences that themselves might consist of other subsequences. Each sequence is divided into steps that clearly state what the Player has to perform. When a sequence runs out of steps to perform, it will return to its parent sequence and continue executing that from the step it left off.

Game sequence printout sheet will show exactly the steps to take and the condition checks that alter that flow. By following those steps exactly the game will proceed without offending the rules.

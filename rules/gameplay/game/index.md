# Game

After the Setup, the Game itself is ready to begin. The Game is played until a trigger explicitly transfers the state to End Stage.

The Game consists of an undetermined amount of Rounds that in turn consist of Turns. Each Player is guaranteed an equal amount of Turns assuming the Game doesn't end before the Deck being depleted.

## Round ♽

A Round consists of four different sequential Phases: Event, Turn, Power and Cleanup.

The Dealer is responsible for managing all Round and Turn routines during a Round.

### Sequence

1. Event
2. Turn
3. Power
4. Cleanup

#### Event

At the start of each Round the Dealer reveals a card from the top of the Deck. Each non-Merchant King and non-Dragon Egg card has with it an associated Event type. Events modify temporarily the game mechanics for the current Round.

Player Effects are resolved only during the Event Phase. Conversely, the Market Effect is enabled throughout the Round.

Event Zone can become empty during the Round due to Foreign Merchant special rule and Grand Opening Event type. However, in both cases Carnival of Coin Player Effect has been resolved and stays in effect.

##### Sequence

1. The Dealer puts the last round's Event card – if any – to the Discard Pile
2. The Dealer draws a card from the Deck
	2.a. If the Dealer can't draw a card from the Deck due to it being depleted, trigger End Stage
	2.b. Otherwise, the Dealer places the new Event card into the Event Zone
3. The Dealer identifies the Event card's type and Value attribute, and then resolves its Player Effect
4. If a Foreign Merchant was placed in the Event Zone, trigger Foreign Merchant

#### Turn

Each Player has one Turn during each Round. The Player whose Turn it is is called the Active Player, and conversely the other Players are then called Passive Players. The Passive Players can react to the Active Players Actions even when its not their Turn.

Each Turn is divided into one Supply Step, and two Phases: Market and Restock.

##### Sequence

1. Restock
2. Supply
3. Market

#### Restock

At the start of each Turn the Marketplace must have at least three Commodity cards in it. If there are less than three Commodity cards in the Marketplace, the Dealer draws cards from the Deck until at least three Commodity cards are in the Marketplace. All non-Commodity cards that are drawn this way are put into the Discard pile and the process is repeated.

If the Dealer can't draw cards, because the Deck is depleted, then no more cards are drawn.

Foreign Merchants are resolved immediately after being drawn from the Deck. However, the card drawing continues as usual after the Foreign Merchant is resolved.

###### Sequence

1. The Dealer checks the number of Commodity cards in the Marketplace
	1.a. If the number of cards is more than or equal to 3, Restock ends
	1.b. If the number of cards is less than 3, continue Restock Sequence
2. The Dealer draws a card from the Deck
	2.a. If the Deck is depleted, Restock ends
	2.b. If a Commodity card is drawn this way, the Dealer places it into its suit's corresponding Stock in the Marketplace. Repeat Restock sequence from the Step 1
	2.c. If a non-Commodity card is drawn this way, the Dealer places it into the Discard Pile and resolves a possible Foreign Merchant. Repeat Restock sequence from the Step 1

###### Supply

The Dealer draws a card from the Deck:

* If it's a Commodity, the Dealer places it on the Marketplace into its suit's corresponding Stock
* If it's a Character, the Dealer places it into the Discard Pile
* If it's a Foreign Merchant, trigger Foreign Merchant

Please, note that only one card is drawn from the Deck, even if it doesn't end up in the Marketplace. Characters and Foreign Merchants don't warrant an extra card to be drawn.

###### Market

Each Market Phase the Active Player gets to perform various Actions in the Marketplace: acquire Commodities, visit Black Markets or attack other Player's Emblems.

Each Player has a one Action and a one Minor Action to expend during their Market Phase.

####### Sequence

A Player may expend their Actions and Minor Actions in any order.

######## Action

An Action is the standard method of interaction within the game. There are four possibilities that Players can expend an Action for: Buying, Power, Callback and substitution to a Minor Action.

######## Buying

Buying Commodities is one of the main goals of the game. Buying is discussed more thoroughly in the Buying section.

######## Power

A Player may expend an Action to play a Character Power or to play an Emblem in Front of them during their Turn. However, each Passive Player has a chance to respond to the played Power or Emblem as instructed in the Round's Power Phase section.

######## Callback

A Player may attempt to return an Emblem they control to their Hand. They roll against a Value of 7. On success, they may return the Emblem to their Hand, and on failure nothing happens.

######## Substitution

A Player may expend an Action to substitute it for a Minor Action.

####### Minor Action

A Minor Action allows the Player to either: Visit Black Market or Do Nothing.

######## Visit Black Market

A Player may attempt to acquire a card from a Black Market. They roll against a Value of 7. On success, they receive a randomly picked card from the selected Black Market, and on failure nothing happens.

######## Do Nothing ∅

A Player may choose to expend their Minor Action to do nothing.

### Power ⚡

Players can activate Character Powers and play Emblem cards in Front of themselves by expending an Action during their Turn. However, at the end of each Round starting from the Dealer in counter-clockwise direction Players can activate Character Powers and play Emblems in Front of them without expending an Action.

#### Stack ⛁

Character Powers and Emblems don't resolve immediately after being played. Every time a Player plays a Character Power or an Emblem the other Players have the possibility to react to it. They can literally play their Powers and Emblems on top of the previous Player's card. Every time a card is played on the Stack, the opponents have the opportunity to react. When a card is played and no opponent responds to it by playing a card of their own, the Stack starts resolving.

A Player may play multiple cards on one go.

The Stack resolves from top to bottom, so the last played card actually resolves first and the first played card resolves the last. Playing the cards literally on top of each other saves the Stack state.

Powers are resolved by reading and carrying out the text on the specific cards Power attribute.

Emblems are resolved by placing them visible in Front of the Player.

#### Sequence

1. Starting counter-clockwise from the Dealer, each Player may play any number of Character Powers and/or Emblems on top of the Stack
2. Each Player may play cards on the Stack as long as the last Player to play a card on the Stack was not them. When the opponents of the last played card's owner all pass the opportunity to play a card, the Stack starts resolving and no more cards can be played.
3. Resolve the Stack from top to bottom

### Cleanup

At the end of each Round the Dealer Token is transferred to the next Player. The current Dealer may also consolidate the card piles and generally tidy up the gaming area before relinquishing the Dealer Token.

#### Sequence

1. The Dealer passes the Dealer Token to the next Player in counter-clockwise direction

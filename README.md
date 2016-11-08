# Dragon's Money Laundering

In Dragon's Money Laundering nothing is set in stone. As game developers we strive to make the end product the best it can be, and hence all game related rules and assets are subject to change. Whenever new and improved rules or assets arise, they'll be reviewed and incorporated to the master repository – thus superseding the previous iteration. These changes are then bundled into official and comprehensive major releases for the casual player.

## Introduction

Dragon's Money Laundering – or DML for short – is an open-source card game for a regular deck of playing cards. It is developed and maintained by a team of Core Developers and an international team of volunteer artists. The rules of Dragon's Money Laundering, the game, are currently copyright by Ilkka Hakkarainen under the Finnish copyright law.

For more information about licensing Dragon's Money Laundering and project-related assets for any purpose – commercial or non-commercial alike –, please contact the Core Developer team at <dragonsmoneylaundering@gmail.com>.

## About the project structure

Dragon's Money Laundering is already a multimedia experience with its digital and analog paintings, theme song and rules. All project related assets are stored and version controlled in a single [master repository](https://github.com/Irkka/dml) at GitHub.

The [master repository](https://github.com/Irkka/dml) is the authoritative source of the latest Dragon's Money Laundering rules and assets. All official Dragon's Money Laundering products – be them playing cards, quick reference sheets or the website – will be generated from the contents of the master repository's master branch.

### Domains

Many people work on Dragon's Money Laundering in parallel, and they need to work on a single shared repository of knowledge. However, not all topics are necessary for every type of game developer, and thus the project itself has been divided into logically separate – yet intertwined – domains: Rules, Assets and Meta. This separation of concerns removes any trivial couplings between these domains and it enables the developers to concentrate on the area they're most proficient with and – hopefully – without causing any inter-domain merge conflicts in the upstream.

The domains themselves form a small hierarchical structure, where the Assets and Meta domains are subservient to the Rules domain. The Rules are the canonical version of the game and thus all derivative assets and meta elements have to adhere to this view of the game world. Naturally, the Rules go only so far in depicting the world, so the other domains are given artistic freedom as long as the content is based on the game itself.

#### Rules

The Rules domain is naturally where the game itself resides. The main purpose of the Rules is to enable seasoned board-/cardgamers to have a high quality game engine easily available wherever they are.

There are two major requirements from all the Rules body text: balance and readability. The rules of the game have to be solid and unambiguous. Events, Character Powers and Vantage Bonuses have to be balanced and the game sequence has to be robust enough to handle heavy rules abuse from power gamers and weird deck configurations – whether due to poorly shuffled decks or plain chance. Also, the Rules have to be easily readable. Dragon's Money Laundering is not meant to be a simple game, but anyone should still be able to learn its mechanics and sequences directly from the Rules text.

**Domain administrator:** *[Ilkka Hakkarainen](https://github.com/Irkka)*

#### Assets

The Assets domain contains all the graphic works, music, screenplays – and the like – used throughout the project build processes and marketing. The world of Dragon's Money Laundering can be expanded upon in a multitude of ways. Assets can be basically anything tangible that enhance the game experience outside the boundaries of the actual Rules domain.

The Asset domain's importance is paramount when captivating the interest of new players. It's also the domain the Core Developer team needs the most help with.

**Domain administrator:** *[Teijo Virta](https://github.com/aksiooma)*

#### Meta

Meta is the catch-all domain that encompasses everything from achievements to legal issues. Everything that has something to do with the Dragon's Money Laundering project, but is not inherently a rules modification or an asset to be rendered alongside the rules text, falls into this domain.

**Domain administrator:** *[Arto Klemola](mailto:dragonsmoneylaundering@gmail.com)*

## Contributing

Dragon's Money Laundering accepts artistic and Rules contributions alike. It encourages the community itself to help create the world and develop it further. Whether it is enhanced rules, paintings, songs or videos, let the Core Development team know about them. Dragon's Money Laundering is a living project that continuously incorporates ideas to itself.

### How to contribute?

The project source material can be acquired from its [GitHub repository](https://github.com/Irkka/dml). The community members are encouraged to submit their ideas and questions by using the project [issue tracker](https://github.com/Irkka/dml/issues) at GitHub or submit rules patches by using the Pull Request method.

Other assets can be send by email or other equivalent means; for the tech-savvy, Pull Requests are still just as good, however.

More in-depth information about the code of conduct can be found in the separate [contribution guide](https://github.com/Irkka/dml/blob/development/CONTRIBUTING.md). Please, contact the [Core Developer team](mailto:dragonsmoneylaundering@gmail.com) for further information.

### What's in it for you?

For starters – all contributors are awarded the highly coveted Dragon's Money Laundering contributor status and a visible position on the Contributors page. However, despite the actual game's capitalistic nature, Dragon's Money Laundering hasn't been designed with profit in mind. First and foremost, all work is done for the love of the game and tabletop gaming culture. Dragon's Money Laundering is a shout-out to all the Core Developers' favorite game designers and artists. Hopefully, it offers a similar platform to other creative workers.

#### Professionals

Monetary compensation is reserved only to professional artists and teams, who can create a stylistically cohesive whole of all the necessary game assets – be them tutorial videos, digital paintings, or the official soundtrack. For more information about making the game into a product, contact the Core Developer team at <dragonsmoneylaundering@gmail.com>.

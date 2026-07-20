const RESULTS = {
  "groups": {
    "A": [
      "Mexico",
      "South Africa",
      "South Korea",
      "Czech Republic"
    ],
    "B": [
      "Switzerland",
      "Canada",
      "Bosnia & Herzegovina",
      "Qatar"
    ],
    "C": [
      "Brazil",
      "Morocco",
      "Scotland",
      "Haiti"
    ],
    "D": [
      "USA",
      "Australia",
      "Paraguay",
      "Turkey"
    ],
    "E": [
      "Germany",
      "Ivory Coast",
      "Ecuador",
      "Curaçao"
    ],
    "F": [
      "Netherlands",
      "Japan",
      "Sweden",
      "Tunisia"
    ],
    "G": [
      "Belgium",
      "Egypt",
      "Iran",
      "New Zealand"
    ],
    "H": [
      "Spain",
      "Uruguay",
      "Cape Verde",
      "Saudi Arabia"
    ],
    "I": [
      "France",
      "Norway",
      "Senegal",
      "Iraq"
    ],
    "J": [
      "Argentina",
      "Austria",
      "Algeria",
      "Jordan"
    ],
    "K": [
      "Colombia",
      "Portugal",
      "DR Congo",
      "Uzbekistan"
    ],
    "L": [
      "England",
      "Croatia",
      "Ghana",
      "Panama"
    ]
  },
  "thirdPlace": [
    "DR Congo",
    "Sweden",
    "Ecuador",
    "Ghana",
    "Bosnia & Herzegovina",
    "Algeria",
    "Paraguay",
    "Senegal"
  ],
  "groupMatches": {
    "A": {
      "Mexico__South Africa": { "home": 2, "away": 0 },
      "Mexico__South Korea": { "home": 1, "away": 0 },
      "Mexico__Czech Republic": { "home": 0, "away": 3 },
      "South Africa__South Korea": { "home": 1, "away": 0 },
      "South Africa__Czech Republic": { "home": 1, "away": 1 },
      "South Korea__Czech Republic": { "home": 2, "away": 1 }
    },
    "B": {
      "Canada__Switzerland": { "home": 2, "away": 1 },
      "Canada__Qatar": { "home": 6, "away": 0 },
      "Canada__Bosnia & Herzegovina": { "home": 1, "away": 1 },
      "Switzerland__Qatar": { "home": 1, "away": 1 },
      "Switzerland__Bosnia & Herzegovina": { "home": 4, "away": 1 },
      "Qatar__Bosnia & Herzegovina": { "home": 3, "away": 1 }
    },
    "C": {
      "Brazil__Haiti": { "home": 3, "away": 0 },
      "Brazil__Morocco": { "home": 1, "away": 1 },
      "Brazil__Scotland": { "home": 0, "away": 3 },
      "Haiti__Morocco": { "home": 4, "away": 2 },
      "Haiti__Scotland": { "home": 0, "away": 1 },
      "Morocco__Scotland": { "home": 0, "away": 1 }
    },
    "D": {
      "Turkey__Paraguay": { "home": 0, "away": 1 },
      "Turkey__Australia": { "home": 2, "away": 0 },
      "Turkey__USA": { "home": 3, "away": 2 },
      "Paraguay__Australia": { "home": 0, "away": 0 },
      "Paraguay__USA": { "home": 4, "away": 1 },
      "Australia__USA": { "home": 2, "away": 0 }
    },
    "E": {
      "Curaçao__Ecuador": { "home": 0, "away": 0 },
      "Curaçao__Germany": { "home": 7, "away": 1 },
      "Curaçao__Ivory Coast": { "home": 0, "away": 2 },
      "Ecuador__Germany": { "home": 2, "away": 1 },
      "Ecuador__Ivory Coast": { "home": 1, "away": 0 },
      "Germany__Ivory Coast": { "home": 2, "away": 1 }
    },
    "F": {
      "Japan__Netherlands": { "home": 2, "away": 2 },
      "Japan__Tunisia": { "home": 0, "away": 4 },
      "Japan__Sweden": { "home": 1, "away": 1 },
      "Netherlands__Tunisia": { "home": 1, "away": 3 },
      "Netherlands__Sweden": { "home": 5, "away": 1 },
      "Tunisia__Sweden": { "home": 5, "away": 1 }
    },
    "G": {
      "Egypt__Belgium": { "home": 1, "away": 1 },
      "Egypt__Iran": { "home": 1, "away": 1 },
      "Egypt__New Zealand": { "home": 1, "away": 3 },
      "Belgium__Iran": { "home": 0, "away": 0 },
      "Belgium__New Zealand": { "home": 1, "away": 5 },
      "Iran__New Zealand": { "home": 2, "away": 2 }
    },
    "H": {
      "Uruguay__Spain": { "home": 0, "away": 1 },
      "Uruguay__Saudi Arabia": { "home": 1, "away": 1 },
      "Uruguay__Cape Verde": { "home": 2, "away": 2 },
      "Spain__Saudi Arabia": { "home": 4, "away": 0 },
      "Spain__Cape Verde": { "home": 0, "away": 0 },
      "Saudi Arabia__Cape Verde": { "home": 0, "away": 0 }
    },
    "I": {
      "France__Iraq": { "home": 3, "away": 0 },
      "France__Senegal": { "home": 3, "away": 1 },
      "France__Norway": { "home": 1, "away": 4 },
      "Iraq__Senegal": { "home": 5, "away": 0 },
      "Iraq__Norway": { "home": 1, "away": 4 },
      "Senegal__Norway": { "home": 3, "away": 2 }
    },
    "J": {
      "Argentina__Jordan": { "home": 1, "away": 3 },
      "Argentina__Algeria": { "home": 3, "away": 0 },
      "Argentina__Austria": { "home": 2, "away": 0 },
      "Jordan__Algeria": { "home": 1, "away": 2 },
      "Jordan__Austria": { "home": 3, "away": 1 },
      "Algeria__Austria": { "home": 3, "away": 3 }
    },
    "K": {
      "Portugal__Uzbekistan": { "home": 5, "away": 0 },
      "Portugal__DR Congo": { "home": 1, "away": 1 },
      "Portugal__Colombia": { "home": 0, "away": 0 },
      "Uzbekistan__DR Congo": { "home": 3, "away": 1 },
      "Uzbekistan__Colombia": { "home": 1, "away": 3 },
      "DR Congo__Colombia": { "home": 1, "away": 0 }
    },
    "L": {
      "England__Ghana": { "home": 0, "away": 0 },
      "England__Croatia": { "home": 4, "away": 2 },
      "England__Panama": { "home": 0, "away": 2 },
      "Ghana__Croatia": { "home": 2, "away": 1 },
      "Ghana__Panama": { "home": 1, "away": 0 },
      "Croatia__Panama": { "home": 0, "away": 1 }
    }
  },
  "knockout": {
    "round32": [
      "Canada",
      "Paraguay",
      "Morocco",
      "Brazil",
      "France",
      "Norway",
      "Mexico",
      "England",
      "USA",
      "Belgium",
      "Portugal",
      "Spain",
      "Switzerland",
      "Argentina",
      "Colombia",
      "Egypt"
    ],
    "round16": [
      "Morocco",
      "France",
      "Norway",
      "England",
      "Spain",
      "Belgium",
      "Argentina",
      "Switzerland"
    ],
    "quarterfinals": [
      "France",
      "Spain",
      "England",
      "Argentina"
    ],
    "semifinals": [
      "Spain",
      "Argentina"
    ],
    "champion": "Spain",
    "runnerUp": "Argentina",
    "finalists": [
      "Spain",
      "Argentina"
    ],
    "thirdPlaceWinner": "England",
    "final": "Spain",
    "thirdPlace": "England",
    "matches": {
      "round32": [
        { "match": 73, "team1": "South Africa", "team2": "Canada", "winner": "Canada" },
        { "match": 74, "team1": "Germany", "team2": "Paraguay", "winner": "Paraguay" },
        { "match": 75, "team1": "Netherlands", "team2": "Morocco", "winner": "Morocco" },
        { "match": 76, "team1": "Brazil", "team2": "Japan", "winner": "Brazil" },
        { "match": 77, "team1": "France", "team2": "Sweden", "winner": "France" },
        { "match": 78, "team1": "Ivory Coast", "team2": "Norway", "winner": "Norway" },
        { "match": 79, "team1": "Mexico", "team2": "Ecuador", "winner": "Mexico" },
        { "match": 80, "team1": "England", "team2": "Dr Congo", "winner": "England" },
        { "match": 81, "team1": "USA", "team2": "Bosnia & Herzegovina", "winner": "USA" },
        { "match": 82, "team1": "Belgium", "team2": "Senegal", "winner": "Belgium" },
        { "match": 83, "team1": "Portugal", "team2": "Croatia", "winner": "Portugal" },
        { "match": 84, "team1": "Spain", "team2": "Austria", "winner": "Spain" },
        { "match": 85, "team1": "Switzerland", "team2": "Algeria", "winner": "Switzerland" },
        { "match": 86, "team1": "Argentina", "team2": "Cape Verde", "winner": "Argentina" },
        { "match": 87, "team1": "Colombia", "team2": "Ghana", "winner": "Colombia" },
        { "match": 88, "team1": "Australia", "team2": "Egypt", "winner": "Egypt" }
      ],
      "round16": [
        { "match": 89, "team1": "Canada", "team2": "Morocco", "winner": "Morocco" },
        { "match": 90, "team1": "Paraguay", "team2": "France", "winner": "France" },
        { "match": 91, "team1": "Brazil", "team2": "Norway", "winner": "Norway" },
        { "match": 92, "team1": "Mexico", "team2": "England", "winner": "England" },
        { "match": 93, "team1": "Portugal", "team2": "Spain", "winner": "Spain" },
        { "match": 94, "team1": "USA", "team2": "Belgium", "winner": "Belgium" },
        { "match": 95, "team1": "Argentina", "team2": "Egypt", "winner": "Argentina" },
        { "match": 96, "team1": "Switzerland", "team2": "Colombia", "winner": "Switzerland" }
      ],
      "quarterfinals": [
        { "match": 97, "team1": "Morocco", "team2": "France", "winner": "France" },
        { "match": 98, "team1": "Spain", "team2": "Belgium", "winner": "Spain" },
        { "match": 99, "team1": "Norway", "team2": "England", "winner": "England" },
        { "match": 100, "team1": "Argentina", "team2": "Switzerland", "winner": "Argentina" }
      ],
      "semifinals": [
        { "match": 101, "team1": "France", "team2": "Spain", "winner": "Spain" },
        { "match": 102, "team1": "England", "team2": "Argentina", "winner": "Argentina" }
      ],
      "thirdPlace": [
        { "match": 103, "team1": "France", "team2": "null", "winner": "null" }
      ],
      "final": [
        { "match": 104, "team1": "Spain", "team2": "Argentina", "winner": "null" }
      ]
    }
  },
  "semifinalists": [
    "France",
    "Spain",
    "England",
    "Argentina"
  ],
  "finalists": [
    "Spain",
    "Argentina"
  ],
  "champion": "Spain",
  "runnerUp": "Argentina",
  "thirdPlaceWinner": "England",
  "awards": {
    "goldenBoot": [
      "MBAPPE",
      "MESSI",
      "BELLINGHAM"
    ],
    "goldenBall": [
      "RODRIGO",
      "MESSI",
      "MBAPPE"
    ],
    "goldenGlove": [
      "PO SIMÓN",
      "PO MAIGNAN",
      "PO MARTINEZ"
    ]
  }
};

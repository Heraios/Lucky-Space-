/* Story bible data. Links inside text: [[id]] or [[id|shown text]].
   "src" lists the chapters an entry draws on. Keep facts to what the manuscript states;
   put guesses in QUESTIONS instead. */
window.BIBLE = {
  updated: "Grafin I",
  chapters: [
    { id: "grafin-1", title: "Grafin I", pov: "grafin", summary: "One school day in [[the-tube|The Tube]]: breakfast with his dads, a run-in with [[dekker]], a session with [[miran|Counselor Miran]], and a breakthrough on his [[wish-sculpture]] in [[kath|Teacher Kath]]'s art class." }
  ],

  categories: [
    { id: "people", label: "People" },
    { id: "places", label: "Places" },
    { id: "faiths", label: "Gods, faiths & orders" },
    { id: "culture", label: "Culture & media" },
    { id: "tech", label: "Life & technology" }
  ],

  entries: [
    // ---------------- PEOPLE ----------------
    { id: "grafin", cat: "people", name: "Grafin Lasdannen", tag: "11 · The Tube · narrator of the Grafin chapters", src: ["grafin-1"],
      sections: [
        ["Looks", [
          "Olive skin. White hair, short in front and long in back, fluffy; one side sticks up and won't stay down.",
          "Grey-blue eyes. [[dekker]] calls them \"like dirty water.\"",
          "Has the [[jovian-look]]: button nose, slightly jutting lower lip, diamond-shaped jaw. Has never been called a cute kid.",
          "Bites his lip when he's thinking. Wears one dog-head stud in his left ear."
        ]],
        ["Personality", [
          "Hates mornings. Withdrawn; sits in the corner seat on the train, \"a defensible position with good sight lines.\"",
          "Good at math without effort; finishes class problems in twelve minutes and sketches for the rest.",
          "Zones out completely while making art. Sketches on paper with graphite, \"the ancient way.\"",
          "Doesn't like to repeat cruel things said to him; prefers to ignore them. Feels he's carrying too much and is tired all the time."
        ]],
        ["Things he loves", [
          "[[grelem-preftom]], especially [[wool-and-teeth|Wool and Teeth]]. Its opening is his alarm. Sews the band's patches inside his school jacket.",
          "His [[wish-sculpture]] project: a spiral with a face emerging from it.",
          "Watching [[comet-force]] with [[kahlun]]."
        ]],
        ["Clothes", [
          "Chooses between a \"Grelem & Preftom shirt day\" and a \"blend-in day.\"",
          "Sleeps in a hair undershirt that itches enough to keep [[the-dreamer|The Dreamer]] away.",
          "School outfit: untucked [[rejuvenants|Rejuvenant]]-cut undershirt (borrowed from [[graugrey]]), pants with a subtle vine pattern, scuffed combat boots, [[hounds|Hound]] uniform jacket with dog fur on the collar."
        ]],
        ["Relationships", [
          "Dads: [[tramso|Papa Tramso]] and [[graugrey|Papa Graugrey]]. Both call him \"bug.\"",
          "Best friend at school: [[herelty]]. Penpal: [[kahlun]], met through the [[il-exchange|IL Exchange]].",
          "Is considering joining the [[hounds]]."
        ]],
        ["Messages", ["Signs as \"GL\". Has never worked out the [[light-lag]] math."]]
      ] },

    { id: "kahlun", cat: "people", name: "Kahlun", tag: "11 · Mars · Grafin's penpal", src: ["grafin-1"],
      sections: [
        ["In Grafin I", [
          "Appears only through his messages, signed \"KLB\".",
          "Writes very long messages: a twelve-page (or longer) analysis of [[comet-force]] episode 47.",
          "Frames things through [[mortuary-cult|Mortuary Cult]] theology: \"Matter has memory. It carries the intentions of everyone who's touched it.\"",
          "Sends late-evening [[light-lag|laser-burst]] messages that reach Grafin the next morning.",
          "Grafin: Kahlun doesn't make visual art; he writes theological critiques of cartoons and Martian pop bands."
        ]],
        ["From the author's notes (not yet on the page)", [
          "Sincere, sunny \"Sunday School kid\"; autistic; special interests in theology, birds and a Martian religious boy band.",
          "Lives on terraformed [[mars]]. Diet includes bones and human-meat dumplings."
        ]]
      ] },

    { id: "tramso", cat: "people", name: "Papa Tramso", tag: "Grafin's father · Hound", src: ["grafin-1"],
      sections: [
        ["Looks", [
          "Tall and broad. Braids in his salt-and-pepper hair and beard; grey at the temples, lines around his eyes.",
          "Three earrings in each ear: little dog-head studs.",
          "A thin tattooed line on the left side of his face, barely visible under the hairline: a replica of the wound that killed his fourth body (see [[re-embodiment]])."
        ]],
        ["Life", [
          "A [[hounds|Hound]], currently on home duty doing day-shift paperwork. Uniform of crisp wool, real dog fur on the collar. Takes the train to the Hound station.",
          "Served in the Defense Force; cracks eggs one-handed, a trick he learned there.",
          "Has degrees and trained at [[eris-academy]], in logistics. [[graugrey]] says he's bad at math.",
          "Has fought, and told Grafin about it, including what he learned about the [[new-fire|New Fire]].",
          "Leaves home at 07:00; gets home about an hour after Graugrey."
        ]],
        ["Personality", [
          "A soft touch; would let Grafin leave with his shoes on the wrong feet. Low, rumbly voice. Shows off. Grinning, warm, solid.",
          "Lines: \"Up means vertical.\" \"I have to say a lot of things. Doesn't mean they're not true.\""
        ]]
      ] },

    { id: "graugrey", cat: "people", name: "Papa Graugrey", tag: "Grafin's father · Rejuvenant · hydroponics", src: ["grafin-1"],
      sections: [
        ["Looks", [
          "Small: the same height as Grafin (by evening Grafin notices Graugrey has to stretch a little to reach his shoulder). Cherubic.",
          "Blond at breakfast; \"white hair\" at 17:30 (see continuity notes).",
          "Pale red eyes, a mix of biotech and cybernetics, as is his whole body. Could take a coilgun round on low power.",
          "Smells of coffee and the orange-scented soap he uses to hide the smoke."
        ]],
        ["Life", [
          "A [[rejuvenants|Rejuvenant]]. Has managed a hydroponics bay for 85 years. Brings home vegetables from work. Bad day: aphids in the tomatoes.",
          "Smokes too much; isn't human before half a litre of coffee and a cigarette.",
          "Has watched [[comet-force]] since he was Grafin's age; knows episodes by number.",
          "Stands on a stool to chop vegetables. Home around 17:30."
        ]],
        ["Personality", [
          "Does the daily inspection, because Tramso is too easy. Packs Grafin's lunch, knowing what Grafin trades to Herelty.",
          "High laugh. Dry. Finds philosophy in everything (peppers and personal growth).",
          "Says he deals with stress \"badly, mostly\": smokes, snaps at Tramso, forgets to look after himself, but talks about it eventually.",
          "Lines: \"Learn something.\" \"You don't have to carry it alone, bug.\""
        ]]
      ] },

    { id: "herelty", cat: "people", name: "Herelty of Quiet-Temple", tag: "Grafin's best friend at school", src: ["grafin-1"],
      sections: [
        ["Looks", [
          "Taller than Grafin. Dark hair in a tight bun; distant eyes.",
          "Wears an [[oathbound|Oathbound]]-cut uniform jacket with a hood that lets her face disappear, sleeves pushed up.",
          "Eight small blue tattooed dots on her left arm, like injection sites."
        ]],
        ["Life", [
          "From [[quiet-temple|Quiet-Temple]]. Nobody packs her lunch; she eats cafeteria food and accepts Grafin's extras \"like she doesn't need it.\"",
          "Normally early and predictable. On this day she couldn't sleep and walked to school: three hours.",
          "Plays the [[simulations]] and hates the counselor debriefs afterward, but thinks they help.",
          "Death \"lands differently\" with her."
        ]],
        ["Personality", [
          "Says little. \"Information offered freely or not at all.\" Gives full attention to things that matter.",
          "Offered to hit [[dekker]] for Grafin. Told him: \"The spiral is good. The face is trying too hard.\"",
          "Signs messages \"H of QT\"."
        ]]
      ] },

    { id: "pella", cat: "people", name: "Pella", tag: "Classmate · Fury · natborn", src: ["grafin-1"],
      sections: [["In Grafin I", [
        "\"Magnetic\" rather than popular; other kids arrange themselves around him.",
        "A [[furies|Fury]], [[birth-lottery|natborn]] from an old family.",
        "Usually looks through Grafin as if he isn't there. Smirks when Grafin is called to the board.",
        "Gives Grafin a \"measuring look\" more than once. Tells [[dekker]] to \"Leave it,\" then tells Grafin: \"Don't let him get to you. He's an idiot.\" His motive is unexplained."
      ]]] },

    { id: "dekker", cat: "people", name: "Dekker Vaneso", tag: "Classmate · Shade · Pella's satellite", src: ["grafin-1"],
      sections: [["In Grafin I", [
        "Tall and thin with cords of muscle. Wears a [[shades|Shade]]-cut uniform jacket.",
        "\"Not important enough to be cruel on his own, just important enough to be cruel on behalf of others.\"",
        "Called Grafin's eyes \"like dirty water.\" Saw the band patches inside Grafin's jacket in Physical Training.",
        "Shoulders Grafin in the hallway and repeats his mother's line: \"Rejuvenant Graugrey is Hound Tramso's toy.\"",
        "Backs off when [[pella]] tells him to."
      ]]] },

    { id: "miran", cat: "people", name: "Counselor Oathbound Miran", tag: "School counselor", src: ["grafin-1"],
      sections: [["In Grafin I", [
        "An [[oathbound|Oathbound]]. Not mean; watches, takes notes on her tablet, asks questions that feel like traps.",
        "Once asked about Grafin's [[grelem-preftom]] shirt and whether his parents knew he listened to the band.",
        "Summons Grafin through [[entity-judgment|ENTITY-Judgment]] after the hallway incident. Circles toward whether something is wrong at home.",
        "Knows Grafin writes long messages to [[kahlun]]. Says [[herelty]] and Grafin are both isolated and may \"reinforce patterns.\"",
        "\"My door is always open.\""
      ]]] },

    { id: "kath", cat: "people", name: "Teacher Oathbound Kath", tag: "Art teacher", src: ["grafin-1"],
      sections: [["In Grafin I", [
        "Visibly old: one of the rare Plutonians who lets her current body age almost naturally, which she says gives her \"perspective\" (see [[re-embodiment]]).",
        "Treats Grafin's work as real. Calls his insight about the ice a breakthrough: \"That's not technique. That's philosophy.\"",
        "Advice: \"Let the ice teach you what it needs.\" \"Don't rush it.\""
      ]]] },

    { id: "vorst", cat: "people", name: "Teacher Provisioner Vorst", tag: "Mathematics teacher · 1,217 Standard years old", src: ["grafin-1"],
      sections: [["In Grafin I", [
        "A [[provisioners|Provisioner]]. 1,217 Standard years old; has taught mathematics for about all of that time.",
        "Teaches facing the board, \"lost in the purity of numbers\"; doesn't care as long as students aren't obviously not paying attention.",
        "Calls students by surname: \"Student Lasdannen.\""
      ]]] },

    { id: "tellani", cat: "people", name: "Teacher Fury Tellani", tag: "History teacher", src: ["grafin-1"],
      sections: [["In Grafin I", [
        "A [[furies|Fury]], but not one of the stuck-up ones who brag about descent from the Founders.",
        "Engaged; looks at the class and asks questions. Teaches the [[jovian-reformation|Attempted Jovian Reformation]]."
      ]]] },

    // ---------------- PLACES ----------------
    { id: "the-tube", cat: "places", name: "The Tube", tag: "Habitat cylinder joining Pluto and Charon", src: ["grafin-1"],
      sections: [
        ["What it is", [
          "A vast habitat cylinder connecting Pluto and its moon Charon. Few windows.",
          "Axial lights serve as the \"sun\" and brighten and dim on a daily schedule.",
          "The inner surface curves up: through train windows you can see homes and businesses on the far side.",
          "The real Sun is about 40 AU away in the text: \"just a slightly larger star than the others.\" (The [[penpal-clock|Penpal Clock]] gives 44.9 AU on 29 April 16008.)"
        ]],
        ["Daily life", [
          "Maglev trains: a school train and a separate line toward the Hound station.",
          "Agricultural sections supply small luxuries such as real eggs from live chickens.",
          "Climate is run in turn by the [[six-gods|Six Gods]]; currently the [[father-of-riches]], so it's \"winter-themed\".",
          "Most children arrive through the [[birth-lottery]]; between lotteries there are no kids in The Tube.",
          "Clocks run on a 24-hour day (Grafin's alarm is 05:45)."
        ]],
        ["Places in it", ["[[katabasii-complex]], [[lasdannen-home|the Lasdannen apartment]], a Hound station, hydroponics bays, agricultural sections."]]
      ] },

    { id: "katabasii-complex", cat: "places", name: "Katabasii Fernan Memorial Community Complex", tag: "Grafin's school", src: ["grafin-1"],
      sections: [
        ["What it is", [
          "Grafin's school. Between [[birth-lottery|birth lotteries]], when there are no children, it hosts hobby clubs, faith meetings and elections.",
          "A courtyard where kids gather before the first chime; Grafin and [[herelty]] share a bench by the wall with a view of the exits.",
          "The art room smells of solvents, clay and the ozone tang of [[wish-sculpture|wish-sculpting]] equipment."
        ]],
        ["Cafeteria", [
          "\"A social hierarchy made physical\": popular tables, academic achievers, kids good at murder-sims ([[simulations]]), and a high table for those already initiated into their god's Mysteries.",
          "Grafin and Herelty sit at the edge: \"not quite exile, just periphery.\""
        ]],
        ["School day (Grafin I)", [
          "07:45 courtyard · 08:00 Mathematics · 09:30 break · 10:00 History · 11:00 hallway, walking to lunch · 12:00 Lunch · 13:00 Literature (summoned to the Counselor) · 15:00 Art · 16:30 train home.",
          "Periods start and end with a chime. Other subjects mentioned: Literature, Physical Training."
        ]]
      ] },

    { id: "lasdannen-home", cat: "places", name: "The Lasdannen apartment", tag: "Grafin's home", src: ["grafin-1"],
      sections: [["In Grafin I", [
        "A small, warm, crowded kitchen; a living room with a couch; Grafin's room with his desk.",
        "Biometric chimes on the door rattle when someone comes in.",
        "Grafin's school is closer than his dads' workplaces, so he's home first (17:00)."
      ]]] },

    { id: "mars", cat: "places", name: "Mars", tag: "Kahlun's world", src: [],
      sections: [["So far", [
        "Terraformed. Home of [[kahlun]] and [[mortuary-cult|Mortuary Cult]] theology.",
        "Season and time details: see the [[penpal-clock|Penpal Clock]]."
      ]]] },

    { id: "quiet-temple", cat: "places", name: "Quiet-Temple", tag: "Where Herelty comes from", src: ["grafin-1"],
      sections: [["So far", [
        "[[herelty]] is \"Herelty from Quiet-Temple\" and signs \"H of QT\". Its trains are separate from Grafin's.",
        "Not yet described: a district, an institution, or something else."
      ]]] },

    { id: "eris-academy", cat: "places", name: "Eris Academy", tag: "Where Tramso trained", src: ["grafin-1"],
      sections: [["So far", ["[[tramso]] trained there, in logistics."]]] },

    // ---------------- FAITHS ----------------
    { id: "six-gods", cat: "faiths", name: "The Six Gods", tag: "The Tube's gods", src: ["grafin-1"],
      sections: [
        ["What the text shows", [
          "Used in oaths of a sort: \"The Six Gods themselves could not compel enthusiasm for this hour.\"",
          "Run the genetic lottery (\"The Six Gods' genetic lottery doesn't engineer for beauty\"); see [[birth-lottery]].",
          "Take turns running Climate Control \"when they get bored.\" Named so far: the [[father-of-riches]].",
          "People can be initiated into their god's Mysteries; initiates get the high table in the cafeteria."
        ]],
        ["Orders and affiliations seen", [
          "People carry an affiliation as a title (\"Teacher Fury Tellani\", \"Counselor Oathbound Miran\") and clothes come in matching \"cuts\".",
          "[[furies]] · [[shades]] · [[oathbound]] · [[provisioners]] · [[rejuvenants]] · [[hounds]]. Which god each belongs to isn't stated yet."
        ]]
      ] },

    { id: "father-of-riches", cat: "faiths", name: "The Father of Riches", tag: "One of the Six Gods", src: ["grafin-1"],
      sections: [["So far", ["Currently running The Tube's Climate Control, which means \"winter-themed\": not cold, not warm, dim light, sometimes a dusting of snow."]]] },

    { id: "furies", cat: "faiths", name: "Furies", tag: "Order / affiliation", src: ["grafin-1"],
      sections: [["So far", [
        "Members: [[pella]] (natborn, old family) and [[tellani|Teacher Tellani]].",
        "Some brag about lineage from the Founders. \"Furies and Shades always stick together.\""
      ]]] },
    { id: "shades", cat: "faiths", name: "Shades", tag: "Order / affiliation", src: ["grafin-1"],
      sections: [["So far", ["Member: [[dekker]]. Shade-cut uniform jacket. Allied with the [[furies]]."]]] },
    { id: "oathbound", cat: "faiths", name: "Oathbound", tag: "Order / affiliation", src: ["grafin-1"],
      sections: [["So far", ["Members: [[miran|Counselor Miran]], [[kath|Teacher Kath]]. [[herelty]] wears an Oathbound-cut jacket with a face-hiding hood."]]] },
    { id: "provisioners", cat: "faiths", name: "Provisioners", tag: "Order / affiliation", src: ["grafin-1"],
      sections: [["So far", ["Member: [[vorst|Teacher Vorst]]."]]] },
    { id: "rejuvenants", cat: "faiths", name: "Rejuvenants", tag: "Order / affiliation", src: ["grafin-1"],
      sections: [["So far", [
        "Member: [[graugrey]], who is small and childlike in appearance (Dekker: \"someone who looks like a kid for a dad\").",
        "Rejuvenant-cut shirts: Graugrey's spares are pale blue flowers on grey.",
        "Rejuvenant–Hound pairings draw gossip: \"Rejuvenant Graugrey is Hound Tramso's toy,\" which Grafin knows is a bad word."
      ]]] },
    { id: "hounds", cat: "faiths", name: "Hounds", tag: "Order / affiliation · soldiers", src: ["grafin-1"],
      sections: [["So far", [
        "Member: [[tramso]]. Soldiers who keep people safe, and also do paperwork. They have a station reached by its own train line.",
        "Wool uniforms with real dog fur on the collar; dog-head earring studs.",
        "[[grafin]] wears a Hound uniform jacket and a dog-head stud, and is considering joining. \"He hasn't picked yet\" suggests children choose an order."
      ]]] },

    { id: "new-fire", cat: "faiths", name: "The New Fire", tag: "Marcus Jove, now a process", src: ["grafin-1"],
      sections: [["So far", [
        "Once a person, Marcus Jove. By the time of the [[jovian-reformation|Reformation]] there was \"nothing left to hear. Just the pattern, replicating endlessly.\"",
        "Absorbs and converts people, making them into \"more of Himself.\" Referred to with a capital H.",
        "Grafin: \"He's a process. You can't convince a process to be something else.\" He learned this from [[tramso]]'s stories of fighting."
      ]]] },
    { id: "jovian-reformation", cat: "faiths", name: "Attempted Jovian Reformation", tag: "History · about 3,000 years ago", src: ["grafin-1"],
      sections: [["So far", [
        "A failed coup, about three thousand years ago, to reform the [[new-fire|New Fire]] from within.",
        "Its martyrs died hoping their sacrifice would matter. The New Fire absorbed and converted them.",
        "They failed because they believed some fragment of the original Marcus Jove could still hear them."
      ]]] },
    { id: "mortuary-cult", cat: "faiths", name: "Mortuary Cult", tag: "Kahlun's theology (Mars)", src: ["grafin-1"],
      sections: [["So far", [
        "\"Matter has memory. It carries the intentions of everyone who's touched it.\" (quoted by [[kahlun]])",
        "Kahlun reads [[comet-force]]'s Captain Vex sacrifice through its ideas about death and meaning."
      ]]] },

    // ---------------- CULTURE ----------------
    { id: "grelem-preftom", cat: "culture", name: "Grelem & Preftom", tag: "Band · Grafin's favourite", src: ["grafin-1"],
      sections: [["So far", [
        "Edgy enough that [[miran|Counselor Miran]] asks whether Grafin's parents know he listens. They do.",
        "Album: [[wool-and-teeth|Wool and Teeth]]. Grafin has the album-art shirt and hidden band patches."
      ]]] },
    { id: "wool-and-teeth", cat: "culture", name: "Wool and Teeth", tag: "Album by Grelem & Preftom", src: ["grafin-1"],
      sections: [["So far", ["Its opening is Grafin's alarm (three seconds of it). Album art is on his favourite shirt."]]] },
    { id: "comet-force", cat: "culture", name: "Comet Force", tag: "Ancient cartoon", src: ["grafin-1"],
      sections: [["So far", [
        "An ancient cartoon [[grafin]] and [[kahlun]] are watching together. [[graugrey]] has watched it since he was eleven.",
        "Episode 47: the bridge scene in which Captain Vex sacrifices herself. Kahlun thinks the writers didn't understand what they implied about death and meaning."
      ]]] },
    { id: "wish-sculpture", cat: "culture", name: "Wish-sculpture", tag: "Ice art form", src: ["grafin-1"],
      sections: [["So far", [
        "Sculpture in ice, using wish-sculpting equipment (smells of ozone). Files are carried on a data chip.",
        "Grafin's project: a spiral with a face. His breakthrough is that the face should emerge from the spiral, the ice \"learning\" a face rather than having one imposed.",
        "Kahlun: the ice remembers being water and snow. Teacher Kath: \"Let the ice teach you what it needs.\""
      ]]] },
    { id: "simulations", cat: "culture", name: "The Simulations", tag: "Murder-sims", src: ["grafin-1"],
      sections: [["So far", [
        "Children can kill people who were cruel to them, in simulation. Afterwards they must sit with a Counselor and talk through why, and whether they liked it.",
        "Being \"good at murder-sims\" defines a cafeteria table."
      ]]] },
    { id: "jovian-look", cat: "culture", name: "The Jovian Look", tag: "A recognisable face type", src: ["grafin-1"],
      sections: [["So far", ["Button nose, slightly jutting lower lip, diamond-shaped jaw. [[grafin]] has it."]]] },
    { id: "the-dreamer", cat: "culture", name: "The Dreamer", tag: "Something kept away at night", src: ["grafin-1"],
      sections: [["So far", ["Grafin sleeps in a hair undershirt that \"itches enough to keep The Dreamer away.\" Not yet explained."]]] },

    // ---------------- LIFE & TECH ----------------
    { id: "birth-lottery", cat: "tech", name: "Birth lottery", tag: "How children arrive", src: ["grafin-1"],
      sections: [["So far", [
        "Held every 31 Standard years. Between lotteries there are no children in The Tube.",
        "Most children are \"assembled from random combinations of genetics and given to a family that wants one.\"",
        "Natborn children from old families, like [[pella]], carry status."
      ]]] },
    { id: "re-embodiment", cat: "tech", name: "Bodies and long lives", tag: "Re-embodiment", src: ["grafin-1"],
      sections: [["So far", [
        "People live through several bodies: [[tramso]]'s fourth body was killed, and he keeps the wound as a tattoo.",
        "[[kath|Teacher Kath]] lets her current body age almost naturally, which is rare. [[vorst|Teacher Vorst]] is 1,217 Standard years old.",
        "[[graugrey]]'s body is a biotech and cybernetic mix."
      ]]] },
    { id: "light-lag", cat: "tech", name: "Messages and light lag", tag: "Mars ↔ The Tube", src: ["grafin-1"],
      sections: [["So far", [
        "Messages travel as laser bursts; Kahlun's late-evening messages reach Grafin the next morning.",
        "Tags: KLB (Kahlun), GL (Grafin), H of QT (Herelty).",
        "The text says Kahlun is \"an average of ten light-hours away.\" The [[penpal-clock|Penpal Clock]] gives about 6½ light-hours in 16008 (see continuity notes)."
      ]]] },
    { id: "il-exchange", cat: "tech", name: "IL Exchange", tag: "How Grafin met Kahlun", src: ["grafin-1"],
      sections: [["So far", ["An exchange \"fostering interplanetary relationships.\" It's an assignment; most youths stop writing when it ends."]]] },
    { id: "entity-judgment", cat: "tech", name: "ENTITY-Judgment", tag: "Sends official notices", src: ["grafin-1"],
      sections: [["So far", ["Sends the summons to Counselor Miran's office to Grafin's tablet. Not yet explained."]]] },
    { id: "standard-year", cat: "tech", name: "Standard year", tag: "Unit of time", src: ["grafin-1"],
      sections: [["So far", ["Ages and intervals are counted in Standard years (\"Standards\")."]]] },
    { id: "penpal-clock", cat: "tech", name: "Penpal Clock", tag: "Tool: light lag and Mars seasons", src: [],
      sections: [["Link", ["Calculates light lag, local times and Mars seasons for any date in AD 16000–16100: <a href=\"https://claude.ai/artifact/ThUKFcEBJQsFtVyVt1bugh\" target=\"_blank\" rel=\"noopener\">open the Penpal Clock</a>."]]] }
  ],

  continuity: [
    { sev: "check", title: "Light-lag distance", where: "Grafin I · 13:00, The Counselor",
      text: "\"Kahlun is an average of ten light-hours away.\" In 16008 the real figure is about 6 h 26 m one way, and across the whole 161st century it never goes above about 6 h 42 m. Suggest \"about six light-hours\", or \"half a day there and back\" (round trip about 13 hours)." },
    { sev: "check", title: "Graugrey's hair colour", where: "Grafin I · 06:05 vs 17:30",
      text: "Breakfast says he's blond. At 17:30 he has \"a streak of dirt in his white hair.\"" },
    { sev: "minor", title: "Length of maths class", where: "Grafin I · 08:00",
      text: "He finishes in twelve minutes and has \"forty-eight minutes\" left, which implies a 60-minute class, but the break isn't until 09:30." },
    { sev: "minor", title: "Distance to the Sun", where: "Grafin I · 07:00",
      text: "\"The real sun is 40 AU away.\" On 29 April 16008 Pluto is 44.9 AU from the Sun. \"Forty-odd\" or \"45\" would match, if the book is set then." },
    { sev: "question", title: "Hound jacket before joining", where: "Grafin I · 06:45",
      text: "Grafin wears \"his Hound uniform jacket\" while only \"considering joining the Hounds.\" Fine if school uniforms come in order cuts anyone can wear; worth a line making that clear." },
    { sev: "question", title: "Heights", where: "Grafin I · 06:05 vs 17:30",
      text: "Graugrey is \"the same height as Grafin\" at breakfast, but has to stretch to reach his shoulder in the evening. Reads well if Grafin has just started outgrowing him; otherwise pick one." },
    { sev: "typo", title: "Typos spotted", where: "Grafin I",
      text: "\"fourty-eight\" → forty-eight · \"seperate\" → separate · \"Memorial Community Complex.’.\" has a stray full stop · \"staring out the window at curved world\" → at the curved world · \"_’Why the fuck is she calling on me?_’\" has the opening quote mark inside the italics." }
  ],

  questions: [
    "What is Quiet-Temple: a district, a temple, a care institution? Is Herelty in care?",
    "What is The Dreamer, and why does an itchy shirt keep it away?",
    "Which of the Six Gods does each order (Fury, Shade, Oathbound, Provisioner, Rejuvenant, Hound) belong to? Is \"Katabasii\" also an order?",
    "Do children choose an order at a set age? Grafin \"hasn't picked yet.\"",
    "What does Kahlun's \"KLB\" stand for? Does he have a family name?",
    "How does the Tube's 24-hour clock relate to Pluto's 6.4-day real day? If you tell me, the Penpal Clock can show Grafin's clock time directly.",
    "What is ENTITY-Judgment: an AI, an office, a god's system?",
    "How old are Tramso and Graugrey? (Graugrey has run the hydroponics bay for 85 years.)",
    "What is the in-world date of Grafin I?"
  ]
};

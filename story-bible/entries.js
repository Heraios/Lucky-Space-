/* Story bible data. Links inside text: [[id]] or [[id|shown text]].
   "src" lists the chapters an entry draws on. Keep facts to what the manuscript states;
   put guesses in QUESTIONS instead. */
window.BIBLE = {
  updated: "Kahlun I",
  chapters: [
    { id: "grafin-1", title: "Grafin I", pov: "grafin", when: "29 April 16008 (Earth date)",
      summary: "One school day in [[the-tube|The Tube]]: breakfast with his dads, a run-in with [[dekker]], a session with [[miran|Counselor Miran]], and a breakthrough on his [[wish-sculpture]] in [[kath|Teacher Kath]]'s art class." },
    { id: "kahlun-1", title: "Kahlun I", pov: "kahlun", when: "30 April 16008 (Earth date) · Mars Year 7,472, sol 381",
      summary: "After four days of rain on the [[hellas-coast|Hellas coast]], Kahlun dresses in his ancestors' bones, reads Grafin's messages over [[long-pork|dumplings]] made from [[juliandra|Mama Juli]], and is sent into the [[thornwatch]]. He talks [[ramba]] down from a sensory overload, shares half a dumpling with him, and writes Grafin a long reply about grief." }
  ],

  categories: [
    { id: "tube-people", label: "People of The Tube" },
    { id: "mars-people", label: "People of Mars & beyond" },
    { id: "places", label: "Places" },
    { id: "faiths", label: "Gods, faiths & orders" },
    { id: "culture", label: "Culture & customs" },
    { id: "nature", label: "Creatures & plants" },
    { id: "tech", label: "Life & technology" }
  ],

  entries: [
    // ================= PEOPLE OF THE TUBE =================
    { id: "grafin", cat: "tube-people", name: "Grafin Lasdannen", tag: "11 · The Tube · Kahlun's penpal", src: ["grafin-1", "kahlun-1"],
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
          "Doesn't like to repeat cruel things said to him. Feels he's carrying too much and is tired all the time.",
          "Kahlun: describes painful things \"in careful sentences.\" Warns people before he argues with them (\"so you can prepare\")."
        ]],
        ["Things he loves", [
          "[[grelem-preftom]], especially [[wool-and-teeth|Wool and Teeth]]. Its opening is his alarm. Sews the band's patches inside his school jacket.",
          "His [[wish-sculpture]] project: a spiral with a face emerging from it.",
          "Watching [[comet-force]] with [[kahlun]]; has reached episode 51.",
          "Kahlun believes he is secretly reading a Martian theologian Kahlun once mentioned."
        ]],
        ["Clothes", [
          "Chooses between a \"Grelem & Preftom shirt day\" and a \"blend-in day.\"",
          "Sleeps in a hair undershirt that itches enough to keep [[the-dreamer|The Dreamer]] away.",
          "School outfit: untucked [[rejuvenants|Rejuvenant]]-cut undershirt (borrowed from [[graugrey]]), vine-pattern pants, scuffed combat boots, [[hounds|Hound]] uniform jacket with dog fur on the collar."
        ]],
        ["Relationships", [
          "Dads: [[tramso|Papa Tramso]] and [[graugrey|Papa Graugrey]]. Both call him \"bug.\"",
          "Best friend at school: [[herelty]]. Penpal: [[kahlun]], since both were nine, through the [[il-exchange|IL Exchange]].",
          "Has written to Kahlun about [[miran|Counselor Miran]] for ten or eleven months, and about [[pella]] and [[dekker]] for as long.",
          "Offers to leave a token for Kahlun's father [[voli]] at the [[dead-groves|Dead Groves]] next time he visits with his dads.",
          "Is considering joining the [[hounds]]."
        ]],
        ["Messages", ["Signs as \"GL\". Has never worked out the [[light-lag]] math."]]
      ] },

    { id: "tramso", cat: "tube-people", name: "Papa Tramso", tag: "Grafin's father · Hound", src: ["grafin-1"],
      sections: [
        ["Looks", [
          "Tall and broad. Braids in his salt-and-pepper hair and beard; grey at the temples, lines around his eyes.",
          "Three earrings in each ear: little dog-head studs.",
          "A thin tattooed line on the left side of his face, barely visible under the hairline: a replica of the wound that killed his fourth body (see [[re-embodiment]])."
        ]],
        ["Life", [
          "A [[hounds|Hound]], currently on home duty doing day-shift paperwork. Uniform of crisp wool, real dog fur on the collar.",
          "Served in the Defense Force; cracks eggs one-handed, a trick he learned there.",
          "Has degrees and trained at [[eris-academy]], in logistics. [[graugrey]] says he's bad at math.",
          "Has fought, and told Grafin about it, including what he learned about the [[new-fire|New Fire]].",
          "Leaves home at 07:00; gets home about an hour after Graugrey."
        ]],
        ["Personality", [
          "A soft touch; would let Grafin leave with his shoes on the wrong feet. Low, rumbly voice. Shows off.",
          "Lines: \"Up means vertical.\" \"I have to say a lot of things. Doesn't mean they're not true.\""
        ]]
      ] },

    { id: "graugrey", cat: "tube-people", name: "Papa Graugrey", tag: "Grafin's father · Rejuvenant · hydroponics", src: ["grafin-1"],
      sections: [
        ["Looks", [
          "Small: the same height as Grafin (by evening he has to stretch a little to reach Grafin's shoulder). Cherubic. His childlike look is standard for [[rejuvenants]].",
          "Blond at breakfast; \"white hair\" at 17:30 (see continuity notes).",
          "Pale red eyes, a mix of biotech and cybernetics, as is his whole body. Could take a coilgun round on low power. (Not yet known whether that armour-grade build is normal for Rejuvenants or comes from his own past.)",
          "Smells of coffee and the orange-scented soap he uses to hide the smoke."
        ]],
        ["Life", [
          "A [[rejuvenants|Rejuvenant]]. Has managed a hydroponics bay for 85 years. Bad day: aphids in the tomatoes.",
          "Smokes too much; needs half a litre of coffee and a cigarette before he's himself.",
          "Has watched [[comet-force]] since he was Grafin's age; knows episodes by number.",
          "Stands on a stool to chop vegetables. Home around 17:30."
        ]],
        ["Personality", [
          "Does the daily inspection, because Tramso is too easy. Packs Grafin's lunch, knowing what Grafin trades to Herelty.",
          "High laugh. Dry. Finds philosophy in everything (peppers and personal growth).",
          "Says he deals with stress \"badly, mostly\" but talks about it eventually.",
          "Lines: \"Learn something.\" \"You don't have to carry it alone, bug.\""
        ]]
      ] },

    { id: "herelty", cat: "tube-people", name: "Herelty of Quiet-Temple", tag: "Grafin's best friend at school", src: ["grafin-1", "kahlun-1"],
      sections: [
        ["Looks", [
          "Taller than Grafin. Dark hair in a tight bun; distant eyes.",
          "Wears an [[oathbound|Oathbound]]-cut uniform jacket with a hood that lets her face disappear, sleeves pushed up.",
          "Eight small blue tattooed dots on her left arm, like injection sites."
        ]],
        ["Life", [
          "From [[quiet-temple|Quiet-Temple]]. Nobody packs her lunch; she accepts Grafin's extras \"like she doesn't need it.\"",
          "Normally early and predictable. On Day 1 she couldn't sleep and walked to school: three hours.",
          "Plays the [[simulations]] and hates the counselor debriefs afterward, but thinks they help.",
          "Death \"lands differently\" with her."
        ]],
        ["Personality", [
          "Says little. \"Information offered freely or not at all.\" Gives full attention to things that matter.",
          "Offered to hit [[dekker]] for Grafin. Told him: \"The spiral is good. The face is trying too hard.\" Kahlun agrees with her.",
          "Signs messages \"H of QT\"."
        ]]
      ] },

    { id: "pella", cat: "tube-people", name: "Pella", tag: "Classmate · Fury · natborn", src: ["grafin-1", "kahlun-1"],
      sections: [["So far", [
        "\"Magnetic\" rather than popular; other kids arrange themselves around him.",
        "A [[furies|Fury]], [[birth-lottery|natborn]] from an old family.",
        "Usually looks through Grafin as if he isn't there, but gives him a \"measuring look\" more than once.",
        "Day 1: tells [[dekker]] to \"Leave it,\" then tells Grafin: \"Don't let him get to you. He's an idiot.\"",
        "In earlier messages Kahlun remembers: Pella looked at Grafin, and once sat across from him at lunch instead of with his usual crowd. Neither boy knows what it means."
      ]]] },

    { id: "dekker", cat: "tube-people", name: "Dekker Vaneso", tag: "Classmate · Shade · Pella's satellite", src: ["grafin-1"],
      sections: [["So far", [
        "Tall and thin with cords of muscle. Wears a [[shades|Shade]]-cut uniform jacket.",
        "\"Not important enough to be cruel on his own, just important enough to be cruel on behalf of others.\"",
        "Called Grafin's eyes \"like dirty water.\" Saw the band patches inside Grafin's jacket in Physical Training.",
        "Repeats his mother's line: \"Rejuvenant Graugrey is Hound Tramso's toy.\" Backs off when [[pella]] tells him to."
      ]]] },

    { id: "miran", cat: "tube-people", name: "Counselor Oathbound Miran", tag: "School counselor", src: ["grafin-1", "kahlun-1"],
      sections: [["So far", [
        "An [[oathbound|Oathbound]]. Not mean; watches, takes notes on her tablet, asks questions that feel like traps.",
        "Once asked about Grafin's [[grelem-preftom]] shirt and whether his parents knew he listened to the band.",
        "Summons Grafin through [[entity-judgment|ENTITY-Judgment]] after the hallway incident; per Grafin's message, kept him alone for thirty-eight minutes.",
        "Knows Grafin writes long messages to [[kahlun]]. Says [[herelty]] and Grafin are both isolated and may \"reinforce patterns.\"",
        "Kahlun and his moms think she isn't good for Grafin: \"Plutonian institutional concern\" works very differently from [[dialectic|Dialectic]] mediation."
      ]]] },

    { id: "kath", cat: "tube-people", name: "Teacher Oathbound Kath", tag: "Art teacher", src: ["grafin-1"],
      sections: [["So far", [
        "Visibly old: one of the rare Plutonians who lets her current body age almost naturally, for \"perspective\" (see [[re-embodiment]]).",
        "Calls Grafin's insight about the ice a breakthrough: \"That's not technique. That's philosophy.\"",
        "Advice: \"Let the ice teach you what it needs.\" \"Don't rush it.\""
      ]]] },

    { id: "vorst", cat: "tube-people", name: "Teacher Provisioner Vorst", tag: "Mathematics teacher · 1,217 Standard years old", src: ["grafin-1"],
      sections: [["So far", [
        "A [[provisioners|Provisioner]]. Has taught mathematics for about all of his 1,217 Standard years.",
        "Teaches facing the board, \"lost in the purity of numbers.\" Calls students by surname: \"Student Lasdannen.\""
      ]]] },

    { id: "tellani", cat: "tube-people", name: "Teacher Fury Tellani", tag: "History teacher", src: ["grafin-1"],
      sections: [["So far", [
        "A [[furies|Fury]], but not one of the stuck-up ones who brag about descent from the Founders.",
        "Engaged; asks questions. Teaches the [[jovian-reformation|Attempted Jovian Reformation]]."
      ]]] },

    // ================= PEOPLE OF MARS & BEYOND =================
    { id: "kahlun", cat: "mars-people", name: "Kahlun Blazatrama", tag: "11 · Hellas coast, Mars · Grafin's penpal", src: ["grafin-1", "kahlun-1"],
      sections: [
        ["Looks", [
          "Short and stocky by Martian standards (bullies call him that); his Venusian father was \"radically shorter\" than his moms.",
          "Deep umber-brown skin, the Venusian baseline from his father, with the silver lichen-lines of the Martian [[symbiote]] showing through. Called \"translucent skin\" later in the chapter.",
          "Bioluminescent starburst freckles at his collarbones and jaw, visible only in the dark: the mark of a [[quad-lineage]] child. He wears it proudly.",
          "Pink hair with iridescent protein structures (a Venusian trait from his father), tightly coiled; undershaved on the left, grown long on the right into the Mortuary [[braid-crown]], with name-etched bone beads and copper rings.",
          "Mismatched eyes: glass-green left with lavender glints; diluted-wine-red right, fitted with a thermal optics package when he was small.",
          "Original hip bones removed at seven and replaced with cybernetics, so he could walk in the gravity of [[venus|Venus]]'s floating cities."
        ]],
        ["What he wears", [
          "Sleeps and prays in a pale rose and grey-lavender robe. Over it, the [[garment-temple]] of family bones: Yet'tia's skull, Tarlen's hands as a [[dyozman|Dyozman']], his sisters' finger-bone beads, his mothers' bones as armour.",
          "A biosilk outer layer threaded with dust-filtering mycelium; a pastel-blue undersuit outdoors.",
          "A [[two-moons-pendant|two-moons-and-fish pendant]] holding a thimble of real Terran water. A prayer-thread wristband he re-soaks in brine every night: \"a small renewable promise to God.\"",
          "Carries a laser pistol and comms in the forest."
        ]],
        ["Personality", [
          "Sincere, steady, theological. Uses the [[dialectic|Dialectic]] grounding voice; Gratiustar says he's good at it.",
          "Grieving his father [[voli]]: still almost sets a place for him most mornings. Has smiled at a message from Grafin for the first time in weeks.",
          "Has ugly thoughts more often since his father died (wanting to dazzle Ramba with his pistol) and \"composts\" them.",
          "Likes knowing things other people got wrong, and lets himself enjoy it."
        ]],
        ["Things he loves", [
          "Theology; writing long messages; [[comet-force]] with Grafin. His alarm plays the [[electric-saints|Electric Saints]]' Thinker.",
          "From the author's notes, not yet on the page: autistic, special interests in birds and a Martian religious boy band."
        ]],
        ["Family", [
          "Moms: [[belindrama|Mama Belindrama]], [[gratiustar|Mama Gratiustar]], [[juliandra|Mama Juliandra]] (his Birthing-Mother). Father: [[voli]], died one Standard year, three months and eleven days before Kahlun I.",
          "Sisters [[yenna-yamie|Yenna and Yamie]], dead forty years before he was born. Uncle [[orivante|Orivante]]. Ancestors in the [[ossuary]]. Dog: [[patience]].",
          "Friends: [[merschal]]; complicated: [[ramba]], [[gabryel]]. Moms call him \"little spark\" and \"small-hands\"."
        ]],
        ["Messages", ["Signs \"KLB\" (B for Blazatrama). Sends short replies in the morning and long ones at night: \"The morning is for small messages.\""]]
      ] },

    { id: "belindrama", cat: "mars-people", name: "Mama Belindrama", tag: "Kahlun's mother · Mortuary Cult ritualist", src: ["kahlun-1"],
      sections: [
        ["Looks", [
          "The tallest of the moms by a fingerbreadth: almost 2.5 m in her work flats. Stoops at the counters, which were built as a compromise for a much shorter Venusian husband.",
          "Calm face. Loose braid for kitchen work; hair down when reading."
        ]],
        ["Life", [
          "A [[mortuary-cult|Mortuary Cult]] ritualist, \"almost a priest.\" Kahlun's oldest mom: has been doing dishes for 740 years.",
          "Cooks: long-pork [[long-pork|dumplings]] in her own sesame-lemon glaze, noodles, duck eggs. Leads grace.",
          "Reads a dog-eared paper copy of the ancient Qur'an. Swears by \"Thundering-God.\"",
          "Her third body's ribs form the chest armour of Kahlun's [[garment-temple]]."
        ]],
        ["Personality", [
          "Fixes the orientation of Yet'tia's skull: \"Apologize to your uncle.\" Gives the small Dialectic nod that means \"received and held.\"",
          "Holds to tradition; finds Juliandra's heresies trying. Quotes the [[senyara|Senyara]]: \"Fake it, till you make it.\"",
          "Lines: \"Same is not better.\" \"Then we don't know. My hands are tired. Come wash the kettle.\""
        ]]
      ] },

    { id: "gratiustar", cat: "mars-people", name: "Mama Gratiustar", tag: "Kahlun's mother · retired Space Fleet", src: ["kahlun-1"],
      sections: [["So far", [
        "Retired from Space Fleet for 63 years; still walks as if a deck plate might shift. Now works at the sea-spaceport, in uniform.",
        "Tends ducks in their pond. Pours tea with the care of someone used to fragile shipboard equipment; thinks in cargo-loading order.",
        "Smokes on the back porch. Not given to compliments before her second cup of tea.",
        "Her fifth body's femurs are on Kahlun's legs in the [[garment-temple]].",
        "Dry humour: \"Tourists are a renewable resource. Zentelos are not.\" \"I'm joking some.\"",
        "Passes on news from [[orivante|Uncle Ori]]: \"Don't build a shrine to it yet.\" Tells Kahlun the grounding voice only works \"from somewhere genuine.\""
      ]]] },

    { id: "juliandra", cat: "mars-people", name: "Mama Juliandra", tag: "Kahlun's Birthing-Mother · Emergency Services", src: ["kahlun-1"],
      sections: [["So far", [
        "The shortest of the moms (just over 2 m) but the most \"substantial\": built like a tree trunk. Hair cropped on the sides and long on top.",
        "A scar across her left cheek from a recovery operation forty years ago, never fixed: \"scars are also a kind of memory.\"",
        "Works forest rescue for Emergency Services; burnt-orange uniform laced with family bones and the bones of bears and [[rusthound|Rusthounds]].",
        "This month's dumplings are grown from a tissue sample of her left forearm. Loves garlic.",
        "Her eleventh body's scapula forms Kahlun's pauldrons.",
        "A cheerful heretic: \"The tradition is what we make it.\" Calls Kahlun \"my best boy.\""
      ]]] },

    { id: "voli", cat: "mars-people", name: "Voli", tag: "Kahlun's father · died about 15 months before Kahlun I", src: ["kahlun-1"],
      sections: [["So far", [
        "A Venusian aristocrat who \"threw everything away to play house with Martian farmers\"; became a cargo pilot. From an \"enormous, overdressed, poetry-mad\" family.",
        "Radically shorter than his three wives. Booming laugh. Gave Kahlun his skin colour and his pink hair.",
        "Joked about writing poems to secure alliances, for example matching Kahlun with [[merschal]].",
        "Brought home a Venusian hydroponic pepper the family still rations. The house used to burn his Venusian clove-and-cinnamon incense; nobody can bear the smell now.",
        "His body is carbon dust in Venus's atmosphere. His plinth in the [[ossuary]] is carved redwood inlaid with his Venusian house's crest, and will always be empty.",
        "Never met Yet'tia and didn't know the bone orientations; Kahlun believes he would have learned.",
        "Died about 19 January 16007 (one Standard year, three months and eleven days before Kahlun I)."
      ]]] },

    { id: "orivante", cat: "mars-people", name: "Uncle Orivante (Ori)", tag: "Voli's brother · Venusian knight", src: ["kahlun-1"],
      sections: [["So far", [
        "Became a knight, \"which is what a certain kind of extra Venusian child becomes.\" Wanted out of family intrigue, as Voli did.",
        "Has seen slave-raid aftermaths, buried AI-gods and worse in the Belts, the Disc and the Cloud. Tells Kahlun only the nice stories.",
        "Stayed eight months when Kahlun was seven. Taught him to field-strip a laser rifle and didn't make him feel small for crying about what it was for.",
        "Now finishing a counter-slavery rotation in the Venusian Belt holdings; might visit later this year."
      ]]] },

    { id: "yenna-yamie", cat: "mars-people", name: "Ancestors in the ossuary", tag: "Tarlen, Yet'tia, Yenna and Yamie", src: ["kahlun-1"],
      sections: [["So far", [
        "Grandmother Tarlen: a place of honour; her hand bones, linked with silk ribbon, form Kahlun's [[dyozman|Dyozman']].",
        "Great-Great-Uncle Yet'tia: his skull is worn on Kahlun's head to protect his mind from unkind thoughts. The jaw faces forward.",
        "Yenna and Yamie: Kahlun's sisters, dead forty years before he was born. Their finger bones are worked into beads for his hair.",
        "A great-great-aunt's clavicle was the first bone Kahlun ever wore, as a necklace.",
        "Their names were sung over him at his naming ceremony."
      ]]] },

    { id: "merschal", cat: "mars-people", name: "Merschal Chal'tar Crufis", tag: "11 · Kahlun's friend", src: ["kahlun-1"],
      sections: [["So far", [
        "Bigger than most village kids, from his father's Jovian combat-slave engineering. Pale skin with faintly glowing silver fungal lines. Voice is breaking.",
        "Wears a soft grey tunic; his only bones are his grandfather's hands as a [[dyozman|Dyozman']].",
        "His father is a refugee, a rehabilitated Jovian slave-soldier. His moms married him after the last [[jovian-raids|raid]] forty years ago, a scandal, and a bigger one when they had a child with him.",
        "Since Voli died he hesitates around Kahlun and leaves a little too much space. A year ago they would have wrestled.",
        "Dislikes [[ramba]] and mocks his overprotective dads, but doesn't want him hurt. Eats pickle sandwiches. Kahlun calls him \"Mer\"."
      ]]] },

    { id: "ramba", cat: "mars-people", name: "Ramba Grazayen Senyar'tok", tag: "12 · in a new clone body", src: ["kahlun-1"],
      sections: [
        ["Before", [
          "The best hunter in the youth cohort; killed a deer at eight. A descendant of the [[senyara|Senyara]] (84 generations), and put on airs about it.",
          "His fishermen dads; he used to carry his combi-staff slung on his back as they carry gaff hooks."
        ]],
        ["Now", [
          "A tree fell on him and killed his first body, a few months after Voli died. His muscle memory is stuck in the simulation he spent about 400 days in; see [[re-embodiment]].",
          "Walks with over-corrected stiffness, leaning on his ash-wood combi-staff, which takes a knife to become a deer spear.",
          "Wears a high-compression medical jacket that pulses rhythmically to give his nervous system input. Pale skin: his body hasn't accepted the [[symbiote]] yet. Synthetic ice-blue irises.",
          "Prone to sensory overload. Eats beige ration bars shipped from Hellas North Coastal Hospital every two weeks, and freeze-dried strawberries, the only food that isn't \"too much.\"",
          "His dads haven't let him do anything alone since the accident; he resents it."
        ]],
        ["Kahlun I", [
          "Insults Kahlun's grief and his Venusian father, then breaks down. Kahlun grounds him. He cuts mushrooms, takes half a dumpling, and apologises for the first time in eleven months.",
          "\"Here I'm driving a meat puppet through molasses.\""
        ]]
      ] },

    { id: "gabryel", cat: "mars-people", name: "Gabr'yel", tag: "Village kid", src: ["kahlun-1"],
      sections: [["So far", [
        "All seven of her parents are on the Eastern concert circuit until Dry-spring; she's staying four weeks with her aunt, [[yelina|Elder Yelina]].",
        "Claims she reprogrammed a surveyor drone to play a [[thunder-temple|Thunder Temple]] beat. Kahlun says she doesn't know basic telemetry.",
        "Threatened to run away to join a Duster cattle-herder tribe in Tharsis and \"become a cow.\" Ramba thinks she sent him after the boys out of boredom."
      ]]] },

    { id: "yelina", cat: "mars-people", name: "Elder Yelina", tag: "God-Builder preacher · nearly 2,000 years old", src: ["kahlun-1"],
      sections: [["So far", ["Gabr'yel's aunt, \"the boring one.\" A [[god-builders|God-Builder]] preacher who can talk for hours."]]] },

    { id: "hannet", cat: "mars-people", name: "Hannet", tag: "Kahlun's classmate", src: ["kahlun-1"],
      sections: [["So far", ["Last week: \"Isn't that a bit performative, Kahlun? You don't have to be so religious all the time.\""]]] },

    { id: "patience", cat: "mars-people", name: "Patience", tag: "The Blazatrama family dog", src: ["kahlun-1"],
      sections: [["So far", [
        "A [[rusthound|Rusthound]], mostly husky. Iron plates across his back and shoulders that rust a little in the wet season.",
        "His name is \"aspirational.\" Sleeps upside down against the heating vent, then wakes \"with a violence that has knocked over furniture.\"",
        "Has known sit for three years and offers shake instead. Ignores everything that doesn't matter; obeys instantly when it does."
      ]]] },

    // ================= PLACES =================
    { id: "the-tube", cat: "places", name: "The Tube", tag: "Habitat cylinder joining Pluto and Charon", src: ["grafin-1", "kahlun-1"],
      sections: [
        ["What it is", [
          "A vast habitat cylinder connecting Pluto and its moon Charon. Few windows.",
          "Axial lights serve as the \"sun\" and brighten and dim on a daily schedule.",
          "The inner surface curves up: through train windows you can see homes on the far side.",
          "The real Sun is about 40 AU away in the text. The [[penpal-clock|Penpal Clock]] gives 44.9 AU on 29 April 16008."
        ]],
        ["Daily life", [
          "Maglev trains: a school train and a separate line toward the Hound station.",
          "Agricultural sections supply small luxuries such as real eggs from live chickens.",
          "Climate is run in turn by the [[six-gods|Six Gods]]; on Days 1 and 2 the [[father-of-riches]] is \"doing winter.\"",
          "Most children arrive through the [[birth-lottery]]. Clocks run on a 24-hour day; to match the message timing in the chapters, the Tube's clock runs about 9 hours behind Earth time (an assumption, yours to confirm).",
          "On 29 April 16008 the real Sun is 44.9 AU away and Pluto's south pole is tilted toward it (sun overhead at 39°S).",
          "Plutonians have buried their dead for at least 3,000 years (see [[dead-groves]])."
        ]],
        ["Places in it", ["[[katabasii-complex]], [[lasdannen-home|the Lasdannen apartment]], [[dead-groves]], a Hound station, hydroponics bays."]]
      ] },

    { id: "katabasii-complex", cat: "places", name: "Katabasii Fernan Memorial Community Complex", tag: "Grafin's school", src: ["grafin-1"],
      sections: [
        ["What it is", [
          "Grafin's school. Between [[birth-lottery|birth lotteries]], when there are no children, it hosts hobby clubs, faith meetings and elections.",
          "A courtyard; Grafin and [[herelty]] share a bench by the wall with a view of the exits.",
          "The art room smells of solvents, clay and the ozone tang of [[wish-sculpture|wish-sculpting]] equipment."
        ]],
        ["Cafeteria", [
          "\"A social hierarchy made physical\": popular tables, academic achievers, kids good at murder-sims ([[simulations]]), and a high table for those initiated into their god's Mysteries."
        ]],
        ["School day (Grafin I)", [
          "07:45 courtyard · 08:00 Mathematics · 09:30 break · 10:00 History · 11:00 hallway, walking to lunch · 12:00 Lunch · 13:00 Literature (summoned to the Counselor) · 15:00 Art · 16:30 train home."
        ]]
      ] },

    { id: "lasdannen-home", cat: "places", name: "The Lasdannen apartment", tag: "Grafin's home", src: ["grafin-1"],
      sections: [["So far", [
        "A small, warm, crowded kitchen; a living room with a couch; Grafin's room with his desk.",
        "Biometric chimes on the door rattle when someone comes in. Grafin is home first, at 17:00."
      ]]] },

    { id: "dead-groves", cat: "places", name: "The Dead Groves", tag: "Plutonian cemetery", src: ["kahlun-1"],
      sections: [["So far", [
        "Grafin visits with his dads on off days. Plutonian baobabs grow there, fed by soil enriched with three thousand years of Plutonian dead.",
        "Grafin offers to leave a token there for [[voli]]. Kahlun: \"The intention is the token. The matter just carries it.\""
      ]]] },

    { id: "quiet-temple", cat: "places", name: "Quiet-Temple", tag: "Where Herelty comes from", src: ["grafin-1"],
      sections: [["So far", ["[[herelty]] is \"Herelty from Quiet-Temple\" and signs \"H of QT\". Not yet described."]]] },

    { id: "eris-academy", cat: "places", name: "Eris Academy", tag: "Where Tramso trained", src: ["grafin-1"],
      sections: [["So far", ["[[tramso]] trained there, in logistics."]]] },

    { id: "mars", cat: "places", name: "Mars", tag: "Terraformed for 12,000 years", src: ["kahlun-1"],
      sections: [["So far", [
        "Terraformed for 12,000 years; fine red grit and dust are still everywhere.",
        "Has seas (the Hellas Sea), coastal rainforests, four-day storms, snow-melt, duststorms and cold.",
        "Has been bombarded and invaded before; see [[jovian-raids]].",
        "Every child is expected to hunt and forage. Children walking in forests spread the [[symbiote]] that binds topsoil to regolith.",
        "Places named: [[hellas-coast]], [[thornwatch]], Tharsis (Duster cattle-herder tribes), the Eastern concert circuit, a sea-spaceport.",
        "Minority subcultures in school texts: Necrophages, Wildkin, Senyarists, Purifiers. Tourists come from Ceres.",
        "On 30 April 16008: Mars Year 7,472, sol 381, solar longitude 194°. Southern spring began on 28 March 16008, so the Hellas coast is about a month into spring; southern summer starts 8 September 16008 by Earth dates.",
        "In this era Mars is closest to the Sun in late northern winter, which makes southern summers short and hot. Seasons, distance and local time: see the [[penpal-clock|Penpal Clock]]."
      ]]] },

    { id: "hellas-coast", cat: "places", name: "The Hellas coast and Kahlun's village", tag: "Kahlun's home", src: ["kahlun-1"],
      sections: [
        ["The village", [
          "On the coast of the Hellas Sea, among coastal rainforests. Storms off the sea can sit for four days.",
          "Houses are linked to neighbours by tunnels and small buried tramlines. Hellas-coast families have built this way for 3,000 years.",
          "Nearby: the [[thornwatch]], a regional clinic, Hellas North Coastal Hospital, and the sea-spaceport where Gratiustar works."
        ]],
        ["The Blazatrama house", [
          "Two houses: a steep-roofed log cabin of Martian-adapted redwood and cedar above, with the stained-glass [[ossuary]] chapel in a second-storey extension on the east side.",
          "Below, where they really live: a half-buried shell of sulfur-concrete panelled in cedar. It needs no water or cement but smells faintly of rotten eggs, so the rooms are full of fungal cultivars, potted flowers and air fresheners.",
          "Front airlock; a fold-down kitchen table; a heating vent the dog sleeps on; a duck pond; a home culture rig for growing [[long-pork|dumpling]] filling.",
          "Kahlun's small bed and thin blanket."
        ]]
      ] },

    { id: "thornwatch", cat: "places", name: "The Thornwatch", tag: "Forest near Kahlun's village", src: ["kahlun-1"],
      sections: [["So far", [
        "Colder and damper than the village: about 4 °C after the rains. Heavily modified redwoods, brambles, moss, deer trails.",
        "Fire-cleared meadow plots grow adapted maize. Home to [[zentelos]], [[glimmer|Glimmers]], boars and leftover Jovian warbeasts. Large predators are pheromone-trained.",
        "A north ridge about an hour and a half up a deer trail, where the boys forage [[vermillion-tongue]].",
        "A fresh [[bizcente|biz'cente]] about a kilometre from Kahlun's house."
      ]]] },

    { id: "venus", cat: "places", name: "Venus", tag: "Kahlun's father's world", src: ["kahlun-1"],
      sections: [["So far", [
        "Floating cities and colonia in the upper atmosphere; higher gravity than Mars.",
        "Aristocratic houses with crests, poetry, intrigue and alliance-talk. Spare children may become knights.",
        "Venusians are much shorter than Martians. Some engineer iridescent pink hair. Venusian clove-and-cinnamon incense; hydroponic peppers.",
        "A Martian stereotype: Venusian nobles marry relatives.",
        "Holdings in a \"Venusian Belt\" where Ori does counter-slavery work."
      ]]] },

    // ================= FAITHS =================
    { id: "six-gods", cat: "faiths", name: "The Six Gods", tag: "The Tube's gods", src: ["grafin-1"],
      sections: [
        ["From the author", [
          "The Six Gods are the six worlds of the Pluto system: Pluto, Charon, Styx, Nix, Kerebros and Hydra. (The real moon is spelled Kerberos; Kerebros may be an in-world spelling. To confirm.)"
        ]],
        ["What the text shows", [
          "Used in expressions: \"The Six Gods themselves could not compel enthusiasm for this hour.\"",
          "Run the genetic lottery; see [[birth-lottery]].",
          "Take turns running Climate Control \"when they get bored.\" Named so far: the [[father-of-riches]].",
          "People can be initiated into their god's Mysteries."
        ]],
        ["Orders seen", ["[[furies]] · [[shades]] · [[oathbound]] · [[provisioners]] · [[rejuvenants]] · [[hounds]]. Six gods and six orders. Which god each belongs to isn't stated yet; see the questions on the overview page for a proposed pairing."]]
      ] },
    { id: "father-of-riches", cat: "faiths", name: "The Father of Riches", tag: "One of the Six Gods", src: ["grafin-1", "kahlun-1"],
      sections: [["So far", ["Almost certainly Pluto: \"Pluto\" comes from Plouton, the giver of riches. Currently running The Tube's Climate Control: \"winter-themed\", dim, not cold, sometimes snow. Still doing winter on Day 2."]]] },
    { id: "furies", cat: "faiths", name: "Furies", tag: "Order", src: ["grafin-1"],
      sections: [["So far", ["Members: [[pella]] (natborn, old family), [[tellani|Teacher Tellani]]. Some brag about lineage from the Founders. \"Furies and Shades always stick together.\""]]] },
    { id: "shades", cat: "faiths", name: "Shades", tag: "Order", src: ["grafin-1"],
      sections: [["So far", ["Member: [[dekker]]. Shade-cut uniform jacket. Allied with the [[furies]]."]]] },
    { id: "oathbound", cat: "faiths", name: "Oathbound", tag: "Order", src: ["grafin-1"],
      sections: [["So far", ["Members: [[miran|Counselor Miran]], [[kath|Teacher Kath]]. [[herelty]] wears an Oathbound-cut jacket with a face-hiding hood."]]] },
    { id: "provisioners", cat: "faiths", name: "Provisioners", tag: "Order", src: ["grafin-1"],
      sections: [["So far", ["Member: [[vorst|Teacher Vorst]]."]]] },
    { id: "rejuvenants", cat: "faiths", name: "Rejuvenants", tag: "Order", src: ["grafin-1"],
      sections: [["From the author", [
        "All Rejuvenants have a childlike presentation. It's a defining trait of the order, not something specific to Graugrey."
      ]], ["So far", [
        "Member: [[graugrey]]. Rejuvenant-cut clothes are made for small bodies: Graugrey's spare shirts (pale blue flowers on grey) fit eleven-year-old Grafin.",
        "Rejuvenant–Hound couples draw gossip: \"Hound Tramso's toy,\" which Grafin knows is a bad word. Since every Rejuvenant looks like a child, this is prejudice about the order and the pairing, not about Graugrey alone.",
        "Dekker mocks Graugrey for looking like a kid *and being a dad*, which suggests Rejuvenants raising children is unusual."
      ]]] },
    { id: "hounds", cat: "faiths", name: "Hounds", tag: "Order · soldiers", src: ["grafin-1"],
      sections: [["So far", [
        "Member: [[tramso]]. Wool uniforms with real dog fur collars; dog-head earring studs; a Hound station.",
        "[[grafin]] wears a Hound jacket and stud and is considering joining: \"He hasn't picked yet.\""
      ]]] },

    { id: "god-builders", cat: "faiths", name: "God-Shall-Be-Built", tag: "Martian faith: God is being built", src: ["kahlun-1"],
      sections: [["So far", [
        "Grace thanks \"God-Shall-Be-Built and all our families.\" Kahlun's walking is a prayer: \"I am here. I am tending. The world is being made. God is being built.\"",
        "[[yelina|Elder Yelina]] is a God-Builder preacher.",
        "Expressions: \"thank God\", \"Thundering-God\"."
      ]]] },
    { id: "mortuary-cult", cat: "faiths", name: "The Mortuary Cult", tag: "Kahlun's tradition", src: ["grafin-1", "kahlun-1"],
      sections: [
        ["Beliefs", [
          "\"Matter has memory. It carries the intentions of everyone who's touched it.\"",
          "Mainstream Mortuary Martians eat their dead at funerals. [[necrophages]] also eat the living, through donated tissue.",
          "The dead stay with the family: bones are cleaned, ceramic-coated, painted and kept in a home [[ossuary]], and worn as the [[garment-temple]]."
        ]],
        ["Practices", [
          "The [[braid-crown]]: \"Remembrance, and the turning of time.\" A naming ceremony at which family names are sung.",
          "Ritualists such as [[belindrama]] are \"almost priests.\" Outsiders' slur: \"Morty.\"",
          "Grace: \"May we carry them well… May we taste their kindness.\""
        ]]
      ] },
    { id: "necrophages", cat: "faiths", name: "Necrophages", tag: "\"Sufficient plus\"", src: ["kahlun-1"],
      sections: [["So far", [
        "A Mortuary minority, described respectfully, and at arm's length, in school texts.",
        "They eat the living as well as the dead: tissue donated by living loved ones, vat-grown at home. The bond is ongoing, not only commemorative. Kahlun calls it \"sufficient plus.\"",
        "Sharing food grown from a family member is done \"only to people you like\" (Ramba). Kahlun should have asked Juliandra first. Slang: \"'Phages.\"",
        "See [[long-pork]]."
      ]]] },
    { id: "dialectic", cat: "faiths", name: "The Sadistic-Dialectic", tag: "Martian philosophy and counselling", src: ["kahlun-1"],
      sections: [["So far", [
        "Grief is \"a kind of internal debate with absence\": take a position, let the absence argue back, and truth emerges from the friction.",
        "Demands truth even when it stings, and a synthesis of pain and truth. \"You can sit with both at once.\"",
        "Practised as mediation and community counselling. The grounding voice: flat, rhythmic facts (\"The ground is solid\").",
        "The small nod that means \"received and held.\"",
        "A bad thought is \"private and yours between you and God\"; what matters is what you do with it."
      ]]] },
    { id: "senyara", cat: "faiths", name: "The Senyara", tag: "\"Our Queen\"", src: ["kahlun-1"],
      sections: [["So far", [
        "Kahlun calls her \"our Queen.\" [[ramba]] is her 84-times grandson.",
        "Quoted by Belindrama: \"Fake it, till you make it.\"",
        "School texts list Senyarists as a minority subculture."
      ]]] },
    { id: "new-fire", cat: "faiths", name: "The New Fire", tag: "Marcus Jove, now a process", src: ["grafin-1"],
      sections: [["So far", [
        "Once a person, Marcus Jove. Now \"just the pattern, replicating endlessly.\" Absorbs and converts people into \"more of Himself.\"",
        "Grafin: \"He's a process. You can't convince a process to be something else.\""
      ]]] },
    { id: "jovian-reformation", cat: "faiths", name: "Attempted Jovian Reformation", tag: "History · about 3,000 years ago", src: ["grafin-1"],
      sections: [["So far", ["A failed coup to reform the [[new-fire|New Fire]] from within. Its martyrs were absorbed and converted."]]] },

    // ================= CULTURE & CUSTOMS =================
    { id: "garment-temple", cat: "culture", name: "The garment-temple", tag: "Wearing your dead", src: ["kahlun-1"],
      sections: [["So far", [
        "Ossuary garments worn over a prayer robe, linked with prayer ribbons and copper wire. Kahlun has helped since three and dressed himself since eight.",
        "Kahlun's: Yet'tia's skull on his head; Tarlen's hands as a [[dyozman|Dyozman']]; his sisters' finger-bone beads; his own original hip bones as the chest frame; Belindrama's ribs, Gratiustar's femurs and Juliandra's scapula.",
        "Colours: almost-pink pastel red and almost-grey blue. Hair braided in elaborate knots. Old cybernetics are gilded and engraved.",
        "Clatters like ceramic wind chimes. Orientation matters: a skull's jaw faces forward, though Juliandra says backwards \"watches your back.\"",
        "Emergency Services uniforms are also laced with bones."
      ]]] },
    { id: "dyozman", cat: "culture", name: "Dyozman'", tag: "The God's Hand", src: ["kahlun-1"],
      sections: [["So far", ["An ancestor's hand bones arranged over the heart. Kahlun wears Grandmother Tarlen's; [[merschal]] wears his grandfather's."]]] },
    { id: "braid-crown", cat: "culture", name: "The braid-crown", tag: "Mortuary hairstyle", src: ["kahlun-1"],
      sections: [["So far", ["Long on one side and braided into a circle, with bone beads and copper rings each etched with a family name. \"Remembrance, and the turning of time.\""]]] },
    { id: "ossuary", cat: "culture", name: "The family ossuary", tag: "Home shrine", src: ["kahlun-1"],
      sections: [["So far", [
        "The Blazatrama ossuary is a tiny stained-glass chapel on the house's east side, holding a dozen generations of ancestors on plinths and in reliquaries.",
        "Morning light paints the bones in every colour. [[voli]]'s plinth stays empty."
      ]]] },
    { id: "long-pork", cat: "culture", name: "Long-pork dumplings", tag: "Family food", src: ["kahlun-1"],
      sections: [["So far", [
        "Filling vat-grown over six weeks from a living family member's tissue sample; this month, Juliandra's left forearm. Seasoned with garlic, ginger and Voli's Venusian pepper.",
        "Belindrama's sesame-lemon glaze. Pale pink at the seams. Kahlun takes six to lunch.",
        "Kahlun: it tastes \"like Juli.\" See [[necrophages]]."
      ]]] },
    { id: "two-moons-pendant", cat: "culture", name: "Two-moons-and-fish pendant", tag: "Kahlun's necklace", src: ["kahlun-1"],
      sections: [["So far", ["A shatterproof ceramic-glass phial holding a thimbleful of real Terran water."]]] },
    { id: "quad-lineage", cat: "culture", name: "Quad-lineage children", tag: "Four genetic parents", src: ["kahlun-1"],
      sections: [["So far", ["Three mothers' DNA in one egg, plus a father's. Marked with bioluminescent starburst freckles. Some families hide the marker; Kahlun's moms chose it."]]] },
    { id: "jovian-raids", cat: "culture", name: "Jovian raids on Mars", tag: "History", src: ["kahlun-1"],
      sections: [["So far", [
        "The last raid was forty years ago. Jovian warbeasts left over from it still roam the Thornwatch.",
        "Jovian slave-soldiers are engineered for combat; [[merschal]]'s father is a rehabilitated refugee one.",
        "Related to the [[new-fire|New Fire]] and the [[jovian-look]]? Not yet stated."
      ]]] },
    { id: "grelem-preftom", cat: "culture", name: "Grelem & Preftom", tag: "Band · Grafin's favourite", src: ["grafin-1"],
      sections: [["So far", ["Edgy enough that Counselor Miran asks whether Grafin's parents know he listens. Album: [[wool-and-teeth|Wool and Teeth]]."]]] },
    { id: "wool-and-teeth", cat: "culture", name: "Wool and Teeth", tag: "Album by Grelem & Preftom", src: ["grafin-1"],
      sections: [["So far", ["Its opening is Grafin's alarm. Album art is on his favourite shirt."]]] },
    { id: "electric-saints", cat: "culture", name: "The Electric Saints", tag: "Martian band", src: ["kahlun-1"],
      sections: [["So far", ["An instrumental of the first stanza of their song Thinker is Kahlun's alarm."]]] },
    { id: "thunder-temple", cat: "culture", name: "Thunder Temple", tag: "Martian music", src: ["kahlun-1"],
      sections: [["So far", ["Gabr'yel claims she taught a drone to play \"a Thunder Temple beat.\""]]] },
    { id: "comet-force", cat: "culture", name: "Comet Force", tag: "Ancient cartoon", src: ["grafin-1", "kahlun-1"],
      sections: [["So far", [
        "Grafin and Kahlun watch it together. [[graugrey]] has watched it since he was eleven. It has \"surprisingly developed ethical sub-themes.\"",
        "Episode 47: the bridge scene in which Captain Vex sacrifices herself.",
        "Episode 51: why didn't Vex tell the Engineer about the relay before she went into the bridge? Grafin thinks she was sparing him; Kahlun thinks she was wrong. See continuity notes."
      ]]] },
    { id: "wish-sculpture", cat: "culture", name: "Wish-sculpture", tag: "Ice art form", src: ["grafin-1", "kahlun-1"],
      sections: [["So far", [
        "Sculpture in ice, using wish-sculpting equipment. Grafin's project: a spiral with a face that should emerge rather than be imposed.",
        "Kahlun, from Belindrama: a face that tries too hard \"has been wounded into specific shape.\""
      ]]] },
    { id: "simulations", cat: "culture", name: "The Simulations", tag: "Murder-sims", src: ["grafin-1"],
      sections: [["So far", ["Children can kill people who were cruel to them, in simulation, then must talk it through with a Counselor."]]] },
    { id: "jovian-look", cat: "culture", name: "The Jovian Look", tag: "A recognisable face type", src: ["grafin-1"],
      sections: [["So far", ["Button nose, slightly jutting lower lip, diamond-shaped jaw. [[grafin]] has it."]]] },
    { id: "the-dreamer", cat: "culture", name: "The Dreamer", tag: "Something kept away at night", src: ["grafin-1"],
      sections: [["So far", ["Grafin sleeps in a hair undershirt that \"itches enough to keep The Dreamer away.\""]]] },

    // ================= CREATURES & PLANTS =================
    { id: "symbiote", cat: "nature", name: "The Martian symbiote", tag: "Fungus and lichen in the skin", src: ["kahlun-1"],
      sections: [["So far", [
        "Fungal and lichen colonies live in Martians' skin and show as silver lines; they smell faintly yeasty-sweet.",
        "They vent pheromones that tell local predators \"not prey, just a local.\"",
        "People shed spores as they walk, seeding the symbiote that binds engineered topsoil to regolith.",
        "A new clone body may not accept it at first (see [[ramba]])."
      ]]] },
    { id: "rusthound", cat: "nature", name: "Rusthounds", tag: "Martian dog breed", src: ["kahlun-1"],
      sections: [["So far", ["Mostly husky, bred and modified for Mars. Nanite cultures pull iron from food and dust and lay it down as overlapping back plates, which rust in the wet. See [[patience]]."]]] },
    { id: "zentelos", cat: "nature", name: "Zentelos", tag: "Modified sun-bear", src: ["kahlun-1"],
      sections: [["So far", ["Sleeps in redwood canopies. Its chest patch pulses bioluminescent oil-slick blue as a warning. Protected (\"not a renewable resource\"); a Ceres tourist was concussed trying to pet one."]]] },
    { id: "glimmer", cat: "nature", name: "Glimmer", tag: "Canopy creature", src: ["kahlun-1"],
      sections: [["So far", ["Massive; drops silently from the canopy. Breathes out with a low rumble like grinding stones."]]] },
    { id: "bizcente", cat: "nature", name: "Biz'cente", tag: "Collapsed beehive sinkhole", src: ["kahlun-1"],
      sections: [["So far", [
        "When a ground-nesting colony of stingless bees undergoes population fission, the ground collapses into a sinkhole (this one four metres deep) full of honeycomb.",
        "The bees work out which queen to rotate around. Cybernetic surveyor micro-drones mark harvest boundaries with laser lines."
      ]]] },
    { id: "vermillion-tongue", cat: "nature", name: "Vermillion-tongue", tag: "Prized wild mushroom", src: ["kahlun-1"],
      sections: [["So far", [
        "Pale clusters on the windward side of old redwoods. Spores are unreliable in cultivation, so only wild ones are worth eating.",
        "Foragers' rule: never take more than half of any colony. Also mentioned: buttery yellow soup mushrooms."
      ]]] },

    // ================= LIFE & TECHNOLOGY =================
    { id: "birth-lottery", cat: "tech", name: "Birth lottery (The Tube)", tag: "How Plutonian children arrive", src: ["grafin-1"],
      sections: [["So far", [
        "Held every 31 Standard years. Between lotteries there are no children in The Tube.",
        "Most children are \"assembled from random combinations of genetics and given to a family that wants one.\" Natborn children like [[pella]] carry status."
      ]]] },
    { id: "re-embodiment", cat: "tech", name: "Bodies and long lives", tag: "Re-embodiment", src: ["grafin-1", "kahlun-1"],
      sections: [
        ["The Tube", ["[[tramso]]'s fourth body was killed. [[kath|Teacher Kath]] lets her body age, which is rare. [[vorst]] is 1,217. [[graugrey]] is biotech and cybernetic."]],
        ["Mars", [
          "Kahlun's moms have had at least three, five and eleven bodies; old bodies' bones go into the [[ossuary]] and [[garment-temple]]. Belindrama has lived 740+ years; [[yelina|Elder Yelina]] nearly 2,000.",
          "After death, a mind can spend time in a simulation before a new clone body is ready (Ramba: about 400 days). Thoughts there are instantaneous.",
          "Upload latency: the neuro-scaffolding is supposed to bridge the gap between mind and new body. For [[ramba]] it hasn't."
        ]]
      ] },
    { id: "light-lag", cat: "tech", name: "Messages and light lag", tag: "Mars ↔ The Tube", src: ["grafin-1", "kahlun-1"],
      sections: [["So far", [
        "Messages travel as laser bursts through [[il-exchange|Intersolar League]] relay stations in the Belt; messages \"come when they come.\"",
        "Kahlun I: messages arrive \"about fourteen hours\" after sending, depending on orbits and whether the relays are running clean. Both chapters say \"ten light-hours\".",
        "On 29–30 April 16008 the light time is 6 h 26 m one way (46.5 AU). With the Tube's clock 9 hours behind Earth time, Grafin's 20:30 messages reach Kahlun at about 22:30 Mars time and are read at breakfast, about fourteen hours after sending. Kahlun's 20:15 reply reaches Grafin at about 07:40 the next morning. Both match the chapters.",
        "The delay barely changes through this Mars year: 6 h 03 m to 6 h 27 m. No solar blackouts until 16023.",
        "Tags: KLB (Kahlun Blazatrama), GL (Grafin Lasdannen), H of QT (Herelty)."
      ]]] },
    { id: "il-exchange", cat: "tech", name: "Intersolar League & IL Exchange", tag: "How Grafin met Kahlun", src: ["grafin-1", "kahlun-1"],
      sections: [["So far", [
        "The IL Exchange \"fosters interplanetary relationships.\" It's an assignment; most youths stop writing when it ends. Grafin and Kahlun started at nine.",
        "The Intersolar League runs relay stations in the Belt. (IL Exchange is presumably the Intersolar League's.)"
      ]]] },
    { id: "entity-judgment", cat: "tech", name: "ENTITY-Judgment", tag: "Sends official notices", src: ["grafin-1"],
      sections: [["So far", ["Sends the summons to Counselor Miran's office to Grafin's tablet."]]] },
    { id: "standard-year", cat: "tech", name: "Standard year", tag: "Unit of time", src: ["grafin-1", "kahlun-1"],
      sections: [["So far", ["Ages and intervals are counted in Standard years. Kahlun converts: 1 Standard year 3 months ≈ two-thirds of a Martian year."]]] },
    { id: "penpal-clock", cat: "tech", name: "Penpal Clock", tag: "Tool: light lag and Mars seasons", src: [],
      sections: [["Link", ["Light lag, local times and Mars seasons for any date in AD 16000–16100: <a href=\"https://claude.ai/artifact/ThUKFcEBJQsFtVyVt1bugh\" target=\"_blank\" rel=\"noopener\">open the Penpal Clock</a>. It now defaults to Kahlun on the Hellas coast (southern hemisphere)."]]] }
  ],

  timeline: [
    { when: "about 15957", text: "Kahlun's sisters [[yenna-yamie|Yenna and Yamie]] die, forty years before he is born." },
    { when: "about 15968", text: "The last [[jovian-raids|Jovian raid]] on Mars. [[merschal]]'s moms later marry a rehabilitated slave-soldier. Juliandra's scar dates from a recovery operation the same year." },
    { when: "about 15997", text: "[[grafin]] and [[kahlun]] are born." },
    { when: "about 16004", text: "Kahlun, age 7, has his hip bones replaced to walk on Venus. [[orivante|Uncle Ori]] stays eight months." },
    { when: "about 16006", text: "Grafin and Kahlun start writing through the [[il-exchange|IL Exchange]], age nine." },
    { when: "19 January 16007", text: "[[voli]] dies. (One Standard year, three months and eleven days before Kahlun I.)" },
    { when: "early 16007", text: "A tree kills [[ramba]]'s first body, a few months after Voli; his time in simulation is about 400 days before Kahlun I." },
    { when: "mid 16007", text: "Grafin first mentions [[miran|Counselor Miran]] to Kahlun (ten or eleven months before Kahlun I)." },
    { when: "28 March 16008", text: "Southern spring begins on Mars (Ls 180°)." },
    { when: "26 April 16008", text: "Four days of rain begin on the [[hellas-coast|Hellas coast]] (\"since Third-day\")." },
    { when: "29 April 16008", text: "Grafin I. Light lag 6 h 26 m." },
    { when: "30 April 16008", text: "Kahlun I. The rain breaks at 04:00 Mars time. Kahlun's long reply reaches Grafin about 07:40 Tube time on 1 May." },
    { when: "later in 16008", text: "Uncle Ori might visit, \"if the schedules hold.\" Gabr'yel's parents return in Dry-spring." },
    { when: "8 September 16008", text: "Southern summer begins on Mars." },
    { when: "16023–16031", text: "Mars–Pluto signals pass behind the Sun once each Mars year: about a week of blackout each time." }
  ],

  continuity: [
    // --- across chapters ---
    { sev: "check", title: "Grafin's messages don't match Grafin I", where: "Kahlun I · 05:55 and 06:30 vs Grafin I",
      text: "Kahlun reads several GL messages that Grafin I never shows him writing: \"I'm on the train… Counselor Miran got me alone today for thirty-eight minutes,\" \"I didn't tell her you said matter has memory,\" the Dead Groves token and Comet Force 51. Grafin's morning train was before the Counselor, and on the afternoon train he was texting Herelty. Either add these to Grafin I, or say he wrote them later that evening. Also, Grafin I's 17:00 and 20:30 messages are merged into one in Kahlun I." },
    { sev: "check", title: "Pella looked at him, or didn't?", where: "Kahlun I · 06:30 vs Grafin I · 11:00",
      text: "Grafin's message says Pella \"didn't look at me when he did it.\" In Grafin I, Pella watches him with \"that measuring look\" and speaks to him directly." },
    { sev: "check", title: "Captain Vex after episode 47", where: "Comet Force",
      text: "Grafin I: Vex sacrifices herself in episode 47's bridge scene. Kahlun I: in episode 51 Vex doesn't tell the Engineer about the relay \"before she went into the bridge.\" Is 51 a flashback, or is 47 a different sacrifice?" },
    { sev: "check", title: "Light lag: ten light-hours and fourteen hours", where: "Grafin I · 13:00 · Kahlun I · 05:55 and 20:15",
      text: "Both chapters say ten light-hours, and Kahlun I says messages arrive about fourteen hours after sending. In 16008 the light time is about 6 h 26 m, and never above about 6 h 42 m that century. \"Fourteen hours\" works as written: with the Tube clock 9 hours behind Earth, a 20:30 message from Grafin lands late in Kahlun's evening and is read at breakfast about 14 hours after sending. Only \"ten light-hours\" needs changing, to about six." },
    { sev: "check", title: "Venus is never 40 million km from Mars", where: "Kahlun I · 05:30",
      text: "\"His father is dust in Venus' atmosphere, forty million kilometers away.\" Mars and Venus are never closer than about 98 million km and can be 358 million apart; the average is about 240 million." },
    // --- within Kahlun I ---
    { sev: "minor", title: "Message count", where: "Kahlun I · 05:55 and 06:30",
      text: "He has \"three messages,\" reads the first, then \"the other two,\" then \"the third message,\" which makes four. The first also contains several separate GL lines." },
    { sev: "minor", title: "Is it still raining?", where: "Kahlun I · 05:30, 05:55, 06:50",
      text: "05:55 reads as if the four-day rain is ongoing; at 06:50 Belindrama says it broke at four, and at 05:30 there's sunrise light." },
    { sev: "minor", title: "School, or no school?", where: "Kahlun I · 06:30",
      text: "Kahlun plans to write the long reply \"tonight, after school,\" but he spends the day in the forest. Maybe a rest day after the rain?" },
    { sev: "minor", title: "Skin: umber-brown or translucent?", where: "Kahlun I · 05:30 vs 07:20",
      text: "Deep umber-brown with lichen showing through at 05:30; \"translucent skin\" at 07:20. Both can be true; worth one phrase linking them." },
    { sev: "minor", title: "Robe or undersuit?", where: "Kahlun I · 05:30 vs 07:20",
      text: "He dresses over a pale rose and grey-lavender robe; outdoors the bones sit over a pastel-blue undersuit. A changing moment could go between." },
    { sev: "minor", title: "Juliandra awake and asleep", where: "Kahlun I · 20:15",
      text: "\"Mother Juliandra is awake; … has gone to bed early.\" Probably \"was awake\". Also the only \"Mother\" rather than \"Mama\"." },
    // --- Grafin I ---
    { sev: "check", title: "Graugrey's hair colour", where: "Grafin I · 06:05 vs 17:30",
      text: "Breakfast says he's blond. At 17:30 he has \"a streak of dirt in his white hair.\"" },
    { sev: "minor", title: "Length of maths class", where: "Grafin I · 08:00",
      text: "Twelve minutes of work plus \"forty-eight minutes\" implies a 60-minute class, but the break isn't until 09:30." },
    { sev: "minor", title: "Distance to the Sun", where: "Grafin I · 07:00",
      text: "\"The real sun is 40 AU away.\" On 29 April 16008 Pluto is 44.9 AU from the Sun. \"Forty-five\" would be exact." },
    { sev: "question", title: "Hound jacket before joining", where: "Grafin I · 06:45",
      text: "Grafin wears \"his Hound uniform jacket\" while only \"considering joining the Hounds.\" Fine if school uniforms come in order cuts anyone can wear." },
    { sev: "question", title: "Heights", where: "Grafin I · 06:05 vs 17:30",
      text: "Graugrey is \"the same height as Grafin\" at breakfast but has to stretch to reach his shoulder in the evening." },
    // --- typos ---
    { sev: "typo", title: "Typos spotted: Kahlun I", where: "Kahlun I",
      text: "\"extension the eastern side\" → on the eastern side · \"Ori had became\" → had become · \"She breaths\" / \"Kahlun breaths\" → breathes · \"**chuffs**\" has stray bold markers · \"buzz past his\" → past him · \"Mereschal\" (twice) → Merschal · \"Dekker from doing the his normal thing\" (in Grafin's message; fine if intentional) · \"thirty-minutes early\" → thirty minutes · \"or ask if his dad's parents\" → or asks." },
    { sev: "typo", title: "Typos spotted: Grafin I", where: "Grafin I",
      text: "\"fourty-eight\" → forty-eight · \"seperate\" → separate · \"Community Complex.’.\" has a stray full stop · \"at curved world\" → at the curved world · \"_’Why the fuck…_’\" has the opening quote mark inside the italics." }
  ],

  questions: [
    "What is Quiet-Temple, and is Herelty in care?",
    "What is The Dreamer?",
    "Is Graugrey's armour-grade body normal for Rejuvenants, or from his own history (with Tramso, the war, the New Fire)?",
    "Proposed pairing of gods and orders, from the myths behind the names. Which are right? Pluto (Plouton, giver of riches) → Provisioners · Charon (ferryman of the dead) → Shades · Styx (the river of oaths) → Oathbound · Nix (Night, mother of the Furies in Aeschylus) → Furies · Kerebros (the underworld's dog) → Hounds · Hydra (regrows its heads) → Rejuvenants.",
    "Is The Dreamer connected to Nix? (In Greek myth Night is the mother of Sleep and Dreams.)",
    "Is \"Kerebros\" the in-world spelling, or should it be Kerberos?",
    "Is \"Katabasii\" a family name, a title, or something else? (With six gods and six orders, it probably isn't an order.)",
    "What does the L in KLB stand for?",
    "Is the Electric Saints the Martian religious boy band Kahlun loves?",
    "How do God-Shall-Be-Built, the Mortuary Cult and the Sadistic-Dialectic fit together: one religion with schools, or separate ones?",
    "Who is the Senyara, and how do Senyarists relate to her?",
    "Are the Jovian raiders connected to the New Fire (Marcus Jove) and to Grafin's \"Jovian Look\"? Did Tramso fight in the same war?",
    "Is the Tube's clock about 9 hours behind Earth time? That's what makes the message timing in both chapters work.",
    "What is ENTITY-Judgment?",
    "How old are Tramso, Graugrey, Gratiustar and Juliandra?",
    "Where is Kahlun's village exactly? A longitude lets the Penpal Clock show his local time accurately."
  ]
};

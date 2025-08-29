const sentences = {
  easy: [
  "The bus stops near the park.\nKids play cricket after school.\nDad fixes the old bike.",
  "I like cold ice cream.\nShe waters the green plants.\nRain makes puddles on roads.",
  "The cat sleeps on the chair.\nMom makes tea every morning.\nThe clock ticks on the wall.",
  "He wears a blue cap.\nWe walk together to class.\nThe bell rings at twelve.",
  "She buys milk from the shop.\nThe dog runs behind the ball.\nI paint with bright colors.",
  "Birds fly across the sky.\nA train whistles at night.\nThe lamp glows in the dark.",
  "He eats bread with jam.\nThey clap after the song.\nThe fish swims in the pond.",
  "We write on clean paper.\nShe wears shiny shoes.\nClouds cover the sun today.",
  "I drink water from a glass.\nThe kite flies very high.\nHe laughs at the funny joke.",
  "Dad drives to the market.\nWe play games on Sunday.\nThe rain washes the street.",
  "The baby smiles at her toy.\nDad talks on the phone.\nA bus horn is very loud.",
  "I wash my hands with soap.\nShe plays songs on radio.\nThe flower smells sweet.",
  "He keeps books on the shelf.\nMom cooks rice for lunch.\nRain falls on the roof.",
  "The stars twinkle at night.\nShe ties her hair neatly.\nWe draw with crayons.",
  "I drink tea with sugar.\nThe train is on time.\nDad cuts the old rope.",
  "She plays guitar in the room.\nI eat pasta for dinner.\nBirds fly over the tree.",
  "He carries a bag to school.\nMom tells a bedtime story.\nThe lamp shines bright.",
  "The dog barks at the stranger.\nShe climbs the tall hill.\nWe sit under the tree.",
  "Dad fixes the broken chair.\nRain falls on the window.\nI drink juice from a cup.",
  "She buys apples from the cart.\nHe rides his small cycle.\nThe bell rings loudly.",
  "I read news in the paper.\nMom makes soup tonight.\nThe car stops at signal.",
  "The boy wears a red shirt.\nShe waters the rose plant.\nWe clap for the song.",
  "He jumps into the pool.\nI close the brown door.\nBirds fly in the blue sky.",
  "Mom packs lunch for dad.\nThe train moves slowly.\nShe wears a green dress.",
  "I brush teeth every day.\nHe drinks milk at night.\nThe bus is very late.",
  "We walk in the garden.\nDad washes the bike.\nShe plays with dolls.",
  "I write with a pencil.\nHe eats bread and butter.\nThe clock shows ten.",
  "The cat hides in box.\nBirds eat rice on ground.\nMom cuts fresh mango.",
  "He talks to his friend.\nShe sings a sweet song.\nI play with blocks.",
  "Dad drives a white car.\nWe clap for the play.\nRain cools the earth.",
  "I drink water daily.\nShe wears new shoes.\nHe opens the book.",
  "The baby claps hands.\nDad fixes old TV.\nI eat ice cream.",
  "She paints the wall.\nWe play in park.\nBirds fly away.",
  "I draw a big star.\nMom makes curry.\nThe bell rings.",
  "He runs very fast.\nShe buys milk.\nI wash hands.",
  "The dog jumps.\nMom cooks rice.\nBirds sing.",
  "I eat food.\nShe reads book.\nDad drives car.",
  "He writes note.\nWe play game.\nRain falls.",
  "Mom cuts cake.\nI drink juice.\nShe sings song.",
  "Dad works late.\nBirds fly high.\nShe walks fast.",
  "I clap hands.\nHe kicks ball.\nShe laughs loud.",
  "Mom bakes pie.\nWe draw sun.\nRain is heavy.",
  "She cuts fruit.\nI brush hair.\nHe opens box.",
  "Birds fly south.\nDad drives bus.\nMom buys rice.",
  "We sing song.\nI play game.\nShe reads story.",
  "He runs quick.\nShe claps loud.\nMom smiles wide.",
  "I eat cake.\nDad works hard.\nRain falls fast.",
  "Birds sing soft.\nShe walks slow.\nI drink tea.",
  "He jumps rope.\nMom cooks soup.\nWe clap loud.",
  "She paints pot.\nI wash cup.\nDad cuts wood.",
  "We play cards.\nBirds fly low.\nShe sings tune.",
  "He opens lid.\nI write note.\nMom cooks food.",
  "Rain falls slow.\nDad drives jeep.\nBirds fly fast.",
  "I eat bread.\nShe drinks milk.\nWe play chess.",
  "He runs slow.\nMom cuts veg.\nBirds sing sweet.",
  "She reads map.\nI draw tree.\nDad fixes tap.",
  "We sing rhyme.\nRain pours hard.\nBirds fly west.",
  "He eats pear.\nMom cooks fish.\nI drink soda.",
  "Dad mows lawn.\nShe paints wall.\nWe play tag.",
  "Birds soar high.\nI clap twice.\nMom cuts pie.",
  "He draws star.\nShe reads tale.\nWe sing hymn.",
  "I eat rice.\nDad fixes fan.\nBirds chirp loud.",
  "She plays drum.\nWe walk slow.\nRain falls quick.",
  "He runs fast.\nI drink cola.\nMom cooks stew.",
  "Birds fly east.\nDad cuts rope.\nWe clap loud.",
  "She jumps rope.\nI eat apple.\nMom sings song.",
  "He kicks ball.\nBirds chirp soft.\nRain pours fast.",
  "I draw sun.\nShe plays flute.\nWe sing loud.",
  "Dad fixes bed.\nBirds fly north.\nShe walks slow.",
  "I write name.\nRain drips soft.\nMom bakes cake.",
  "He plays game.\nShe drinks tea.\nWe clap quick.",
  "Birds soar low.\nI sing song.\nMom cooks rice.",
  "He draws car.\nShe reads book.\nRain falls heavy.",
  "I eat jam.\nDad drives cab.\nBirds chirp high.",
  "She paints moon.\nWe play ball.\nRain falls light.",
  "He sings tune.\nI drink juice.\nMom cuts fruit.",
  "Birds fly far.\nShe walks quick.\nDad fixes bike.",
  "I clap loud.\nRain pours slow.\nMom cooks pie.",
  "He eats cake.\nShe reads note.\nWe draw sun.",
  "Dad mows yard.\nBirds sing low.\nI drink tea.",
  "She runs quick.\nHe writes code.\nRain falls quick.",
  "I eat pear.\nMom cooks soup.\nBirds chirp soft.",
  "She paints vase.\nWe clap hands.\nRain pours light.",
  "He draws fish.\nI read tale.\nMom bakes bread.",
  "Birds fly west.\nShe plays lute.\nRain drips slow.",
  "He jumps high.\nI clap twice.\nMom cooks stew.",
  "She reads map.\nBirds sing sweet.\nWe play cards.",
  "I eat corn.\nRain falls fast.\nDad drives bus.",
  "She paints sun.\nHe drinks tea.\nBirds fly east.",
  "We clap loud.\nMom cuts cake.\nRain drips soft.",
  "He writes line.\nBirds chirp loud.\nI sing hymn.",
  "She draws tree.\nRain pours quick.\nDad fixes tap.",
  "I eat rice.\nMom bakes pie.\nBirds fly far."
  ],
  medium: [
  `Typing practice builds strong habits.\nEach session helps you grow faster.\nStay calm when you make mistakes.\nConsistency is the key to mastery.`,
  `Morning sunlight fills the quiet room.\nA cup of coffee warms the hands.\nThe day begins with hopeful thoughts.\nEvery keystroke is a fresh start.`,
  `Technology shapes how we live today.\nMessages travel in a blink of time.\nWe search, learn, and connect online.\nThe digital world keeps expanding.`,
  `The library smells of old paper.\nStudents whisper between the shelves.\nKnowledge rests in silent books.\nCuriosity opens every page.`,
  `A train races across the countryside.\nFields of green pass like a blur.\nPassengers stare through the glass.\nJourneys carry more than distance.`,
  `Typing is like playing an instrument.\nYour fingers move with rhythm.\nEach word is part of a melody.\nPractice creates harmony in motion.`,
  `Rain splashes against the window.\nThe street glows under dim lights.\nPeople run with umbrellas held high.\nStorms test patience and calm.`,
  `Writing emails teaches clear thought.\nShort sentences improve clarity.\nPolite tone makes the message kind.\nProfessional words build respect.`,
  `A farmer wakes before the sun.\nThe soil smells rich with life.\nSeeds rest quietly in the ground.\nHope grows with every season.`,
  `Typing accuracy matters more than speed.\nFast errors slow progress down.\nSteady typing brings confidence.\nCorrect strokes build a solid base.`,
  `A café fills with quiet chatter.\nLaptops glow on wooden tables.\nIdeas flow with every sip of coffee.\nDreamers work while the world rushes.`,
  `The mountain path twists and climbs.\nBreath shortens as steps rise higher.\nNature surrounds with silent beauty.\nReaching the peak brings peace.`,
  `Each word typed is a small victory.\nMistakes are lessons in disguise.\nFocus is sharper with practice.\nTyping is the art of persistence.`,
  `The city comes alive at night.\nNeon signs reflect on wet roads.\nPeople laugh outside small shops.\nLife glitters in hidden corners.`,
  `Good posture prevents tired hands.\nSit straight at your desk daily.\nStretch your fingers in between.\nTyping is smoother with balance.`,
  `History lives in ancient ruins.\nStones whisper stories of time.\nTourists walk slowly in awe.\nPast and present meet in silence.`,
  `Typing brings thoughts to life.\nUnspoken words find their form.\nThe keyboard is a silent canvas.\nCreativity flows with every letter.`,
  `The classroom buzzes with energy.\nChildren raise hands with excitement.\nIdeas bounce from one to another.\nLearning is built on curiosity.`,
  `Typing practice builds strong habits.\nEach session helps you grow faster.\nStay calm when you make mistakes.\nConsistency is the key to mastery.`,
  `Morning sunlight fills the quiet room.\nA cup of coffee warms the hands.\nThe day begins with hopeful thoughts.\nEvery keystroke is a fresh start.`,
  `Technology shapes how we live today.\nMessages travel in a blink of time.\nWe search, learn, and connect online.\nThe digital world keeps expanding.`,
  `The library smells of old paper.\nStudents whisper between the shelves.\nKnowledge rests in silent books.\nCuriosity opens every page.`,
  `A train races across the countryside.\nFields of green pass like a blur.\nPassengers stare through the glass.\nJourneys carry more than distance.`,
  `Typing is like playing an instrument.\nYour fingers move with rhythm.\nEach word is part of a melody.\nPractice creates harmony in motion.`,
  `Rain splashes against the window.\nThe street glows under dim lights.\nPeople run with umbrellas held high.\nStorms test patience and calm.`,
  `Writing emails teaches clear thought.\nShort sentences improve clarity.\nPolite tone makes the message kind.\nProfessional words build respect.`,
  `A farmer wakes before the sun.\nThe soil smells rich with life.\nSeeds rest quietly in the ground.\nHope grows with every season.`,
  `Typing accuracy matters more than speed.\nFast errors slow progress down.\nSteady typing brings confidence.\nCorrect strokes build a solid base.`,
  `A café fills with quiet chatter.\nLaptops glow on wooden tables.\nIdeas flow with every sip of coffee.\nDreamers work while the world rushes.`,
  `The mountain path twists and climbs.\nBreath shortens as steps rise higher.\nNature surrounds with silent beauty.\nReaching the peak brings peace.`,
  `Each word typed is a small victory.\nMistakes are lessons in disguise.\nFocus is sharper with practice.\nTyping is the art of persistence.`,
  `The city comes alive at night.\nNeon signs reflect on wet roads.\nPeople laugh outside small shops.\nLife glitters in hidden corners.`,
  `Good posture prevents tired hands.\nSit straight at your desk daily.\nStretch your fingers in between.\nTyping is smoother with balance.`,
  `History lives in ancient ruins.\nStones whisper stories of time.\nTourists walk slowly in awe.\nPast and present meet in silence.`,
  `Typing brings thoughts to life.\nUnspoken words find their form.\nThe keyboard is a silent canvas.\nCreativity flows with every letter.`,
  `The classroom buzzes with energy.\nChildren raise hands with excitement.\nIdeas bounce from one to another.\nLearning is built on curiosity.`,
  `Focus turns noise into silence.\nDistraction fades with intent.\nTyping becomes a meditation.\nCalm power grows in the mind.`,
  `An airplane cuts through the sky.\nClouds part to reveal blue light.\nPassengers watch the horizon stretch.\nDreams fly beyond the earth.`,
  `Cooking brings families together.\nRecipes pass through generations.\nFlavors tell stories of culture.\nMeals are shared with love.`,
  `A painter mixes colors on canvas.\nBrush strokes create gentle shapes.\nArt speaks where words cannot.\nBeauty shines in silence.`,
  `Typing daily sharpens your reflexes.\nLetters appear without hesitation.\nSpeed comes with steady flow.\nDiscipline turns skill into art.`,
  `The forest whispers with life.\nLeaves rustle under soft wind.\nAnimals move in hidden paths.\nNature sings quietly to itself.`,
  `Students prepare for their exams.\nBooks pile up on wooden desks.\nTime ticks faster each evening.\nEffort always bears fruit later.`,
  `Music flows through the room.\nA guitar plays gentle notes.\nVoices blend into harmony.\nSongs carry emotions far away.`,
  `The market bustles with energy.\nVendors call out their offers.\nColors of fruits shine bright.\nLife thrives in simple trade.`,
  `Typing feels smooth with focus.\nErrors fade into practice.\nConfidence grows each day.\nSuccess waits for persistence.`,
  `A child builds castles in sand.\nWaves wash them away slowly.\nHe laughs and starts again.\nJoy lives in simple moments.`,
  `The moon glows above the hills.\nStars sparkle in deep skies.\nOwls call in distant forests.\nNight wraps the world in peace.`,
  `Work deadlines bring pressure.\nPlanning clears the clutter.\nTasks finish one by one.\nProgress comes with order.`,
  `A writer drafts a new story.\nCharacters live on the page.\nPlots twist with every idea.\nImagination fuels the pen.`,
  `Typing unlocks hidden thoughts.\nSilent minds find their voice.\nIdeas flow into sentences.\nExpression becomes reality.`,
  `Ships sail across the horizon.\nWaves crash against the shore.\nTravelers dream of new lands.\nAdventure calls from the sea.`,
  `Every learner faces obstacles.\nFailure teaches resilience.\nEffort builds determination.\nGrowth follows persistence.`,
  `The café window fogs with steam.\nRaindrops race down the glass.\nStrangers smile politely.\nMoments pass yet stay memorable.`,
  `Typing is not just mechanics.\nIt is rhythm and patience.\nHands dance on the keyboard.\nPractice turns effort into grace.`,
  `A teacher guides with wisdom.\nLessons shape eager minds.\nEncouragement sparks confidence.\nKnowledge becomes a gift.`,
  `Cities rise with tall towers.\nCars rush along busy roads.\nLife beats in crowded streets.\nDreams grow among the noise.`,
  `Sports demand discipline daily.\nPlayers train through fatigue.\nVictories reward hard work.\nTeam spirit wins the game.`,
  `Typing sharpens concentration.\nThe world fades into silence.\nWords flow without pause.\nFocus creates momentum.`,
  `The ocean roars with power.\nSeagulls fly above the waves.\nSand shifts under bare feet.\nNature shows strength and calm.`,
  `Travel opens the mind wide.\nNew places teach new ideas.\nDifferent cultures inspire.\nMemories last forever.`,
  `Typing is a daily practice.\nLike walking it feels natural.\nMuscles learn with time.\nRepetition builds mastery.`,
  `The train station hums with noise.\nAnnouncements echo above.\nTravelers carry heavy bags.\nJourneys cross every path.`,
  `Discipline is a silent friend.\nIt pushes when you feel weak.\nIt reminds you of your goal.\nIt stays when others leave.`,
  `The garden blooms in spring.\nFlowers paint the air with color.\nBees hum between petals.\nLife renews quietly.`,
  `Typing is not a race.\nAccuracy shapes success.\nSpeed will follow practice.\nPatience is the teacher.`,
  `Children play in the park.\nLaughter fills the evening air.\nSwings creak back and forth.\nHappiness feels timeless.`,
  `The river flows endlessly.\nRocks break the rushing stream.\nFish swim against the tide.\nStrength is born in struggle.`,
  `Typing unlocks opportunity.\nJobs demand quick fingers.\nMessages need clarity.\nWords move the world.`,
  `Mountains rise against the sky.\nSnow crowns the tall peaks.\nClimbers take steady steps.\nDreams are carved in stone.`,
  `Books open doors to wisdom.\nEvery page holds a treasure.\nStories shape imagination.\nKnowledge lights the path.`,
  `Typing improves every day.\nFingers grow light and quick.\nThoughts meet the keyboard.\nProductivity feels natural.`,
  `The street glows with lanterns.\nShadows dance on old walls.\nVoices echo softly.\nNight holds quiet secrets.`,
  `Dreams fuel ambition daily.\nThey push us to go further.\nThey remind us to persist.\nThey turn goals into reality.`,
  `Typing turns thought to form.\nIdeas come alive in words.\nThe screen fills with progress.\nCreation is in your hands.`,
  `The festival lights shine bright.\nMusic carries through streets.\nPeople gather with joy.\nTradition warms the night.`,
  `Winds shake the tall trees.\nBirds scatter into the sky.\nClouds roll heavy with rain.\nStorms show raw power.`,
  `Practice makes typing smooth.\nEvery letter feels lighter.\nErrors slowly disappear.\nConfidence builds quietly.`,
  `The classroom clock ticks.\nPencils scratch on paper.\nTeachers guide with care.\nKnowledge grows in silence.`,
  `Life is built on effort.\nSmall steps create progress.\nEvery moment holds value.\nTime rewards patience.`,
  `Typing sharpens the brain.\nIt teaches focus and speed.\nIt builds rhythm in thought.\nIt strengthens memory.`,
  `A candle flickers at night.\nShadows stretch on the wall.\nSilence fills the room.\nCalmness soothes the mind.`,
  `Typing is a hidden art.\nIt demands grace and focus.\nEach word is a building block.\nSentences form meaning.`,
  `Rainbows appear after storms.\nColors paint the open sky.\nHope returns with beauty.\nNature heals gently.`,
  `The museum guards history.\nArtifacts whisper of the past.\nVisitors walk with awe.\nTime rests in display cases.`,
  `Typing feels like meditation.\nBreath matches the rhythm.\nErrors fade with patience.\nCalm leads to mastery.`,
  `Cities never sleep at night.\nLights glow like stars below.\nPeople chase their dreams.\nLife moves without pause.`,
  `A notebook holds quiet thoughts.\nIdeas scribble into lines.\nDreams take written form.\nWords carry deep meaning.`,
  `Typing teaches persistence.\nFailures are stepping stones.\nDiscipline builds habit.\nGrowth follows effort.`,
  `The desert stretches endlessly.\nHeat rises from the sand.\nCamels walk in slow rhythm.\nSurvival demands strength.`,
  `Typing clears mental clutter.\nThoughts align with speed.\nFocus sharpens naturally.\nClarity follows practice.`,
  `The old clock chimes softly.\nTime marks each quiet hour.\nMoments slip into memory.\nLife flows without pause.`,
  `Typing trains the fingers.\nIt sharpens the senses.\nIt builds steady rhythm.\nIt strengthens the will.`,
  `A lighthouse guards the coast.\nIts light cuts through fog.\nSailors steer with trust.\nGuidance saves lives.`,
  `Typing helps at every job.\nEmails need clarity daily.\nReports demand precision.\nMessages shape success.`,
  `Rain cools the summer heat.\nChildren splash in puddles.\nLaughter fills the street.\nJoy feels contagious.`,
  `Typing reflects discipline.\nIt shows patience in action.\nIt shapes focus daily.\nIt turns practice into skill.`,
  `The windmill turns slowly.\nFields stretch wide and green.\nFarmers tend with care.\nNature and work unite.`,
  `Typing grows with daily habit.\nEach letter builds strength.\nMistakes guide progress.\nConsistency wins always.`,
  `The theater curtain rises.\nActors step into light.\nStories unfold with emotion.\nAudiences watch in awe.`,
  `Typing is a useful gift.\nIt saves time each day.\nIt gives clarity to thought.\nIt supports every goal.`,
  `Snow falls gently on streets.\nFootprints mark fresh paths.\nChildren throw snowballs.\nWinter brings wonder.`,
  `Typing smooths communication.\nIt connects across distance.\nIt spreads ideas swiftly.\nIt bridges every gap.`,
  `The horizon glows at dawn.\nBirds sing the new day.\nFresh air fills the lungs.\nHope rises with light.`,
  `Typing creates confidence.\nEach success motivates.\nEvery letter flows faster.\nAchievement feels close.`,
  `The marketplace shines alive.\nShops display bright colors.\nVoices mix with laughter.\nTradition thrives.`,
  `Typing is steady growth.\nPatience sharpens accuracy.\nEffort builds confidence.\nPractice shapes mastery.`,
  `Stars guide sailors at night.\nConstellations tell stories.\nThe sky is a map of time.\nWisdom rests above.`,
  `Typing focuses the mind.\nIt blocks out distractions.\nIt trains discipline.\nIt strengthens clarity.`,
  `The river reflects the sky.\nBoats float quietly.\nFishermen cast their nets.\nLife flows with rhythm.`,
  `Typing brings structure.\nIt organizes thought.\nIt creates expression.\nIt supports clarity.`,
  `The temple bells echo.\nPrayers rise in silence.\nFaith binds the community.\nPeace settles deeply.`,
  `Typing unlocks learning.\nIt helps in every subject.\nIt sharpens comprehension.\nIt improves study skills.`,
  `The playground fills with joy.\nSlides shine in the sun.\nChildren run freely.\nMemories are made.`,
  `Typing turns practice fun.\nIt feels rewarding daily.\nIt strengthens memory.\nIt inspires focus.`,
  `The mountain lake reflects sky.\nStill water holds peace.\nBirds rest by the shore.\nNature breathes calmly.`,
  `Typing is a modern skill.\nIt fuels communication.\nIt enables creation.\nIt builds opportunity.`
  ],
  hard: [
   `The city skyline shimmered in the haze of dawn,\nTraffic slowly awoke with impatient horns,\nNewspapers fluttered at every street corner,\nVendors arranged baskets filled with fresh fruit,\nAnd children hurried to catch the yellow bus.`,
  `Scientists debated climate policies in a crowded hall,\nCharts and graphs filled the glowing projector screen,\nEach voice clashed with urgency and conviction,\nA storm brewed both inside and outside the chamber,\nYet hope lingered in the quiet nods of agreement.`,
  `Beneath the ocean, corals painted the seabed bright,\nSchools of fish scattered like living confetti,\nA lone turtle drifted gracefully into the deep,\nSunlight fractured into a thousand shards of gold,\nWhile silence roared louder than any storm above.`,
  `Airplanes soared above cotton-like clouds with ease,\nPassengers stared at endless blue horizons in awe,\nConversations blended into a symphony of accents,\nCoffee carts rattled softly through narrow aisles,\nDreams of distant places lingered in tired minds.`,
  `Writers carved stories into keyboards late at night,\nThe lamp glowed warmly against a pile of notes,\nCoffee cups stood like soldiers beside the desk,\nPages crumpled into tiny failures on the floor,\nBut one sentence held the power to change a life.`,
  `Politicians argued fiercely on live television debates,\nEvery gesture magnified by restless cameramen,\nAudiences reacted with laughter, cheers, or groans,\nSocial media lit up with memes within seconds,\nAnd truth drowned in a flood of clever rhetoric.`,
  `The mountain trail twisted between icy cliffs and mist,\nBoots crunched loudly on frozen gravel beneath,\nAn eagle traced arcs above the jagged horizon,\nEvery breath hung visible in the frosty morning air,\nUntil silence swallowed the hiker’s last step.`,
  `Hospitals echoed with hurried footsteps and alarms,\nDoctors scribbled notes with tense concentration,\nMachines beeped in rhythms of fragile survival,\nRelatives clutched hands in silent desperate prayers,\nAnd a newborn cried, cutting through the chaos.`,
  `Markets in small towns were alive with bargaining calls,\nBright fabrics fluttered like sails in the hot breeze,\nVendors balanced baskets high upon their heads,\nChildren chased after stray goats in narrow alleys,\nThe smell of spices lingered long after sunset.`,
  `The astronaut drifted beyond the station’s shadow,\nStars looked close enough to pluck like glowing fruit,\nEarth spun below, a fragile marble in darkness,\nRadio chatter echoed inside the heavy helmet,\nAnd the silence of space felt louder than thunder.`,
  `Artificial intelligence fuels rapid innovation,\nYet ethics lags behind its velocity.\nMachines interpret patterns humans overlook,\nWhile society debates the unseen risks,\nAnd governments scramble to define boundaries.`,
  `Ocean currents carry whispers of climate change,\nFishermen witness tides that no longer obey,\nCoral reefs bleach under merciless heat,\nMigrating whales alter ancient pathways,\nHumanity wonders if it’s already too late.`,
  `Spacecraft orbit silently above our skies,\nTransmitting terabytes of unseen data,\nAstronauts float while gazing at fragile Earth,\nGround control calculates every second precisely,\nAnd humankind dreams of Mars as the next home.`,
  `Blockchain secures decentralized economies,\nMiners validate blocks with relentless energy,\nCryptography shields secrets in complex layers,\nMarkets swing between chaos and opportunity,\nAnd trust is rewritten in mathematical proofs.`,
  `Biologists decode genomes of rare species,\nEach sequence a puzzle of evolutionary history,\nData flows through powerful cloud servers,\nAlgorithms predict potential medical cures,\nAnd bioethics weighs progress against morality.`,
  `Urban skylines glitter with neon reflections,\nElectric cars glide through midnight avenues,\nSmart sensors adjust lights in empty streets,\nGig workers deliver food with quiet urgency,\nAnd drones map the pulse of restless cities.`,
  `Journalists fact-check amidst viral misinformation,\nBreaking news competes with fabricated stories,\nTruth is drowned by endless algorithmic feeds,\nHeadlines are optimized for clicks not clarity,\nAnd readers struggle to trust what they see.`,
  `Stock exchanges hum with invisible trades,\nMicroseconds decide billion-dollar outcomes,\nAI bots compete in relentless digital arenas,\nMarkets react before humans comprehend,\nAnd fortunes shift in fractions of a blink.`,
  `Medical robots assist in delicate surgeries,\nGuided by doctors thousands of miles away,\nPrecision replaces shaky human hands,\nRecovery times shrink to days not weeks,\nAnd access to care expands through technology.`,
  `Mountaineers climb peaks with frozen resolve,\nOxygen thins and every step feels eternal,\nGlaciers crack beneath uncertain footing,\nFlags are planted at the roof of the world,\nAnd triumph echoes in the thin mountain air.`,
  `Diplomats negotiate under chandeliers of history,\nTranslators whisper carefully chosen words,\nEvery pause carries weight of fragile alliances,\nHandshakes mask years of hidden conflict,\nAnd peace survives on the edge of silence.`,
  `Cybersecurity experts trace elusive intrusions,\nDark web forums trade stolen identities,\nFirewalls flicker under relentless attacks,\nEncryption holds like a fortress in the storm,\nAnd hackers lurk as shadows in plain sight.`,
  `Renewable energy farms stretch across deserts,\nSolar panels tilt like disciplined soldiers,\nWind turbines turn against fading sunsets,\nBatteries store tomorrow’s fragile hope,\nAnd carbon fades beneath sustainable ambition.`,
  `Quantum computers bend rules of calculation,\nQubits entangle across invisible states,\nEquations collapse into instant solutions,\nClassical limits dissolve into abstraction,\nAnd science leaps into uncharted futures.`,
  `Airports bustle with orchestrated chaos,\nBoarding calls echo in countless languages,\nLuggage rolls across endless polished tiles,\nSecurity scanners hum with restless precision,\nAnd flights connect the pulse of globalization.`,
  `Libraries digitize manuscripts of lost centuries,\nAncient ink preserved in shimmering code,\nStudents browse archives from distant continents,\nKnowledge once scarce flows like open rivers,\nAnd wisdom travels faster than memory.`,
  `Volcanoes roar with primal authority,\nAsh blankets villages in haunting silence,\nSeismologists interpret tremors as warnings,\nRivers of fire carve new landscapes overnight,\nAnd Earth reminds us of its violent core.`,
  `Film directors frame stories through timeless lenses,\nCameras capture emotions beyond words,\nSoundtracks blend memory with imagination,\nAudiences surrender to crafted illusions,\nAnd art reshapes how reality is remembered.`,
  `Marathoners train on empty predawn streets,\nEvery mile a meditation in motion,\nSweat narrates stories of unseen resilience,\nCrowds cheer as exhaustion meets triumph,\nAnd finish lines symbolize personal rebirth.`,
  `Diplomas are handed on graduation mornings,\nFamilies erupt with irrepressible pride,\nPhotographs freeze moments of sacrifice,\nDreams converge into uncertain futures,\nAnd generations move forward with fragile hope.`,
  `Gamers compete in virtual coliseums,\nSpectators cheer across glowing screens,\nAvatars clash with legendary precision,\nEsports teams chase glory and sponsorships,\nAnd victories become history in pixels.`,
  `Chefs experiment in molecular kitchens,\nDishes arrive as edible works of science,\nTextures deceive the tongue with surprises,\nSmoky vapors rise like culinary theatre,\nAnd meals become fleeting performances.`,
  `Satellites orbit as guardians of Earth,\nWeather patterns are mapped with silent accuracy,\nGlobal internet beams to rural horizons,\nSpace debris circles as a silent threat,\nAnd humanity relies on signals from above.`,
  `Philosophers debate identity in the digital age,\nAvatars blur lines between body and self,\nSocial media curates fragments of existence,\nAuthenticity is questioned at every turn,\nAnd meaning is reconstructed daily.`,
  `Emergency responders rush into collapsing buildings,\nSirens wail across smoke-filled avenues,\nCourage outweighs instinct for self-preservation,\nLives are saved through seconds of sacrifice,\nAnd communities rebuild on shared strength.`,
  `Musicians stream concerts to global audiences,\nSongs echo across continents in real time,\nFans connect through pixels and chords,\nTechnology replaces physical stages,\nAnd art finds new homes in headphones.`,
  `Historians analyze documents of forgotten wars,\nDiaries whisper pain of unseen soldiers,\nBorders shift in fragile inked treaties,\nMuseums preserve artifacts of fragile memory,\nAnd nations learn through reluctant hindsight.`,
  `Futurists imagine cities on floating seas,\nEngineers draw plans of resilient domes,\nRobotics automate every essential function,\nCitizens adapt to post-climate realities,\nAnd utopia is debated as survival.`,
  `Doctors use VR to train in simulated rooms,\nMistakes cost nothing in crafted realities,\nConfidence grows in immersive repetition,\nPatients benefit from precise rehearsals,\nAnd technology redefines medical education.`,
  `Entrepreneurs pitch ideas in crowded halls,\nSlides flicker with charts of exponential growth,\nInvestors weigh risks behind practiced smiles,\nFunding secures futures of daring visionaries,\nAnd startups chase legends of disruption.`,
  `Children program robots in elementary schools,\nPlaygrounds echo with lines of simple code,\nCreativity fuses with computational logic,\nTomorrow’s inventors practice without fear,\nAnd the next revolution hides in classrooms.`,
  `Archaeologists dig beneath shifting sands,\nFragments of pottery rewrite civilizations,\nLost temples emerge under cautious brushes,\nHistory reveals itself in broken artifacts,\nAnd the past speaks in fractured whispers.`,
  `Athletes break records in roaring stadiums,\nNational anthems thunder across skies,\nVictory laps shimmer with national pride,\nDefeat humbles legends into silence,\nAnd sport unites divided crowds with passion.`,
  `Authors publish books in digital clouds,\nWords exist without the weight of paper,\nReaders swipe through infinite shelves,\nReviews spread faster than printed ink,\nAnd literature evolves beyond bookstores.`,
  `Theaters project holograms of distant actors,\nPerformances blend illusion with presence,\nAudiences gasp at spectral companions,\nArt transcends bodies into light and code,\nAnd theatre reinvents its ancient form.`,
  `Pilots navigate storms with calm calculation,\nInstruments guide them through hidden skies,\nPassengers sleep unaware of turbulence,\nRunways glow as beacons in black nights,\nAnd landings feel like unspoken miracles.`,
  `Scientists measure silence in deep caves,\nBats navigate with ultrasonic wisdom,\nWater drips mark centuries of patience,\nStalactites hold secrets older than history,\nAnd explorers walk where light has never lived.`,
  `Diplomatic cables reveal truths years later,\nDeclassified files rewrite common knowledge,\nPublic trust wrestles with hidden histories,\nWhistleblowers risk everything for clarity,\nAnd nations hide secrets in plain sight.`,
  `Nurses steady hands in emergency chaos,\nMachines beep like relentless metronomes,\nFamily prayers echo in waiting rooms,\nDoctors balance science with compassion,\nAnd healing becomes both art and duty.`,


  ]
};

const slogans = [
  { main: "Master Every Keystroke", sub: "Precision today leads to speed tomorrow." },
  { main: "Type Bold, Type Smart", sub: "Every letter sharpens your focus." },
  { main: "Speed Meets Clarity", sub: "Fast fingers, clear thoughts." },
  { main: "Your Flow, Your Power", sub: "Turn typing into second nature." },
  { main: "Build Rhythm, Build Skill", sub: "Typing is music made with keys." },
  { main: "From Slow to Pro", sub: "Every practice moves you forward." },
  { main: "Type with Confidence", sub: "Accuracy first, speed follows." },
  { main: "Push the Keys, Push Limits", sub: "Growth is one keystroke away." },
  { main: "Make Words Your Playground", sub: "Enjoy the art of typing." },
  { main: "Fingers on Fire", sub: "Ignite your typing speed daily." },
  { main: "Letters into Legacy", sub: "Turn practice into lifelong skill." },
  { main: "The Key to Focus", sub: "Typing sharpens more than speed." },
  { main: "No Typos, Only Triumph", sub: "Refine precision with each try." },
  { main: "Type It, Own It", sub: "Every line is a victory." },
  { main: "Key Your Success", sub: "Fast typing fuels big goals." },
  { main: "Shape Speed, Shape Mind", sub: "Typing rewires your brain for focus." },
  { main: "Consistency Creates Champions", sub: "Daily typing is silent training." },
  { main: "Flow Beyond Limits", sub: "Typing is the art of seamless motion." },
  { main: "Think Fast, Type Faster", sub: "Turn thought into instant words." },
  { main: "Your Keys, Your Strength", sub: "Typing defines digital confidence." },
  { main: "The Keyboard is Your Canvas", sub: "Create with speed and precision." },
  { main: "Momentum in Motion", sub: "Fast typing builds unstoppable flow." },
  { main: "Skill in Silence", sub: "Typing speaks louder than words." },
  { main: "Every Mistake is a Lesson", sub: "Refine accuracy with practice." },
  { main: "Race with Your Fingers", sub: "Beat yesterday’s speed today." },
  { main: "Keys to Productivity", sub: "Typing makes ideas unstoppable." },
  { main: "Power in Practice", sub: "Typing is repetition turned mastery." },
  { main: "Level Up Your Speed", sub: "One key at a time." },
  { main: "Silent Speed, Loud Results", sub: "Type faster, think sharper." },
  { main: "Train the Brain, Train the Fingers", sub: "Typing boosts your focus daily." },
  { main: "Fuel Your Flow", sub: "Typing is the rhythm of progress." },
  { main: "Smarter Hands, Smarter Mind", sub: "Typing is cognitive fitness." },
  { main: "Type Like a Pro", sub: "Every keystroke builds skill." },
  { main: "Turn Keys into Victory", sub: "Typing is your digital superpower." },
  { main: "Accuracy Before Speed", sub: "Strong foundations make champions." },
  { main: "Fast, Fluid, Fearless", sub: "Let your typing break barriers." },
  { main: "Type. Focus. Win.", sub: "Discipline brings speed." },
  { main: "Typing is Thinking Out Loud", sub: "Let thoughts flow into words." },
  { main: "From Keys to Confidence", sub: "Typing fuels communication power." },
  { main: "Beat the Clock", sub: "Typing faster than time itself." },
  { main: "Every Key Counts", sub: "Precision builds speed." },
  { main: "Type to Transform", sub: "Unlock your digital potential." },
  { main: "Your Words, Your Speed", sub: "Type like the future depends on it." },
  { main: "Stay Sharp, Type Daily", sub: "Typing is mental workout." },
  { main: "Don’t Just Type, Dominate", sub: "Be the fastest version of you." },
  { main: "Speed is Earned", sub: "Every letter is progress." },
  { main: "The Key is Consistency", sub: "Daily effort creates mastery." },
  { main: "More Than Typing", sub: "It’s discipline in motion." },
  { main: "Precision Creates Confidence", sub: "Type clean, type strong." },
  { main: "Keys that Shape Futures", sub: "Typing opens every digital door." },
  { main: "Let Your Hands Think", sub: "Typing is thought in motion." },
  { main: "Control the Keys, Control the Pace", sub: "Speed follows mastery." },
  { main: "One Flow, Endless Growth", sub: "Typing is your path to clarity." },
  { main: "Focus. Flow. Fingers.", sub: "Typing brings discipline alive." },
  { main: "Never Just Type", sub: "Every keystroke builds tomorrow." },
  { main: "Your Mind, Your Speed", sub: "Typing makes thought tangible." },
  { main: "Type Fearlessly", sub: "Mistakes are stepping stones." },
  { main: "Master Keys, Master Life", sub: "Typing is the new literacy." },
  { main: "Push Speed, Push Potential", sub: "Your fingers tell your story." },
  { main: "Keystrokes Create Champions", sub: "Be faster than your doubts." }
];


const LEADERBOARD_KEY = 'typelet_leaderboard_v1';

let currentSentence = '';
let difficulty = 'easy';
let mode = 'practice';
let timerStarted = false;
let startTime = null;
let endTime = null;
let timerInterval = null;
let keystrokes = 0;
let typingStarted = false;
let correctChars = 0;
let testCompleted = false;
let lastWPM = 0;
let lastTypingTime = null;
let decayInterval = null;

const modeSelect = document.getElementById('mode-select');
const difficultySelect = document.getElementById('difficulty-select');
const historyDropdown = document.getElementById('history-filter');
const historyBody = document.getElementById('history-tbody');
const sloganMain = document.getElementById('slogan-text');
const sloganSub = document.getElementById('slogan-sub');
const targetDisplay = document.getElementById('target-text-container');
const typingArea = document.getElementById('typing-input');
const startBtn = document.getElementById('start-btn');
const newBtn = document.getElementById('new-btn');
const wpmDisplay = document.getElementById('wpm');
const accuracyDisplay = document.getElementById('accuracy');
const keystrokeDisplay = document.getElementById('keystrokes');
const timerDisplay = document.getElementById('timer');
const timerMetric = document.getElementById('timer-metric');
const modal = document.getElementById('result-modal');
const modalSummary = document.getElementById('result-summary');
const modalCloseBtn = document.getElementById('result-close-btn');
const modalCloseBottom = document.getElementById('result-close-btn-bottom');
const clearHistoryBtn = document.getElementById('clear-history-btn');
const guideBtn = document.getElementById('guide-btn');
const guideModal = document.getElementById('guide-modal');
const guideCloseBtn = document.getElementById('guide-close-btn');
const tabButtons = Array.from(document.querySelectorAll('.guide-tab'));
const tabContents = {
  fingers: document.getElementById('fingers-tab-panel'),
  posture: document.getElementById('posture-tab-panel'),
  tips: document.getElementById('tips-tab-panel')
};
const resultNewTestBtn = document.getElementById('result-new-test');

function escapeHtml(text) {
  return text.replace(/[&<>"']/g, s => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[s]);
}

function pickSlogan() {
  const s = slogans[Math.floor(Math.random() * slogans.length)];
  sloganMain.textContent = s.main;
  sloganSub.textContent = s.sub;
}

function pickSentence() {
  const pool = sentences[difficulty];
  currentSentence = pool[Math.floor(Math.random() * pool.length)];
  return currentSentence;
}

function renderText(sentence, typed) {
  let html = '';
  for (let i = 0; i < sentence.length; i++) {
    const sChar = escapeHtml(sentence[i]);
    const tChar = typed[i];
    if (!tChar) {
      html += `<span>${sChar}</span>`;
    } else if (tChar === sentence[i]) {
      html += `<span class="correct">${sChar}</span>`;
    } else {
      html += `<span class="incorrect">${sChar}</span>`;
    }
  }
  targetDisplay.innerHTML = html;
}

function resetStats() {
  wpmDisplay.textContent = '0';
  accuracyDisplay.textContent = '0%';
  keystrokeDisplay.textContent = '0';
  timerDisplay.textContent = "00:00";
  correctChars = 0;
  keystrokes = 0;
  testCompleted = false;
  lastWPM = 0;
  lastTypingTime = null;
  if (decayInterval) {
    clearInterval(decayInterval);
    decayInterval = null;
  }
}

function resetTest() {
  typingStarted = false;
  timerStarted = false;
  startTime = null;
  endTime = null;
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  typingArea.disabled = true;
  typingArea.value = '';
  startBtn.disabled = false;
  newBtn.disabled = true;
  resetStats();
  pickSlogan();
  pickSentence();
  renderText(currentSentence, '');
  updateTimerVisibility();
  updateHistory();
  modal.classList.remove('active');
  guideModal.classList.remove('active');
  document.body.style.overflow = '';
}

function startTest() {
  resetTest();
  typingStarted = true;
  timerStarted = false;
  testCompleted = false;
  typingArea.disabled = false;
  typingArea.value = '';
  startBtn.disabled = true;
  newBtn.disabled = false;
  renderText(currentSentence, '');
  typingArea.focus();
  typingArea.style.height = "auto";
}

function restrictInput(e) {
  if (!typingStarted || testCompleted) {
    e.preventDefault();
    return;
  }
  if (typingArea.value.length >= currentSentence.length && !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab', 'Enter'].includes(e.key)) {
    e.preventDefault();
  }
}

function decayWPM() {
  // Only decay if typing is not active and WPM is not 0
  if (!typingStarted && lastWPM > 0) {
    lastWPM = Math.max(0, lastWPM - 1); // Drop by 1 WPM every 100ms
    wpmDisplay.textContent = lastWPM;
  } else if (lastWPM === 0) {
    // Stop decay interval once WPM reaches 0
    clearInterval(decayInterval);
    decayInterval = null;
  }
}

function handleTyping(e) {
  if (!typingStarted || testCompleted) return;
  
  // Clear the decay interval on any keypress to hold WPM
  if (decayInterval) {
    clearInterval(decayInterval);
    decayInterval = null;
  }
  
  lastTypingTime = performance.now();
  let val = typingArea.value;
  if (val.length > currentSentence.length) {
    typingArea.value = val.substring(0, currentSentence.length);
    val = typingArea.value;
  }

  // Start timer on first keystroke for all modes
  if (!timerStarted && val.length > 0) {
    timerStarted = true;
    startTime = performance.now();

    // Start a visible timer interval that counts up
    timerInterval = setInterval(() => {
      updateTimer();
      updateStats(typingArea.value);
    }, 100);
  }

  renderText(currentSentence, val);
  keystrokes = val.length; 
  updateStats(val);
  
  // Set up decay interval if the user stops typing
  clearTimeout(typingArea.decayTimeout);
  typingArea.decayTimeout = setTimeout(() => {
    if (!decayInterval) {
      decayInterval = setInterval(decayWPM, 100);
    }
  }, 1000); 



  if (val.length >= currentSentence.length) {
    endTest(val);
  }
}

// Autosize textarea to fit content and prevent page scroll shift
typingArea.addEventListener('input', () => {
  typingArea.style.height = "auto";
  typingArea.style.height = typingArea.scrollHeight + "px";
  if (typingArea.scrollHeight > 180) typingArea.style.overflowY = "auto";
  else typingArea.style.overflowY = "hidden";
});

// Accurate WPM calculation with smooth drop
function calculateWPM(typedCharacters, timeInSeconds) {
  // Prevent WPM spike on first character by waiting a bit
  if (typedCharacters < 2 || timeInSeconds < 1) return 0;
  
  const words = typedCharacters / 5;
  const minutes = timeInSeconds / 60;
  let wpm = Math.round(words / minutes);
  
  lastWPM = wpm;
  return wpm;
}

function getElapsedTime() {
  if (!startTime) return 0;
  return (performance.now() - startTime) / 1000;
}

function updateStats(typed) {
  // Count correct characters
  correctChars = 0;
  for (let i = 0; i < Math.min(typed.length, currentSentence.length); i++) {
    if (typed[i] === currentSentence[i]) {
      correctChars++;
    }
  }
  
  // Calculate accuracy based on total typed characters
  let accuracy = 0;
  if (typed.length > 0) {
    accuracy = Math.round((correctChars / typed.length) * 100);
  }
  
  accuracyDisplay.textContent = accuracy + '%';
  keystrokeDisplay.textContent = typed.length; // Keystrokes = total characters typed
  
  // Calculate WPM - starts immediately when typing begins
  let wpm = 0;
  if (timerStarted && typed.length > 0) {
    const elapsedTime = getElapsedTime();
    wpm = calculateWPM(typed.length, elapsedTime);
  }
  
  wpmDisplay.textContent = wpm;
}

function updateTimer() {
  if (!timerStarted || testCompleted || mode !== 'timed') return;
  const totalSeconds = Math.floor(getElapsedTime());
  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;
  
  timerDisplay.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function endTest(typed) {
  if (testCompleted) return;
  
  testCompleted = true;
  typingStarted = false;
  
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  
  if (decayInterval) {
    clearInterval(decayInterval);
    decayInterval = null;
  }
  
  typingArea.disabled = true;
  startBtn.disabled = false;
  newBtn.disabled = false;
  
  // Final calculations
  const finalTime = getElapsedTime();
  const finalWPM = calculateWPM(typed.length, finalTime);
  const finalAccuracy = typed.length === 0 ? 0 : Math.round((correctChars / typed.length) * 100);
  
  wpmDisplay.textContent = finalWPM;
  accuracyDisplay.textContent = finalAccuracy + '%';
  
  showResultModal();
}

function showResultModal() {
  if (guideModal.classList.contains('active')) guideModal.classList.remove('active');
  const showTime = mode === 'timed';
  
  modalSummary.innerHTML = `
    <div class="result-stats">
      <div class="result-stat">
        <div class="stat-icon"><i class="fas fa-flag"></i></div>
        <div class="stat-info">
          <div class="stat-label">Difficulty</div>
          <div class="stat-value">${capitalize(difficulty)}</div>
        </div>
      </div>
      <div class="result-stat">
        <div class="stat-icon"><i class="fas fa-clock"></i></div>
        <div class="stat-info">
          <div class="stat-label">Mode</div>
          <div class="stat-value">${capitalize(mode)}</div>
        </div>
      </div>
      ${showTime ? `
      <div class="result-stat">
        <div class="stat-icon"><i class="fas fa-stopwatch"></i></div>
        <div class="stat-info">
          <div class="stat-label">Time</div>
          <div class="stat-value">${timerDisplay.textContent}</div>
        </div>
      </div>` : ''}
      <div class="result-stat">
        <div class="stat-icon"><i class="fas fa-tachometer-alt"></i></div>
        <div class="stat-info">
          <div class="stat-label">WPM</div>
          <div class="stat-value">${wpmDisplay.textContent}</div>
        </div>
      </div>
      <div class="result-stat">
        <div class="stat-icon"><i class="fas fa-bullseye"></i></div>
        <div class="stat-info">
          <div class="stat-label">Accuracy</div>
          <div class="stat-value">${accuracyDisplay.textContent}</div>
        </div>
      </div>
      <div class="result-stat">
        <div class="stat-icon"><i class="fas fa-keyboard"></i></div>
        <div class="stat-info">
          <div class="stat-label">Keystrokes</div>
          <div class="stat-value">${keystrokeDisplay.textContent}</div>
        </div>
      </div>
    </div>
    <div class="result-encouragement">
      <i class="fas fa-award"></i>
      <p>Keep practicing and you'll get even better!</p>
    </div>
  `;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  modal.focus();
  saveScore();
  updateHistory();
}

function saveScore() {
  let scores = JSON.parse(localStorage.getItem(LEADERBOARD_KEY)) || [];
  scores.push({
    date: new Date().toLocaleDateString(),
    difficulty,
    mode,
    wpm: wpmDisplay.textContent,
    accuracy: accuracyDisplay.textContent,
    keystrokes: keystrokeDisplay.textContent,
    time: timerDisplay.textContent
  });
  localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(scores));
}

function updateHistory() {
  let data = JSON.parse(localStorage.getItem(LEADERBOARD_KEY)) || [];
  let filter = historyDropdown.value || 'all';
  if (filter !== 'all') data = data.filter(x => x.difficulty === filter);
  if (!data.length) {
    historyBody.innerHTML = `<tr><td colspan="5" style="text-align:center">No history available</td></tr>`;
    return;
  }
  historyBody.innerHTML = '';
  data.forEach(entry => {
    let tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${entry.date}</td><td>${entry.wpm}</td><td>${entry.accuracy}</td><td>${capitalize(entry.difficulty)}</td><td>${capitalize(entry.mode)}</td>`;
    historyBody.appendChild(tr);
  });
}

function capitalize(str) {
  return str ? str.charAt(0).toUpperCase() + str.slice(1) : '';
}

modalCloseBtn.onclick = modalCloseBottom.onclick = () => {
  modal.classList.remove('active');
  typingArea.focus();
  document.body.style.overflow = '';
};

resultNewTestBtn.onclick = () => {
  modal.classList.remove('active');
  resetTest();
  startTest();
  document.body.style.overflow = '';
};

guideBtn.onclick = () => {
  if (modal.classList.contains('active')) modal.classList.remove('active');
  guideModal.classList.add('active');
  renderFingerCarousel();
  renderPostureCarousel();
  guideModal.querySelector('.guide-modal-card').focus();
  document.body.style.overflow = 'hidden';
};

guideCloseBtn.onclick = () => {
  guideModal.classList.remove('active');
  document.body.style.overflow = '';
};

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (guideModal.classList.contains('active')) {
      guideModal.classList.remove('active'); document.body.style.overflow = '';
    } else if (modal.classList.contains('active')) {
      modal.classList.remove('active'); typingArea.focus(); document.body.style.overflow = '';
    }
  }
});

window.onclick = e => {
  if (e.target === guideModal) {
    guideModal.classList.remove('active'); document.body.style.overflow = '';
  } else if (e.target === modal) {
    modal.classList.remove('active'); typingArea.focus(); document.body.style.overflow = '';
  }
};

tabButtons.forEach((btn, idx) => {
  btn.onclick = () => {
    tabButtons.forEach(b => {
      b.classList.remove('active');
      tabContents[b.dataset.tab].style.display = 'none';
      b.setAttribute('aria-selected', false);
    });
    btn.classList.add('active');
    tabContents[btn.dataset.tab].style.display = 'flex';
    btn.setAttribute('aria-selected', true);
  };
});

clearHistoryBtn.onclick = () => {
  if (confirm('Clear all history?')) {
    localStorage.removeItem(LEADERBOARD_KEY);
    updateHistory();
  }
};

function updateTimerVisibility() {
  if (mode === 'timed') {
    timerMetric.classList.add('show');
  } else {
    timerMetric.classList.remove('show');
  }
}

modeSelect.onchange = e => {
  mode = e.target.value;
  updateTimerVisibility();
  resetTest();
};

difficultySelect.onchange = e => {
  difficulty = e.target.value;
  resetTest();
};

historyDropdown.onchange = updateHistory;

startBtn.onclick = startTest;
newBtn.onclick = () => {
  modal.classList.remove('active');
  resetTest();
  startTest();
  document.body.style.overflow = '';
};

typingArea.addEventListener('input', handleTyping);
typingArea.addEventListener('keydown', restrictInput);

// Guide carousels
const fingerImages = [
  "images/fingers1.jpg",
  "images/fingers5.png", "images/fingers6.webp"
];
let fingerIndex = 0;
function renderFingerCarousel() {
  const img = document.getElementById('img-fingers');
  const dots = document.getElementById('fingers-slider-dots');
  img.src = fingerImages[fingerIndex];
  dots.innerHTML = fingerImages.map((_, i) =>
    `<span class="carousel-dot${i === fingerIndex ? ' active' : ''}" data-index="${i}"></span>`
  ).join('');
  [...dots.children].forEach(dot => {
    dot.onclick = e => {
      fingerIndex = parseInt(e.target.getAttribute('data-index'));
      renderFingerCarousel();
    };
  });
}
document.getElementById('finger-prev').onclick = () => {
  fingerIndex = (fingerIndex + fingerImages.length - 1) % fingerImages.length;
  renderFingerCarousel();
};
document.getElementById('finger-next').onclick = () => {
  fingerIndex = (fingerIndex + 1) % fingerImages.length;
  renderFingerCarousel();
};

const postureImages = [
  "images/sitting4.jpg",
   "images/sitting3.jpg"
];
let postureIndex = 0;
function renderPostureCarousel() {
  const img = document.getElementById('img-posture');
  const dots = document.getElementById('posture-slider-dots');
  img.src = postureImages[postureIndex];
  dots.innerHTML = postureImages.map((_, i) =>
    `<span class="carousel-dot${i === postureIndex ? ' active' : ''}" data-index="${i}"></span>`
  ).join('');
  [...dots.children].forEach(dot => {
    dot.onclick = e => {
      postureIndex = parseInt(e.target.getAttribute('data-index'));
      renderPostureCarousel();
    };
  });
}
document.getElementById('posture-prev').onclick = () => {
  postureIndex = (postureIndex + postureImages.length - 1) % postureImages.length;
  renderPostureCarousel();
};
document.getElementById('posture-next').onclick = () => {
  postureIndex = (postureIndex + 1) % postureImages.length;
  renderPostureCarousel();
};

window.onload = () => {
  resetTest();
  updateTimerVisibility();
  updateHistory();
  pickSlogan();
  tabButtons.forEach((btn, idx) => {
    btn.classList.toggle('active', idx === 0);
    for (const key in tabContents) {
      tabContents[key].style.display = 'none';
    }
    if (tabButtons[0]) tabContents[tabButtons[0].dataset.tab].style.display = 'flex';
    btn.setAttribute('aria-selected', idx === 0);
  });
  renderFingerCarousel();
  renderPostureCarousel();
};

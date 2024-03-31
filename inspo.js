const quotes = [
    "I am learning all the time. The tombstone will be my diploma. - Eartha Kitt",
    "I only move forwards, never backwards, darling. - Grace Jones",
    "I work very hard and I'm worth every cent. - Naomi Campbell",
    "Power is not given to you. You have to take it. - Beyonce",
    "When I see myself as an old woman, I just think about being happy. And hopefully, I'll still be fly. - Rihanna",
    "As I get older, the more I stay focused on the acceptance of myself and others, and choose compassion over judgement and curiosity over fear. - Tracee Ellis Ross",
    "When I dare to be powerful, to use my strength in the service of my vision, then it becomes less and less important whether I am afraid. - Audre Lorde",
    "Women belong in all places where decisions are being made. It shouldn't be that women are the exception. - Ruth Bader Ginsburg",
    "You know you do need mentors, but in the end, you really just need to believe in yourself. - Diana Ross",
    "I am no longer accepting the things I cannot change. I am changing the things I cannot accept. ― Angela Davis",
    "I don't have any time to stay up all night worrying about what someone who does'nt love me has to say about me. - Viola Davis",
    "When you take care of yourself, you're a better person to others. When you feel good about yourself, you treat others better. - Solange Knowles",
    "Even if it makes others uncomfortable, I will love who I am. - Janelle Monae",
    "You don't make progress by standing on the sidelines, whimpering and complaining. You make progress by implementing ideas. - Shirley Chisolm, Politican, First Black woman nominated for President",
    "Black women ain't bitter. They are just tired of being expected to settle for less. - Issa Rae",
    "Don't settle for average. Bring your best to the moment. Then, whether it fails ot succeeds, at least you know you gave it all you had. We need to live the best that's in us. - Angela Basset, Actress",
    "When you put love out in the world it travels, and it can touch people and reach people in ways that we never even expected - Laverne Cox, Actress",
    "I thrive on obstacles. If I'm told that it can't be told, then I push harder. - Issa Rae",
    "I have standards I don't plan on lowering for anybody … including myself. - Zendaya",
    "I always believed that when you follow your heart or your gut, when you really follow the things that feel great to you, you can never lose, because settling is the worst feeling in the world. - Rihanna",
    "Hell no to my fears. No to impostor syndrome, no to believing I’m not enough. - Danielle Brooks",
    "I’m convinced that we Black women possess a special indestructible strength that allows us to not only get down, but to get up, to get through, and to get over. - Janet Jackson",
    "Sometimes you've got to let everything go — purge yourself. If you are unhappy with anything … whatever is bringing you down, get rid of it. Because you'll find that when you're free, your true creativity, your true self comes out. - Tina Turner",
    "You wanna know what scares people? Success. When you don't make moves and when you don't climb up the ladder, everybody loves you because you're not competition. - Nicki Minaj",
    "I'd rather regret the risks that didn't work out than the chances I didn't take at all. - Simone Biles",
    "There's so many things that life is, and no matter how many breakthroughs, trials will exist and we're going to get through it. Just be strong. - Mary J Blige",
    "Beauty is not just a white girl. It's so many different flavors and shades. - Queen Latifah",
    "I don’t want to force myself into an institution that doesn’t seem to appreciate what I bring. - Nikole Hannah Jones",
    "Admitting mistakes is a fundamental skill too few of us learn. In part, this is because we’ve been taught it’s wrong to be wrong. - Stacey Abrams",
    "When we’re talking about diversity, it’s not a box to check. It is a reality that should be deeply felt and held and valued by all of us. - Ava DuVernay",
    "We’re bosses, and that’s what I consider feminism: female hustlers. - Cardi B",
    "It’s okay to fall down. Get up, look sickening, and make them eat it! - RuPaul",
    "Change is made of choices, and choices are made of character. - Amanda Gorman",
    "Treasure your curiosity and nurture your imagination. - Shirley Ann Jackson, physicist",
    "Success is liking yourself, liking what you do, and liking how you do it. - Maya Angelou",
    "We need to reshape our own perception of how we view ourselves. We have to step up as women to take the lead. - Beyonce",
    "Failure is an important part of your growth and developing resilience. Don’t be afraid to fail. - Michelle Obama",
    "Before I do anything, I practice it for a while, and then when I know it’s the bomb, then I’m gonna present it to everybody. - Megan Thee Stallion",
    "You just gotta use the sunset as a reset button and start over in the morning with every chance you get to open your eyes. - Victoria Monet"

  ];

  // Generate random quote
  function generateQuote() {
    // Pull quote from array
   const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote-text").textContent = randomQuote;
  };
  
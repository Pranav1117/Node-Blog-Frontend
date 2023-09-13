/*import { createContext, useState } from "react";
import "../../icon/Avatar.png";
export const data = createContext();

function Store(props) {
  const [info, setInfo] = useState([
    {
      category: "Gaming",
      id: 1,
      name: "Resident evil",
      desc: "Resident Evil 4 Remake Releases Mini Prequel Game",
      details:
        "Resident Evil 4 is a remake of the 2005’s eponymous GameCube game, one of the most popular entries in Capcom’s survival horror series. This remake keeps the same story as its predecessor, following the adventures of agent Leon S. Kennedy as he tries to save Ashley Graham, the daughter of the President of the United States who was kidnapped by a strange cult in a remote Spanish village. While the plot remains the same as the 2005 game, the Resident Evil 4 remake brings a share of new features, from improved graphics and a creepier atmosphere to a better gameplay experience with six optional control schemes.",
      release:
        "Resident Evil 4 will release on PC, PS4, PS5, and Xbox Series X/S on March 24.",
      image: "https://images4.alphacoders.com/124/thumbbig-1244847.webp",
      articleby: "Dmitry Nozhenko",
      avatar:
        "https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp",
      likes: 9.2 + "k claps",
      postdate: "August " + 21 + " " + 2017,
      genre1: "horror",
      genre2: "action",
      genre3: "sci-fi",
    },

    {
      category: "Gaming",
      id: 2,
      name: "Final fantasy",
      desc: "Final Fantasy 14 is Getting Its Own Shoe Line from Puma",
      details:
        "Square Enix's Final Fantasy 14 continues onward with new updates following the conclusion of the Hydaelyn and Zodiark saga in the Endwalker expansion. Final Fantasy 14 patch 6.1 and beyond depicts the Warrior of Light's post-Endwalker adventure as players work to discover secrets regarding the Void, a dark and dangerous realm that once thrived like the Source. Although the next Final Fantasy 14 expansion will not release in 2023, players can expect more story content this year and a major graphical overhaul in patch 7.0. Moreover, brand-new Final Fantasy 14 merchandise is on the way including new shoes by renowned manufacturer Puma",
      release: "Final Fantasy 14 is available now for PC, PS4, and PS5.",
      image:
        "https://gh.cdn.sewest.net/assets/ident/ffxiv-freetrial/images/common/ogp_FR.jpg",
      articleby: "Dmitry Nozhenko",
      avatar:
        "https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp",
      likes: 9.2 + "k claps",
      postdate: "August " + 21 + " " + 2017,
      genre1: "horror",
      genre2: "action",
      genre3: "sci-fi",
    },

    {
      category: "Gaming",
      id: 3,
      name: "Destiny 2",
      desc: "Another Destiny 2 Exotic is Broken and Doing Crazy Damage",
      details:
        "Destiny 2 players have stumbled upon yet another bug that is causing an old Exotic weapon to deal an absurd amount of damage against rank-and-file enemies. Bugs are part and parcel of game development, and Bungie is no stranger to handling such nuisances. In recent times, however, Destiny 2's Exotic weapon-related bugs have become a pain point for Bungie, and the launch of Lightfall expansion has only exacerbated the issue further.",
      release:
        "Destiny 2 is available on PC, PS4, PS5, Xbox One, and Xbox Series X/S.",
      image: "https://images4.alphacoders.com/817/817281.jpg",
      articleby: "Dmitry Nozhenko",
      avatar:
        "https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp",
      likes: 9.2 + "k claps",
      postdate: "August " + 21 + " " + 2017,
      genre1: "horror",
      genre2: "action",
      genre3: "sci-fi",
    },

    {
      category: "Gaming",
      id: 4,
      name: "Sons of the Forest",
      desc: "It’s Possible to Go Shark Surfing in Sons of the Forest",
      details:
        "The fact that Sons of the Forest has been released to early access means that there's bound to be a few bugs, and one person has noticed a glitch that allows players to go surfing on the back of a shark. Although it's an indie title, Endnight's sequel to The Forest has been one of the biggest horror game releases of 2023 so far. It may be going up against the Resident Evil 4 remake and Alan Wake 2, but this creepy survival game shows there's a lot of love for the smaller studios.",
      release: "Sons of the Forest is out in early access on PC.",
      image:
        "https://www.giantbomb.com/a/uploads/original/33/338034/3381991-2584519888-libra.jpg",
      articleby: "Dmitry Nozhenko",
      avatar:
        "https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp",
      likes: 9.2 + "k claps",
      postdate: "August " + 21 + " " + 2017,
      genre1: "horror",
      genre2: "action",
      genre3: "sci-fi",
    },
    {
      category: "Bollywood",
      id: 5,
      name: "Bhool Bhulaiya",
      IMDb: "5.7/10",
      desc: "When strangers Reet and Ruhan cross paths, their journey leads to an abandoned mansion and a dreaded spirit who has been trapped for 18 years.",
      details:
        "An accidental, yet destined meet up between two strangers Ruhaan and Reet, ends up with them visiting Reet's home town in Rajasthan. Fate leads them to opening up an old secret due to which all hell breaks loose leading to one lie, leading to a whole pile of lies sends Ruhaan and Reet on a scary rollercoaster ride and their tragedy keeps becoming our comedy.",
      release: "20 May 2022",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4BmT6kZWkieCJ8jZG16HnsTLNFEaMhxVsLbMen2hAxSjUBXp7",
      articleby: "Dmitry Nozhenko",
      avatar:
        "https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp",
      likes: 9.2 + "k claps",
      postdate: "August " + 21 + " " + 2017,
      genre1: "horror",
      genre2: "action",
      genre3: "sci-fi",
    },
    {
      category: "Bollywood",
      id: 6,
      name: "Pathaan",
      IMDb: "6.4/10",
      desc: "An Indian spy takes on the leader of a group of mercenaries who have nefarious plans to target his homeland.",
      details:
        "2019 article 370 is withdrawn by Indian government in Jammu Kashmir.Pakistani General Qadir along with a terrorist Jim decides to plan a big attack on India.In present times Pathaan a RAW agent is traced in Africa who was missing since years his senior officer Nandini comes across suspicious activity and decides to trace Pathaan Back to the past Pathaan had started the JOCR (Joint Operation and Covert Research) which recruited soldiers with disability and trauma and was headed by Nandini. ",
      release: "25 January 2023",
      image:
        "https://m.media-amazon.com/images/M/MV5BM2QzM2JiNTMtYjU4Ny00MDZkLTk3MmUtYTRjMzVkZGJlNmYyXkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_FMjpg_UX1000_.jpg",
      articleby: "Dmitry Nozhenko",
      avatar:
        "https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp",
      likes: 9.2 + "k claps",
      postdate: "August " + 21 + " " + 2017,
      genre1: "horror",
      genre2: "action",
      genre3: "sci-fi",
    },

    {
      category: "Bollywood",
      id: 7,
      name: "Dangal",
      IMDb: "8.3/10",
      desc: "Former wrestler Mahavir Singh Phogat and his two wrestler daughters struggle towards glory at the Commonwealth Games in the face of societal oppression.",
      details:
        "Biopic of Mahavir Singh Phogat, who taught wrestling to his daughters Babita Kumari and Geeta Phogat. Geeta Phogat was India's first female wrestler to win at the 2010 Commonwealth Games, where she won the gold medal (55 kg) while her sister Babita Kumari won the silver (51 kg)",
      release: "25 January 2023",
      image:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/922e6bbb-9e16-46fc-b084-ff0ea6d8b7c2/damdao8-db99b400-e493-4e94-9c0d-4b2b776d7c2b.jpg/v1/fill/w_1024,h_1558,q_75,strp/dangal_movie_poster_by_rahulkadu_damdao8-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTU1OCIsInBhdGgiOiJcL2ZcLzkyMmU2YmJiLTllMTYtNDZmYy1iMDg0LWZmMGVhNmQ4YjdjMlwvZGFtZGFvOC1kYjk5YjQwMC1lNDkzLTRlOTQtOWMwZC00YjJiNzc2ZDdjMmIuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.cL1hPA1eE_KGtRVeKazlzBexjXTQpTiaqMD3q-xm9bI",
      articleby: "Dmitry Nozhenko",
      avatar:
        "https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp",
      likes: 9.2 + "k claps",
      postdate: "August " + 21 + " " + 2017,
      genre1: "horror",
      genre2: "action",
      genre3: "sci-fi",
    },
    {
      category: "Bollywood",
      id: 8,
      name: "3 Idiots",
      IMDb: "8.4/10",
      desc: "Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently, even as the rest of the world called them ",
      details:
        "Racho is an engineering student. His two friends. Farhan and Raju, Racho sees the world in a different way. Racho goes somewhere one day. And his friends find him. When Racho is found, it becomes a one of a great scientist in the world.",
      release: "25 December 2009",
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQJKJ6lGwFMrQR0gDdFAp0KU4kJ5WYhEpB8GcrQtlhrcAQ75QV-",
      articleby: "Dmitry Nozhenko",
      avatar:
        "https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp",
      likes: 9.2 + "k claps",
      postdate: "August " + 21 + " " + 2017,
      genre1: "horror",
      genre2: "action",
      genre3: "sci-fi",
    },
    {
      category: "Hollywood",
      id: 9,
      name: "Top Gun :Maverick",
      IMDb: "8.3/10",
      desc: "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission that demands the ultimate sacrifice from those chosen to fly it.",
      details:
        "Set 30 years after its predecessor, it follows Maverick's return to the United States Navy Strike Fighter Tactics Instructor program (also known as U.S. Navy-Fighter Weapons School - TOPGUN), where he must confront his past as he trains a group of younger pilots, among them the son of Maverick's deceased best friend Lieutenant Nick Goose Bradshaw, USN",
      release: "27 May 2022",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRLeDZOOOe39EylZoDSJteMkbX8lqS4JT-SvEZ8W2M6s1DRBZMd",
      articleby: "Dmitry Nozhenko",
      avatar:
        "https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp",
      likes: 9.2 + "k claps",
      postdate: "August " + 21 + " " + 2017,
      genre1: "horror",
      genre2: "action",
      genre3: "sci-fi",
    },
    {
      category: "Hollywood",
      id: 10,
      name: "Avengers: Infinity War",
      IMDb: "8.4/10",
      desc: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
      details:
        "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment, the fate of Earth and existence has never been more uncertain.",
      release: "27 April 2018",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmE2vwxy5KaCu7cRuYYdgNdQKddux5OYgGwsPo0kqP_xzLnsDV",
      articleby: "Dmitry Nozhenko",
      avatar:
        "https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp",
      likes: 9.2 + "k claps",
      postdate: "August " + 21 + " " + 2017,
      genre1: "horror",
      genre2: "action",
      genre3: "sci-fi",
    },
    {
      category: "Hollywood",
      id: 11,
      name: "Joker",
      IMDb: "8.4/10",
      desc: "The rise of Arthur Fleck, from aspiring stand-up comedian and pariah to Gotham's clown prince and leader of the revolution.",
      details:
        "A socially inept clown for hire - Arthur Fleck aspires to be a stand up comedian among his small job working dressed as a clown holding a sign for advertising. He takes care of his mother- Penny Fleck, and as he learns more about his mental illness, he learns more about his past. Dealing with all the negativity and bullying from society he heads downwards on a spiral, in turn showing how his alter ego Joker, came to be.",
      release: "2 October 2019",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuTcvL4wc0fbBjm1h5CRiFEZ2TnNKtu8KtoPSxTsj6mkedHeWl",
      articleby: "Dmitry Nozhenko",
      avatar:
        "https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp",
      likes: 9.2 + "k claps",
      postdate: "August " + 21 + " " + 2017,
      genre1: "horror",
      genre2: "action",
      genre3: "sci-fi",
    },
    {
      category: "Hollywood",
      id: 12,
      name: "The Exorcist",
      IMDb: "8.1/10",
      desc: "When a teenage girl is possessed by a mysterious entity, her mother seeks the help of two priests to save her daughter.",
      details:
        "A visiting actress in Washington, D.C., notices dramatic and dangerous changes in the behavior and physical make-up of her 12-year-old daughter. Meanwhile, a young priest at nearby Georgetown University begins to doubt his faith while dealing with his mother's terminal sickness. And, book-ending the story, a frail, elderly priest recognizes the necessity for a show-down with an old demonic enemy.",
      release: "26 December 1973",
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRqvU5RQ_ppeJUTwvuoRJZ3I4iBAEFW6vc7BlcQf7mc0qvh3Kue",
      articleby: "Dmitry Nozhenko",
      avatar:
        "https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp",
      likes: 9.2 + "k claps",
      postdate: "August " + 21 + " " + 2017,
      genre1: "horror",
      genre2: "action",
      genre3: "sci-fi",
    },
    {
      category: "Fitness",
      id: 13,
      name: "Pull ups",
      desc: "There are certain exercises that could qualify as a standard benchmark for overall relative strength to an individual. Pull-ups are certainly one of the most challenging bodyweight exercises, and often represent a bucket-list goal for many fitness enthusiasts",
      details:
        "Pull-ups are certainly one of the most challenging bodyweight exercises, and often represent a bucket-list goal for many fitness enthusiasts. It also happens to be a standard test out for every single branch of the military and for good reason, too. Moreover, putting in the work to learn how to properly do a pull-up and building the upper body and back strength you need to do them is worth it—not only is it satisfying to check the goal off your list, but the benefits of pull-ups make them one of the most efficient and effective strengthening exercises to add to your routine to boost your overall fitness and strengthen and sculpt your body.",
      image:
        "https://manmatters.com/blog/content/images/2021/11/Untitled-design---2021-11-01T125710.356.jpg",
      articleby: "Dmitry Nozhenko",
      avatar:
        "https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp",
      likes: 9.2 + "k claps",
      postdate: "August " + 21 + " " + 2017,
      genre1: "horror",
      genre2: "action",
      genre3: "sci-fi",
    },
    {
      category: "Fitness",
      id: 14,
      name: "Deadlift",
      desc: "11 Deadlift Benefits That Are Backed By Science",
      details:
        "Deadlifts place a big emphasis on your lower body, including your glutes, quads, and hamstrings, resulting in strong and dense legs. Adding deadlifts to your training plan will take your leg strength to another level.",
      image:
        "https://barbend.com/wp-content/uploads/2021/04/BarBend-Article-Image-760-x-427-93.jpg",
      articleby: "Dmitry Nozhenko",
      avatar:
        "https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp",
      likes: 9.2 + "k claps",
      postdate: "August " + 21 + " " + 2017,
      genre1: "horror",
      genre2: "action",
      genre3: "sci-fi",
    },
    {
      category: "Fitness",
      id: 15,
      name: "Running",
      desc: "Regular running or jogging offers many health benefits.",
      details:
        "Jogging or running is a popular form of physical activity. About one in 5 Australians try running (or jogging) at some stage in their life. Running is an appealing exercise because it doesn't cost a lot to take part and you can run at any time that suits you.",
      image:
        "https://content.dhhs.vic.gov.au/sites/default/files/Running_iStock_74642299_1050x600.jpg",
      articleby: "Dmitry Nozhenko",
      avatar:
        "https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp",
      likes: 9.2 + "k claps",
      postdate: "August " + 21 + " " + 2017,
      genre1: "horror",
      genre2: "action",
      genre3: "sci-fi",
    },
    {
      category: "Fitness",
      id: 16,
      name: "Streching",
      desc: "Studies about the benefits of stretching have had mixed results. Some research shows that stretching doesn't reduce muscle soreness after exercise.",
      details:
        "Before you plunge into stretching, make sure you do it safely and effectively. While you can stretch anytime, anywhere, proper technique is key. Stretching incorrectly can actually do more harm than good.",
      image:
        "https://www.kineticptmd.com/wp-content/uploads/2021/09/The-Health-Benefits-of-Stretching.jpg",
      articleby: "Dmitry Nozhenko",
      avatar:
        "https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp",
      likes: 9.2 + "k claps",
      postdate: "August " + 21 + " " + 2017,
      genre1: "horror",
      genre2: "action",
      genre3: "sci-fi",
    },
    {
      category: "Technology",
      id: 17,
      name: "Machine learning",
      desc: "Machine learning is a branch of artificial intelligence (AI) and computer science which focuses on the use of data and algorithms to imitate the way that humans learn, gradually improving its accuracy.",
      details:
        "Machine learning is an important component of the growing field of data science. Through the use of statistical methods, algorithms are trained to make classifications or predictions, and to uncover key insights in data mining projects. These insights subsequently drive decision making within applications and businesses, ideally impacting key growth metrics.",
      image:
        "https://www.fsm.ac.in/blog/wp-content/uploads/2022/08/ml-e1610553826718.jpg",
      articleby: "Dmitry Nozhenko",
      avatar:
        "https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp",
      likes: 9.2 + "k claps",
      postdate: "August " + 21 + " " + 2017,
      genre1: "horror",
      genre2: "action",
      genre3: "sci-fi",
    },
    {
      category: "Technology",
      id: 18,
      name: "Data Science",
      desc: "Data science is the study of data to extract meaningful insights for business.",
      details:
        "Data science is the study of data to extract meaningful insights for business. It is a multidisciplinary approach that combines principles and practices from the fields of mathematics, statistics, artificial intelligence, and computer engineering to analyze large amounts of data.",
      image:
        "https://thedatascientist.com/wp-content/uploads/2019/06/what-is-data-science.jpg",
      articleby: "Dmitry Nozhenko",
      avatar:
        "https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp",
      likes: 9.2 + "k claps",
      postdate: "August " + 21 + " " + 2017,
      genre1: "horror",
      genre2: "action",
      genre3: "sci-fi",
    },
    {
      category: "Technology",
      id: 19,
      name: "Artificial Inteligence",
      desc: "Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems.",
      details:
        "As the hype around AI has accelerated, vendors have been scrambling to promote how their products and services use AI. Often what they refer to as AI is simply one component of AI, such as machine learning. AI requires a foundation of specialized hardware and software for writing and training machine learning algorithms",
      image:
        "https://www.simplilearn.com/ice9/free_resources_article_thumb/Advantages_and_Disadvantages_of_artificial_intelligence.jpg",
      articleby: "Dmitry Nozhenko",
      avatar:
        "https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp",
      likes: 9.2 + "k claps",
      postdate: "August " + 21 + " " + 2017,
      genre1: "horror",
      genre2: "action",
      genre3: "sci-fi",
    },
    {
      category: "News",
      id: 20,
      heading:
        "Russia signs deal to deploy tactical nuclear weapons in Belarus",
      desc: "Russia and Belarus signed a deal on Thursday to formalize the deployment of Russian tactical nuclear missiles on Belarusian territory, a step Moscow said was driven by rising tensions with the West.",
    },
    {
      category: "News",
      id: 21,
      heading: "Ukraine set to get F-16 fighter jets",
      desc: "Ukraine has repeatedly asked its allies for F-16 fighter jets to help combat Russia’s ongoing invasion. The issue has returned to the fore recently",
    },
    {
      category: "News",
      id: 22,
      heading: "B.C. premier to skip China during 2-week Asia trade mission",
      desc: "British Columbia Premier David Eby is heading to Asia on a trade mission that makes stops in Japan, Korea, Singapore and Vietnam,But the premiers tour itinerary, released by his office on the day of his departure, does not include China",
    },
  ]);
  return (
    <>
      <data.Provider value={[info, setInfo]}>{props.children}</data.Provider>
    </>
  );
}

export default Store;*/

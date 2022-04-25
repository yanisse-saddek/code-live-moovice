const movies = [
{
    overview: "A young boy finds himself pursued by two assassins in the Montana wilderness with a survival expert determined to protecting him - and a forest fire threatening to consume them all.",
    poster_path: "/xCEg6KowNISWvMh8GvPSxtdf9TO.jpg",
    release_date: "2021-05-05",
    title: "Those Who Wish Me Dead",
            popular: true
},
{
    overview: "Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung's best warrior, Sub-Zero, seeks out and trains with Earth's greatest champions as he prepares to stand against the enemies of Outworld in a high stakes battle for the universe.",
    poster_path: "/nkayOAUBUu4mMvyNf9iHSUiPjF1.jpg",
    release_date: "2021-04-07",
    title: "Mortal Kombat",
            popular: true
},
{
    overview: "An elite Navy SEAL uncovers an international conspiracy while seeking justice for the murder of his pregnant wife.",
    poster_path: "/rEm96ib0sPiZBADNKBHKBv5bve9.jpg",
    release_date: "2021-04-29",
    title: "Tom Clancy's Without Remorse",
            popular: false
},
{
    overview: "Alice, a young hearing-impaired girl who, after a supposed visitation from the Virgin Mary, is inexplicably able to hear, speak and heal the sick. As word spreads and people from near and far flock to witness her miracles, a disgraced journalist hoping to revive his career visits the small New England town to investigate. When terrifying events begin to happen all around, he starts to question if these phenomena are the works of the Virgin Mary or something much more sinister.",
    poster_path: "/lcCKVNQKAqZlLI5qNRJK8MPahbI.jpg",
    release_date: "2021-03-31",
    title: "The Unholy",
            popular: false
},
{
    overview: "Victoria is a young mother trying to put her dark past as a Russian drug courier behind her, but retired cop Damon forces Victoria to do his bidding by holding her daughter hostage. Now, Victoria must use guns, guts and a motorcycle to take out a series of violent gangsters—or she may never see her child again.",
    poster_path: "/1jkNM1NHyHsxiBBuOlOeqgmidM0.jpg",
    release_date: "2021-04-16",
    title: "Vanquish",
            popular: false
},
{
    overview: "In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.",
    poster_path: "/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg",
    release_date: "2021-03-24",
    title: "Godzilla vs. Kong",
            popular: false
},
{
    overview: "Hutch Mansell, a suburban dad, overlooked husband, nothing neighbor — a \"nobody.\" When two thieves break into his home one night, Hutch's unknown long-simmering rage is ignited and propels him on a brutal path that will uncover dark secrets he fought to leave behind.",
    poster_path: "/oBgWY00bEFeZ9N25wWVyuQddbAo.jpg",
    release_date: "2021-03-26",
    title: "Nobody",
            popular: false
},
{
    overview: "In the 1930s, a young reverend and his family are forced to confront their worst fears when they discover their new home holds a horrifying secret.",
    poster_path: "/xD9mc8JCVXA8T8u4Od7qOUBuGH4.jpg",
    release_date: "2021-04-29",
    title: "The Banishing",
            popular: false
},
{
    overview: "To join Adrien in Shanghai, Marinette is going to visit her uncle Wang who is celebrating his anniversary. But, as soon as she arrives in China, her purse gets stolen with Tikki inside, whom she needs to secretly transform into Ladybug! Without money and alone in the immense city, Marinette accepts the help of a young and resourceful girl, Fei. The two girls will ally and discover the existence of a new magical jewel, the Prodigious. Hawk Moth, also present in Shanghai, seeks to finding it since a long time...",
    poster_path: "/msI5a9TPnepx47JUb2vl88hb80R.jpg",
    release_date: "2021-04-04",
    title: "Miraculous World: Shanghai – The Legend of Ladydragon",
            popular: false
},
{

    overview: "A lonesome stranger with nerves of steel must track down and kill a rogue hitman to satisfy an outstanding debt. But the only information he's been given is a time and location where to find his quarry. No name. No description. Nothing.",
    poster_path: "/vXHzO26mJaOt4VO7ZFiM6No5ScT.jpg",
    release_date: "2021-04-30",
    title: "The Virtuoso",
            popular: true
},
{
    overview: "Before he built a drug empire, Ferry Bouman returns to his hometown on a revenge mission that finds his loyalty tested — and a love that alters his life.",
    poster_path: "/w6n1pu9thpCVHILejsuhKf3tNCV.jpg",
    release_date: "2021-05-14",
    title: "Ferry",
            popular: false
},
{

    overview: "Tanjirō Kamado, joined with Inosuke Hashibira, a boy raised by boars who wears a boar's head, and Zenitsu Agatsuma, a scared boy who reveals his true power when he sleeps, boards the Infinity Train on a new mission with the Fire Hashira, Kyōjurō Rengoku, to defeat a demon who has been tormenting the people and killing the demon slayers who oppose it!",
    poster_path: "/h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg",
    release_date: "2020-10-16",
    title: "Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train",
            popular: false
},
{

    overview: "Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.",
    poster_path: "/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg",
    release_date: "2021-03-18",
    title: "Zack Snyder's Justice League",
            popular: false
},
{

    overview: "A special crimes investigator forms an unlikely bond with a serial killer to bring down a global child sex trafficking syndicate.",
    poster_path: "/m6bUeV4mczG3z2YXXr5XDKPsQzv.jpg",
    release_date: "2021-05-14",
    title: "I Am All Girls",
            popular: false
},
{

    overview: "Set before the events of ‘Soul’, 22 refuses to go to Earth, enlisting a gang of 5 new souls in attempt of rebellion. However, 22’s subversive plot leads to a surprising revelation about the meaning of life.",
    poster_path: "/32vLDKSzcCMh55zqqaSqqUA8naz.jpg",
    release_date: "2021-04-30",
    title: "22 vs. Earth",
            popular: false
},
{

    overview: "Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. But when an evil force threatened the land, the dragons sacrificed themselves to save humanity. Now, 500 years later, that same evil has returned and it’s up to a lone warrior, Raya, to track down the legendary last dragon to restore the fractured land and its divided people.",
    poster_path: "/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg",
    release_date: "2021-03-03",
    title: "Raya and the Last Dragon",
            popular: false
},
{

    overview: "Drac tries out some new monster pets to help occupy Tinkles for playtime.",
    poster_path: "/dkokENeY5Ka30BFgWAqk14mbnGs.jpg",
    release_date: "2021-04-02",
    title: "Monster Pets: A Hotel Transylvania Short",
            popular: false
},
{

    overview: "A former intelligence agent gets involved with the first human clone, Seo Bok, who others seek, causing trouble.",
    poster_path: "/nxxuWC32Y6TULj4VnVwMPUFLIpK.jpg",
    release_date: "2021-04-12",
    title: "Seobok",
            popular: false
},
{

    overview: "Following a zombie outbreak in Las Vegas, a group of mercenaries take the ultimate gamble: venturing into the quarantine zone to pull off the greatest heist ever attempted.",
    poster_path: "/x3taBaWfRzw1NIKhEPpKPwKBAOC.jpg",
    release_date: "2021-05-14",
    title: "Army of the Dead",
            popular: false
},
{

    overview: "Jim Hanson’s quiet life is suddenly disturbed by two people crossing the US/Mexico border – a woman and her young son – desperate to flee a Mexican cartel. After a shootout leaves the mother dead, Jim becomes the boy’s reluctant defender. He embraces his role as Miguel’s protector and will stop at nothing to get him to safety, as they go on the run from the relentless assassins.",
    poster_path: "/6vcDalR50RWa309vBH1NLmG2rjQ.jpg",
    release_date: "2021-01-15",
    title: "The Marksman",
            popular: true
},
    {
        overview: "This documentary examines the 1999 London bombings that targeted Black, Bangladeshi and gay communities, and the race to find the far-right perpetrator. He terrorized a city, seeking to ignite a race war but justice was served by those who wouldn't let his hate win.",
        poster_path: "/15LfWRuW4DZr1n1Ccce4KGy14RL.jpg",
        release_date: "2022-04-26",
        title: "Nail Bomber: Manhunt",
        popular: false
    },
    {
        overview: "A behind-the-scenes look at P!NK as she balances family and life on the road, leading up to her first Wembley Stadium performance on 2019's \"Beautiful Trauma\" world tour.",
        poster_path: "/i310b9eYLmNPt3zc3ZW0ep1N7Qx.jpg",
        release_date: "2022-04-26",
        title: "P!nk: All I Know So Far",
        popular: false
    },
    {
        overview: "A directionless, young campus bus driver and a punk rock Samoan security guard named Pineapple form an unlikely kinship as they navigate the unpredictable late shift shit show known as the \"drunk bus.\" Together, they break out of their endless loop and into a world of uncertainty, excitement and incredibly poor decision-making.",
        poster_path: "/h1RBmrR8h5Ogz6RfCAAnVK10XDg.jpg",
        release_date: "2022-04-27",
        title: "Drunk Bus",
        popular: false
    },
    {
        overview: "Mandy is a mother, a writer, a nihilist. Mandy is a modern woman in a crisis. Raising a son in the midst of a female revolution, mining the pain of her parents' separation and professionally writing about a love that no longer exists, she falls upon a troubled man, Pete, who’s searching for a sense of worth, belonging and ‘restored’ Male identity.",
        poster_path: "/fnxlaEzzFe1dJPqcgOjGS1oM2dJ.jpg",
        release_date: "2022-04-28",
        title: "Rare Beasts",
        popular: false
    },
    {
        overview: "Terajima Susumu VS Dan Rei! \"Chuzai San\" is back with a special drama that involves a huge \"parent - child\" secret and bone mystery.",
        poster_path: "/chjbPXP4nojuUZQsLqBF9zFOcWp.jpg",
        release_date: "2022-04-26",
        title: "Chuzai Keiji 2021 SP",
        popular: false
    },
    {
        overview: "Rob Font vs. Cody Garbrandt Yan Xiaonan vs. Carla Esparza Justin Tafa vs. Jared Vanderaa Felicia Spencer vs. Norma Dumont Viana David Dvořák vs. Raulian Paiva Jack Hermansson vs. Edmen Shahbazyan",
        poster_path: "/oIDMS3UeetSAWnZzA54dzMk8FOR.jpg",
        release_date: "2022-04-29",
        title: "UFC Fight Night 188: Font vs. Garbrandt",
        popular: false
    },
    {
        overview: "A feature-length documentary on the life and work of Wisconsin grindhouse cinema auteur Bill Rebane, featuring historians, critics, filmmakers, plus cast and crew members who worked with Rebane himself.",
        poster_path: "/axktarYgDLnO5a7Eoss5yfqhDr5.jpg",
        release_date: "2022-04-28",
        title: "Who is Bill Rebane?",
        popular: true
    },
    {
        overview: "Nearly 3 hours of LGBTQ and Coming-of-Age short films and music videos await you in the debut of Altered Innocence’s cinematic mixtape supreme! Films from established auteurs like Peter Strickland, Cam Archer, João Nicolau, and Yann Gonzalez join fresh new voices such as Alexis Langlois, Shaun Hughes, Caroline Poggi, and Jonathan Vinel. Cruising, dancing, naked wrestling, trans terrorism, first love, bullies, femme fatales, band practice, and more is in store!",
        poster_path: "/g28Pxkte8p9UmvhQ96I28ropV6V.jpg",
        release_date: "2022-04-27",
        title: "Altered Innocence Vol. 1",
        popular: false
    }
]

module.exports = movies;

import vcc_cover from "./img/vcc/cover.png";
import vcc_1 from "./img/vcc/1.png";
import vcc_2 from "./img/vcc/2.png";
import vcc_analytics from "./img/vcc/analytics.png";

import picturequest_gallery from "./img/picturequest/gallery.png";
import picturequest_thankyou from "./img/picturequest/thankyou.png";

import buzzer_buzzers from "./img/buzzzer/buzzers.png";
import buzzer_alice from "./img/buzzzer/alice.png";
import buzzer_answer from "./img/buzzzer/answer.png";
import buzzer_overview from "./img/buzzzer/overview.png";

import bitzy_motivation from "./img/bitzy/motivation-bit.png";
import bitzy_settings from "./img/bitzy/settings.png";
import bitzy_add_bits from "./img/bitzy/add_bits.png";
import bitzy_affirmation from "./img/bitzy/affirmation-bit.png";

export default [
    {
        title: "Virtual Coffee Chat",
        skills:
            [
                "VanillaJS",
                "NodeJS",
                "ExpressJS",
                "MongoDB",
                "socket.io",
                "Bootstrap"
            ],
        coverImage: vcc_cover,
        images: [vcc_1, vcc_2, vcc_analytics],
        href: "https://www.virtual-coffee-chat.com/",
        description: "Icebreaker game that helps remote teams getting to know each other better.",
        kpis:
            [
                {
                    name: "registered users",
                    value: 300,
                    prefix: ">"
                },
                // {
                //     name: "from",
                //     prefix: ">",
                //     value: 100,
                //     suffix: "countries"
                // },
                // {
                //     name: "average rating",
                //     value: 4.7,
                //     suffix: "★"
                // },
                {
                    name: "lines of code",
                    value: 10000,
                    prefix: ">"
                },
                {
                    name: "commits",
                    value: 900,
                    prefix: ">"
                }
            ]
    },
    {
        title: "Picture Quest",
        skills: [
            "JavaScript",
            "ReactJS",
            "NextJS",
            "MaterialUI",
            "TypeScript",
            "NodeJS",
            "NestJS",
            "MongoDB",
            "Cloudinary"
        ],
        coverImage: picturequest_gallery,
        images: [picturequest_thankyou],
        description: `Gamified alternative to photo boxes at weddings.
                Get photo missions on your smartphone.
                All guests can see the pictures in a gallery.
                `,
        kpis: [
            {
                name: "lines of code",
                value: 3000,
                prefix: ">"
            },
            {
                name: "commits",
                value: 100,
                prefix: ">"
            }
        ]
    },
    {
        title: "Buzzzer",
        skills: [
            "JavaScript",
            "ReactJS",
            "socket.io",
            "MaterialUI",
            "NodeJS",
            "Express",
        ],
        coverImage: buzzer_buzzers,
        images: [buzzer_overview, buzzer_alice, buzzer_answer],
        description: `Online Quiz where you can use your smartphone as buzzer.`,
        kpis: [
            {
                name: "lines of code",
                value: 1000,
                prefix: ">"
            },
            {
                name: "commits",
                value: 400,
                prefix: ">"
            }
        ]
    },
    {
        title: "Bitzy - One bit at a time",
        skills: [
            "JavaScript",
            "ReactJS",
            "MaterialUI",
            "Firebase"
        ],
        coverImage: bitzy_motivation,
        images: [bitzy_settings, bitzy_add_bits, bitzy_affirmation],
        description: `Indoctrinate positive and powerful thoughts into your head through repetition.
        Add your affirmations, quotes or values to your list.
        The app will then show you one bit at a time, so that you see something new on every visit.
        The repetition will help you memorize your positive phrases.
        The small app is ideal as starting page.
        `,
        kpis: [
            {
                name: "lines of code",
                value: 1500,
                prefix: ">"
            },
            {
                name: "commits",
                value: 50,
                prefix: ">"
            }
        ]
    }
]
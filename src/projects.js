import vcc_cover from "./img/vcc/cover.png";
import vcc_1 from "./img/vcc/1.png";
import vcc_2 from "./img/vcc/2.png";
import vcc_analytics from "./img/vcc/analytics.png";

import picturequest_join from "./img/picturequest/picquest_join.png";
import picturequest_lobby from "./img/picturequest/picquest_lobby.png";
import picturequest_quest from "./img/picturequest/picquest_quest.png";
import picturequest_success from "./img/picturequest/picquest_success.png";
import picturequest_gallery from "./img/picturequest/picquest_gallery.png";
import picturequest_gallery_desktop from "./img/picturequest/gallery.png";
import picturequest_gallery4 from "./img/picturequest/gallery4.png";

import buzzer_buzzers from "./img/buzzzer/buzzers.png";
import buzzer_alice from "./img/buzzzer/alice.png";
import buzzer_answer from "./img/buzzzer/answer.png";
import buzzer_overview from "./img/buzzzer/overview.png";

import bitzy_motivation from "./img/bitzy/motivation-bit.png";
import bitzy_settings from "./img/bitzy/settings.png";
import bitzy_add_bits from "./img/bitzy/add_bits.png";
import bitzy_affirmation from "./img/bitzy/affirmation-bit.png";

import waitercall from "./img/waitercall/waitercall.png";
import waitercall_nocalls from "./img/waitercall/no_calls.jpg";
import waitercall_overview from "./img/waitercall/overview.jpg";
import waitercall_phone from "./img/waitercall/phone.png";

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
        description: `Icebreaker game that helps remote teams getting to know each other better.
        The host selects some icebreaker questions that everybody answers anonymously.
        The answers then get shuffled and all players need to guess who said what.`,
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
        title: "Fotari",
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
        coverImage: picturequest_gallery_desktop,
        images: [picturequest_gallery4, picturequest_join, picturequest_lobby, picturequest_quest, picturequest_success, picturequest_gallery],
        description: `Gamified alternative to photo boxes at weddings.
                Get photo missions on your smartphone.
                The taken pictures are shared with all guests in a gallery.
                `,
        kpis: [
            {
                name: "lines of code",
                value: 6000,
                prefix: ">"
            },
            {
                name: "commits",
                value: 600,
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
            "ExpressJS",
        ],
        coverImage: buzzer_buzzers,
        images: [buzzer_overview, buzzer_alice, buzzer_answer],
        description: `Online Quiz where you can use your smartphone as buzzer.
        When someone hits the buzzer on the phone, all buzzers get locked
        and show the player's name.
        The host can go to next question to unlock all buzzers.`,
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
    }, {
        title: "Waiter Call",
        skills: [
            "JavaScript",
            "ReactJS",
            "socket.io",
            "ExpressJS"
        ],
        coverImage: waitercall_nocalls,
        images: [waitercall, waitercall_phone, waitercall_overview],
        description: `
            Waiting in a restaurant and no waiter in sight? Simply scan the QR code on the table and the waiter will be notified.
        `,
        kpis: [
            {
                name: "lines of code",
                value: 200,
                prefix: ">"
            },
            {
                name: "commits",
                value: 30,
                prefix: ">"
            }
        ],
        href: "https://callwaiter.onrender.com/",
        demoDescription: `
            Open the link below in a new window. It shows either "no calls" or the table number of the guest.
            To trigger it, simply click on the image above and scan one of the two QR codes.
            A 7 or 12 will be shown on the waiter's screen, depending on your "table".
        `
    }
]
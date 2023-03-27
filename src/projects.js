import stock from "./img/image1.jpg";
import stock1 from "./img/image2.jpg";
import stock2 from "./img/image3.jpg";
import stock3 from "./img/image4.jpg";
import stock4 from "./img/image5.jpg";
import stock5 from "./img/image6.jpg";
import vcc from "./img/vcc.png";

export default [
    {
        title: "Virtual Coffee Chat",
        skills:
            [
                "VanillaJS",
                "ExpressJS",
                "MongoDB",
                "socket.io",
                "Bootstrap"
            ],
        coverImage: vcc,
        images: [stock, stock1],
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
            "NestJS",
            "MongoDB",
            "Cloudinary"
        ],
        coverImage: stock5,
        images: [stock2, stock3],
        description: `Gamified alternative to photo boxes at weddings.
                Get photo missions on your smartphone.
                All guests can see the pictures in a gallery.
                `,
        kpis: [
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
    }
]
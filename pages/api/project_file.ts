import Reservia from '../../public/reservia.png';
import Ohmyfood from '../../public/ohmyfood.png';
import ChouetteAgence from '../../public/chouette-agence.png';
import Kanap from '../../public/kanap.png';
import Piiquante from '../../public/piiquante.jpg';
import groupomania from '../../public/groupomania.png';
import todoList from '../../public/todoList.png';
import smoosh from '../../public/smoosh.png';
import css from '../../public/icons8-css3-48.png';
import figma from '../../public/icons8-figma-48.png';
import firebase from '../../public/icons8-firebase-48.png';
import html from '../../public/icons8-html-5-48.png';
import javascript from '../../public/icons8-javascript-48.png';
import mysql from '../../public/icons8-logo-de-mysql-48.png';
import mongodb from '../../public/icons8-mongodb-48.png';
import node from '../../public/icons8-node-js-48.png';
import react from '../../public/icons8-react-native-48.png';
import sass from '../../public/icons8-sass-48.png';
import typescript from '../../public/icons8-typescript-48.png';
import tailwind from '../../public/icons8-tailwind-css-48.png';
import nextjs from '../../public/favicon.ico';
import seo from '../../public/referencement.png'

export const projectItems:any = [
    {
        id: 1,
        title: 'Réservia',
        image: Reservia,
        icons: [html, css],
        role: "Intégration front-end",
        alt: "img project",
        link: "https://edwindij.github.io/version-avant-29-09-21-EdwinDijeont_2_31102021/"
    },
    {
        id: 2,
        title: 'OhmyFood',
        image: Ohmyfood,
        icons: [html, css, sass],
        role: "Intégration front-end",
        alt: "img project",
        link: "https://edwindij.github.io/EdwinDijeont_3_26112021/"
    },
    {
        id: 3,
        title: 'La Chouette Agence',
        image: ChouetteAgence,
        icons:[seo],
        role: "SEO",
        alt: "img project",
        link: "https://github.com/EdwinDij/EdwinDijeont_4_22012022"
    },
    {
        id: 4,
        title: 'Kanap',
        image: Kanap,
        icons: [javascript],
        role: "Front-end",
        alt: "img project",
        link: "https://github.com/EdwinDij/EdwinDijeont_5_13022022-"
    },
    {
        id: 5,
        title: 'Piiquante',
        image:  Piiquante,
        icons:[javascript, node, mongodb],
        role: "Back-end",
        alt: "img project",
        link: "https://github.com/EdwinDij/EdwinDij-EdwinDijeont_6_03032022--"
    },
    {
        id: 6,
        title: "Groupomania",
        image: groupomania,
        icons:[node, mysql, sass, react, figma],
        role: "Full-stack",
        alt: "img project",
        link: "https://github.com/EdwinDij/dijeont_edwin_n7_groupomania_020522"
    },
    {
        id: 7,
        title: "Todo-List",
        image: todoList,
        icons:[react, typescript, css],
        role: "Front-end",
        alt: "img project",
        link: "https://github.com/EdwinDij/todolist"
    },
    {
        id: 8,
        title: "Smosh",
        image: smoosh,
        icons:[react, typescript, sass, firebase],
        role: "Full-stack",
        alt: "img project",
        link: "https://github.com/EdwinDij/Smoosh",
        status: "En cours",
    },
    {
        id: 9,
        title: "Netflux",
        image: smoosh,
        icons:[react, typescript, sass, firebase],
        role: "Full-stack",
        alt: "img project",
        link: "https://github.com/EdwinDij/Smoosh",
        status: "En cours",
    },
    {
        id: 10,
        title: "Ce portfolio",
        image: smoosh,
        icons:[react, typescript, tailwind, nextjs],
        role: "Full-stack",
        alt: "img project",
        link: "https://github.com/EdwinDij/Smoosh",
    },
]
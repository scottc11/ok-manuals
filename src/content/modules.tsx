import { EurorackModule } from "../types";


export const Degree: EurorackModule = {
    name: 'DEGREE',
    slug: 'degree',
    paths: {
        detail: '/modules/degree',
        manual: '/manuals/degree'
    },
    hp: 42,
    image: 'DEGREE.png',
    video: 'Uh_s-r6_d4g?si=pcOLuslAvlDnpjxS',
    images: [
        'https://ok200-media.s3.amazonaws.com/degree-top-shadow.png',
        'https://ok200-media.s3.amazonaws.com/degree-bottom.png',
        'https://ok200-media.s3.amazonaws.com/degree-left-right.png',
        'https://ok200-media.s3.amazonaws.com/degree-right-left.png'
    ]
}

export const Counterpoint: EurorackModule = {
    name: 'Counterpoint',
    slug: 'counterpoint',
    paths: {
        detail: '/modules/counterpoint',
        manual: '/manuals/counterpoint'
    },
    hp: 42,
    image: 'Counterpoint.png',
    images: [
        'https://ok200-media.s3.amazonaws.com/counterpoint-landscape.webp',
        'https://ok200-media.s3.amazonaws.com/counterpoint-jacks.webp',
        'https://ok200-media.s3.amazonaws.com/counterpoint-logo.webp',
    ]
}
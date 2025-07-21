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
    video: 'Uh_s-r6_d4g?si=pcOLuslAvlDnpjxS'
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
}
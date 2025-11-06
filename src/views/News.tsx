import React from 'react';
import Section from '../components/Section/Section';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import { Link } from 'react-router-dom';
import { meta as News_01_07_2023_meta } from './news/01-07-2023';

const News: React.FC = () => {

    const news: { title: string; slug: string; date: string }[] = [
        News_01_07_2023_meta,
    ]

    const newsItems = news.map((item) => (
        <Link to={`/news/${item.slug}`} key={item.slug}>
            <h2>{item.title}</h2>
            <p>{item.date}</p>
        </Link>
    ))
    
    return (
        <div className="bg-white text-black">
            <div className="container mx-auto px-4 py-8 max-w-3xl">
                <h1 className="text-4xl font-bungee mb-8 text-left">News</h1>
                {newsItems}
            </div>
        </div>
    );
};

export default News;
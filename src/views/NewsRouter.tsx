import React from 'react';
import { Route, Switch, useParams } from 'react-router-dom';
import PageNotFound404 from './PageNotFound404';
import News_01_07_2023, { meta as News_01_07_2023_meta } from './news/01-07-2023';
import EditableContentTest from './news/EditableContentTest';

interface NewsRouterParams {
    slug: string;
}

const NewsRouter = () => {
    const { slug } = useParams<NewsRouterParams>();

    const newsComponents: Record<string, React.ComponentType> = {
        [News_01_07_2023_meta.slug]: News_01_07_2023,
        'editable-content-test': EditableContentTest,
    };

    const NewsComponent = newsComponents[slug || ''];

    return (
        <div className="bg-offwhite text-black">
            <div className="container mx-auto px-4 py-8 max-w-3xl bg-white text-black">
                <Switch>
                    <Route path={`/news/${slug}`} component={NewsComponent} />
                    <Route component={PageNotFound404} />
                </Switch>
            </div>
        </div>
    )
}

export default NewsRouter;
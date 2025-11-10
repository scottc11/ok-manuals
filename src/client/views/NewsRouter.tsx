import React from 'react';
import { Route, Switch, useParams } from 'react-router-dom';
import PageNotFound404 from './PageNotFound404';

interface NewsRouterParams {
    slug: string;
}

const NewsRouter = () => {
    const { slug } = useParams<NewsRouterParams>();

    return (
        <div className="bg-offwhite text-black">
            <div className="container mx-auto px-4 py-8 max-w-3xl bg-white text-black">
                {/* <Switch>
                    <Route path={`/news/${slug}`} component={NewsComponent} />
                    <Route component={PageNotFound404} />
                </Switch> */}
            </div>
        </div>
    )
}

export default NewsRouter;
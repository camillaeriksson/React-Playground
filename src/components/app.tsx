import React, { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Spinner from './spinner';
import ErrorBoundary from './errorboundary'

const Layout = lazy(() => import(/* webpackChunkName: "layout" */ './Layout'))

/**
 * Application top level component. This is a good place for future
 * top level components - ErrorBoundary, Provider & Suspense, etc.
 */
export default function App() {

    return (
        <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
                <BrowserRouter>
                    <Layout />
                </BrowserRouter>
            </Suspense>
        </ErrorBoundary>
    )
}
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";
import Spinner from "../spinner/Spinner";


const SinglePage = lazy(() => import('../pages/SinglePage'))
const SingleCharacterPage = lazy(() => import('../pages/SingleCharacterPage/SingleCharacterPage'))
const Page404 = lazy(() => import('../pages/404'))
const MainPage = lazy(() => import('../pages/MainPage'))
const ComicsPage = lazy(() => import('../pages/ComicsPage'))
const SingleComicPage = lazy(() => import('../pages/SingleComicPage/SingleComicPage'))

const App = () => {
        return (
            <Router>
                <div className="app">
                    <AppHeader/>
                    <main>
                        <Suspense fallback={<Spinner/>}> 
                            <Routes>
                                <Route path='/' element={<MainPage/>}/>
                                <Route path='/comics' element={<ComicsPage/>}/>
                                <Route exact path="/comics/:id" element={<SinglePage Component={SingleComicPage} dataType='comic'/>}/>
                                <Route exact path="/characters/:id" element={<SinglePage Component={SingleCharacterPage} dataType='character'/>}/>
                                <Route path='*' element={<Page404/>}/>
                            </Routes>
                        </Suspense>
                    </main>
                </div>
            </Router>
        )
}

export default App;
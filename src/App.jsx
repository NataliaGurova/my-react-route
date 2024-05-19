
// import { Suspense, lazy } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import css from './App.module.css'

// import { Navigation } from './components/Navigation/Navigation';


// const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
// const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
// const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage/MovieDetailsPage'));
// const MovieCast = lazy(() => import('./components/MovieCast/MovieCast'));
// const MovieReviews = lazy(() => import('./components/MovieReviews/MovieReviews'));
// const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));


// function App() {


//   return (
// 		<div>
// 			<Navigation />
// 			<Suspense fallback={<div>Loading...</div>}>

// 			<Routes>

// 				<Route path='/' element={<HomePage />} />
				
// 				<Route path='/movies' element={<MoviesPage />} />
// 				<Route path='/movies/:movieId' element={<MovieDetailsPage />} >
// 				  <Route path='credits' element={<MovieCast />} />
//           <Route path='reviews' element={<MovieReviews />} />
//         </Route>
// 				<Route path='*' element={<NotFoundPage />} />

// 				</Routes>
// 			</Suspense>

// 		</div>
//   )
// }

import { Routes, Route } from "react-router-dom";
import css from './App.module.css'

import HomePage from './pages/HomePage/HomePage';
import AboutPage from "./pages/AboutPage/AboutPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { Mission } from "./components/Mission/Mission";
import { Team } from "./components/Team/Team";
import { Reviews } from "./components/Reviews/Reviews";
import { Navigation } from "./components/Navigation/Navigation";
// import Home from "path/to/pages/Home";
// import About from "path/to/pages/About";
// import Products from "path/to/pages/Products";
// import ProductDetails from "path/to/pages/ProductDetails";
// import NotFound from "path/to/pages/NotFound";

// import ProductList from "path/to/components/ProductList";

// import Mission from "path/to/components/Mission";
// import Team from "path/to/components/Team";
// import Reviews from "path/to/components/Reviews";

const App = () => {
  return (
		<div className={css.container}>
			<Navigation />
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App
// className={css.container}
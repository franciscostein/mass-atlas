import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Estabelecimentos from './components/Establecimentos/Estabelecimentos';
import Estabelecimento from './components/Establecimentos/Estabelecimento/Estabelecimento';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<div className="content">
				<Switch>
					<Route path="/estabelecimento/:id?">
						<Estabelecimento />
					</Route>
					<Route path="/estabelecimentos">
						<Estabelecimentos />
					</Route>
					<Route path="/">
						<NotFound />
					</Route>
				</Switch>
			</div>
			<Footer />
		</BrowserRouter>
	);
}

export default App;

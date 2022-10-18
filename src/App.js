import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
	<Router>
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='About' element={<About />} />
			<Route path='Contact' element={<Contact />} />
		</Routes>
	</Router>;
}

export default App;

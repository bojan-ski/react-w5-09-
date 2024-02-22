import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from './context';
import Container from 'react-bootstrap/Container';
import NavbarComponent from './components/layout/NavbarComponent';
import FooterComponent from './components/layout/FooterComponent';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <>
          <NavbarComponent />

          <main className='my-5'>
            <Container>

              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
              </Routes>

            </Container>
          </main>

          <FooterComponent />
        </>
      </AppProvider>
    </BrowserRouter>
  )
}

export default App

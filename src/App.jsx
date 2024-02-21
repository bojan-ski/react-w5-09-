import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import NavbarComponent from './components/layout/NavbarComponent';
import FooterComponent from './components/layout/FooterComponent';
import SearchComponent from './components/search/SearchComponent';

function App() {

  return (
    <>
      <NavbarComponent />

      <main>
        <Container>
          <SearchComponent />
        </Container>
      </main>

      <FooterComponent />
    </>
  )
}

export default App

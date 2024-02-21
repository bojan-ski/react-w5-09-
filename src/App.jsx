import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import NavbarComponent from './components/layout/NavbarComponent';
import FooterComponent from './components/layout/FooterComponent';
import SearchComponent from './components/search/SearchComponent';
import SearchResultsComponent from './components/search/SearchResultsComponent';

function App() {

  return (
    <>
      <NavbarComponent />

      <main>
        <Container>
          <SearchComponent />
          <SearchResultsComponent />
        </Container>
      </main>

      <FooterComponent />
    </>
  )
}

export default App

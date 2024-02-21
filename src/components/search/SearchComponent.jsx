import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SearchResultsComponent from './SearchResultsComponent';

const SearchComponent = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        setSearchTerm(e.target[0].value)
    }

    return (
        <>
            <section className="search d-flex justify-content-center">
                <Form onSubmit={handleSubmit} className='my-4 w-75'>
                    <Form.Group className='text-center mb-3'>
                        <Form.Label className='fs-3 '>
                            Please provide Movie - Title
                        </Form.Label>

                        <Form.Control
                            required
                            type="text"
                            placeholder="Enter movie title"
                        />
                    </Form.Group>

                    <Button type="submit" className='w-100'>
                        Search Movie
                    </Button>
                </Form>
            </section>
        
            <section>
                <SearchResultsComponent searchTerm={searchTerm}/>
            </section>
        </>

    );
}

export default SearchComponent



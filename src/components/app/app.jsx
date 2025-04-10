import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import Button from '../Button/Button';
import ErrorMessage from '../errorMessage/errorMessage';
import CharacterPage from '../pages/CharacterPage/CharacterPage';
import GotService from '../../service/gotService';
import BooksPage from '../pages/BooksPage/BooksPage';
import HousesPage from '../pages/HousesPage/HousesPage';
import { Route, Routes } from 'react-router-dom';
import BooksItem from '../pages/BooksPage/BooksItem';

export default class App extends Component {
    gotService = new GotService();
    // const [showRandomChar, setShowRandomChar] = useState(true);
    state = {
        showRandomChar: true,
        error: false,
    };

    componentDidCatch() {
        console.log('error');
        this.setState({
            error: true,
        });
    }

    toggleRandomChar = () => {
        // setShowRandomChar((prevState) => !prevState);
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar,
            };
        });
    };

    render() {
        const char = this.state.showRandomChar ? <RandomChar /> : null;

        if (this.state.error) {
            return <ErrorMessage />;
        }

        return (
            <div className="app">
                <Container>
                    <Header />
                </Container>
                <main className="main">
                    <Container>
                        <Row>
                            <Col lg={{ size: 5, offset: 0 }}>
                                {/* {showRandomChar && <RandomChar />} */}
                                {char}
                                <Button
                                    onClick={this.toggleRandomChar}
                                    title={'Toggle random character'}
                                />
                            </Col>
                        </Row>

                        <Routes>
                            <Route path="/" element={<h1>Welcome to GOT</h1>} />
                            <Route
                                path="/characters"
                                element={<CharacterPage />}
                            />
                            <Route path="/houses" element={<HousesPage />} />
                            <Route path="/books" element={<BooksPage />} />
                            <Route path="/books/:id" element={<BooksItem />} />
                        </Routes>
                    </Container>
                </main>
            </div>
        );
    }
}

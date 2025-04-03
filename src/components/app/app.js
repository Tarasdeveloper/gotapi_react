import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';

import Button from '../Button/Button';
import ErrorMessage from '../errorMessage/errorMessage';
import CharacterPage from '../CharacterPage/CharacterPage';

export default class App extends Component {
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
            <>
                <Container>
                    <Header />
                </Container>
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
                    <CharacterPage />
                </Container>
            </>
        );
    }
}

import { Component } from "react";
import { Container } from "react-bootstrap";

class Header extends Component {
    render() {
        return (
            <header className="bg-dark py-2">
                <Container className="d-flex align-items-center justify-content-between">
                    <h4 className="text-light p-0 m-0">Header</h4>
                    <div>Menu</div>
                </Container>
            </header>
        );
    }
}

export default Header;
import { Container } from "./styles";

import todoLogo from '../../assets/Logo.png';

export function Header() {

    return (
        <Container>

            <img src={todoLogo} alt="logo ignite todo" />
        </Container>
    )
}
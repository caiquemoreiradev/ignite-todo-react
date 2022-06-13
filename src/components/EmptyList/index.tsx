import { FiClipboard } from 'react-icons/fi';

import { Container } from "./styles";

export function EmptyList() {

    return (
        <Container>

            <FiClipboard size={64} />
            <h3>Você ainda não tem tarefas cadastradas</h3>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </Container>
    )
}
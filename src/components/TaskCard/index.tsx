import { FiTrash2 } from 'react-icons/fi';

import { Container } from "./styles";

interface TaskProps {
    id: number;
    content: string;
    isCompleted: boolean;
    completeTask: (id: number) => void;
    deleteTask: (id: number) => void;
}

export function TaskCard({ id, content, isCompleted, completeTask, deleteTask }: TaskProps) {

    return (
        <Container>

            <label className="checkbox-container">
                <input
                    type="checkbox"
                    readOnly
                    checked={isCompleted}
                    onClick={() => completeTask(id)}
                />
                <span className="checkmark"></span>
            </label>

            <p>{content}</p>

            <div className='deleteTask'>
                <FiTrash2
                    onClick={() => deleteTask(id)}
                    size={24}
                />
            </div>

        </Container>
    )
}
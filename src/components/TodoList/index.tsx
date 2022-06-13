import { useEffect, useState } from "react";

import { IoMdAddCircleOutline } from 'react-icons/io';

import { EmptyList } from "../EmptyList";
import { TaskCard } from "../TaskCard";

import { Container, HeaderList, NewTodoContainer } from "./styles";

interface Task {
    id: number;
    title: string;
    isComplete: boolean;
}

export function TodoList() {

    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState('');

    const [completedTasks, setCompletedTasks] = useState(0);

    function handleCreateNewTask() {

        // Crie uma nova task com um id random, não permita criar caso o título seja vazio.
        const newId = Math.round(Math.random() * 5000);

        const data: Task = {
            id: newId,
            title: newTask,
            isComplete: false
        }

        console.log(data);

        if (newTask.length > 0) {
            setNewTask('');
            setTasks([...tasks, data]);
        }
    }

    function handleToggleTaskCompletion(id: number) {

        // Altere entre `true` ou `false` o campo `isComplete` de uma task com dado ID
        const updateTasks = tasks.map(task => task.id === id ? {
            ...task, isComplete: !task.isComplete
        } : task);

        setTasks(updateTasks);
    }

    function handleRemoveTask(id: number) {

        // Remova uma task da listagem pelo ID
        const updateTasks = tasks.filter(task => task.id !== id)

        setTasks(updateTasks);
    }

    function updateCompletedTask() {

        const completed = tasks.filter(task => task.isComplete !== false);

        setCompletedTasks(completed.length)
    }

    useEffect(() => {

        updateCompletedTask()
    }, [tasks])


    return (
        <Container>

            <NewTodoContainer>
                <input
                    placeholder="adicione uma nova tarefa..."
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />

                <button onClick={handleCreateNewTask}>
                    <IoMdAddCircleOutline size={16} />
                    Criar
                </button>
            </NewTodoContainer>

            <HeaderList>

                <div className="todo_list">
                    <p>Tarefas criadas <strong>{tasks.length}</strong></p>
                </div>

                <div className="completed_task">
                    <p>Concluídas <strong>{completedTasks} de {tasks.length}</strong></p>
                </div>

            </HeaderList>

            {tasks.length === 0 && (
                <EmptyList />
            )}

            {tasks.map(task => (
                <TaskCard
                    id={task.id}
                    isCompleted={task.isComplete}
                    content={task.title}
                    completeTask={handleToggleTaskCompletion}
                    deleteTask={handleRemoveTask}
                />
            ))}

        </Container>
    )
}
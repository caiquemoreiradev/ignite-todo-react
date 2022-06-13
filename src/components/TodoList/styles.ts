import styled from "styled-components";

export const Container = styled.section`

    display: flex;
    align-items: center;

    flex-direction: column;

    padding-bottom: 48px;
`;

export const NewTodoContainer = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: -24px;

    gap: 16px;

    input {

        color: var(--white);

        height: 54px;
        width: 638px;

        padding: 8px 24px;

        background-color: var(--gray-500);

        border: 0;
        border-radius: 8px;
    }

    button {

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;

        height: 52px;
        width: 90px;

        padding: 8px 16px;

        border: 0;
        border-radius: 8px;

        color: var(--white);

        background-color: var(--blue-light);

        &:hover {

            cursor: pointer;
            opacity: 0.7;
        }
    }
`;

export const HeaderList = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    max-width: 736px;

    padding: 16px 0;

    margin: 48px 0 24px;

    border-bottom: 1px solid var(--gray-500);

    .todo_list {

        p {

            color: var(--blue-light);
            font-weight: 500;
        }

        strong {

            font-size: 12px;

            margin-left: 8px;
            border-radius: 32px;

            padding: 8px 16px;

            color: var(--white);
            background-color: var(--gray-500);
        }
    }

    .completed_task {

        margin-right: 8px;

        p {

            color: var(--purple-light);
            font-weight: 500;
        }
    }
`;
import styled from "styled-components";

export const Container = styled.div`

    padding: 24px;

    width: 100%;
    max-width: 736px;

    margin-top: 16px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-radius: 8px;

    background-color: var(--gray-500);

    .checkbox-container {
            position: relative;
            padding-left: 14px;
            margin-bottom: 18px;

            input {
              position: absolute;
              opacity: 0;
              cursor: pointer;
              height: 0;
              width: 0;

              &:checked {

                & ~.checkmark {
                  background-color: var(--blue-dark);
                }

                & ~.checkmark:after {
                  display: block;
                }
              } 
            }
          
            .checkmark {

              display: flex;
              align-items: center;
              justify-content: center;

              position: absolute;
              top: 0;
              left: 0;
              width: 24px;
              height: 24px;
              background-color: var(--gray-500);
              border-radius: 12px;

              border: 2px solid var(--blue-dark);
          
              &:after {
                content: "";
                position: absolute;
                display: none;
                left: 6px;
                top: 3px;
                width: 3px;
                height: 6px;
                border: solid white;
                border-width: 0 2px 2px 0;
                transform: rotate(45deg);
              }
            }
          }

    p {

      flex: 1;
      margin: 0 32px;

      display: flex;
      align-items: flex-start;
    }

    .deleteTask:hover {

        cursor: pointer;
        opacity: 0.7;
    }
`;
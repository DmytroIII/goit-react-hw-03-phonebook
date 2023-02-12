import styled from '@emotion/styled';

export const FormTitle = styled.h1`
    font-size: 35px;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
`
export const PhonebookForm = styled.form`
    list-style: inside;
    display: flex;
    flex-direction: column;
    min-width: 340px;
    padding: 20px;
    border: 1px solid black;
`
export const FormLabel = styled.label`
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 10px;
`
export const FormInput = styled.input`
    width: 250px;
    margin-bottom: 10px;
    padding: 4px;
    border: 1px solid black;

    font-size: 18px;

}
`
export const FormBtn = styled.button`
    width: 125px;
    padding: 10px 15px;
    margin-top: 20px;
    border: none;
    cursor: pointer;
    border-radius: 15px;
    background-color: green;
        &:hover {
        color: white;  
         background-color: blue;
        }
`
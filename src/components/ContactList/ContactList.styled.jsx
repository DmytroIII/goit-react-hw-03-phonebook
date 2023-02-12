
import styled from '@emotion/styled';

export const ContactsBlock = styled.div`
    padding: 10px;
    border: 1px solid black;    
`

export const ContactsTitle = styled.h2`
    font-size: 30px;
    margin-bottom: 10px;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
    text-align: center;
`

export const ContactList = styled.ul`   
    max-width: 400px;
    min-width: 340px;
    padding: 0;
    list-style: inside;
    font-size: 20px;
    color: black;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    gap: 15px;
`
export const ContactItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ContactBtn = styled.button`
    margin-left: 20px;
    width: 100px;
    padding: 5px 10px;
    background-color: green;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    

    &:hover {
      color: white;  
         background-color: blue;
    }  
`
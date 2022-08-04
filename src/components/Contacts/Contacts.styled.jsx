import styled from "styled-components";

export const Wrapper = styled.div`
margin-left: auto;
margin-right: auto;
width: 600px;
background-color: #5a5ac5;
padding-bottom: 20px;
`

export const Title = styled.h2`
text-align: center;
margin-top: 0;
color: #cdcd70;
`

export const Label = styled.label`
    display: flex;
align-items: center;
margin-top: 10px;
margin-bottom: 10px;
color: #cdcd70;
    justify-content: center;
`

export const Input = styled.input`
display: block;
margin-left: auto;
margin-right: auto;
min-width: 200px;
border: none;
border-radius: 4px;
`

export const Item =styled.li`
    list-style: non;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;

`
export const Text =styled.p`
    margin-right: 10px;
    color: #cdcd70;

`
export const Button = styled.button`


    color: #4b4bc9;
   background-color: #cdcd70;
   border: none;
   padding: 4px;
   cursor: pointer;
   border-radius: 8px;

   &:hover{   
    background-color: #bb5a34;

   }


`
import styled from "styled-components";
import { Field } from "formik";
import { ErrorMessage } from "formik";

export const Wrapper = styled.div`
margin-left: auto;
margin-right: auto;
width: 600px;
background-color: #5a5ac5;
padding-top: 20px;
padding-bottom: 20px;
`



export const Text = styled.h1`
text-align: center;
margin-top: 0;
color: #cdcd70;
`
export const Btn = styled.button`

     display: block;
    margin-left: auto;
    margin-right: auto;

    color: #4b4bc9;
   background-color: #cdcd70;
   border: none;
   padding: 4px;
   margin-top: 10px;
cursor: pointer;
   border-radius: 8px;

   &:hover{   
    background-color: #34bb63;

   }


`
export const Label = styled.label`
    display: flex;
align-items: center;
margin-top: 10px;
margin-bottom: 10px;
color: #cdcd70;
    justify-content: center;
`
export const Input = styled( Field )`
display: block;
margin-left: auto;
margin-right: auto;
min-width: 200px;
border: none;
border-radius: 4px;
`

export const Message = styled(ErrorMessage)`
position: absolute;
top: 0;
right: 15px;
width: 300px;
padding: 15px;
background-color: #4b4bc9;
margin-top: 4px;
margin-bottom: 0;
color: #b63316;

`
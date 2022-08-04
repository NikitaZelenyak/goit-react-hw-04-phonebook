import { React } from "react";
// import { Wrapper,Text,Btn,Label,Input } from "./Form.styled";
 import { Formik,  Form,  } from 'formik';
import { Wrapper,Btn,Label,Input,Text, Message } from "./Form.styled";
import * as yup from 'yup';
import {AiOutlineUserAdd} from 'react-icons/ai'


let schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.number().required(),
})
export const AddContactForm = ({ onSubmitInfo }) => {
    const getInfoContact=(values, action)=>{
        onSubmitInfo(values);
         action.resetForm();
    }
    return (
        <Wrapper>
            <Text>Phonebook</Text>
                <Formik initialValues={{ name: '', number: '' }}
                    validationSchema={schema}
                    onSubmit={getInfoContact}>
                <Form>
                    <Label  htmlFor="name">Enter the name</Label>
                    <Input id="name" name="name" type="text"></Input>
                    <Message component='div' name="name"></Message>
                       <Label  htmlFor="number">Enter the number</Label>
                    <Input id="number" name="number" type="tel"></Input>
                     <Message component='div' name="number"></Message>
                            <Btn type='submit'>   <AiOutlineUserAdd size={24}  color='#4b894b'></AiOutlineUserAdd></Btn>
                </Form>
                </Formik>
                </Wrapper>

        )
    }



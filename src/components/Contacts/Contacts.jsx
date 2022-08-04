import { Wrapper,Title,Label,Input,Item,Button,Text } from "./Contacts.styled"
import{TiUserDelete} from'react-icons/ti'
import PropTypes from 'prop-types'; 

export const Contacts = ({ contacts, onDelete, onFilter, }) => {

    return (
   
        <Wrapper>
          

            <Title>Contacts</Title>

          
              
           <Label htmlFor='find'>Find contacts by name</Label>
              <Input id="find" type="text"  onChange={onFilter} />
            <ul>
                
                {contacts.map(({id,name,number })=> (
                    <Item key={id}>
                        <Text>{name}: {number}</Text>
                        <Button type="button" onClick={()=>onDelete(id)}><TiUserDelete color="#763f33" size={22}></TiUserDelete></Button>
                    </Item>
                   
                ))}

            </ul>
    </Wrapper>
)

   
    }


Contacts.prototype = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        
        id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number:PropTypes.string.isRequired
    })),
    onDelete: PropTypes.func,
    onFilter: PropTypes.func,
    
  
}
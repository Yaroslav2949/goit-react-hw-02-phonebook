import PropTypes, { arrayOf } from 'prop-types'; // типізація
import css from './ContactList.module.css'; // стилізація

export const ContactList =({contacts,onDeleteContact})=>{
 return (
    <ul className={css.list}>
    {contacts.map(({id,number,name})=>{
        return (
        <li className={css.item} key={id}><span>{name}:</span>
        <span className={css.number}>{number}</span>
     <button  className={css.button} type="button" onClick={()=>{onDeleteContact (id)}} >Delete </button>
        </li>    
        )
    })
     } 
    </ul>
 )
}

ContactList.propTypes = {
   contacts: PropTypes.arrayOf(
     PropTypes.shape({
       id: PropTypes.string.isRequired,
       name: PropTypes.string.isRequired,
       number: PropTypes.string.isRequired,
     }),
   ),
   onDeleteContact: PropTypes.func.isRequired,
 };
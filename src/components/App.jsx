import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container } from './Container/Container';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './ContactForm/Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
//  ..прилітає якесь значення
  addContact = (data) => {  
    // кажу шо це значення новий контакт newContact
    const newContact = {
      id: nanoid(),
      // name: data.name,
      // number:data.number
      // але розпилюю, бо так коротше красівіше і грамотніше
      ...data
    };
    // деструтуризую ...вічно забуваю, а-а-а-а....
    const { contacts } = this.state;
    // далі провіряю на співпадіння по імені,якщо спіпадає то ахтунг! якщо ні - то на рендер його ...
    if(contacts.find(contact=> contact.name.toLowerCase()=== newContact.name.toLowerCase()))
    { alert( `${newContact.name} is already in contacts`)}
    else{
      this.setState(prevState  => ({
        //  рендер- додаємо нове значення в стейт, а решту розпилюємо уникаючи мутації стейту
        contacts: [newContact, ...prevState.contacts],
      }));
    }
    
  };

  // приймаю якесь contactId через фшльтр повертаю лише ті контакти id яких не співпадає з прийнятим
  deleteContact = contactId => {
    this.setState(({ contacts }) => {
      return {
        contacts: contacts.filter(contact => contact.id !== contactId),
      };
    });
  };
//  пишу функцію яка передає в стейт відразу весь об*єкт значення з інпута "Фільтр контактів - Find contacts by Name"
  ChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
// фільтрую контакти за співпадінням
  GetVisibleContacts = () => {
    //деструктуризую filter, contacts зі стейту
    
    const { filter, contacts } = this.state;
    // виношу приведення до ловеркейсу  в інпуті Find contacts by Name (значення в стейті) в окрему змінну
    const NormalizedFilter = filter.toLowerCase();

          // повертаю через фільтр імена які співпадають з введеними в інпуті Find contacts by Name для їх рендеру а не всього стейту
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(NormalizedFilter)
    );
  };

  render() {
    // передаю filter зі і GetVisibleContacts() як пропси у форму для фільтру та списку контактів
    const { filter } = this.state;
    // для зручності передаю функцію у змінну і далі пропсом у список контактів
    const visibleContacts = this.GetVisibleContacts();

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.ChangeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

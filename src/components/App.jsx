import Form from './Form/Form';
import Filter from './Filter/Filter';
import Contacts from './Contacts/Contacts';


export const App = () => {
  return (
    <>
      <h2>Phonebook</h2>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <Contacts />
    </>
  );
};


import ContactsEditor from 'components/ContactsEditor';
import ContactsList from 'components/ContactsList';
import ContactsFilter from 'components/ContactsFilter';

export default function App() {
  return (
    <div>
      <ContactsEditor />
      <ContactsFilter />
      <ContactsList />
    </div>
  );
}

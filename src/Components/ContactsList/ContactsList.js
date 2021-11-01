import { connect } from 'react-redux';
import contactsActions from 'redux/contacts/contacts-actions';
import getVisibleContacts from 'components/functions/getVisibleContacts';
import Contact from '../Contact';
import PropTypes from 'prop-types';

import s from './ContactsList.module.scss';

function ContactsList({ contacts, onDeleteContact }) {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Contacts</h2>
      {contacts.length !== 0 ? (
        <ul className={s.list}>
          {contacts.map(({ id, name, number }) => {
            return (
              <li key={id} className={s.item}>
                <Contact
                  name={name}
                  number={number}
                  onDelete={() => onDeleteContact(id)}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <p className={s.status}>
          Contacts list is empty, or filtered name doesn`t exists. Please add
          contact, or type correct query in filter
        </p>
      )}
    </div>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);

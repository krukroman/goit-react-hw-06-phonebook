export default function getVisibleContacts(contacts, filter) {
  const normalizedFilter = filter.toLocaleLowerCase();
  return [...contacts]
    .sort((a, b) => a.name.localeCompare(b.name))
    .filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter),
    );
}

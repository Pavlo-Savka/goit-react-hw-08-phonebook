import css from './Contacts.module.css'

import { AddContactForm } from '../../AddContactForm/AddContactForm';
import ContactsList from '../../ContactsList/ContactsList';
import Filter from '../../Filter/Filter';

export const Contacts = () => {
    return (
        <div className={css.contacts}>
            <h1 className={css.header}>Phonebook</h1>
            <h2 className={css.title}>Add contact</h2>
            <AddContactForm />
            <h2 className={css.title}>Contacts</h2>
            <Filter />
            <ContactsList />
        </div>);
};
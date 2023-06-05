import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

import css from './Form.module.css'

function Form() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const checkingForMatches = (value) => {
    return (
      contacts.some((el) => (el.name.toLowerCase() === value.toLowerCase()))
    )
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { target: { name, number } } = evt;

    if (checkingForMatches(name.value)) {
      alert(`${name.value} is already in contacts`);
      return
    };

    dispatch(addContact({ name: `${name.value}`, phone: `${number.value}` }));
    name.value = '';
    number.value = '';
  };

  return (
    <form
      action="addContact"
      name="addContact"
      className={css['contact-form']}
      onSubmit={handleSubmit}
    >
      <label className={css["phonebook__label"]}>
        <span className={css["phonebook__name"]}>Name</span>
        <input
          className="phonebook__input-name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        // value={name}
        //  onChange={handleInputChange}
        />
      </label>

      <label className={css["phonebook__label"]}>
        <span className={css["phonebook__name"]}>Number</span>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        // value={number}
        // onChange={handleInputChange}
        />
      </label>
      <button className={css["phonebook__button"]} type="submit">Add contact</button>
    </form>
  );
}

export default Form;
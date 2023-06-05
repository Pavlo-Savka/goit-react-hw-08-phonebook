import { useSelector, useDispatch } from 'react-redux';

import { RotatingLines } from 'react-loader-spinner';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { selectContacts } from '../../redux/selectors';
import { addContact } from '../../redux/operations';
import { selectIsLoadingAdd } from '../../redux/selectors';

import css from './AddContactForm.module.css';

export const AddContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const isLoadingAdd = useSelector(selectIsLoadingAdd);

    const checkingForMatches = (value) => {
        return (
        contacts.some((el) => (el.name.toLowerCase() === value.toLowerCase()))
        )
    };

    const handleSubmitForm = (evt) => {
        evt.preventDefault();
        const { target: { name, number } } = evt;

        if (checkingForMatches(name.value)) {
        Notify.warning(`${name.value} is already in contacts`)
        return
        };

        dispatch(addContact({name: name.value, number: number.value}));

        name.value = '';
        number.value = '';

        Notify.success('Contact added.');
    };

    return <form
        className={css.form}
        onSubmit={handleSubmitForm}
    >
        <label className={css.label} htmlFor="name">Name</label>
        <input
            className={css.input}
            type="text"
            name="name"
            id='name'
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
        />
        <label className={css.label} htmlFor="number">Number</label>
        <input
            className={css.input}
            type="tel"
            name="number"
            id="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
        />
        <button
            className={css.button}
            type='submit'>
            Add contact
            {<RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="20"
                visible={isLoadingAdd}
            />}
        </button>
    </form>
};
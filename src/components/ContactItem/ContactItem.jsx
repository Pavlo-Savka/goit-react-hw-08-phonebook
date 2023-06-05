import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import css from './ContactItem.module.css';

function ContactItem({ name, number, id }) { 
    const dispatch = useDispatch();
    const handleDeleteContact = () => {
        dispatch(deleteContact(id));
    };
        return (
            <li id={id} className={css['contact-item']}>
                {name}: {number}
                <button className={css.itemBtn} type='button' onClick={handleDeleteContact}>Delete</button>
            </li>

        );
    }

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { useState } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import css from './ContactItem.module.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


function ContactItem({ name, number, id }) { 
    console.log(name, number, id);
    const [isLoading, setIsLoading] = useState(false)
    const dispatch = useDispatch();
    const handleDeleteContact = () => {
        dispatch(deleteContact(id));
        setIsLoading(true);
        Notify.success('Contact removed.')
    };
        return (
            <li id={id} className={css['contact-item']}>
                <p className={css.contact}>{name}: {number}</p>
                <button className={css.itemBtn} type='button' onClick={handleDeleteContact}>Delete
                    {<RotatingLines
                        strokeColor="white"
                        strokeWidth="5"
                        animationDuration="0.75"
                        width="15"
                        visible={isLoading}
                    />}
                </button>
            </li>

        );
    }

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
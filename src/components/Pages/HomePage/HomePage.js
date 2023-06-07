import css from './HomePage.module.css';

import { useAuth } from 'Hooks/useAuth';

export const HomePage = () => {
    const { user: {name} } = useAuth();

    return (
        <div className={css.homepage}>
            <img src={require('../../../media/logo.png')} alt='logo' className={css.logo} width="150px"></img>
            <h1 className={css.header}>Phonebook</h1>
            {!name && <h2 className={css.title}>Please register or login.</h2>}
            {name && <h2 className={css.title}>{name}, thank you for using our app!</h2>}
        </div>
    )
}

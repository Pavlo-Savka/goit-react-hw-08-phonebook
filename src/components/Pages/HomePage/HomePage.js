import css from './HomePage.module.css';

import { useAuth } from 'Hooks/useAuth';

export const HomePage = () => {
    const { user: {name} } = useAuth();

    return (
        <div className={css.homepage}>
            <h1 className={css.header}>Welcome to phonebook manager!</h1>
            {!name && <h2 className={css.title}>Please register or login.</h2>}
            {name && <h2 className={css.title}>{name}, thank you for using our app!</h2>}
        </div>
    )
}
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { refreshUser } from 'redux/auth/operations';

 import { Navigate, Route, Routes } from 'react-router-dom';

import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { Contacts } from './Pages/Contacts/Contacts';
import { Register } from './Pages/Register/Register';
import { LogIn } from './Pages/LogIn/LogIn';
import { Layout } from './Layout/Layout';
import { HomePage } from './Pages/HomePage/HomePage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
     <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<HomePage />} />

        <Route
          path='register'
          element={<RestrictedRoute redirectTo={'/contacts'} component={<Register />} />} />

        <Route
          path='login'
          element={<RestrictedRoute redirectTo={'/contacts'} component={<LogIn />} />} />

        <Route
          path='contacts'
          element={<PrivateRoute redirectTo='/login' component={<Contacts />} />} />
      </Route>
      <Route path='*' element={<Navigate to="/" replace />} />
     </Routes>
  );
}
export default App;
// import Form from './Form/Form';
// import ContactsList from './ContactsList/ContactsList';
// import Filter from './Filter/Filter';


// function App() {

//   return (
//     <main>
//       <section className='phonebook'>
//         <h1>Phonebook</h1>
//         <Form />
//       </section>

//       <section className='contacts'>
//         <h2>Contacts</h2>
//         <Filter />
//         <ContactsList />
//       </section>
//     </main>
//   );
// };

// export default App;
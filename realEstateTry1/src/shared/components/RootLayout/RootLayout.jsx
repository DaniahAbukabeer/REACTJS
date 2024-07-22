import {Outlet} from 'react-router-dom';
import { Provider } from 'react-redux';
// src/shared/components/RootLayout/RootLayout.jsx
import store from '../../../lib/store/store.js'; // Default import
import NavBarPanel from '../navBarPanel/NavBarPanel.jsx';

export default function RootLayout() {
    return (
        <>
            <Provider store={store}>
                <NavBarPanel/>
                <main>
                    <Outlet/>
                </main>
            </Provider>
        </>
    )
}
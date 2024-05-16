import { lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';

const EventsPage = lazy(() => import('./pages/EventsPage/EventsPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const ParticipantsPage = lazy(() => import('./pages/ParticipantsPage/ParticipantsPage'));
const ParticipantAccentPage = lazy(() => import('./pages/ParticipantAccentPage/ParticipantAccentPage'));

function App() {
  const location = useLocation();

  if(location.pathname === "/") {
    location.pathname = "/events";
  }

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index path="/events" element={<EventsPage />} />
        <Route path="/registration" element={<RegisterPage />} />
        <Route path="/participants" element={<ParticipantsPage />} >
          <Route path="/participants/:id" element={<ParticipantAccentPage />} />
        </Route>
        <Route path="*" redirectTo="/events" element={<EventsPage />} />
      </Route>
    </Routes>
  );
}
export default App;

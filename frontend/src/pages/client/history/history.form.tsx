import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAppointmentHistory } from '../../../redux/actions/client-history.action';
import { AppDispatch, RootState } from '../../../redux/store';

const HistoryPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const historyData = useSelector((state: RootState) => state.clientHistory.data);
  const loading = useSelector((state: RootState) => state.clientHistory.loading);
  const error = useSelector((state: RootState) => state.clientHistory.error);
  const { idToken } = useSelector((state: RootState) => state.auth);
  if (!idToken) throw Error('No id token')

  useEffect(() => {
    dispatch(fetchAppointmentHistory(idToken));
  }, [dispatch, idToken]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Appointment History</h2>
      <ul>
        {historyData.map((appointment: Visit) => (
          <li key={appointment.id}>
            {appointment.date}: {appointment.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryPage;
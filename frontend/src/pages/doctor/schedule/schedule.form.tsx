import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDoctorSchedule } from '../../../redux/actions/schedule';
import { AppDispatch, RootState } from '../../../redux/store';

const DoctorSchedule: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { schedule, loading, error } = useSelector((state: RootState) => state.schedule);
  const { idToken } = useSelector((state: RootState) => state.auth);
  if (!idToken) throw Error('No id token')

  const [dateFrom, setDateFrom] = useState<string>('');
  const [dateTo, setDateTo] = useState<string>('');

  const handleInputDateFromChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setDateFrom(value);
  };

  const handleInputDateToChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setDateTo(value);
  };
  
  useEffect(() => {
    dispatch(fetchDoctorSchedule(idToken, dateFrom, dateTo));
  }, [dispatch, idToken, dateFrom, dateTo]);

  return (
    <div>
      <h2>Doctor's Schedule</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {schedule?.days.length === 0 && !loading && !error && <p>No schedule available.</p>}
      {schedule?.days.length &&  schedule?.days.length > 0 && (
        <ul>
          {schedule?.days.map((day) => (
            day.busy ? <li key={day.date}>
              {day.client?.name}
            </li> : <></>
          ))}
        </ul>
      )}
      <label>
        Date from:
        <input type="text" name="date" value={dateFrom} onChange={handleInputDateFromChange} />
      </label>

      <label>
        Date to:
        <input type="text" name="date" value={dateTo} onChange={handleInputDateToChange} />
      </label>
    </div>
  );
};

export default DoctorSchedule;
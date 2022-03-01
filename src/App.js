import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

import useDate from './date-context';
import LifetimeBox from './LifetimeBox';
import LinearProgressWithLabel from './LinearProgressWithLabel';

function App() {
  const { birthDate, setBirthDate, today } = useDate()
  console.log(today.toString())
  const lifeDelta = today.getYear() - birthDate.getYear()

  return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>

          <DatePicker
            views={['year', 'month']}
            label="Birth Date"
            value={birthDate}
            onChange={date => {
              setBirthDate(date);
            }}
            renderInput={(params) => <TextField {...params} />}
          />

          <Box sx={{ width: '100%' }}>
            <LinearProgressWithLabel value={ lifeDelta } />
          </Box>

          <LifetimeBox birthDate={birthDate} />

      </LocalizationProvider>


  );
}

export default App;

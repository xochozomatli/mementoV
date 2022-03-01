import { Fragment } from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const tDel28D = 2419200000

const Item = styled(Paper)(({ date }) => ({
    backgroundColor: new Date()-date.valueOf()>tDel28D ? '#ff7f7f' : '#90ee90',
  textAlign: 'center',
  color: '#fff'
}));

const monthSym = (year, month) => new Date(year, month).toString().split(' ')[1]

function MonthArray({ year }) {
  const MonthArray = [...Array(12).keys()].map(month =>
    <Grid item sm={1} key={month}><Item date={new Date(year, month)}>{ monthSym(year, month) }</Item></Grid>
  )
  return <Fragment>{ MonthArray }</Fragment>
}

function YearArray({ year }) {
  return <Grid item sm={12} key={year}><Item date={new Date(year, 12)}>{ year }</Item></Grid>
}


function YearRow({ year }){

  return (
      <Grid container item spacing={1}>
            <YearArray year={year}/>
            <MonthArray year={year}/>
        </Grid>
  )
}

export default YearRow

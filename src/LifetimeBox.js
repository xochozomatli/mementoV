import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import YearRow from './YearBox';

function LifetimeBox({ birthDate }){ 
    const birthYear = birthDate.getYear() + 1900
    console.log(typeof birthYear)
    const deltaArray = [...Array(5).keys()]
    console.log(typeof deltaArray[0])

    const YearArray = [...Array(50).keys()].map(yrDelta =>
        <YearRow key={yrDelta} year={ birthYear + yrDelta } />
    )
    const YrArray = [...Array(5).keys()].map(yrDelta =>
        <div key={yrDelta}>{birthYear + yrDelta}</div>
    )

    return <Box sx={{ flexGrow: 1 }}><Grid container spacing={3}>{ YearArray }</Grid></Box>
}

export default LifetimeBox

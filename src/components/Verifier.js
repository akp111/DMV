import React from "react"
import "./Verifier.css"
import { Card,Paper,Grid,Typography} from '@material-ui/core';
function Verifier()
{
    return(
        <div>
            <Grid container>
<Grid container justify="center" spacing={2} item xs={12} md={12}>
<Grid item xs={8} md={8}>
          
<Typography variant="title" color="inherit">
<Typography variant="h3" component="h1" align="center">Verifier Page</Typography>
<br></br><br></br>
</Typography>

         <Paper  elevation={3} ><Card  variant="outlined" >
        <Typography variant="h4" component="h1" align="center">Request Proofs To The Connection</Typography>
        </Card>
        </Paper>
        </Grid>
        </Grid>
        </Grid>
        </div>
    )
}

export default Verifier

// 
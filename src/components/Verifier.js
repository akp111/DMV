import React from "react"
import "./Verifier.css"
import { Card,Paper,Grid} from '@material-ui/core';
function Verifier()
{
    return(
        <div>
            <Grid container>
<Grid container justify="center" spacing={2} item xs={12} md={12}>
<Grid item xs={8} md={8}>
          
        <h1 id="title">Verifier Page</h1>
        <br></br>
        <Paper  elevation={3}><Card  variant="outlined" >
        <h2 className="step">Request Proofs To The Connection</h2>
        </Card>
        </Paper>
        </Grid>
        </Grid>
        </Grid>
        </div>
    )
}

export default Verifier
import React from "react"
import  "./Issuer.css"
import { Grid,Card,CardActions,Paper,Typography,Snackbar} from '@material-ui/core';
function Issuer()
{
    return(
        <div>

<Grid container>
<Grid container justify="center" spacing={2} item xs={12} md={12}>
<Grid item xs={8} md={8}>

<Typography variant="title" color="inherit">
<h1 id ="title">Issuer Page</h1>
</Typography>
        <Paper  elevation={3}><Card  variant="outlined" >
        <h3>1. Issuer Registration</h3>
        </Card>
        </Paper>
        <br></br>
        <Paper  elevation={3}><Card  variant="outlined" elevation={3}>
        <h3>2. Prepare Schema</h3>
        </Card>
        </Paper>
        <br></br>
        <Paper  elevation={3}><Card  variant="outlined" ></Card>
        <Card  variant="outlined" elevation={3}>
        <h3>3. Define Credential</h3>
        </Card>
        </Paper>
        <br></br>
        <Paper  elevation={3}>
        <Card  variant="outlined" elevation={3}>
        <h3>4. Add Connection To Digital Wallet</h3>
        </Card>
        </Paper>
        <br></br>
        <Paper  elevation={3}>
        <Card  variant="outlined" elevation={3}>
        <h3>5. Issue Credential To The Connection</h3>
        </Card>
        </Paper>
</Grid>
</Grid>
</Grid>

        </div>
    )
}

export default Issuer
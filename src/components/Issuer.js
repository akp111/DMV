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
        <h2>1. Issuer Registration</h2>
        </Card>
        </Paper>
        <br></br>
        <Paper  elevation={3}><Card  variant="outlined" elevation={3}>
        <h2>2. Prepare Schema</h2>
        </Card>
        </Paper>
        <br></br>
        <Paper  elevation={3}><Card  variant="outlined" ></Card>
        <Card  variant="outlined" elevation={3}>
        <h2>3. Define Credential</h2>
        </Card>
        </Paper>
        <br></br>
        <Paper  elevation={3}>
        <Card  variant="outlined" elevation={3}>
        <h2>4. Add Connection To Digital Wallet</h2>
        </Card>
        </Paper>
        <br></br>
        <Paper  elevation={3}>
        <Card  variant="outlined" elevation={3}>
        <h2>5. Issue Credential To The Connection</h2>
        </Card>
        </Paper>
</Grid>
</Grid>
</Grid>

        </div>
    )
}

export default Issuer
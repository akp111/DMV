import React from "react"
import  "./Issuer.css"
import { Grid,Card,Paper,Typography} from '@material-ui/core';
function Issuer()
{
   
  
    return(
        <div>

<Grid container>
<Grid container justify="center" spacing={2} item xs={12} md={12}>
<Grid item xs={8} md={8}>

<Typography variant="title" color="inherit">
<Typography variant="h3" component="h1" align="center">Issuer Page</Typography>
<br></br><br></br>
</Typography>
        <Paper  elevation={3} ><Card  variant="outlined" >
        <Typography variant="h4" component="h1" align="center"> Issuer Registration</Typography>
        </Card>
        </Paper>
        <br></br>
        <Paper  elevation={3}><Card  variant="outlined" elevation={3}>
        <Typography variant="h4" component="h1" align="center"> Prepare Schema</Typography>
        </Card>
        </Paper>
        <br></br>
        <Paper  elevation={3}><Card  variant="outlined" ></Card>
        <Card  variant="outlined" elevation={3}>
        <Typography variant="h4" component="h1" align="center"> Define Credential</Typography>
        </Card>
        </Paper>
        <br></br>
        <Paper  elevation={3}>
        <Card  variant="outlined" elevation={3}>
        <Typography variant="h4" component="h1" align="center"> Add Connection To Digital Wallet</Typography>
        </Card>
        </Paper>
        <br></br>
        <Paper  elevation={3}>
        <Card  variant="outlined" elevation={3}>
        <Typography variant="h4" component="h1" align="center"> Issue Credential To The Connection</Typography>
        </Card>
        </Paper>
</Grid>
</Grid>
</Grid>

        </div>
    )
}

export default Issuer
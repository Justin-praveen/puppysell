import {Container,Navbar,Nav} from "react-bootstrap"
import "./Home.css";
import hu from "../pic/pngegg(13).png";
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import SellTwoToneIcon from '@mui/icons-material/SellTwoTone';
import {Link} from "react-router-dom"

import DialogTitle from '@mui/material/DialogTitle';
import fi from  "../pic/WhatsApp Video 2021-10-29 at 11.19.45 AM.mp4"


import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
  
  const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };
  
  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };





const Home = () => {



    const [open, setOpen] = React.useState(false);
   
    
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <>
        <div id="im"><Navbar bg="transparent" id="n" expand="lg">
  <Container id="jo">
    <Navbar.Brand id="wj" href="#home">
    <img
          alt="hu"
          src={hu}
          width="50"
          height="40"
          className="d-inline-block align-top"
        />{' '}PUPPYSEL</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
      <Nav className="justify-content-end">
        <Nav.Link href=""> <Button variant="text" class="b1">
        HOME
      </Button></Nav.Link>
        <Nav.Link href="#link"> <Button variant="text"  class="b1"onClick={handleClickOpen}>
        CONTACT US
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
         
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom> 
           SORRY WE DONT SHRE PERSNOL DETAILES  
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            EXIT
          </Button>
        </DialogActions>
      </BootstrapDialog></Nav.Link>
        <Nav.Link href="#link"><Button variant="text"  class="b1"onClick={handleClickOpen}>
        ABOUT
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
         
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Sorry we dont share persnol details
          </Typography>
          <Typography gutterBottom>
            we sell and buy
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            EXIT
          </Button>
        </DialogActions>
      </BootstrapDialog></Nav.Link>
      <Nav.Link href="/"> <Button variant="text" class="b1">
        LOG OUT
      </Button></Nav.Link>
      
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>

<div id="jiy">

 <div id="vid">
     <video autoPlay loop muted width="880px">
         <source src={fi} type="video/mp4"/>

     </video>
 </div>

    <Container id="ol">
        <div>
           <h1  id="f">Hi,Welcome</h1> 
           <h4 id="f4">Dogs make for the best friends, and it’s only right that we celebrate them for all the joy and love they’ve given us. Whether labeled on a dog bandana or a paw print poster, you’ll need the perfect dog quote to accompany your piece. That might be with a custom photo book about your dog, a social media post for National Dog Day,
                or with a personalized pet gift picked out just for
                 your furry friend </h4>
                
            
        
        <div id="lp"><Link to="BUY"><Button id="pl" color="success" ><ShoppingCartTwoToneIcon/>BUY PUPPY</Button></Link>
            <Link to="/Sell"><Button id="lo"><SellTwoToneIcon/>SELL PUPPY</Button></Link></div>
        </div>
        <div>
        
        </div>
        
</Container>
</div>
    

        </>
       
    )   
    
}

export default Home

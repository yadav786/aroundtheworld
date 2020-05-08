import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import './CustomModal.css';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({ 
    modalContainer: {
        maxWidth: 'none',
        width: 800,
        padding: '20px',
    },
    modalTitle: {
        color: '#a31d37',
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
    actionPanel: {
        justifyContent: 'center',
    }
}));

interface IProps {
    title: any,
    openModal: boolean,
    handleClose?: any,
    errors?:any,
    success?:any
}

export const CustomModal: React.FunctionComponent<IProps> = (props) => {
    const classes = useStyles();
    const [open, modalStatus] = useState(false); 

    //console.log('createUserResponse.success===', props.success)

    useEffect(() => {
     modalStatus(true); 
    }, [props.openModal]);
  
   const handleDialogClose = () => {
        props.handleClose();
        modalStatus(false);
         
   }

    return ( 
        <Dialog open={open} onClose={() => handleDialogClose()} aria-labelledby='title' aria-describedby='description' classes={{ paper: classes.modalContainer}}>
            <DialogTitle id='title' className={classes.modalTitle}>
                <Typography variant="inherit">{props.title}</Typography>
                <IconButton aria-label="close" className={classes.closeButton} onClick={() => handleDialogClose()}>
                    <CloseIcon />
                </IconButton>
                </DialogTitle>
            <DialogContent dividers>
                {props.errors && Object.values(props.errors).map((value:any, key:number) => {
                 return(
                 <DialogContentText id='description'>
                    <p> <b>{key+1}. </b>{ value }</p>
                </DialogContentText>
                 )
                })
            }
            </DialogContent>
            <DialogActions className={classes.actionPanel}>
              <Button  variant="outlined"  color="secondary" onClick={() => handleDialogClose()}>OK</Button>
            </DialogActions>
        </Dialog>
    );
}

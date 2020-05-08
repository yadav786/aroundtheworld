import React, { MouseEvent, SyntheticEvent } from 'react';
import clsx from 'clsx';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      marginTop: theme.spacing(1),
      overflowX: 'auto',
      padding: '20px'
    },
    containerRoot:{
      flexGrow: 1,
    },
     formControl: { 
      margin: theme.spacing(4),
      minWidth: '60%'
    },
     textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    dense: {
      marginTop: 19,
    }
  }),
);
   

 const GreenCheckbox = withStyles({
  root: {
    color: '#A11C37',
    '&$checked': {
      color: '#A11C37',
    },
   },
   checked: {},
  })((props: CheckboxProps) => <Checkbox color="default" {...props} />);
 

  export const RoleForm:React.FC = () => {
      const [labelWidth, setLabelWidth] = React.useState(0);
      const [name, setName] = React.useState('Composed TextField');
      const labelRef = React.useRef<HTMLLabelElement>(null);
      const classes = useStyles();
      
      const [values, setValues] = React.useState({
        age: '',
        name: 'hai',
      });

  const handleSelectChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name as string]: event.target.value,
    }));
  };

  React.useEffect(() => {
    // setLabelWidth(labelRef.current!.offsetWidth);
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    department: true,
  });

  const handleCheckChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
   <div>Hello</div>
  ); 
}

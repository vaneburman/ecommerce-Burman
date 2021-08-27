import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { NavLink } from 'react-router-dom';




const PrivateLinks = ()=> {


    const anchorRef = React.useRef(null);

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
          return;
        }
    
        setOpen(false);
      };


    const [open, setOpen] = React.useState(false);

    return(
        <>
            <MenuItem onClick={handleClose}>
                <NavLink to='/dashboard' className='nav-link'>
                   Dashboard
                </NavLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <NavLink to='/categories' className='nav-link'>
                  Categorias
                </NavLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <NavLink to='/tableproducts' className='nav-link'>
                   Productos
                </NavLink>
            </MenuItem>
        </>
                
        )

    }

    export default PrivateLinks
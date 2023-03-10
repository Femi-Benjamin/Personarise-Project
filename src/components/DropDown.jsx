import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';




export default function DropDown({paths, path, setPath, onChange}) {
 
  return (
    <div>
      <FormControl sx={{ m: 1, width: '80%', textAlign:'left'}}>
        <Select
          value={path}
          onChange={onChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="" selected>
            <em>Choose your own path</em>
          </MenuItem>
          {paths.map((item) => (
            <MenuItem
              key={item}
              value={item}
            >
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
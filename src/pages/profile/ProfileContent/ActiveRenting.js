import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

export default function ActiveRenting() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason !== 'backdropClick') {
            setOpen(false);
        }
    };

    return (
        <div>
            <Button variant="black" onClick={handleClickOpen}>Your ActiveRenting</Button>
            <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogTitle>Where you live</DialogTitle>
                <DialogContent>
                    <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        <Paper
                            component="form"
                            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                        >
                            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                            <FormControl sx={{ m: 1, minWidth: 300 }}>
                                <InputLabel htmlFor="grouped-native-select">City</InputLabel>
                                <Select native defaultValue="" id="grouped-native-select" label="Grouping">
                                    <option aria-label="None" value="" />
                                    <optgroup>
                                        <option value={1}>Dhaka, Bangladesh</option>
                                        <option value={2}>ctg</option>
                                        <option value={1}>b</option>
                                        <option value={2}>j</option>
                                    </optgroup>
                                </Select>
                            </FormControl>
                            <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                                <CloseIcon />
                            </IconButton>
                        </Paper>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
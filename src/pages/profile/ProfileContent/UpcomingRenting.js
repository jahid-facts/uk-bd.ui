import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';
import { Divider, Grid, TextField } from '@mui/material';

export default function UpcomingRenting() {
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
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <List
                        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                        aria-label="contacts"
                    >
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <StarIcon />
                                </ListItemIcon>
                                <ListItemText onClick={handleClickOpen} primary="Email" />
                            </ListItemButton>
                        </ListItem>
                        <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
                            <DialogTitle>Your Email</DialogTitle>
                            <DialogContent>
                                <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                                    <FormControl sx={{ m: 1 }}>
                                        <TextField id="standard-basic" label="Email" variant="standard" />
                                    </FormControl>
                                </Box>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button onClick={handleClose}>Ok</Button>
                            </DialogActions>
                        </Dialog>
                        <Divider variant="inset" component="li" />
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <StarIcon />
                                </ListItemIcon>
                                <ListItemText onClick={handleClickOpen} primary="Phone Number" />
                            </ListItemButton>
                        </ListItem>
                        <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
                            <DialogTitle>Phone Number</DialogTitle>
                            <DialogContent>
                                <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                                        <TextField id="standard-basic" label="Phone Number" variant="standard" />
                                    </FormControl>
                                </Box>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button onClick={handleClose}>Ok</Button>
                            </DialogActions>
                        </Dialog>
                        <Divider variant="inset" component="li" />
                    </List>
                </Grid>
                <Grid item xs={6}>
                    <List
                        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                        aria-label="contacts"
                    >
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <StarIcon />
                                </ListItemIcon>
                                <ListItemText onClick={handleClickOpen} primary="Mobile" />
                            </ListItemButton>
                        </ListItem>
                        <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
                            <DialogTitle>Your Mobile</DialogTitle>
                            <DialogContent>
                                <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                                    <FormControl sx={{ m: 1 }}>
                                        <TextField id="standard-basic" label="Mobile" variant="standard" />
                                    </FormControl>
                                </Box>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button onClick={handleClose}>Ok</Button>
                            </DialogActions>
                        </Dialog>
                        <Divider variant="inset" component="li" />
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <StarIcon />
                                </ListItemIcon>
                                <ListItemText onClick={handleClickOpen} primary="Phone Number" />
                            </ListItemButton>
                        </ListItem>
                        <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
                            <DialogTitle>Phone</DialogTitle>
                            <DialogContent>
                                <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                                        <TextField id="standard-basic" label="Phone" variant="standard" />
                                    </FormControl>
                                </Box>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Cancel</Button>
                                <Button onClick={handleClose}>Ok</Button>
                            </DialogActions>
                        </Dialog>
                        <Divider variant="inset" component="li" />
                    </List>
                </Grid>
            </Grid>
        </div>
    )
}

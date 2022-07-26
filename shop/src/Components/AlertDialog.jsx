import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { Typography } from "@mui/material";

const AlertDialog = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    props.setRejected(true);
    setOpen(false);
  };

  useEffect(() => {
    if (props.Click === "open") handleClickOpen();
    else if (props.Click === "close") handleClose();
  }, [props]);
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {/* <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle> */}
        <DialogContent>
          <Typography variant="h6">
            Do you wart To Confirm your payment ?
          </Typography>
          <Typography variant="subtitle2">
            Click Yes To Confirm Or No if Not
          </Typography>
        </DialogContent>

        <DialogActions>
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              handleClose();
            }}
          >
            No
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              props.setConfirm(true);
              handleClose();
            }}
            autoFocus
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDialog;

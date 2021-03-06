import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const alertDialogSlide = props => {
  return (
    <div>
      <Dialog
        open={props.show}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => props.cancelAction()}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description" />

          {props.content}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => props.cancelAction()}
            color="primary"
            variant="contained"
          >
            Cancel
          </Button>
          <Button
            onClick={() => props.okAction()}
            color="primary"
            variant="contained"
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default alertDialogSlide;

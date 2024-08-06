import { Snackbar, Alert } from "@mui/material";

interface PopUpProps {
    showAlter: boolean,
    alert: string,
    handleClose: () => void
}

export function PopUp({ showAlter, alert, handleClose }: PopUpProps) {
    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={showAlter}
            onClose={handleClose}
            autoHideDuration={1000}
        >
            <Alert
                onClose={handleClose}
                severity="error"
            >
                {alert}
            </Alert>
        </Snackbar>
    )
}
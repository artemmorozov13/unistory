import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton, Modal } from "@mui/material";

import s from "./modalWindow.module.scss";

interface ModalWindow {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
}

const ModalWindow: React.FC<ModalWindow> = (props) => {
  const { children, isOpen, onClose } = props;

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(
        <Modal classes={{ root: s.modal }} open={isOpen} onClose={onClose}>
          <Box className={s.content} onClick={(e) => e.stopPropagation()}>
            <IconButton className={s.closeButton} onClick={onClose}>
              <CloseIcon />
            </IconButton>
            {children}
          </Box>
        </Modal>,
        document.getElementById("createPost")!
      )
    : null;
};

export default ModalWindow;

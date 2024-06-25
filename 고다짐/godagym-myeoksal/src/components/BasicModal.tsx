import { Dispatch, ReactNode, SetStateAction } from "react";
import styled from "@emotion/styled";
import { Box, Modal } from "@mui/material";

interface PropType {
  children: ReactNode;
  open: boolean;
  handleClose: Dispatch<SetStateAction<boolean>>;
}

const BasicModal = ({ children, open, handleClose }: PropType) => {
  const handleCloseModal = () => {
    handleClose(false);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <StyledBtn onClick={handleCloseModal}>x</StyledBtn>
        {children}
      </Box>
    </Modal>
  );
};

export default BasicModal;

const StyledBtn = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  margin-bottom: 1.5rem;
  border-radius: 6rem;
  outline: none;
  border: none;
  background-color: inherit;

  font-size: 1.25rem;
  cursor: pointer;
`;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "inherit",
  maxHeight: 800,
  minWidth: 300,
  overflowY: "scroll",
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 14,
  p: 3,
};

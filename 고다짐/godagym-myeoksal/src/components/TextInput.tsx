import { TextField } from "@mui/material";
import { LoginWrap } from "../pages/Pages.style";
import { CSSProperties, Dispatch, KeyboardEventHandler } from "react";

interface PropType {
  label: string;
  value: string;
  setValue: Dispatch<React.SetStateAction<string>>;
  type?: string;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  style?: CSSProperties;
  small?: boolean;
  error?: boolean;
  helperText?: string;
}

const TextInput = ({
  label,
  value,
  setValue,
  type,
  onKeyDown,
  style,
  small,
  error,
  helperText,
  ...rest
}: PropType) => {
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <LoginWrap style={style}>
      <TextField
        fullWidth
        error={error}
        id={error ? "outline-error-helper-text" : "outlined-basic"}
        type={type}
        label={label}
        value={value}
        onChange={changeHandler}
        onKeyDown={onKeyDown}
        helperText={error ? helperText : ""}
        variant="outlined"
        inputProps={{
          autoComplete: "off",
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            color: "#fc711c",
            fontFamily: "Arial",
            fontWeight: "bold",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: error ? "red" : "#fc711c",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: error ? "red" : "#fc711c",
            },
          },
          "& .MuiInputLabel-outlined": {
            fontSize: small ? "0.775rem" : "1rem",
            color: error ? "red" : "#fc711c",
            fontWeight: "bold",
            "&.Mui-focused": {
              color: error ? "red" : "#fc711c",
            },
          },
          "& .MuiFormHelperText-root": {
            color: error ? "red" : "#fc711c",
          },
        }}
        {...rest}
      />
    </LoginWrap>
  );
};

export default TextInput;

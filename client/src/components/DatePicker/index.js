import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";

function FormDatePicker(props) {
  const [value, setValue] = useState(new Date());

  const handleChange = (newValue) => {
    setValue(newValue);

    if (props.onValue) {
      props.onValue(newValue);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        disableFuture
        label="Date / Time"
        openTo="day"
        value={value}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}

export default FormDatePicker;

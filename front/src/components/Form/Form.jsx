import React from "react";
import DataTable from "../DataTable/DataTable";
import Container from "@mui/material/Container";
import { Button, FormGroup, Input, InputMask, TextField } from "@mui/material";
import swal from "sweetalert";
import { useState } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState(null);
  const [address, setAddress] = useState(null);
  const [SSN, setSSN] = useState(null);

  const submit = () => {
    /*     swal({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
    }); */
  };

  console.log(firstName);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <FormGroup style={{ minWidth: 500, marginTop: 50 }}>
        <TextField
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          required
          placeholder='First Name'
          style={{ margin: 10 }}
        ></TextField>
        <TextField
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          required
          placeholder='Second Name'
          style={{ margin: 10 }}
        ></TextField>
        <TextField
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          required
          placeholder='Address'
          style={{ margin: 10 }}
        ></TextField>
        <TextField
          mask='999-99-9999'
          value={SSN}
          onChange={(e) => {
            setSSN(e.target.value);
          }}
          required
          placeholder='SSN'
          style={{ margin: 10 }}
        ></TextField>

        <Button onClick={submit}> Submit </Button>
      </FormGroup>
      <DataTable></DataTable>
    </div>
  );
};

export default Form;

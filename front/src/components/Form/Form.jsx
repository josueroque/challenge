import React from "react";
import DataTable from "../DataTable/DataTable";
import Container from "@mui/material/Container";
import { Button, FormGroup, Input } from "@mui/material";
import swal from "sweetalert";
import { useState } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState(null);
  const [address, setAddress] = useState(null);
  const [SSN, setSSN] = useState(null);

  const submit = () => {
    swal({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
    });
  };

  console.log(firstName);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <FormGroup>
        <Input
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          required
          placeholder='First Name'
        ></Input>
        <Input required placeholder='Second Name'></Input>
        <Input required placeholder='Address'></Input>
        <Input required placeholder='SSN'></Input>
        <Button onClick={submit}> Submit </Button>
      </FormGroup>
      <DataTable></DataTable>
    </div>
  );
};

export default Form;

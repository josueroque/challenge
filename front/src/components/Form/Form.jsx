import React, { useEffect, useState } from "react";
import DataTable from "../DataTable/DataTable";
import Container from "@mui/material/Container";
import { Button, FormGroup, Input, InputMask, TextField } from "@mui/material";
import { getMembers } from "../../services/apiService";
import swal from "sweetalert";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState(null);
  const [address, setAddress] = useState(null);
  const [SSN, setSSN] = useState(null);

  const [members, setMembers] = useState([]);

  useEffect(() => {
    console.log("hola");
    const fetchedMembers = getMembers();
    // console.log(fetchedMembers);
    //if (fetchedMembers.length > 1) setMembers(fetchedMembers);
  }, []);

  const submit = () => {};

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <FormGroup style={{ minWidth: 500, margin: 50 }}>
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
      <DataTable rows={members}></DataTable>
    </div>
  );
};

export default Form;

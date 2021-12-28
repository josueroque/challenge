import React, { useEffect, useState, useCallback } from "react";
import DataTable from "../DataTable/DataTable";
import Container from "@mui/material/Container";
import { Button, FormGroup, TextField } from "@mui/material";
import InputMask from "react-input-mask";
import { getMembers, saveMember } from "../../services/apiService";
import swal from "sweetalert";

const Form = () => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [address, setAddress] = useState(null);
  const [SSN, setSSN] = useState(null);

  const [disabled, setDisabled] = useState(true);

  const [members, setMembers] = useState([]);

  const validate = useCallback(() => {
    if (!firstName || !lastName || !address || !SSN) return false;
    if (!firstName.trim().length > 1) return false;
    if (!lastName.trim().length > 1) return false;
    if (!address.trim().length > 1) return false;
    let validateMask = true;
    console.log(SSN.split(""));
    SSN.split("").forEach((item) => {
      if (item === "_") validateMask = false;
    });
    console.log(validateMask);
    if (validateMask) {
      setDisabled(false);
    } else setDisabled(true);
    return;
  }, [SSN, address, firstName, lastName]);

  useEffect(() => {
    loadMembers();
  }, []);

  useEffect(() => {
    validate();
  }, [validate]);

  const loadMembers = async () => {
    const membersData = await getMembers();
    setMembers(membersData);
    return membersData;
  };

  const submit = async () => {
    const newMember = { firstName, lastName, address, ssn: SSN };
    if (validate()) {
      const response = await saveMember(newMember);
      console.log(response);
      if (response.status === 200) setMembers([...members, newMember]);
    }
  };

  const reset = () => {
    setFirstName("");
    setLastName("");
    setAddress("");
    setSSN("");
    setDisabled(true);
  };

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
        <InputMask
          mask='999-99-9999'
          value={SSN}
          onChange={(e) => {
            setSSN(e.target.value);
          }}
          required
          placeholder='SSN'
          style={{ margin: 10, height: 50, fontSize: "1em" }}
        ></InputMask>
        <Container style={{ display: "flex", justifyContent: "space-around" }}>
          <Button variant='contained' onClick={reset}>
            Reset
          </Button>
          <Button variant='contained' onClick={submit} disabled={disabled}>
            Save
          </Button>
        </Container>
      </FormGroup>
      <DataTable rows={members}></DataTable>
    </div>
  );
};

export default Form;

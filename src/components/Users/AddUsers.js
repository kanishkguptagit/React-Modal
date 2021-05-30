import React, { useState, Fragment } from "react";
import styles from "./AddUsers.module.css";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUsers = (props) => {
  const [enteredUser, setEnteredUser] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [isError, setIsError] = useState("");

  const userChangeHandler = (event) => {
    setEnteredUser(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUser.length === 0 || enteredAge.length === 0) {
      setIsError("Field cannot be empty!!");
      return;
    }

    if (enteredAge < 0) {
      setIsError("Age cannot be negative ( < 0 )");
      return;
    }

    const userData = {
      id: Math.random().toString(),
      name: enteredUser,
      age: enteredAge,
    };

    props.onAddUser(userData);

    setEnteredUser("");
    setEnteredAge("");
  };

  const onOkayHandler = () => {
    setIsError("");
  };

  return (
    <Fragment>
      {isError && (
        <ErrorModal
          message={isError}
          title="An error occured!"
          onOkay={onOkayHandler}
        />
      )}
      <Card>
        <form onSubmit={addUserHandler}>
          <div className={styles.inputarea}>
            <label htmlFor="username">Username</label>
            <br />
            <input
              id="username"
              value={enteredUser}
              type="text"
              onChange={userChangeHandler}
            />
            <br />
          </div>

          <div className={styles.inputarea}>
            <label htmlFor="age">Age (Years)</label>
            <br />
            <input
              id="age"
              value={enteredAge}
              type="number"
              onChange={ageChangeHandler}
            />
            <br />
          </div>

          {/* <button type="submit">Add User</button> */}
          <Button>Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddUsers;

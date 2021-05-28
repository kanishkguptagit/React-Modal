import React, {useState} from "react";
import styles from "./AddUsers.module.css";

import Card from "../UI/Card";

const AddUsers = (props) => {

  const [enteredUser, setEnteredUser] = useState('')
  const [enteredAge, setEnteredAge] = useState('')

  const userChangeHandler = (event) => {
    setEnteredUser(event.target.value);
  }

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  }

  const addUserHandler = (event) => {
    event.preventDefault();

    const userData = {
      id: Math.random().toString(),
      name: enteredUser,
      age: enteredAge,
    }

    props.onAddUser(userData);

    setEnteredUser('');
    setEnteredAge('');

  };

  return (
    <Card >
    <form onSubmit={addUserHandler}>
      <div className={styles.inputarea}>
        <label htmlFor="username">Username</label>
        <br />
        <input id="username" value={enteredUser} type="text" onChange={userChangeHandler} />
        <br />
      </div>

      <div className={styles.inputarea}>
        <label htmlFor="age">Age (Years)</label>
        <br />
        <input id="age" value={enteredAge} type="number" onChange={ageChangeHandler} />
        <br />
      </div>

      <button type="submit">Add User</button>
    </form>
    </Card>
  );
};

export default AddUsers;

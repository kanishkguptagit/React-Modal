import React, {useState} from "react";
import AddUsers from "./components/Users/AddUsers";
import Results from "./components/results/Results";

const DATA =[
  {
    id: "d1",
    name: "Max",
    age: "31",
  },
  {
    id: "d2",
    name: "Ron",
    age: "22",
  },
]

function App() {

  const [userData, setUserData] = useState(DATA);

  const addUserHandler = (newuser) => {
    setUserData((prevState)=>{
      return [newuser, ...prevState];
    })
  }

  return (
    <div>
      <AddUsers onAddUser={addUserHandler} />
      <Results items={userData} />
    </div>
  );
}

export default App;

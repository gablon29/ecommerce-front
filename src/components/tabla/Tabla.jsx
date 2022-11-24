/* import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import GetUsers from "../helpers/GetUsers";

const Tabla = () => {
  const [users, setUsers] = useState([]);

  const getUsersUpdate = async () => {
    GetUsers().then((data) => {
      setUsers(data);
    });
  };
  useEffect(() => {
    getUsersUpdate();
  }, []);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
            {users.map((user) => (
                <>
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.userName}</td>
                <td>{user.email}</td>
                <td> <Button>Eliminar</Button> </td>
            </tr>
              </>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default Tabla;
 */

import React, { useState, useEffect } from "react";  
import { Table, Button } from "react-bootstrap";
import GetUsers from "../helpers/GetUsers";
import Navegacion from "../navegacion/Navegacion";

const Tabla = () => {
  const [users, setUsers] = useState([]);
  const [dataAux, setDataAux] = useState([]);
  const [show, setShow] = useState(false);

  const getUsersUpdate = async () => {
    GetUsers().then((data) => {
      setUsers(data);
      setDataAux(data);
    });
  };

  useEffect(() => {
    getUsersUpdate();
  }, []);

  
  const handleDelete = (index, e) => {
    setUsers(users.filter((user, i) => i !== index));
    setShow(true)
  }; 

  const handleAdd = (index, e) => {
    setUsers(dataAux);
    setShow(false);
  };

  return (
    <>
      <Navegacion />
      <div className="container">
        <Table striped bordered hover >
          <thead>
            <tr>
              <th>#</th>
              <th>Name and Lastname</th>
              <th>Username</th>
              <th>Email</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
              {users.map((user, index) => (
                  <>
                    <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        {/* <td> <Button>Eliminar</Button> </td> */}
                        <td>
                          <Button onClick={(e) => handleDelete(index, e)}>Eliminar</Button>
                        </td>                       
                    </tr>
                </>
              ))}
          </tbody>        
        </Table>
                
        {show ? (<div> <Button className="mx-1" onClick={(e) => handleAdd(e)}> Agregar todas las filas </Button> </div>) : (<div> </div>)}
      </div>          
    </>
  );
};

export default Tabla;

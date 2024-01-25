import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import { useInput } from "../../hooks/useInput";

const EffectSection = () => {
  const input = useInput();
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    setLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    setUsers(users);
    setLoading(false);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <section>
      <h3>Effect</h3>

      <Button onClick={() => setModal(true)}>Открыть информацию</Button>

      <Modal open={modal}>
        <h3>Hello from modal</h3>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
          consequuntur deserunt, laudantium quia aperiam id molestias, iste in
          impedit quod aut magni? Id sit perspiciatis, unde recusandae
          voluptates nihil quae?
        </p>

        <Button onClick={() => setModal(false)}>Close Modal</Button>
      </Modal>

      {loading && <p>loading...</p>}
      {!loading && (
        <>
          <input type="text" className="control" {...input} />
          <ul>
            {users
              .filter((user) => user.name.toLowerCase().includes(input.value.toLowerCase()))
              .map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
          </ul>
        </>
      )}
    </section>
  );
};

export default EffectSection;

import React, { useContext, useEffect } from "react";
import Contacts from "../Contacts/Contacts";
import ContactFrom from "../Contacts/ContactForm";
import ContactFilter from "../Contacts/ContactFilter";
import AuthContext from "../context/auth/AuthContext";

const Home = () => {
  const context = useContext(AuthContext);

  useEffect(() => {
    context.loadUser();
    //eslint-disable-next-line
  }, []);

  return (
    <div className="grid-2">
      <div>
        <ContactFrom />
      </div>
      <div>
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;

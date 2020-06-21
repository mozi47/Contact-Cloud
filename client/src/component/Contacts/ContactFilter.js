import React, { useEffect, useContext, useRef } from "react";
import ContactContext from "../context/contact/ContactContext";

const ContactFilter = () => {
  const context = useContext(ContactContext);
  const text = useRef("");
  const { filterContact, clearFilter, filtered } = context;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const onChange = (e) => {
    if (text.current.value !== "") {
      filterContact(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type="text"
        placeholder="Filter Contacts..."
        onChange={onChange}
      />
    </form>
  );
};

export default ContactFilter;

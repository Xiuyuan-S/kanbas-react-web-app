import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { FaPlus } from "react-icons/fa";
import { FaEllipsisV } from "react-icons/fa";
import "./index.css";

function Buttons() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <button className="btn btn-secondary buttons">Collapse All</button>
      <button className="btn btn-secondary buttons">View Progess</button>
      <Dropdown className="buttons" style={{ display: "inline" }}>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          Publish All
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <button className="btn btn-danger buttons">
        <FaPlus style={{ fontSize: "1em" }} />
        Module
      </button>
      <button type="button" className="btn btn-secondary">
        <FaEllipsisV />
      </button>
    </div>
  );
}
export default Buttons;
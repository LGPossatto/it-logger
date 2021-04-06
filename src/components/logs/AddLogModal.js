import React, { useState } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { addLogs } from "../../reducers/actions/logActions";

import M from "materialize-css/dist/js/materialize.min.js";
import TechSelectOptions from "../tech/TechSelectOptions";

const AddLogModal = ({ addLogs }) => {
  const [message, setMessage] = useState("");
  const [tech, setTech] = useState("");
  const [attention, setAttention] = useState(false);

  const onSubmit = () => {
    if (message === "" || tech === "") {
      M.toast({ html: "Please enter a message and select a technician" });
    } else {
      const newLog = {
        message,
        tech,
        attention,
        date: new Date(),
      };

      addLogs(newLog);

      M.toast({ html: `New Log added by: ${tech}` });

      setMessage("");
      setTech("");
      setAttention(false);
    }
  };

  return (
    <div
      id="add-log-modal"
      className="modal"
      style={{ width: "75%", height: "75%" }}
    >
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <label htmlFor="message" className="active">
              Log Message
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              className="browser-default"
              name="tech"
              value={tech}
              onChange={(e) => setTech(e.target.value)}
            >
              <option value="" disabled>
                Select a Technician
              </option>
              <TechSelectOptions></TechSelectOptions>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={() => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          className="modal-close waves-effect waves-light blue btn"
          onClick={onSubmit}
        >
          Enter
        </a>
      </div>
    </div>
  );
};

AddLogModal.propTypes = {
  addLogs: PropTypes.func.isRequired,
};

export default connect(null, { addLogs })(AddLogModal);

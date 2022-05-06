import React from "react";
import { Link } from "react-router-dom";
export const ModalRegisterSuccess: React.FC = () => {
  return (
    <div className="modal hidden register-success">
      <div className="modal-content">
        <h1>Register success</h1>
        <Link to="/entry">
          <button>Entry</button>
        </Link>
      </div>
    </div>
  );
};

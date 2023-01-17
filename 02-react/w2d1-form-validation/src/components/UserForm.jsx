import { useReducer } from "react";
import { initialFormState, formReducer } from "../utilities/formReducer";

function UserForm() {
  const [formState, dispatch] = useReducer(formReducer, initialFormState);

  return (
    <div className="card mt-3">
      <div className="card-body">
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name:
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            className="form-control"
            value={formState.firstName.value}
            onChange={(e) =>
              dispatch({ type: e.target.name, payload: e.target.value })
            }
          />
          {formState.firstName.error && (
            <span className="form-text text-danger">
              {formState.firstName.error}
            </span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            First Name:
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="form-control"
            value={formState.lastName.value}
            onChange={(e) =>
              dispatch({ type: e.target.name, payload: e.target.value })
            }
          />
          {formState.lastName.error && (
            <span className="form-text text-danger">
              {formState.lastName.error}
            </span>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            First Name:
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="form-control"
            value={formState.email.value}
            onChange={(e) =>
              dispatch({ type: e.target.name, payload: e.target.value })
            }
          />
          {formState.email.error && (
            <span className="form-text text-danger">
              {formState.email.error}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
export default UserForm;

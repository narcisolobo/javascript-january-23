import { useReducer } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "firstName":
      return {
        ...state,
        firstName: action.payload,
      };
    case "lastName":
      return {
        ...state,
        lastName: action.payload,
      };
    case "email":
      return {
        ...state,
        email: action.payload,
      };
    default:
      console.log('Unexpected Type')
      return {
        ...state,
      }
  }
};

const App = () => {
  const [formState, dispatch] = useReducer(formReducer, initialFormState);

  return (
    <Container>
      <Row>
        <Col lg={6} md={12} sm={12}>
          <h1>COLUMN 1</h1>
        </Col>
        <Col lg={6} md={12} sm={12}>
          <h1>Form</h1>
          <form>
            <div className="mb-3">
              <Form.Label>First Name:</Form.Label>
              <Form.Control
                type="text"
                value={formState.firstName}
                onChange={(e) =>
                  dispatch({
                    type: "firstName",
                    payload: e.target.value,
                  })
                }
              />
            </div>
            <div className="mb-3">
              <Form.Label>Last Name:</Form.Label>
              <Form.Control
                type="text"
                value={formState.lastName}
                onChange={(e) =>
                  dispatch({
                    type: "lastName",
                    payload: e.target.value,
                  })
                }
              />
            </div>
            <div className="mb-3">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                value={formState.email}
                onChange={(e) =>
                  dispatch({
                    type: "email",
                    payload: e.target.value,
                  })
                }
              />
            </div>
            <div className="d-flex justify-content-end">
              <Button variant="danger">SUBMIT</Button>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
};
export default App;

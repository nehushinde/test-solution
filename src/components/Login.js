import React, { Component } from "react";
const emailRegExp = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);
const passwordRegExp = RegExp(/^(?=.*?[A-Z])(?=.*?[0-9]).{8,}$/);

const formValid = ({ isError, ...rest }) => {
  let isValid = false;

  Object.values(isError).forEach((val) => {
    if (val.length > 0) {
      isValid = false;
    } else {
      isValid = true;
    }
  });

  Object.values(rest).forEach((val) => {
    if (val === null) {
      isValid = false;
    } else {
      isValid = true;
    }
  });

  return isValid;
};
export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      isError: {
        email: "",
        password: "",
      },
    };
  }

  onSubmit = (e) => {
    e.preventDefault();

    if (
      this.state.email === "Clarion@clarion.com" &&
      this.state.password === "Clarion123"
    ) {
      localStorage.setItem("username", this.state.email);
      this.props.history.push({
        pathname: "/dashboard",
        // state: { email: this.state.email },
      });
    }
  };

  formValChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let isError = { ...this.state.isError };

    switch (name) {
      case "email":
        isError.email = emailRegExp.test(value)
          ? ""
          : "Email address is invalid";
        break;
      case "password":
        isError.password = passwordRegExp.test(value)
          ? ""
          : " Atleast one upper case, digit and  Minimum eight characaters required";
        break;
      default:
        break;
    }

    this.setState({
      isError,
      [name]: value,
    });
  };
  render() {
    const { isError, email, password } = this.state;
    const enable =
      isError.email.length === 0 &&
      isError.password.length === 0 &&
      email.length > 0 &&
      password.length > 0;
    return (
      <form className="form" onSubmit={this.onSubmit} noValidate>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className={
              isError.email.length > 0
                ? "is-invalid form-control"
                : "form-control"
            }
            name="email"
            onChange={this.formValChange}
          />
          {isError.email.length > 0 && (
            <span className="invalid-feedback">{isError.email}</span>
          )}
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className={
              isError.password.length > 0
                ? "is-invalid form-control"
                : "form-control"
            }
            name="password"
            onChange={this.formValChange}
          />
          {isError.password.length > 0 && (
            <span className="invalid-feedback">{isError.password}</span>
          )}
        </div>

        <button
          type="submit"
          className="btn btn-block btn-danger"
          disabled={!enable}
        >
          Login
        </button>
      </form>
    );
  }
}

import React, { Component } from "react";

export default class AddProduct extends Component {
  render() {
    const {
      handleChange,
      handleSubmit,
      handleClose,
      show,
      productName,
      productRate,
      productQuality,
    } = this.props;
    const showHideClassName = show ? "modal d-block" : "modal d-none";
    const enable =
      productName.length > 0 && productRate > 0 && productQuality > 0;
    return (
      <div className={showHideClassName}>
        <div className="modal-container">
          {" "}
          <h2>Add Product</h2>
          <div className="form-group">
            <label>Enter Name:</label>
            <input
              type="text"
              value={productName}
              name="productName"
              onChange={(e) => handleChange(e)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Enter Rate:</label>
            <input
              type="number"
              value={productRate}
              name="productRate"
              onChange={(e) => handleChange(e)}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Enter Quality:</label>
            <input
              type="number"
              value={productQuality}
              name="productQuality"
              onChange={(e) => handleChange(e)}
              className="form-control"
            />
          </div>
          <div
            className="form-group"
            style={{
              justifyContent: "space-evenly",
              display: "flex",
            }}
          >
            <button
              onClick={(e) => handleSubmit(e)}
              type="button"
              className="btn btn-primary"
              disabled={!enable}
            >
              Save
            </button>
            <button
              onClick={(e) => handleClose(e)}
              type="button"
              className="btn btn-primary"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

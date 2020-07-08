import React, { Component } from "react";

export default class ProductList extends Component {
  render() {
    const { items, handleDelete } = this.props;
    return (
      <div style={{ margin: "25px" }}>
        {items.map((item, index) => (
          <div
            className="col-md-12 list"
            key={index}
          >
            <button className="close" onClick={() => handleDelete(item.id)}>
              ×
            </button>
            <p>Name: {item.name} </p>
            <p>Rate: {item.rate}</p>
            <p>Quality: {item.quality}</p>
          </div>
        ))}
      </div>
    );
  }
}

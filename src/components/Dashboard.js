import React, { Component } from "react";
import AddProduct from "./AddProduct";
import ProductList from "./ProductList";
import { v4 as uuid } from "uuid";

const data = {
  arrayOfProducts: [
    {
      id: 1,
      name: "CHECK PRINT SHIRT",
      rate: 110,
      quality: 2,
    },
    {
      id: 2,
      name: "GLORIA HIGH LOGO SNEAKER",
      rate: 91,
      quality: 3,
    },
  ],
};
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: "",
      productName: "",
      productRate: 0,
      productQuality: 0,
      products: data.arrayOfProducts,
    };
  }

  handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    const item = {
      id: uuid(),
      name: this.state.productName,
      rate: this.state.productRate,
      quality: this.state.productQuality,
    };

    const newItem = [...this.state.products, item];
    this.setState({ products: newItem });
    console.log(this.state.products);
    this.modalClose();
  };

  handleDelete = (id) => {
    const filteredItems = this.state.products.filter((item) => item.id !== id);
    this.setState({
      products: filteredItems,
    });
  };

  modalOpen() {
    this.setState({ modal: true });
  }

  modalClose() {
    this.setState({
      productName: "",
      productRate: 0,
      productQuality: 0,
      modal: false,
    });
  }
  render() {
    let username = localStorage.getItem("username").split("@")[0];

    return (
      <section>
        <AddProduct
          show={this.state.modal}
          productName={this.state.productName}
          productRate={this.state.productRate}
          productQuality={this.state.productQuality}
          handleClose={(e) => this.modalClose(e)}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        ></AddProduct>
        <header className="username">
          <span className="containerSide">Hello {username}</span>
        </header>
        <div className="container main">
          <div className="row">
            <div className="col-sm-8">
              <h4>Product List</h4>
            </div>
            <div className="col-sm-4">
              <button
                className="btn btn-primary containerSide"
                onClick={(e) => this.modalOpen(e)}
              >
                Add Product
              </button>
            </div>
          </div>
          <ProductList
            items={this.state.products}
            handleDelete={this.handleDelete}
          ></ProductList>
        </div>
      </section>
    );
  }
}

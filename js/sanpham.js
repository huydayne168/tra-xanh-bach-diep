"use strict";

//Declare Variables:
const productsWrapper = document.querySelector(
    ".products-wrapper .products-list"
);

const types = document.querySelectorAll(".filter-wrapper .type input");
const brands = document.querySelectorAll(".filter-wrapper .brand input");
const arrangeOption = document.querySelector("#order-price");

let products = {
    /**
     * Để lọc các loại trà và thương hiêu:
     *      -truyền type, brand của các loại trà tương ứng với name của các input:checkbox
     */

    // List products:
    productsList: [
        {
            name: "Trà Shan Tuyết",
            price: "50,000",
            img: "./asset/Pictures/chitietsanpham/img-1.jpg",
            rate: 17,
            type: "tra shan tuyet",
            brand: "",
        },
        {
            name: "Trà Ô Long",
            price: "70,000",
            img: "./asset/Pictures/chitietsanpham/img-1.jpg",
            rate: 27,
            type: "tra xanh o long",
            brand: "",
        },
        {
            name: "Trà Búp",
            price: "70,000",
            img: "./asset/Pictures/chitietsanpham/img-1.jpg",
            rate: 27,
            type: "tra sen",
            brand: "",
        },

        {
            name: "Trà Shan Tuyết",
            price: "50,000",
            img: "./asset/Pictures/chitietsanpham/img-1.jpg",
            rate: 17,
            type: "",
            brand: "",
        },
        {
            name: "Trà Ô Long",
            price: "70,000",
            img: "./asset/Pictures/chitietsanpham/img-1.jpg",
            rate: 27,
            type: "",
            brand: "",
        },
        {
            name: "Trà Búp",
            price: "70,000",
            img: "./asset/Pictures/chitietsanpham/img-1.jpg",
            rate: 27,
            type: "",
            brand: "",
        },

        {
            name: "Trà Shan Tuyết",
            price: "50,000",
            img: "./asset/Pictures/chitietsanpham/img-1.jpg",
            rate: 17,
            type: "",
            brand: "",
        },
        {
            name: "Trà Ô Long",
            price: "70,000",
            img: "./asset/Pictures/chitietsanpham/img-1.jpg",
            rate: 27,
            type: "",
            brand: "",
        },
        {
            name: "Trà Búp",
            price: "70,000",
            img: "./asset/Pictures/chitietsanpham/img-1.jpg",
            rate: 27,
            type: "",
            brand: "",
        },

        {
            name: "Trà Shan Tuyết",
            price: "50,000",
            img: "./asset/Pictures/chitietsanpham/img-1.jpg",
            rate: 17,
            type: "",
            brand: "",
        },
        {
            name: "Trà Ô Long",
            price: "70,000",
            img: "./asset/Pictures/chitietsanpham/img-1.jpg",
            rate: 27,
            type: "",
            brand: "",
        },
        {
            name: "Trà Búp",
            price: "70,000",
            img: "./asset/Pictures/chitietsanpham/img-1.jpg",
            rate: 27,
            type: "",
            brand: "",
        },
    ],

    // render function:
    render: function (array) {
        array.forEach((element, index) => {
            productsWrapper.innerHTML += `
            <a href = "product-detail.html">
                <div class="items">
                    <div class="top">
                        <div class="rate">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <span>(${element.rate})</span>
                        </div>
                        <p class="new">New</p>
                    </div>

                    <img
                        src=${element.img} 
                        alt=""
                    />

                    <h3 class="products-name">${element.name}</h3>
                    <div class="price-amount">
                        <span class="products-price">${element.price}</span>
                        <select class="amount-select">
                            <option value="200g">200g</option>
                            <option value="500g">500g</option>
                            <option value="700g">700g</option>
                        </select>
                    </div>
                </div>
            </a>
            `;
        });
    },

    // render ALL products
    renderAll: function () {
        this.render(this.productsList);
    },

    // filter function:
    filterFunction: function (filters, array) {
        filters.forEach((filter) => {
            filter.addEventListener("click", () => {
                // filer input checked
                if (filter.checked) {
                    array.push(filter.name);
                } else {
                    array.splice(array.indexOf(filter.name), 1);
                }

                this.addToFilteredProductArray(array);

                if (this.filteredProductArray.length !== 0) {
                    productsWrapper.innerHTML = "";
                    this.render(this.filteredProductArray);
                } else {
                    productsWrapper.innerHTML =
                        '<div class="no-result">Không có kết quả!</div>';
                }

                //clear filteredProductArray:
                this.filteredProductArray = [];

                // check any checked input?:
                if (
                    this.typesInputChoose.length === 0 &&
                    this.brandsInputChoose.length === 0
                ) {
                    productsWrapper.innerHTML = "";
                    this.renderAll();
                }
            });
        });
    },

    // chose input array:
    typesInputChoose: [],
    brandsInputChoose: [],

    // productsPrice:
    pricesInputChoose: [],
    addProductsPrice: function () {},

    // final chose input array:
    filteredProductArray: [],
    // add to final input array function:
    addToFilteredProductArray: function (array) {
        this.productsList.forEach((product) => {
            array.forEach((element) => {
                if (element === product.type || element === product.brand) {
                    this.filteredProductArray.push(product);
                }
            });
        });
    },

    // filter type function:
    filterType: function () {
        this.filterFunction(types, this.typesInputChoose);
    },

    // filter brand function:
    filterBrand: function () {
        this.filterFunction(brands, this.brandsInputChoose);
    },

    start: function () {
        this.renderAll();
        this.filterType();
        this.filterBrand();
    },
};

products.start();

// ===========================================================================
/// <summary>
/// App.js
/// ReactApp
/// created by Mehrdad Soleimanimajd on 26.03.2023
/// </summary>
/// <created>ʆϒʅ, 26.03.2023</created>
/// <changed>ʆϒʅ, 10.07.2023</changed>
// ===========================================================================

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function NavButtons() {
    let a = ["a", "b", "c", "d", "hello"];
    let columns = [];

    // for (let index = 0; index < a.length; index++) {
    //   columns.push(<button id={index} >AButton</button>)
    // }
    for (const item of a) {
        columns.push(<button id={item}>{item} Button</button>);
    }
    // for (const item of a) {
    //   columns.push(<a id={item} href="https://google.com" target="_blank">{item} URL</a>)
    // }
    return columns;
}

function Article() {
    return (
        <>
            <section>
                <h3>React App</h3>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
            </section>
            <article>
                <a
                    className="app-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </article>
            <details>
                <h5>React App details</h5>
                <p>
                    Edit <code>source</code> and save to reload.
                </p>
            </details>
        </>
    );
}

function ProductsTableRow({ row, searchedFor, showStocked }) {
    // if (searchedFor !== "") {
    //     if (row.name.toLowerCase().indexOf(searchedFor.toLowerCase()) !== -1) {
    //         // if (row.name.toLowerCase() === "a") {
    //         //
    //     } else {
    //         row = "";
    //     }
    // }
    if (showStocked === false) {
        return row.stock ? (
            <tr>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.kind}</td>
            </tr>
        ) : (
            <tr class="notAvailable">
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.kind}</td>
            </tr>
        );
    } else {
        return row.stock ? (
            <tr>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.kind}</td>
            </tr>
        ) : (
            <tr></tr>
        );
    }
}

function ProductTableFilters({
    products,
    setProductsUpdate,
    sortedAfter,
    onSort,
    searchedFor,
    onSearch,
    showStocked,
    onShowStock,
}) {
    if (sortedAfter === "id") {
        products.sort((a, b) => a.id - b.id);
    }
    if (sortedAfter === "name") {
        products.sort((a, b) => {
            const aPrm = a.name.toLowerCase();
            const bPrm = b.name.toLowerCase();
            if (aPrm < bPrm) {
                return -1;
            } else if (aPrm > bPrm) {
                return 1;
            } else {
                return 0;
            }
        });
    }
    if (sortedAfter === "kind") {
        products.sort((a, b) => (a.kind > b.kind ? -1 : 0));
    }
    function onUpdate(e) {
        onSort(e.target.value);
        // setProductsUpdate();
    }

    return (
        <>
            <label for="sort">
                Sort based on {sortedAfter}
                <select name="sort" id="sort" onChange={onUpdate}>
                    <option value="default">default</option>
                    <option value="id">id</option>
                    <option value="name">name</option>
                    <option value="kind">kind</option>
                </select>
            </label>
            <br />
            <label>
                Search {searchedFor}
                <input
                    type="text"
                    onChange={(e) => onSearch(e.target.value)}
                    placeholder="filter"
                ></input>
            </label>
            <br />
            <label>
                Stocked
                <input
                    type="checkbox"
                    checked={showStocked}
                    onChange={(e) => onShowStock(e.target.checked)}
                ></input>
            </label>
        </>
    );
}

function ProductsTable({ products }) {
    const [sort, setSort] = useState("");
    const [search, setSearch] = useState("");
    const [stock, setStock] = useState(false);
    const [productsState, setProductsState] = useState(products);
    let rows = [];
    productsState.forEach((element) => {
        rows.push(
            <ProductsTableRow
                row={element}
                searchFor={search}
                showStocked={stock}
            />
        );
    });

    return (
        <table>
            <ProductTableFilters
                products={productsState}
                onProductsUpdate={setProductsState}
                sortedAfter={sort}
                onSort={setSort}
                searchedFor={search}
                onSearch={setSearch}
                showStocked={stock}
                onShowStock={setStock}
            />
            <tbody>{rows}</tbody>
            <thead>Products Table:</thead>
        </table>
    );
}

const PRODUCTS = [
    { id: 1, name: "a", kind: 1, stock: true },
    { id: 3, name: "d", kind: 2, stock: true },
    { id: 5, name: "b", kind: 1, stock: true },
    { id: 2, name: "e", kind: 2, stock: true },
    { id: 6, name: "c", kind: 1, stock: false },
    { id: 7, name: "f", kind: 2, stock: false },
];

function App() {
    return (
        <div className="App">
            <nav className="app-nav">
                <NavButtons />
                <img src={logo} className="app-logo" alt="logo" />
            </nav>
            <aside className="app-sidebar"></aside>
            <div className="app-content">
                <Article />
            </div>
            <div className="app-table">
                <ProductsTable products={PRODUCTS} />
            </div>
            <footer className="app-footer"></footer>
        </div>
    );
}

export default App;

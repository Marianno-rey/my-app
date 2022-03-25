// Currently this page is not reading data from database
// Data is being fed through this page from data.js
// The reason is to get an understanding of data transfer in React-router
import { Link, Outlet } from 'react-router-dom';
import { getItems } from '../data';
import "../styles/styles.css";

const Shoppingpage = () => {
    let items = getItems();

    return (
        <div style={{ display: "flex" }}>
            <nav
                style={{
                    borderRight: "solid 1px",
                    padding: "1rem",
                }}
            >
                {items.map((item) => (
                    <Link
                        style={{ display: "block", margin: "1rem 0" }}
                        to={`/items/${item.number}`}
                        key={item.number}
                    >
                        {item.name}
                    </Link>
                ))}
            </nav>
            <Outlet />
        </div>
    )
}

export default Shoppingpage;
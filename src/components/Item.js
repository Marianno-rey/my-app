import { useParams } from 'react-router-dom'

const item = () => {
    let params = useParams();
    let item = getItem(parseInt(params.itemId, 10));
    return( 
        <main>
            <h2>Total Due : {item.amount}</h2>
            <p>
                {item.name}: {item.number}
            </p>
            <p>Due Date: {item.due}</p>
        </main>
    )
};

export default item;
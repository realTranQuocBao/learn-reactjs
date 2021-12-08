import { useState, useMemo, useRef } from 'react';

// 1. memo() ->higher Order Component (HOC)
// 2. useCallback()

// Hooks -> useMemo
// HOC -> memo
// Render props


function Content() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [products, setProducts] = useState([]);

    const nameRef = useRef()

    const handleSubmit = () => {
        const newProduct = {
            name,
            price: Number(price)
        }
        console.log(newProduct);
        setProducts([...products, newProduct]);

        setName('');
        setPrice('');

        nameRef.current.focus();
    }

    // const total = products.reduce((result, product) => (
    //     result + product.price
    // ), 0)

    const total = useMemo(() => {
        const result = products.reduce((result, product) => (
            result + product.price
        ), 0)
        
        console.log("Tính toán lại");

        return result;    
    }, [products])



    return (
        <div>
            <input
                value={name}
                placeholder="Enter name..."
                onChange={e => setName(e.target.value)}
                ref={nameRef}
            />
            <br />
            <input
                value={price}
                placeholder="Enter price..."
                onChange={e => setPrice(e.target.value)}
            />
            <br />
            <button onClick={handleSubmit}>Add</button>
            <h1>{`Total: ${total}`}</h1>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>{`${product.name} - ${product.price}`}</li>
                ))}
            </ul>
        </div>
    )
}

export default Content;
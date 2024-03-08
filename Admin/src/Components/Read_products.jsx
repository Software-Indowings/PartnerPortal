import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import backgroundImage from '../images/3.png'; 

function ReadProducts(props) {
    const { product_id } = useParams();
    const [product, setProduct] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8081/read_products/${product_id}`)
            .then(res => {
                console.log(res);
                setProduct(res.data[0]);
            })
            .catch(err => console.log(err));
    }, [product_id]);

    const handleDelete = (product_id) => {
        axios.delete(`http://localhost:8081/delete_products/${product_id}`)
            .then(res => {
                navigate('/products');
            })
            .catch(err => console.log(err));
    };

    return (
        <div
            className='d-flex flex-column vh-100 justify-content-center align-items-center'
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            

            <div className='w-75 bg-white rounded p-5'>
                <h3 className="mb-4">Product Details:</h3>
                <table className="table table-bordered">
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <td>{product.product_id}</td>
                        </tr>
                        <tr>
                            <th>Name</th>
                            <td>{product.name}</td>
                        </tr>
                        <tr>
                            <th>Stock</th>
                            <td>{product.stock}</td>
                        </tr>
                        <tr>
                            <th>Retail Price</th>
                            <td>{product.retail_price}</td>
                        </tr>
                        <tr>
                            <th>Partner Price</th>
                            <td>{product.partner_price}</td>
                        </tr>
                        <tr>
                            <th>Category</th>
                            <td>{product.category}</td>
                        </tr>
                        <tr>
                            <th>Brochure</th>
                            <td><a href={product.brochure} target="_blank" rel="noopener noreferrer">View Brochure</a></td>
                        </tr>
                    </tbody>
                </table>
                <div className="mt-4">
                    <Link to="/products" className='btn btn-primary me-2'>Back</Link>
                    <Link to={`/update_products/${product.product_id}`} className='btn btn-primary mx-2'>Edit</Link>
                    <button onClick={() => handleDelete(product.product_id)} className='btn btn-danger'>Delete</button>
                </div>
            </div>
        </div>
    );
}

export default ReadProducts;

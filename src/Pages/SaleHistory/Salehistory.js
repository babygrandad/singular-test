import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { GetRecords } from '../../utils/Api/SaleHistoryApi';
import { GetProducts } from '../../utils/Api/ProductsApi';

function Salehistory() {
	const { id } = useParams();
	const [product, setProduct] = useState([]);
	const [saleRecords, setSaleRecords] = useState([]);

	useEffect(() => {
		const fetchProduct = async (id) => {
			const products = await GetProducts();
			setProduct(products.data.find(item => item.id === id));
		}

		const fetchRecords = async (id) => {
			setSaleRecords(await GetRecords(id));
		}

		fetchProduct(id);
		fetchRecords(id);
	})

	return (
		<div>Salehistory</div>
	)
}

export default Salehistory
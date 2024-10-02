import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { GetRecords } from '../../utils/Api/SaleHistoryApi';

function Salehistory() {
	const { id } = useParams();
	const [product, setProduct] = useState([]);
	const [saleRecords, setSaleRecords] = useState([]);


	const fetchProduct = async (id) => {
		
	}

	const fetchRecords = async (id) => {
		// get product records by the product id
	}


  return (
	<div>Salehistory</div>
  )
}

export default Salehistory
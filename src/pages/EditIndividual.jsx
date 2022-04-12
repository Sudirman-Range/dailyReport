import React from "react";
import { useParams } from "react-router-dom";

const EditIndividual = () => {
	const { date } = useParams();
	return <div>EditIndividual : {date}</div>;
};

export default EditIndividual;

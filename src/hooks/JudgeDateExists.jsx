import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const JudgeDateExists = (date, setLoading) => {
	const navigate = useNavigate();

	const [dailyReport, setDailyReport] = useState("");

	const [slashDate, setSlashDate] = useState();

	useEffect(() => {
		const judgeDateExists = async () => {
			const docRef = doc(db, "dailyReport", date);
			const docSnap = await getDoc(docRef);
			if (docSnap.exists()) {
				setDailyReport(docSnap.data().text);
				setSlashDate(docSnap.data().slashDate);
			} else {
				navigate("/", { replace: true });
			}
			setLoading(false);
		};
		judgeDateExists();
	}, []);
	return { dailyReport, setDailyReport, slashDate };
};

export default JudgeDateExists;

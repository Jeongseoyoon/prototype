import { Suspense } from "react";
import StartPages from "../pages/schedule/StartPages";
import { Spinner } from "react-bootstrap";

const { createBrowserRouter } = require("react-router-dom");


const Loading = <Spinner animation="border"size="xl" variant="primary"/>

const root = createBrowserRouter ([
	{
		path:"",
		element: <Suspense fallback={Loading}><StartPages></StartPages></Suspense>
	},
])

export default root
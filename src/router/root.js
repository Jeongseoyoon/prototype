import { Suspense } from "react";
import StartPages from "../pages/schedule/StartPages";
import { Spinner } from "react-bootstrap";
import scheduleRouter from "./scheduleRouter";
import GroundRegisterPages from "../pages/schedule/GroundRegisterPages";

const { createBrowserRouter } = require("react-router-dom");


const Loading = <Spinner animation="border"size="xl" variant="primary"/>

const root = createBrowserRouter ([
	{
		path:"/",
		element: <Suspense fallback={Loading}><StartPages></StartPages></Suspense>,
		// children: scheduleRouter()
	},
	{
		path:"admin",
		element: <Suspense fallback={Loading}><GroundRegisterPages></GroundRegisterPages></Suspense>
	},
	{
		path:"schedule",
		element: <Suspense fallback={Loading}><StartPages></StartPages></Suspense>,
		children: scheduleRouter()
	},
])

export default root
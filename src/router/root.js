import { Suspense } from "react";
import StartPages from "../pages/schedule/StartPages";
import scheduleRouter from "./scheduleRouter";
import GroundRegisterPages from "../pages/schedule/GroundRegisterPages";

const { createBrowserRouter } = require("react-router-dom");


const Loading = '';

const root = createBrowserRouter ([
	{
		path:"",
		element: <Suspense fallback={Loading}><StartPages></StartPages></Suspense>,
		children: scheduleRouter()
	},
	{
		path:"about",
		element: <Suspense fallback={Loading}><StartPages></StartPages></Suspense>,
	},
	{
		path:"pricing",
		element: <Suspense fallback={Loading}><StartPages></StartPages></Suspense>,
	},
	{
		path:"schedule",
		element: <Suspense fallback={Loading}><StartPages></StartPages></Suspense>,
		children: scheduleRouter()
	},
	{
		path:"support",
		element: <Suspense fallback={Loading}><StartPages></StartPages></Suspense>,
	},
	{
		path:"admin",
		element: <Suspense fallback={Loading}><GroundRegisterPages></GroundRegisterPages></Suspense>
	},
])

export default root
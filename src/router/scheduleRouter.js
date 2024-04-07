import { Suspense } from "react"
import { Spinner } from "react-bootstrap"
import GroundPages from "../pages/schedule/GroundPages"
import SatellitePages from "../pages/schedule/SatellitePages"
import StartPages from "../pages/schedule/StartPages"

const Loading = <Spinner animation="border"size="xl" variant="primary"/>

const scheduleRouter = () => {
  return [
    {
      //시작하기
      path: 'start',
      element:<Suspense fallback={Loading}><StartPages></StartPages></Suspense>,
    },
    {
      //위성등록
      path: 'satellite-register',
      element:<Suspense fallback={Loading}><SatellitePages></SatellitePages></Suspense>,
    },
    {
      //지상국(연락처)등록
      path: 'ground-register',
      element:<Suspense fallback={Loading}><GroundPages></GroundPages></Suspense>,
    },
    {
      //스케쥴예약
      path: 'schedule-register',
      element:<Suspense fallback={Loading}><scheduleRouter></scheduleRouter></Suspense>,
    },
  ]
}

export default scheduleRouter
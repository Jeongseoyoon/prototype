import { Suspense } from "react"
import GroundPages from "../pages/schedule/GroundPages"
import SatellitePages from "../pages/schedule/SatellitePages"
import StartPages from "../pages/schedule/StartPages"
import SchedulePages from "../pages/schedule/SchedulePages"

const Loading = '';

const scheduleRouter = () => {
  return [
    {
      //시작하기
      path: 'start',
      element:<Suspense fallback={Loading}><StartPages></StartPages></Suspense>,
    },
    {
      //위성등록/조회
      path: 'satellite-register',
      element:<Suspense fallback={Loading}><SatellitePages></SatellitePages></Suspense>,
    },
    {
      //지상국(연락처)등록/조회
      path: 'ground-register',
      element:<Suspense fallback={Loading}><GroundPages></GroundPages></Suspense>,
    },
    {
      //스케쥴예약/조회
      path: 'schedule-register',
      element:<Suspense fallback={Loading}><SchedulePages></SchedulePages></Suspense>,
    },
  ]
}

export default scheduleRouter
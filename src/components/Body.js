
import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Error from './Error';

const Body = () => {
   
    
    const appRouter=createBrowserRouter([
        {
            path:"/login",
            element:<Login/>
        },
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        },
        {
            path:"/error",
            element:<Error/>
        }
    ]);
   
  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body
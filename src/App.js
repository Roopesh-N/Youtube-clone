import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import appstore from './utils/appstore';
import MainContainer from './components/MainContainer';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WatchVideo from './components/WatchVideo';
import SearchResults from './components/SearchResults';


const appRouter=createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element: <MainContainer/>
    },
    {
      path:"/watch",
      element:<WatchVideo/>
    },
    {
      path:"/results",
      element:<SearchResults/>
    }
  ]

}
])

function App() {



  return (
    <Provider store={appstore}>
    <div className="">

        <RouterProvider router={appRouter}/>

    </div>
    </Provider>
  );
}

export default App;

import { RouterProvider } from 'react-router-dom';
import router from './routes';
import VideoContextProvider from './context/videoContext';


const App = () => {
  return (
    <VideoContextProvider>
      <RouterProvider router={router} />
    </VideoContextProvider>
  );
};

export default App;
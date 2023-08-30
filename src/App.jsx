import Router from "./route/Router";
import { ToastContainer } from "react-toastify";
import Loading from "./components/Loading";
import { useSelector } from "react-redux";
function App() {
  const initialLoading = useSelector((state) => state.auth.initialLoading);

  if (initialLoading) {
    return <Loading />;
  }
  return (
    <>
      <div>
        <Router />
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </>
  );
}

export default App;

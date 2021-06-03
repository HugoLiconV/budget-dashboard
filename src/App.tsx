import { useAuth0 } from "@auth0/auth0-react";
import Loader from "components/icons/loader";
import AuthenticatedApp from "pages/authenticated-app";
import CreateRecord from "pages/create-record";
import UnauthenticatedApp from "pages/unauthenticated-app";
import "./App.css";

function App() {
  // const { isLoading, isAuthenticated } = useAuth0();

  // if (isLoading) {
  //   return (
  //     <div className="w-full flex justify-center">
  //       <Loader />
  //     </div>
  //   );
  // }

  return true ? <CreateRecord /> : <UnauthenticatedApp />;
}
export default App;

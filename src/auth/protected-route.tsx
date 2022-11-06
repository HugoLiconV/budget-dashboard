import { Route, RouteComponentProps, RouteProps } from "react-router-dom";
// import { withAuthenticationRequired } from "@auth0/auth0-react";
// import Loader from "components/icons/loader";

type Props = RouteProps & {
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
};

const ProtectedRoute = ({ component, ...args }: Props) => (
  <Route component={component} {...args} />
);

export default ProtectedRoute;

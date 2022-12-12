import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import Login from "../../pages/login";

interface PrivateRouteProps {
    children: any
}

function PrivateRoute(props: PrivateRouteProps) {
    const { children } = props
    const router = useRouter()

    // if (!Cookies.get('USER_TOKEN')) {
    //     return <div>{children}</div>
    // }

    return (
        <div>{children}</div>
    );
}

export default PrivateRoute;
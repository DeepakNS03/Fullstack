import PropTypes from "prop-types";
import { Suspense } from "react";
import Loader from "./loader";

const LazySuspense = ({component:Component,...rest}) => {
    return(
        <Suspense fallback={<Loader/>}>
            <Component {...rest}/>
        </Suspense>
    )
};

LazySuspense.propTypes = {
    component:PropTypes.elementType.isRequired,
};

export default LazySuspense
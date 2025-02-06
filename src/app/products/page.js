// import Products from "../../../components/Products"
import { lazy, Suspense } from 'react';
import Loadings from '../../../components/Loadings ';
const ProductsData = lazy(() => import('../../../components/Products'));

function Page() {



    return (
        <>
            <Suspense fallback={<Loadings />} >
                <ProductsData />
            </Suspense>

        </>
    )
}

export default Page
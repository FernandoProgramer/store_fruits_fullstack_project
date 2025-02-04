import { Suspense } from "react";
import FruitsPage from "./fruits/page";
import Loading from "./loading";

export default function HomePage() {
    return (
        <>
            <Suspense fallback={<Loading />}>
                <FruitsPage />
            </Suspense>
        </>
    )
}

import { ReactElement } from "react";
import DefaultLayout from "../../containers/DefaultLayout";

function AboutPage() {
    return (
        <div>About Page</div>
    );
}

AboutPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <DefaultLayout>
            {page}
        </DefaultLayout>
    )
}

export default AboutPage;
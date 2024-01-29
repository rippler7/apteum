import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
function NoPage() {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Oops!</title>
                <meta name="description" content="Apteum pairs you with professionals abroad to build bespoke staffing solutions" />
                <meta name="keywords" content="Apteum, customer service, people support, professional services, staffing solutions, staffing, expertise, service specialists, employers, jobseekers, project management, talented professionals, talent acquisition service, staff recruitment"></meta>
            </Helmet>
            <section className="">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center">
                        <h1 className="mb-4 text-7xl tracking-tight lg:text-9xl text-primary-600 dark:text-primary-500">404</h1>
                        <p className="mb-4 text-3xl tracking-tight md:text-4xl">Something's missing.</p>
                        <p className="mb-4 text-lg text-gray-500 dark:text-gray-400">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
                        <Link to="/" className="inline-flex bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">Back to Homepage</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default NoPage;
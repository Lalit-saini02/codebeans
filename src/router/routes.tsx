import { lazy } from 'react';
const Index = lazy(() => import('../pages/Index'));
const Portfolio = lazy(() => import('../pages/Portfolio'));
const Services = lazy(() => import('../pages/Services'));
const Team = lazy(() => import('../pages/Team'));
const AboutUs = lazy(() => import('../pages/AboutUs'));
const Career = lazy(() => import('../pages/Career'));
const ServicesDetail = lazy(() => import('../pages/ServicesDetail'));
const PortfolioDetail = lazy(() => import('../pages/PortfolioDetail'));
const ContactUs = lazy(() => import('../pages/ContactUs'));
const BlogDetail = lazy(() => import('../pages/BlogDetail'));
const Blog = lazy(() => import('../pages/Blog'));
const TermsCondition = lazy(() => import('../pages/TermsConditions'));
const PrivacyPolicy = lazy(() => import('../pages/PrivacyPolicy'));
const FAQs = lazy(() => import('../pages/faq'));
const Crypto = lazy(() => import('../pages/Crypto'));
const RealEstate = lazy(() => import('../pages/RealEstate'));
const ModernSaas = lazy(() => import('../pages/ModernSaas'));
const Healthcare = lazy(() => import('../pages/Healthcare'));
const Error404 = lazy(() => import('../pages/404'));
const HotelResort = lazy(() => import('../pages/HotelResort'));
const Marketing = lazy(() => import('../pages/Marketing'));
const Application = lazy(() => import('../pages/Application'));
const Nft = lazy(() => import('../pages/Nft'));

const routes = [
    {
        path: '/',
        element: <Index />,
    },
    {
        path: '/portfolio',
        element: <Portfolio />,
    },
    {
        path: '/services',
        element: <Services />,
    },
    {
        path: '/team',
        element: <Team />,
    },
    {
        path: '/about-us',
        element: <AboutUs />,
    },
    {
        path: '/career',
        element: <Career />,
    },
    {
        path: '/services-detail',
        element: <ServicesDetail />,
    },
    {
        path: '/portfolio-detail',
        element: <PortfolioDetail />,
    },
    {
        path: '/contact-us',
        element: <ContactUs />,
    },
    {
        path: '/blog-details',
        element: <BlogDetail />,
    },
    {
        path: '/blog',
        element: <Blog />,
    },
    {
        path: '/terms-conditions',
        element: <TermsCondition />,
    },
    {
        path: '/privacy-policy',
        element: <PrivacyPolicy />,
    },
    {
        path: '/faq',
        element: <FAQs />,
    },
    {
        path: '/crypto',
        element: <Crypto />,
    },
    {
        path: '/real-estate',
        element: <RealEstate />,
    },
    {
        path: '/modern-saas',
        element: <ModernSaas />,
    },
    {
        path: '/healthcare',
        element: <Healthcare />,
    },
    {
        path: '/hotel-resort',
        element: <HotelResort />,
    },
    {
        path: '/marketing',
        element: <Marketing />,
    },
    {
        path: '/application',
        element: <Application />,
    },
    {
        path: '/nft',
        element: <Nft />,
    },
    {
        path: '*',
        element: <Error404 />,
    },
];

export { routes };

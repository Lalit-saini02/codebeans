import { Link } from 'react-router-dom';
// import Faq from '../components/Faq';
// import Testimonial from '../components/Testimonial';
// import BlogSlider from '../components/BlogSlider';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';

const ServicesDetailmoblie = () => {

    document.title = 'Services Detail | Web App Development Company';
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;
    return (
        <div>
            <div className="bg-[url(/assets/images/inner-page-hero-bg.png)] bg-cover bg-bottom bg-no-repeat pt-[82px] lg:pt-[106px]">
                <div className="relative">
                    <div className="container">
                        <div className="relative items-center py-14 lg:flex lg:py-[100px]">
                            <div className="relative z-[1] text-center text-white lg:w-3/5 ltr:lg:text-left rtl:lg:text-right xl:w-3/5">
                                <h2 className="text-4xl font-black sm:text-5xl sm:leading-[80px] xl:text-[70px]">Mobile-App Development</h2>
                                <p className="my-8 text-xl leading-[23px] text-[#7780A1]">
                                    Contacting a mobile app development company and creating a mobile app is a proven way to increase user loyalty. Once launched, your customer can connect with you at any time at the touch of a button. We will help you throughout your digital journey using the experience of our Android and iOS application development services. We will help you achieve your business goals at a competitive cost.
                                </p>
                                <Link to="/about-us" className="btn mt-2 capitalize text-white">
                                    Request A Quote
                                </Link>
                            </div>
                            <div
                                className="top-[100px] mt-10 h-96 w-auto ltr:right-0 rtl:left-0 lg:absolute lg:mt-0 lg:h-auto lg:w-2/5"
                                data-aos={isRtl ? 'fade-right' : 'fade-left'}
                                data-aos-duration="1000"
                            >
                                <img src="/assets/images/Mobile-app-development.png" alt="Mobile-app-development" className="mx-auto mt-[-20px] h-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="py-14 lg:py-[100px]">
                <div className="container">
                    <div className="heading text-center  ltr:lg:text-center rtl:lg:text-center">
                        {/* <h6>Design Process</h6> */}
                        <h4>Mobile App Development Services</h4>
                        <p className="mt-4 text-lg font-semibold">
                            Take the easier option and let us manage your mobile app development the way we do best.
                        </p>
                    </div>
                    <div className="grid gap-10 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3">
                        <div>
                            <div className="h-[100px]" data-aos="fade-up" data-aos-duration="1000">
                                <img src='assets/images/cross-platform-app-icon.png' className='h-[65px] m-auto' alt='cross-platform-app-icon' />
                            </div>
                            {/* <h4 className="mb-4 text-[22px] font-extrabold text-black dark:text-white">Define</h4> */}
                            <p className="font-semibold text-center w-[85%] leading-[32px] md:text-lg">
                                <b className='text-black'>Cross Platform App Development: </b>For every project we try to use a different set of technologies based on the digital product requirements. If you have a tight budget but still want to benefit from an excellent product in a timely manner, cross-platform development will be a major help to your business.
                            </p>
                        </div>
                        <div>
                            <div className="h-[100px]" data-aos="fade-up" data-aos-duration="1000">
                                <img src='assets/images/ios-app-icon.png' className='h-[65px] m-auto' alt='ios-app-icon' />
                            </div>
                            {/* <h4 className="mb-4 text-[22px] font-extrabold text-black dark:text-white">Design</h4> */}
                            <p className="font-semibold text-center w-[85%] leading-[32px] md:text-lg">
                                <b className='text-black'>IOS App Development: </b>
                                User behaviour and habits have changed significantly in recent years due to the use of mobile devices. Partner with us to create memorable user experiences through our custom iOS app development and allow users to be part of your digital journey.
                            </p>
                        </div>
                        <div>
                            <div className="h-[100px]" data-aos="fade-up" data-aos-duration="1000">
                                <img src='assets/images/android-app-icon.png' className='h-[65px] m-auto' alt='android-app-icon' />
                            </div>
                            {/* <h4 className="mb-4 text-[22px] font-extrabold text-black dark:text-white">Build</h4> */}
                            <p className="font-semibold leading-[32px] w-[85%] text-center md:text-lg"><b className='text-black'>Android App Development: </b>
                                Our clients have supported people to find their dream job, share great travel experiences and contributed to increases in quality of life using mobile apps we have developed. Your next android mobile app could positively impact someone's life. Let's see how you can do this together.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="py-14 lg:py-[100px]">
                <div className="container">
                    <div className="heading text-center ltr:lg:text-left rtl:lg:text-right">
                        <h4>Our Design Expertise</h4>
                    </div>
                    <ul>
                        <li className="flex border-t-2 border-black/5 py-10 dark:border-gray-dark lg:items-center">
                            <div
                                className="text-lg font-extrabold text-secondary ltr:pr-5 rtl:pl-5 sm:pt-0.5 sm:text-xl ltr:sm:pr-12 rtl:sm:pl-12 lg:w-1/6 lg:p-0"
                                data-aos={isRtl ? 'fade-left' : 'fade-right'}
                                data-aos-duration="1000"
                            >
                                <span className="text-primary">/</span>01
                            </div>
                            <div className="lg:w-4/6">
                                <h4 className="pb-3 text-xl font-extrabold text-black dark:text-white sm:text-2xl">Clear and straightforward</h4>
                                <p className="text-lg font-semibold">
                                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a
                                    document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is
                                    available.
                                </p>
                            </div>
                        </li>
                        <li className="flex border-t-2 border-black/5 py-10 dark:border-gray-dark lg:items-center">
                            <div
                                className="text-lg font-extrabold text-secondary ltr:pr-5 rtl:pl-5 sm:pt-0.5 sm:text-xl ltr:sm:pr-12 rtl:sm:pl-12 lg:w-1/6 lg:p-0"
                                data-aos={isRtl ? 'fade-left' : 'fade-right'}
                                data-aos-duration="1000"
                            >
                                <span className="text-primary">/</span>02
                            </div>
                            <div className="lg:w-4/6">
                                <h4 className="pb-3 text-xl font-extrabold text-black dark:text-white sm:text-2xl">Visually appealing</h4>
                                <p className="text-lg font-semibold">
                                    We pay a lot of attention to the visual solution so that it is also attractive and in line with modern market requirements
                                    in addition to being comfortable to use.
                                </p>
                            </div>
                        </li>
                        <li className="flex border-t-2 border-black/5 py-10 dark:border-gray-dark lg:items-center">
                            <div
                                className="text-lg font-extrabold text-secondary ltr:pr-5 rtl:pl-5 sm:pt-0.5 sm:text-xl ltr:sm:pr-12 rtl:sm:pl-12 lg:w-1/6 lg:p-0"
                                data-aos={isRtl ? 'fade-left' : 'fade-right'}
                                data-aos-duration="1000"
                            >
                                <span className="text-primary">/</span>03
                            </div>
                            <div className="lg:w-4/6">
                                <h4 className="pb-3 text-xl font-extrabold text-black dark:text-white sm:text-2xl">User-friendly</h4>
                                <p className="text-lg font-semibold">
                                    Our design solutions are aesthetically pleasing, user-friendly, and practical so that users will feel attention and a gentle
                                    attitude in every pixel.
                                </p>
                            </div>
                        </li>
                        <li className="flex border-t-2 border-black/5 pt-10 dark:border-gray-dark lg:items-center">
                            <div
                                className="text-lg font-extrabold text-secondary ltr:pr-5 rtl:pl-5 sm:pt-0.5 sm:text-xl ltr:sm:pr-12 rtl:sm:pl-12 lg:w-1/6 lg:p-0"
                                data-aos={isRtl ? 'fade-left' : 'fade-right'}
                                data-aos-duration="1000"
                            >
                                <span className="text-primary">/</span>04
                            </div>
                            <div className="lg:w-4/6">
                                <h4 className="pb-3 text-xl font-extrabold text-black dark:text-white sm:text-2xl">Enhanced Productivity</h4>
                                <p className="text-lg font-semibold">
                                    We significantly reduce the task completion time, allowing users to do their jobs in fewer clicks, thus contributing to
                                    better overall productivity.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section> */}

            {/* <section className="py-14 lg:py-[100px]">
                <div className="container">
                    <div className="mb-10 flex flex-col items-center justify-center gap-4 lg:mb-14 lg:flex-row lg:justify-between">
                        <div className="heading mb-0 text-center ltr:lg:text-left rtl:lg:text-right">
                            <h4>Some of Our Cases</h4>
                        </div>
                        <Link
                            to="/portfolio"
                            className="text-sm font-extrabold text-black transition hover:text-secondary dark:text-white dark:hover:text-secondary"
                        >
                            View All
                        </Link>
                    </div>
                    <div className="grid gap-[30px] sm:grid-cols-2">
                        <div
                            className="group relative rounded-[32px] border border-transparent drop-shadow-[5px_10px_100px_rgba(8,17,31,0.06)] transition duration-500 hover:border-secondary"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <Link to="/portfolio-detail" className="absolute top-0 z-[1] h-full w-full ltr:left-0 rtl:right-0"></Link>
                            <div className="rounded-t-[32px] md:h-[355px]">
                                <img src="/assets/images/cases-1.png" alt="cases-1" className="mx-auto h-full w-full rounded-t-[32px] object-cover" />
                            </div>
                            <div className="rounded-b-[32px] bg-white p-5 transition duration-500 group-hover:bg-secondary/5 dark:bg-gray-dark">
                                <h4 className="text-lg font-bold text-black dark:text-white md:text-xl">Integer ornare nisi vitae risus vulputate</h4>
                                <h5 className="mt-2 font-semibold md:text-lg">Website</h5>
                            </div>
                        </div>
                        <div
                            className="group relative rounded-[32px] border border-transparent drop-shadow-[5px_10px_100px_rgba(8,17,31,0.06)] transition duration-500 hover:border-secondary"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <Link to="/portfolio-detail" className="absolute top-0 z-[1] h-full w-full ltr:left-0 rtl:right-0"></Link>
                            <div className="rounded-t-[32px] md:h-[355px]">
                                <img src="/assets/images/cases-2.png" alt="cases-2" className="mx-auto h-full w-full rounded-t-[32px] object-cover" />
                            </div>
                            <div className="rounded-b-[32px] bg-white p-5 transition duration-500 group-hover:bg-secondary/5 dark:bg-gray-dark">
                                <h4 className="text-lg font-bold text-black dark:text-white md:text-xl">Morbi vehicula metus a purus dapibu</h4>
                                <h5 className="mt-2 font-semibold md:text-lg">Website</h5>
                            </div>
                        </div>
                        <div
                            className="group relative rounded-[32px] border border-transparent drop-shadow-[5px_10px_100px_rgba(8,17,31,0.06)] transition duration-500 hover:border-secondary"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <Link to="/portfolio-detail" className="absolute top-0 z-[1] h-full w-full ltr:left-0 rtl:right-0"></Link>
                            <div className="rounded-t-[32px] md:h-[355px]">
                                <img src="/assets/images/cases-3.png" alt="cases-3" className="mx-auto h-full w-full rounded-t-[32px] object-cover" />
                            </div>
                            <div className="rounded-b-[32px] bg-white p-5 transition duration-500 group-hover:bg-secondary/5 dark:bg-gray-dark">
                                <h4 className="text-lg font-bold text-black dark:text-white md:text-xl">Pellentesque imperdiet dui eget ante egestas</h4>
                                <h5 className="mt-2 font-semibold md:text-lg">Website</h5>
                            </div>
                        </div>
                        <div
                            className="group relative rounded-[32px] border border-transparent drop-shadow-[5px_10px_100px_rgba(8,17,31,0.06)] transition duration-500 hover:border-secondary"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <Link to="/portfolio-detail" className="absolute top-0 z-[1] h-full w-full ltr:left-0 rtl:right-0"></Link>
                            <div className="rounded-t-[32px] md:h-[355px]">
                                <img src="/assets/images/cases-4.png" alt="cases-4" className="mx-auto h-full w-full rounded-t-[32px] object-cover" />
                            </div>
                            <div className="rounded-b-[32px] bg-white p-5 transition duration-500 group-hover:bg-secondary/5 dark:bg-gray-dark">
                                <h4 className="text-lg font-bold text-black dark:text-white md:text-xl">Mauris non lorem quis erat</h4>
                                <h5 className="mt-2 font-semibold md:text-lg">Website</h5>
                            </div>
                        </div>
                        <div
                            className="group relative rounded-[32px] border border-transparent drop-shadow-[5px_10px_100px_rgba(8,17,31,0.06)] transition duration-500 hover:border-secondary sm:col-span-2"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <Link to="/portfolio-detail" className="absolute top-0 z-[1] h-full w-full ltr:left-0 rtl:right-0"></Link>
                            <div className="rounded-t-[32px] md:h-[606px]">
                                <img src="/assets/images/cases-5.png" alt="cases-5" className="h-full w-full rounded-t-[32px] object-cover" />
                            </div>
                            <div className="rounded-b-[32px] bg-white p-5 transition duration-500 group-hover:bg-secondary/5 dark:bg-gray-dark">
                                <h4 className="text-lg font-bold text-black dark:text-white md:text-xl">Pellentesque imperdiet dui eget ante egestas</h4>
                                <h5 className="mt-2 font-semibold md:text-lg">Website</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            <section className="py-14 lg:py-[100px]">
                <div className="container">
                    <div className="heading text-center ltr:lg:text-center rtl:lg:text-right">
                        <h4>Our Technologies</h4>
                    </div>
                    <div className="overflow-y-auto">
                        <div className="grid items-center w-[135px] grid-cols-4 gap-[30px] md:w-auto">
                            <div className="rounded-[41px] border border-transparent transition duration-500 hover:border-secondary">
                                <img src="/assets/images/ios.png" alt="Figma" className="rounded-[32px]" />
                            </div>
                            <div className="rounded-[32px] w-[135px] border border-transparent transition duration-500 hover:border-secondary">
                                <img src="/assets/images/react.png" alt="SKetch" className="rounded-[32px] p-[5px] bg-[#87ceeb2e]" />
                            </div>
                            <div className="rounded-[32px] w-[135px] border border-transparent transition duration-500 hover:border-secondary">
                                <img src="/assets/images/android.png" alt="Marvel" className="rounded-[32px] bg-[#90ee9042] p-[5px]" />
                            </div>
                            <div className="rounded-[32px] w-[135px] border border-transparent transition duration-500 hover:border-secondary">
                                <img src="/assets/images/flutter.png" alt="flutter" className="rounded-[32px] bg-[#0000ff26] p-[12px] h-[130px]" />
                            </div>
                            {/* <div className="rounded-[32px] border border-transparent transition duration-500 hover:border-secondary">
                                <img src="/assets/images/adobe-xd.png" alt="Adobe-XD" className="rounded-[32px]" />
                            </div>
                            <div className="rounded-[32px] border border-transparent transition duration-500 hover:border-secondary">
                                <img src="/assets/images/origami-studio.png" alt="Origami-Studio" className="rounded-[32px]" />
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* <BlogSlider title2="Related articles" />

            <Testimonial showTitle={false} />

            <Faq showTitle={false} /> */}

            {/* <section className="py-14 dark:bg-gray-dark lg:py-[100px]">
                <div className="container">
                    <div className="relative z-10 lg:flex">
                        <div className="heading text-center rtl:pl-10 lg:mb-0 lg:w-1/3 ltr:lg:pr-10 ltr:lg:text-left rtl:lg:text-right">
                            <h6>Get In Touch.</h6>
                            <h4 className="sm:!leading-[50px]">Ready to Get Started?</h4>
                            <img
                                src="/assets/images/form-img.png"
                                alt="form-img"
                                className="mx-auto"
                                data-aos={isRtl ? 'fade-left' : 'fade-right'}
                                data-aos-duration="1000"
                            />
                        </div>
                        <form action="" className="rounded-3xl bg-white px-4 py-12 dark:bg-[#101626] lg:w-2/3 lg:px-8">
                            <div className="grid gap-10 sm:grid-cols-2">
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="name"
                                        className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                                    />
                                    <label
                                        htmlFor=""
                                        className="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white"
                                    >
                                        Full Name
                                    </label>
                                    <svg
                                        width="20"
                                        height="22"
                                        viewBox="0 0 20 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                                    >
                                        <path
                                            d="M5.42855 5.57875C5.42855 8.10348 7.47525 10.1502 9.99998 10.1502C12.5247 10.1502 14.5714 8.10348 14.5714 5.57875C14.5714 3.05402 12.5247 1.00732 9.99998 1.00732"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M2 16.9328C2 15.9495 2.61812 15.0724 3.5441 14.7417V14.7417C7.71891 13.2507 12.2811 13.2507 16.4559 14.7417V14.7417C17.3819 15.0724 18 15.9495 18 16.9328V18.7014C18 19.9185 16.922 20.8535 15.7172 20.6813L13.8184 20.4101C11.2856 20.0483 8.71435 20.0483 6.18162 20.4101L4.28284 20.6813C3.07798 20.8535 2 19.9185 2 18.7014V16.9328Z"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                        />
                                    </svg>
                                </div>
                                <div className="relative">
                                    <input
                                        type="email"
                                        name="email"
                                        className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                                    />
                                    <label
                                        htmlFor=""
                                        className="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white"
                                    >
                                        Email Address
                                    </label>
                                    <svg
                                        width="22"
                                        height="21"
                                        viewBox="0 0 22 21"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                                    >
                                        <path
                                            d="M1 8.00732V7.00732C1 4.2459 3.23858 2.00732 6 2.00732H16C18.7614 2.00732 21 4.2459 21 7.00732V13.0073C21 15.7687 18.7614 18.0073 16 18.0073H6C3.23858 18.0073 1 15.7687 1 13.0073V12.0073"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M5 7.00732L9.8 10.6073C10.5111 11.1407 11.4889 11.1407 12.2 10.6073L17 7.00732"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="mobile"
                                        className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                                    />
                                    <label
                                        htmlFor=""
                                        className="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white"
                                    >
                                        Mobile Number
                                    </label>
                                    <svg
                                        width="22"
                                        height="22"
                                        viewBox="0 0 22 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                                    >
                                        <path
                                            d="M6.45241 1.40806C5.45292 0.783702 4.14202 0.887138 3.2983 1.73086L1.86856 3.1606C-0.302899 5.33207 1.73747 10.8931 6.42586 15.5815C11.1142 20.2699 16.6753 22.3102 18.8467 20.1388L20.2765 18.709C21.2635 17.722 21.2374 16.0956 20.2182 15.0764L18.0036 12.8619C16.9844 11.8426 15.358 11.8165 14.371 12.8036L14.0639 13.1107C13.531 13.6436 12.6713 13.6957 12.0713 13.2005C11.4925 12.7229 10.9159 12.208 10.3576 11.6497C9.79933 11.0914 9.28441 10.5149 8.80678 9.93607C8.31161 9.33601 8.36374 8.47631 8.89666 7.9434L9.20375 7.63631C9.98187 6.85819 10.1303 5.68271 9.65898 4.72062"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="city"
                                        className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                                    />
                                    <label
                                        htmlFor=""
                                        className="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white"
                                    >
                                        City
                                    </label>
                                    <svg
                                        width="20"
                                        height="22"
                                        viewBox="0 0 20 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                                    >
                                        <path
                                            d="M5.89416 2.31259C7.20149 1.48625 8.75475 1.00732 10.4211 1.00732C15.0719 1.00732 18.8421 4.73828 18.8421 9.34066C18.8421 15.0541 12.1053 21.0073 10.4211 21.0073C8.73684 21.0073 2 15.0541 2 9.34066C2 7.87581 2.38193 6.49924 3.05263 5.30315"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M13.4571 9.77392C13.5365 9.49702 13.579 9.20456 13.579 8.90216C13.579 7.15811 12.1651 5.74427 10.4211 5.74427C8.67702 5.74427 7.26318 7.15811 7.26318 8.90216C7.26318 10.6462 8.67702 12.0601 10.4211 12.0601C10.6633 12.0601 10.8991 12.0328 11.1256 11.9812"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="relative mt-10">
                                <input
                                    type="text"
                                    name="message"
                                    className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                                />
                                <label htmlFor="" className="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-[#101626] dark:text-white">
                                    Message
                                </label>
                                <svg
                                    width="22"
                                    height="22"
                                    viewBox="0 0 22 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                                >
                                    <path
                                        d="M1 11.467V18.9267C1 19.7652 1.96993 20.2314 2.6247 19.7076L5.45217 17.4456C5.8068 17.1619 6.24742 17.0073 6.70156 17.0073H16C18.7614 17.0073 21 14.7687 21 12.0073V6.00732C21 3.2459 18.7614 1.00732 16 1.00732H6C3.23858 1.00732 1 3.2459 1 6.00732V7.62225"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                    />
                                    <circle cx="6.05005" cy="9.05713" r="1.25" fill="currentColor" />
                                    <circle cx="11.05" cy="9.05713" r="1.25" fill="currentColor" />
                                    <circle cx="16.05" cy="9.05713" r="1.25" fill="currentColor" />
                                </svg>
                            </div>
                            <div className="mt-10 text-center ltr:lg:text-right rtl:lg:text-left">
                                <button type="button" className="btn bg-gray px-12 capitalize text-white dark:bg-white dark:text-black dark:hover:bg-secondary">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section> */}
        </div>
    )
}
export default ServicesDetailmoblie;
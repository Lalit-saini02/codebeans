import { Link } from 'react-router-dom';
import Faq from '../components/Faq';
import Testimonial from '../components/Testimonial';
import BlogSlider from '../components/BlogSlider';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';

const ServicesDetailinegration = () => {

    document.title = 'Services Detail | Web App Development Company';
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;
    return (
        <div>
            <div className="bg-[url(/assets/images/inner-page-hero-bg.png)] bg-cover bg-bottom bg-no-repeat pt-[82px] lg:pt-[106px]">
                <div className="relative">
                    <div className="container">
                        <div className="relative items-center py-14 lg:flex lg:py-[100px]">
                            <div className="relative z-[1] text-center text-white lg:w-3/5 ltr:lg:text-left rtl:lg:text-right xl:w-3/5">
                                <h2 className="text-4xl font-black sm:text-5xl sm:leading-[90px] xl:text-[70px]">API INTEGRATION SERVICES</h2>
                                <p className="my-8 text-xl leading-[23px] text-[#7780A1]">
                                    Broad practical experience with different API integrations. ID verification, authorization, payments, email, SMS, validity checks and more. API integration services for SaaS, web applications and websites. Ongoing API integration support and quality assurance.
                                </p>
                                <Link to="/about-us" className="btn mt-2 capitalize text-white">
                                    Request a Quote
                                </Link>
                            </div>
                            <div
                                className="top-[100px] mt-10 h-96 w-auto ltr:right-0 rtl:left-0 lg:absolute lg:mt-0 lg:h-auto lg:w-2/5"
                                data-aos={isRtl ? 'fade-right' : 'fade-left'}
                                data-aos-duration="1000"
                            >
                                <img src="/assets/images/7030038.png" alt="services-detail-phone" className="mx-auto h-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="py-14 lg:py-[100px]">
                <div className="container">
                    <div className="heading text-center  ltr:lg:text-center rtl:lg:text-right">
                        {/* <h6>Design Process</h6> */}
                        <h4>Our API Integration Services Expertise</h4>
                        <p className="mt-4 text-lg px-[250px] font-semibold">
                            We combine our team’s depth of experience in design, our client’s intimate knowledge of the industries they serve and insights
                            uncovered through the discoveries we make.
                        </p>
                    </div>
                    <div className="grid gap-10 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
                        <div>
                            <div className="h-[100px]" data-aos="fade-up" data-aos-duration="1000">
                                <img src='assets/images/mobile-ui-ux-prototype-icon.png' className='w-[65px] m-auto' alt='mobile-ui-ux-prototype-icon' />
                            </div>
                            {/* <h4 className="mb-4 text-[22px] font-extrabold text-black dark:text-white">Define</h4> */}
                            <p className="font-semibold text-center leading-[32px] md:text-lg">
                                <b className='font-exterbold text-center text-black'>Email/SMS nurturing systems integration: </b>
                                We have experience integrating email nurturing on Mailchimp (Mandrill), Autopilot and open source on-premise system Mautic with CRM systems like Sugar, SalesForce and marketing automation systems like Marketo.
                            </p>
                        </div>
                        <div>
                            <div className="h-[100px]" data-aos="fade-up" data-aos-duration="1000">
                                <img src='assets/images/advertising-icon.png' className='w-[65px] m-auto' alt='advertising-icon' />
                            </div>
                            {/* <h4 className="mb-4 text-[22px] font-extrabold text-black dark:text-white">Design</h4> */}
                            <p className="font-semibold text-center leading-[32px] md:text-lg">
                                <b className='font-exterbold text-black'>Payment systems integration: </b>We're familiar with Stripe, PayPal Payments, Amazon Payments, Robokassa and Yandex Kassa and have successfully integrated them in multinational websites for active tourism and education.
                            </p>
                        </div>
                        <div>
                            <div className="h-[100px]" data-aos="fade-up" data-aos-duration="1000">
                                <svg width="65" height="65" viewBox="0 0 65 65" style={{ margin: "auto" }} fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_1062_12706)">
                                        <path
                                            d="M25.5714 1.20642C23.3973 1.88584 28.0174 2.2935 38.0728 2.42938C59.8143 2.56526 60.4937 2.97292 61.1732 13.5719C61.309 18.192 61.309 24.9862 61.1732 28.6551C60.6296 35.9928 60.9014 35.8569 45.9541 37.8952L37.1216 39.1182L49.0794 38.7105C55.6019 38.5746 61.5808 37.7593 62.3961 36.944C64.4344 34.9057 65.5215 19.5508 64.4344 10.3107C63.4832 3.51645 63.0755 2.70115 59.2708 1.3423C54.5148 -0.424194 30.7351 -0.424194 25.5714 1.20642Z"
                                            fill="#47BDFF"
                                        />
                                        <path
                                            d="M16.8755 6.77773C15.5167 13.7078 15.9243 30.014 17.4191 29.0628C18.2344 28.6551 18.7779 24.7145 18.7779 20.3662V12.349L33.4534 13.0284C41.4706 13.4361 50.439 13.0284 53.4284 12.349C58.7279 10.9901 58.592 10.9901 49.3519 10.5825C44.1883 10.4466 34.9481 10.4466 29.1051 10.7184L18.3702 10.9901L19.1855 6.77773C19.7291 4.46769 19.5932 2.56531 18.9138 2.56531C18.2344 2.56531 17.4191 4.46769 16.8755 6.77773Z"
                                            fill="#47BDFF"
                                        />
                                        <path
                                            d="M36.0355 4.73951C34.9484 5.82658 36.1714 8.00073 37.9379 8.00073C38.6173 8.00073 39.1608 7.04954 39.1608 5.96247C39.1608 3.9242 37.5302 3.24478 36.0355 4.73951Z"
                                            fill="#47BDFF"
                                        />
                                        <path
                                            d="M22.8545 6.64189C22.8545 7.32131 23.5339 8.00073 24.2133 8.00073C25.0286 8.00073 25.5722 7.32131 25.5722 6.64189C25.5722 5.82658 25.0286 5.28304 24.2133 5.28304C23.5339 5.28304 22.8545 5.82658 22.8545 6.64189Z"
                                            fill="#47BDFF"
                                        />
                                        <path
                                            d="M29.6484 6.64189C29.6484 7.32131 30.192 8.00073 30.8714 8.00073C31.6867 8.00073 32.6379 7.32131 33.0455 6.64189C33.4532 5.82658 32.9097 5.28304 31.8226 5.28304C30.5996 5.28304 29.6484 5.82658 29.6484 6.64189Z"
                                            fill="#47BDFF"
                                        />
                                        <path
                                            d="M6.54849 35.0417L0.433689 35.857L0.0260357 48.6301C-0.109849 55.6961 0.297804 62.0827 0.977226 62.7621C2.60784 64.3927 25.4364 65.7515 30.3283 64.5286L33.9971 63.5774L33.4536 50.1248C33.3177 42.7871 32.5024 36.2646 31.9589 35.7211C30.6 34.2264 14.4298 33.8187 6.54849 35.0417ZM30.3283 48.2224C30.8718 54.609 30.8718 60.1803 30.4641 60.5879C29.1053 61.9468 17.5551 62.6262 10.0815 61.8109L2.47195 60.8597V48.6301V36.5364H15.9245H29.3771L30.3283 48.2224Z"
                                            fill="#47BDFF"
                                        />
                                        <path
                                            d="M16.1958 47.6789C14.5652 51.3478 13.3423 55.0166 13.7499 55.8319C14.4293 58.2779 20.4082 46.4559 19.8647 43.6024C19.5929 42.1076 18.2341 43.6024 16.1958 47.6789Z"
                                            fill="#47BDFF"
                                        />
                                        <path
                                            d="M6.27697 46.1841C4.91813 46.8635 3.83105 48.2224 3.83105 49.0377C3.83105 50.9401 8.04347 54.0654 10.4894 54.2013C11.9841 54.2013 11.8482 53.5219 9.94585 51.4836C7.90759 49.3095 7.90759 48.4942 9.26643 46.7277C11.1688 44.4176 9.67408 44.1459 6.27697 46.1841Z"
                                            fill="#47BDFF"
                                        />
                                        <path
                                            d="M23.2632 46.9994C25.4373 49.1735 25.3014 49.4453 22.5837 52.4347C19.1866 55.9677 20.8172 56.6472 25.3014 53.3859C28.9703 50.8041 29.1062 47.9506 25.7091 46.0482C21.7684 44.0099 20.6813 44.4176 23.2632 46.9994Z"
                                            fill="#47BDFF"
                                        />
                                        <path
                                            d="M45.4104 45.2329C40.9262 50.2606 40.7903 52.9783 45.2745 48.7659L48.6716 45.6406L52.0687 48.7659C56.9605 53.2501 57.5041 51.4836 52.884 46.0482L49.0792 41.4281L45.4104 45.2329Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M47.3134 51.2119C47.3134 54.4731 43.101 58.2779 39.7039 58.2779C37.5297 58.2779 37.3938 58.5496 39.1603 59.6367C41.7421 61.2673 46.0904 60.0444 48.4005 57.1908C50.3028 54.609 50.5746 48.766 48.6722 48.766C47.9928 48.766 47.3134 49.853 47.3134 51.2119Z"
                                            fill="#B476E5"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1062_12706">
                                            <rect width="65" height="65" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            {/* <h4 className="mb-4 text-[22px] font-extrabold text-black dark:text-white">Build</h4> */}
                            <p className="font-semibold text-center leading-[32px] md:text-lg">
                                <b className='font-exterbold text-black'>Delivery systems integration: </b>We've performed countless integrations with ecommerce shipping systems like FedEx, UPS, DHL and USPS and PostNL all across the globe.
                            </p>
                        </div>
                        <div>
                            <div className="h-[100px]" data-aos="fade-up" data-aos-duration="1000">
                                <svg width="65" height="65" style={{ margin: "auto" }} viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_1062_12720)">
                                        <path
                                            d="M36.003 23.6265C30.5797 31.6259 30.0373 31.8971 25.4275 29.5922C22.4446 27.9652 22.4446 27.9652 25.0207 30.948C29.9017 36.3714 33.6981 33.9309 39.9349 21.8639C43.7313 14.5424 41.6975 15.4915 36.003 23.6265Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M51.5963 42.8792C51.5963 43.5571 53.4945 45.8621 55.7994 48.167L59.8669 52.0989L56.0706 52.7768C53.4945 53.3192 52.1386 54.4038 51.8675 56.5732C51.1895 60.7762 49.1558 60.3695 43.1901 54.5394C40.3429 51.8277 37.7668 49.9296 37.2244 50.4719C36.0042 51.6922 50.2405 65.2505 52.1386 64.5726C52.9521 64.3014 53.9012 62.2677 54.308 60.2339C54.8503 57.1155 55.935 56.0308 59.4601 55.3529C65.2902 54.1327 66.3749 52.9124 63.3921 51.1498C62.0362 50.4719 58.7822 48.0314 56.2061 45.7265C53.6301 43.5571 51.5963 42.2013 51.5963 42.8792Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M6.17525 47.6247C3.328 49.794 0.480742 51.8277 0.209575 52.2345C-1.01068 53.4547 3.328 55.4885 7.25992 55.4885C10.3783 55.4885 10.9207 56.0308 10.9207 59.4204C10.9207 66.064 13.4968 65.6573 21.225 58.0646C29.4956 49.794 30.0379 47.2179 21.7674 54.675C15.3949 60.3695 14.0391 60.6407 13.3612 56.4376C13.09 54.2682 11.8698 53.3192 9.0225 53.048L5.22616 52.5057L9.0225 48.5737C14.0391 43.286 12.8188 42.7437 6.17525 47.6247Z"
                                            fill="#B476E5"
                                        />
                                        <path
                                            d="M25.8341 2.61102C24.3427 4.10244 23.1225 5.86502 23.1225 6.54294C23.1225 7.22086 21.9022 7.49202 20.4108 7.08527C16.6145 6.13619 12.2758 10.3393 12.2758 14.8135C12.2758 16.8473 11.0555 19.559 9.56412 20.9148C6.17454 24.0332 6.03895 27.5584 9.42854 30.948C11.0555 32.575 11.7335 34.6087 11.3267 37.0492C10.3776 41.7946 14.174 45.9977 19.3261 45.9977C21.4955 45.9977 25.1562 46.9468 27.3256 48.1671C30.7151 49.7941 32.3421 49.9297 36.1385 48.7094C38.7146 47.8959 40.7483 46.5401 40.7483 45.8622C40.7483 45.1842 42.2397 44.6419 44.0023 44.6419C45.7649 44.6419 48.7478 43.4216 50.7815 41.7946C53.4932 39.6253 54.3067 37.8627 54.3067 33.7952C54.3067 30.948 54.9846 28.1007 55.6625 27.694C56.476 27.2872 57.0183 24.7111 57.0183 22.135C57.0183 18.4743 56.3404 17.1185 53.6288 15.8982C51.1883 14.8135 50.2392 13.3221 50.2392 10.6104C50.2392 6.27177 46.1717 3.28894 41.833 4.3736C40.3416 4.78035 38.1722 4.10244 36.5452 2.47543C33.1557 -0.914154 29.2237 -0.778568 25.8341 2.61102ZM36.2741 4.78035C36.6808 6.00061 38.9857 6.67852 42.2397 6.67852C47.3919 6.67852 47.5275 6.81411 47.5275 11.1528C47.5275 14.6779 48.341 16.0338 50.9171 17.254C54.849 19.0166 55.5269 24.3044 52.2729 27.016C50.7815 28.2363 50.3748 30.1345 51.0527 33.1173C51.7306 36.7781 51.3238 37.9983 48.7478 39.7609C46.9852 40.9811 44.2735 41.9302 42.6465 41.9302C41.1551 41.9302 38.7146 43.1505 37.3587 44.6419C34.2403 48.0315 30.9863 48.0315 27.8679 44.6419C25.9697 42.6081 24.3427 42.0658 21.0887 42.7437C15.801 43.6928 12.9537 40.8456 14.174 35.6934C14.8519 32.9817 14.4451 31.6259 12.2758 30.1345C8.75062 27.694 8.75062 23.4909 12.4114 21.4571C14.3095 20.508 14.9875 19.1522 14.4451 17.254C13.3605 12.7798 15.9365 9.39019 20.5464 9.39019C23.5292 9.39019 24.8851 8.57669 25.8341 6.13619C26.5121 4.3736 27.8679 2.61102 28.817 2.33985C31.5286 1.39077 35.4606 2.7466 36.2741 4.78035Z"
                                            fill="#47BDFF"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1062_12720">
                                            <rect width="65" height="65" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            {/* <h4 className="mb-4 text-[22px] font-extrabold text-black dark:text-white">Test</h4> */}
                            <p className="font-semibold text-center leading-[32px] md:text-lg">
                                <b className='font-exterbold text-black'>ERP & CRM systems integration: </b> Our CRM experience comes from the deep understanding of Sugar CRM community edition, Odoo, SalesForce, FreshSales and Bitrix24.
                            </p>
                        </div>
                        <div>
                            <div className="h-[100px]" data-aos="fade-up" data-aos-duration="1000">
                                <svg width="65" height="65" style={{ margin: "auto" }} viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M28.2768 13.1067C26.1006 15.2829 23.9244 19.2272 23.5164 21.9474C22.8363 25.0757 21.7483 26.9798 20.5242 26.9798C19.3001 26.9798 20.9322 29.7001 24.7405 34.0524C28.1408 37.8607 30.589 41.533 30.181 42.2131C28.6848 44.5253 20.7962 38.4048 19.164 33.7804C17.9399 30.1081 17.3959 29.564 16.7158 31.3322C16.1718 32.5563 16.1718 34.1884 16.5798 35.0045C17.1239 35.6846 16.8519 36.6366 16.0358 37.1807C15.3557 37.5887 14.6757 39.3569 14.6757 41.125C14.6757 43.7092 14.1316 44.1173 10.8674 43.5732C6.10696 42.8932 -0.693599 47.9256 2.29865 49.9657C3.93078 51.0538 3.93078 52.0059 1.89061 56.2223C-1.64568 63.7029 -0.285566 65.607 6.515 62.8868C11.1394 60.9826 12.3635 60.9826 14.1316 62.4788C17.3959 65.199 21.7483 59.3505 21.2042 52.958C20.9322 50.1017 21.4762 48.0616 22.5643 47.6535C23.3804 47.3815 24.1965 46.5655 24.1965 45.7494C24.1965 44.9333 23.3804 44.6613 22.2923 45.0693C19.9801 46.0214 17.3959 43.4372 17.3959 40.1729C17.3959 37.9967 18.076 38.1328 22.2923 41.9411C27.7328 46.7015 30.997 46.8375 33.0372 42.3491C33.8533 40.445 36.3015 38.9488 39.8378 37.9967C53.0309 34.7325 57.6552 21.4034 48.6785 12.9707C42.83 7.66623 33.7173 7.66623 28.2768 13.1067ZM46.6383 15.4189C48.8145 17.459 50.0386 20.3153 50.0386 22.8995C50.0386 30.6521 46.3663 34.4605 36.7095 36.6366C32.9012 37.4527 31.5411 37.0447 27.5967 33.6444L23.1084 29.7001L25.1485 23.8516C28.9569 12.4266 39.5657 8.21028 46.6383 15.4189ZM18.756 53.638C17.6679 60.7106 16.1718 62.7508 15.0837 58.5344C14.1316 54.8621 14.5397 54.8621 8.69118 58.3984C3.11472 61.6627 2.70668 60.8466 6.515 54.4541C9.77927 49.0137 9.77927 48.7416 6.92303 48.7416C3.11472 48.7416 6.78702 46.2934 11.2754 45.7494C18.076 44.9333 19.7081 46.8375 18.756 53.638Z"
                                        fill="#47BDFF"
                                    />
                                    <path
                                        d="M30.998 2.08982C30.998 2.76988 31.9501 4.53803 33.0382 6.03415C35.0784 8.48235 35.0784 8.48235 34.8064 5.35409C34.3983 2.22584 30.998 -0.630402 30.998 2.08982Z"
                                        fill="#B476E5"
                                    />
                                    <path
                                        d="M49.631 6.17016C47.8628 7.93831 48.6789 10.5225 50.7191 9.84247C51.8072 9.29842 52.7593 8.21033 52.7593 7.12224C52.7593 5.08207 51.1271 4.53803 49.631 6.17016Z"
                                        fill="#B476E5"
                                    />
                                    <path
                                        d="M16.7166 13.3787C21.0689 16.235 22.8371 15.963 20.1168 12.6987C19.1648 11.6106 17.1246 10.6585 15.4925 10.6585C12.9083 10.6585 13.0443 10.9305 16.7166 13.3787Z"
                                        fill="#B476E5"
                                    />
                                    <path
                                        d="M56.8398 22.8997C56.8398 23.5797 58.744 24.2598 60.9202 24.2598C63.2324 24.2598 65.0005 23.5797 65.0005 22.8997C65.0005 22.0836 63.2324 21.5395 60.9202 21.5395C58.744 21.5395 56.8398 22.0836 56.8398 22.8997Z"
                                        fill="#B476E5"
                                    />
                                    <path
                                        d="M50.0391 37.4528C50.0391 38.8129 50.9911 41.2612 52.0792 42.7573C53.9834 45.2055 53.9834 45.2055 54.1194 41.8052C54.1194 39.765 53.1673 37.4528 52.0792 36.5008C50.4471 35.1406 50.0391 35.2767 50.0391 37.4528Z"
                                        fill="#B476E5"
                                    />
                                </svg>
                            </div>
                            {/* <h4 className="mb-4 text-[22px] font-extrabold text-black dark:text-white">Launch</h4> */}
                            <p className="font-semibold text-center leading-[32px] md:text-lg">
                                <b className='font-exterbold text-black'>Marketing automation systems integration: </b>
                                Starting from enterprise systems like Marketo or Pardot to small & medium business marketing systems like Autopilot, GetResponse or HubSpot.
                            </p>
                        </div>
                        <div>
                            <div className="h-[100px]" data-aos="fade-up" data-aos-duration="1000">
                                <img src='assets/images/advertising-icon.png' className='w-[65px] m-auto' alt='advertising-icon' />
                            </div>
                            {/* <h4 className="mb-4 text-[22px] font-extrabold text-black dark:text-white">Launch</h4> */}
                            <p className="font-semibold text-center leading-[32px] md:text-lg"><b className='font-exterbold text-black'>Advertising systems and social authorization: </b>We've integrated some projects with Facebook and Google advertising accounts, as well as put the social login system through Facebook, Twitter or Google on the websites.</p>
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
            {/* 
            <section className="py-14 lg:py-[100px]">
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
                        <h4>Technology Stack</h4>
                    </div>
                    <div className="overflow-y-auto">
                        <div className="grid w-[500px] grid-cols-4 items-center justify-items-center gap-[30px] md:w-auto">
                            <div className="rounded-[32px] border border-transparent transition duration-500 p-[35px] hover:border-secondary hover:bg-[#add8e65c]">
                                <img src="/assets/images/soap.png" alt="SKetch" className="rounded-[32px] w-[110px]" />
                            </div>
                            <div className="rounded-[32px] border border-transparent transition duration-500 hover:border-secondary hover:bg-[#dcdcdc87]">
                                <img src="/assets/images/php2.png" alt="Figma" className="rounded-[32px] p-[35px]" />
                            </div>
                            <div className="rounded-[32px] border border-transparent p-[25px] transition duration-500 hover:border-secondary hover:bg-[#0aec0a36]">
                                <img src="/assets/images/rest.png" alt="Marvel" className="rounded-[32px] w-[160px]" />
                            </div>
                            <div className="rounded-[32px] border border-transparent p-[0_25px] transition duration-500 hover:border-secondary hover:bg-[#80808033]">
                                <img src="/assets/images/json.png" alt="InVision-Studio" className="rounded-[32px] w-[150px]" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* 
            <BlogSlider title2="Related articles" />

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
export default ServicesDetailinegration;
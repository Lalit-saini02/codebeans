import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';

const Counter = (props: any) => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;
    return (
        <section className="relative overflow-x-hidden border-t-2 border-transparent bg-gradient-to-b from-white/40 to-transparent px-4 py-12 dark:border-gray/20 dark:bg-none">
            <div className="items-center justify-center lg:flex">
                <div className="text-center" data-aos={isRtl ? 'fade-left' : 'fade-right'} data-aos-duration="1000">
                    <img src="/assets/images/contact-text.png" alt="contact-text" className="mx-auto sm:pt-4 xl:mx-0" />
                </div>
                <div data-aos={isRtl ? 'fade-right' : 'fade-left'} data-aos-duration="1000">
                    <svg
                        width="320"
                        height="282"
                        viewBox="0 0 320 282"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mx-auto my-8 w-[90%] sm:w-auto"
                    >
                        <path
                            d="M254.182 123.52L203.127 119.709C198.183 119.334 193.219 120.151 188.656 122.091L175.076 127.872C173.249 131.184 171.005 134.248 168.397 136.989C161.845 143.977 136.719 156.969 123.457 159.701C120.332 160.256 117.111 159.694 114.361 158.113C108.352 162.928 102.056 167.373 95.5072 171.426C95.5072 171.426 107.911 206.717 154.095 186.768L190.829 170.854L182.782 190.136C183.005 201.158 183.069 215.611 182.337 225.245C190.961 227.868 200.16 227.956 208.832 225.497C212.297 201.991 214.937 164.889 205.968 150.88L249.86 150.467C255.391 140.518 254.904 134.861 254.182 123.52Z"
                            fill="#B476E5"
                        ></path>
                        <path
                            d="M172.633 109.862L177.977 86.3878C178.096 85.8739 178.003 85.3342 177.724 84.8875C177.443 84.4406 176.996 84.1235 176.482 84.0054C175.968 83.8876 175.427 83.9785 174.98 84.2585C174.532 84.5386 174.215 84.9845 174.097 85.4984L167.799 113.166"
                            fill="#B476E5"
                        ></path>
                        <path
                            d="M172.633 109.862L177.977 86.3878C178.096 85.8739 178.003 85.3342 177.724 84.8875C177.443 84.4406 176.996 84.1235 176.482 84.0054C175.968 83.8876 175.427 83.9785 174.98 84.2585C174.532 84.5386 174.215 84.9845 174.097 85.4984L167.799 113.166C168.591 116.084 170.719 119.996 172.633 109.862Z"
                            fill="#B476E5"
                        ></path>
                        <path
                            d="M168.499 20.9169C168.499 24.8561 167.329 28.7067 165.138 31.982C162.946 35.2574 159.832 37.8102 156.189 39.3177C152.545 40.8252 148.535 41.2196 144.667 40.451C140.799 39.6826 137.245 37.7857 134.457 35.0003C131.668 32.2148 129.768 28.6659 128.999 24.8024C128.23 20.9389 128.625 16.9343 130.134 13.295C131.643 9.65572 134.199 6.54505 137.478 4.35659C140.758 2.16813 144.613 1 148.557 1C153.845 1.00318 158.916 3.10253 162.655 6.83696C166.393 10.5714 168.495 15.6356 168.499 20.9169Z"
                            fill="#B476E5"
                        ></path>
                        <path
                            d="M272.632 126.031C268.973 134.696 263.804 142.644 257.366 149.506C260.896 150.046 264.427 150.843 267.448 151.316C270.595 149.945 273.546 148.163 276.223 146.015C284.593 139.281 301.834 130.926 305.61 126.161C298.772 125.173 282.043 125.84 272.632 126.031Z"
                            fill="#47BDFF"
                        ></path>
                        <path
                            d="M207.937 244.834C199.124 241.511 190.97 236.649 183.861 230.475C183.447 234.002 182.811 237.56 182.43 240.609C183.921 243.702 185.814 246.586 188.059 249.186C195.089 257.254 204.09 274.154 208.983 277.775C209.75 270.914 208.479 254.237 207.937 244.834Z"
                            fill="#47BDFF"
                        ></path>
                        <path
                            d="M98.7515 144.136C98.1154 144.454 97.4475 144.739 96.7796 145.025C93.6602 141.364 90.7292 137.548 87.9982 133.59C88.2844 134.259 97.0625 153.221 111.629 160.368C112.583 159.606 113.505 158.875 114.364 158.144C108.922 155.19 103.268 149.472 98.7515 144.136Z"
                            fill="#47BDFF"
                        ></path>
                        <path d="M182.398 174.472C182.398 174.472 182.684 181.174 182.843 190.1L190.826 170.851L182.398 174.472Z" fill="#47BDFF"></path>
                        <path
                            d="M96.7478 60.7848C96.7478 60.7848 91.1787 50.3641 78.0785 56.7189C64.9784 63.0736 67.5194 88.6112 67.5194 88.6112C67.5194 88.6112 55.8772 94.1702 49.6753 103.541C40.0703 118.058 44.9063 139.976 74.7742 139.976C73.3503 133.718 72.8574 127.286 73.3112 120.885C74.1063 109.608 78.2091 99.2844 81.8348 88.7065C86.4582 75.0324 85.4656 76.1258 87.0826 71.1085C83.2325 67.4555 87.8141 63.0719 89.8814 66.628C90.7569 68.0658 90.9661 68.1226 91.6658 68.3416C95.4556 69.527 102.332 70.8494 106.062 69.6156C106.067 69.5186 106.385 60.7848 96.7478 60.7848Z"
                            fill="#47BDFF"
                        ></path>
                        <path
                            d="M89.6872 93.1215L86.2843 84.6084C87.4194 86.1276 88.757 87.4848 90.2599 88.6426C89.9802 90.1228 89.789 91.6185 89.6872 93.1215Z"
                            fill="#47BDFF"
                        ></path>
                        <path
                            d="M134.69 237.37C134.911 238.445 134.807 239.56 134.392 240.575C133.978 241.59 133.271 242.459 132.362 243.074C131.452 243.688 130.381 244.019 129.283 244.025C128.185 244.03 127.11 243.711 126.194 243.108C125.278 242.504 124.562 241.641 124.136 240.632C123.71 239.62 123.594 238.507 123.802 237.43C124.01 236.353 124.534 235.362 125.305 234.583C126.077 233.804 127.063 233.27 128.139 233.05C128.853 232.899 129.59 232.893 130.307 233.03C131.025 233.167 131.708 233.443 132.317 233.846C132.926 234.247 133.45 234.765 133.857 235.37C134.264 235.976 134.548 236.654 134.69 237.37Z"
                            fill="#47BDFF"
                        ></path>
                        <path
                            d="M168.499 20.9169C168.499 24.8561 167.329 28.7067 165.137 31.9821C162.946 35.2574 159.832 37.8101 156.188 39.3177C152.545 40.8252 148.535 41.2196 144.667 40.451C140.799 39.6826 137.245 37.7857 134.457 35.0003C131.668 32.2148 129.768 28.6659 128.999 24.8024C128.229 20.9389 128.624 16.9343 130.134 13.295C131.643 9.65572 134.199 6.54505 137.478 4.35659C140.758 2.16813 144.613 1 148.557 1C153.845 1.00318 158.915 3.10253 162.655 6.83696C166.393 10.5714 168.495 15.6356 168.499 20.9169Z"
                            stroke="#7780A1"
                            strokeWidth="0.75"
                        ></path>
                        <path
                            d="M212.103 186.067L228.546 194.357C231.921 196.054 235.833 196.345 239.421 195.167C243.012 193.988 245.987 191.435 247.694 188.068L266.522 150.839"
                            stroke="#7780A1"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M278.449 127.269L290.058 104.335C291.757 100.964 292.048 97.0577 290.868 93.4729C289.688 89.8879 287.132 86.917 283.76 85.2119L167.571 26.584M101.709 102.88L135.419 36.1878"
                            stroke="#7780A1"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M290.599 92.5821L193.561 108.211L157.692 38.6367"
                            stroke="#7780A1"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M140.392 191.371C133.153 199.321 124.384 205.732 114.61 210.223C104.836 214.715 94.2565 217.194 83.5022 217.514C72.7479 217.833 62.0394 215.986 52.0153 212.082C41.9913 208.178 32.8572 202.298 25.1578 194.793C17.4584 187.287 11.3514 178.31 7.20105 168.396C3.05076 158.482 0.942231 147.834 1.0012 137.089C1.06018 126.343 3.28546 115.72 7.54432 105.852C11.8032 95.9836 18.0084 87.0734 25.7897 79.6523"
                            stroke="#7780A1"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M89.6867 95.7573C89.5973 93.3497 89.802 90.94 90.296 88.5817C94.1728 91.1714 97.3767 89.5614 99.7286 86.211C102.745 81.3349 104.294 75.6948 104.19 69.9639"
                            stroke="#7780A1"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M87.998 133.591C90.728 137.549 93.6577 141.365 96.7761 145.026C101.788 142.928 106.405 139.991 110.429 136.343C113.409 133.64 116.083 130.619 118.403 127.333C112.915 120.166 107.83 112.7 103.17 104.97C100.901 101.2 97.4947 98.2448 93.4399 96.5273C91.7007 95.8524 89.8227 95.6125 87.9695 95.8285C86.5932 96.1891 85.1515 96.221 83.7604 95.9219C82.3696 95.6228 81.0688 95.0009 79.9631 94.1064"
                            stroke="#7780A1"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M254.436 125.998C258.762 126.157 267.349 126.125 272.597 126.03C268.948 134.692 263.79 142.64 257.364 149.504C255.742 149.25 252.307 148.901 250.749 148.806"
                            stroke="#7780A1"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M305.608 126.157C307.421 126.411 308.586 126.826 308.725 127.396C309.606 131.004 290.701 139.768 282.2 146.614C279.728 148.63 276.963 150.259 273.998 151.442C271.835 151.839 269.616 151.797 267.47 151.315C270.622 149.948 273.576 148.166 276.255 146.014C284.601 139.293 301.825 130.954 305.608 126.157Z"
                            stroke="#7780A1"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M272.632 126.03C282.047 125.839 298.776 125.172 305.609 126.157C301.824 130.922 284.593 139.284 276.221 146.01C273.545 148.162 270.593 149.946 267.443 151.315C264.422 150.839 260.891 150.044 257.361 149.504C263.801 142.643 268.971 134.695 272.632 126.03Z"
                            stroke="#7780A1"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M207.555 225.869C207.269 230.634 207.555 237.654 207.937 244.865C199.135 241.535 190.995 236.673 183.892 230.507C184.083 228.887 184.21 227.267 184.242 225.742"
                            stroke="#7780A1"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M208.986 277.775C208.795 279.614 208.449 280.768 207.873 280.952C204.326 282.08 194.828 263.389 187.677 255.158C185.558 252.759 183.82 250.049 182.524 247.122C182.059 244.977 182.026 242.76 182.429 240.602C183.915 243.698 185.809 246.582 188.058 249.178C195.089 257.282 204.088 274.154 208.986 277.775Z"
                            stroke="#7780A1"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M207.936 244.833C208.477 254.236 209.749 270.914 208.986 277.769C204.088 274.148 195.066 257.267 188.062 249.18C185.814 246.582 183.92 243.698 182.432 240.604C182.814 237.554 183.45 233.995 183.864 230.469C190.971 236.645 199.123 241.508 207.936 244.833Z"
                            stroke="#7780A1"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M111.632 160.368C97.0654 153.221 88.2873 134.257 87.9977 133.59"
                            stroke="#7780A1"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M98.7515 144.136C103.271 149.472 108.932 155.217 114.368 158.179C117.125 159.741 120.343 160.291 123.464 159.736C136.738 157.061 161.852 144.012 168.403 137.024C180.268 124.368 179.294 114.726 178.263 98.6194C177.844 92.0757 177.021 92.2329 176.037 95.2756C174.572 99.8164 172.724 110.824 171.202 115.161C171.06 115.597 170.767 115.969 170.375 116.209C169.204 116.878 168.465 115.415 167.864 113.35C167.227 111.158 166.771 108.239 166.179 106.495C165.139 103.421 163.018 100.619 162.68 109.64C162.483 114.945 162.469 124.082 156.701 127.429C152.212 129.984 147.533 132.193 142.707 134.036C137.715 135.989 132.485 137.271 127.155 137.848C124.26 138.002 120.38 134.703 116.691 129.589"
                            stroke="#7780A1"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M172.633 109.861L177.976 86.3868C178.095 85.8729 178.003 85.3332 177.724 84.8865C177.442 84.4396 176.996 84.1225 176.482 84.0045C175.968 83.8866 175.427 83.9775 174.98 84.2576C174.531 84.5376 174.215 84.9835 174.096 85.4974L167.799 113.165"
                            stroke="#7780A1"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M182.407 174.502C187.369 172.374 190.834 170.851 190.834 170.851L182.843 190.1"
                            stroke="#7780A1"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M114.367 158.176C108.359 162.976 102.061 167.401 95.5071 171.426C84.8217 163.977 77.4015 152.721 74.7738 139.975"
                            stroke="#7780A1"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M175.051 127.872L189.967 121.551C193.661 119.992 197.672 119.328 201.671 119.613L254.182 123.52C255.364 134.496 255.223 140.809 249.857 150.457L206.028 150.87"
                            stroke="#7780A1"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M96.7477 60.7838C96.7477 60.7838 91.1786 50.3631 78.0784 56.7179C64.9782 63.0726 67.5193 88.6103 67.5193 88.6103C67.5193 88.6103 55.8771 94.1692 49.6752 103.54C40.0702 118.057 44.9062 139.975 74.7741 139.975C73.3502 133.718 72.8573 127.285 73.3111 120.884C74.1062 109.607 78.209 99.2834 81.8347 88.7056C82.6616 86.2596 84.6335 80.2877 85.3014 77.8084C85.9057 75.4912 86.1919 73.8695 87.0825 71.1076C83.2324 67.4546 87.814 63.0709 89.8813 66.627C90.7936 68.1317 90.971 68.0447 91.9703 68.3741C94.4444 69.1866 101.11 71.0307 106.07 69.5444C106.066 69.5494 106.385 60.7838 96.7477 60.7838Z"
                            stroke="#7780A1"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M33.9636 66.246C22.6885 71.6778 12.08 78.3937 2.34976 86.2598C2.07591 86.43 1.84746 86.6639 1.68402 86.9416C1.52058 87.2193 1.42704 87.5324 1.41141 87.8541C1.39575 88.1757 1.45851 88.4966 1.59425 88.7886C1.72999 89.0809 1.93468 89.3359 2.19074 89.5316L9.44224 95.2811C13.8363 89.5249 19.7938 84.6598 25.7798 79.6342C21.1723 85.5872 17.1371 91.9607 13.7275 98.67L21.5297 104.843C21.7814 105.042 22.0776 105.178 22.3931 105.24C22.7086 105.301 23.0342 105.286 23.3427 105.196C23.6512 105.106 23.9336 104.943 24.1659 104.721C24.3983 104.499 24.5741 104.225 24.6783 103.921L36.9533 68.6066C37.0965 68.2107 37.1116 67.7797 36.9963 67.3748C36.8808 66.9699 36.6407 66.6114 36.3101 66.3505C35.9794 66.0893 35.5748 65.9387 35.1536 65.92C34.7326 65.9012 34.3161 66.0153 33.9636 66.246Z"
                            stroke="#7780A1"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M249.602 5.70256C243.273 2.55613 236.181 7.04005 237.199 13.6439L234.241 16.374L238.312 16.6917C241.906 22.7589 251.034 23.0147 254.023 17.0411C254.937 14.9513 254.984 12.5853 254.156 10.4605C253.327 8.33574 251.69 6.6251 249.602 5.70256Z"
                            stroke="#7780A1"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M287.259 189.242C286.298 188.746 285.248 188.443 284.172 188.351C283.094 188.259 282.008 188.38 280.977 188.707C279.947 189.035 278.99 189.562 278.164 190.259C277.337 190.956 276.656 191.809 276.159 192.768C276.159 192.768 270.784 203.252 266.268 202.933L288.722 214.527C285.828 211.033 290.789 200.33 290.789 200.33C291.286 199.37 291.591 198.322 291.681 197.245C291.773 196.169 291.653 195.085 291.325 194.056C290.997 193.026 290.469 192.071 289.771 191.245C289.073 190.419 288.22 189.739 287.259 189.242Z"
                            stroke="#7780A1"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M281.184 210.653C280.679 211.631 279.803 212.366 278.754 212.701C277.704 213.033 276.566 212.936 275.587 212.432C274.608 211.927 273.871 211.052 273.536 210.004C273.203 208.956 273.3 207.819 273.806 206.841"
                            stroke="#7780A1"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path d="M311.749 67.8984L305.801 88.3553" stroke="#7780A1" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M319 81.0817L298.518 75.1416" stroke="#7780A1" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path
                            d="M182.875 214.75C191.909 216.235 201.112 216.403 210.195 215.252"
                            stroke="#7780A1"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M242.033 122.694C243.466 132.224 241.922 141.963 237.612 150.584"
                            stroke="#7780A1"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M134.691 237.37C134.911 238.445 134.807 239.56 134.392 240.575C133.978 241.59 133.271 242.459 132.362 243.074C131.452 243.688 130.381 244.019 129.283 244.025C128.185 244.03 127.111 243.711 126.194 243.108C125.278 242.504 124.562 241.641 124.136 240.632C123.71 239.62 123.595 238.507 123.803 237.43C124.011 236.353 124.534 235.362 125.306 234.583C126.078 233.804 127.064 233.27 128.139 233.05C128.853 232.899 129.591 232.893 130.308 233.03C131.025 233.167 131.708 233.443 132.317 233.846C132.926 234.247 133.45 234.765 133.857 235.37C134.265 235.976 134.548 236.654 134.691 237.37Z"
                            stroke="#7780A1"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M132.178 219.993C134.31 218.002 136.986 216.686 139.867 216.215C142.748 215.742 145.704 216.133 148.362 217.338C151.02 218.544 153.261 220.51 154.8 222.988C156.34 225.464 157.11 228.342 157.012 231.257C156.914 234.171 155.953 236.989 154.251 239.358C152.548 241.727 150.181 243.538 147.448 244.563C144.715 245.588 141.739 245.78 138.896 245.116C136.054 244.452 133.472 242.961 131.478 240.831C128.806 237.974 127.378 234.176 127.51 230.267C127.641 226.36 129.32 222.665 132.178 219.993Z"
                            stroke="#7780A1"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M95.5071 171.426C95.5071 171.426 107.911 206.717 154.095 186.769L182.407 174.502C182.759 187.847 183.499 210.432 182.374 225.235C190.998 227.858 200.195 227.946 208.867 225.489C212.334 201.981 215.014 164.874 206.037 150.87C194.406 132.726 158.648 144.358 158.648 144.358"
                            stroke="#7780A1"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M90.2964 88.5822C88.7639 87.4911 87.4176 86.1605 86.3091 84.6416L89.6871 93.1213"
                            stroke="#7780A1"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </svg>
                </div>
            </div>
            <div className="absolute bottom-20 left-0">
                <svg width="171" height="216" viewBox="0 0 171 216" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.06" d="M160.487 10.9038L47.9038 205.904L-64.6795 10.9038L160.487 10.9038Z" stroke="#7780A1" strokeWidth="20"></path>
                </svg>
            </div>
            <div className="text-center">
                <Link to="/contact-us" className="btn inline-flex items-center gap-3 bg-secondary text-white sm:text-lg">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_549_4797)">
                            <path
                                d="M26.25 20.525V24.945C26.2501 25.2615 26.1302 25.5662 25.9145 25.7977C25.6987 26.0293 25.4032 26.1703 25.0875 26.1925C24.5413 26.23 24.095 26.25 23.75 26.25C12.7038 26.25 3.75 17.2963 3.75 6.25C3.75 5.905 3.76875 5.45875 3.8075 4.9125C3.82965 4.59681 3.97073 4.30126 4.20225 4.08551C4.43378 3.86976 4.73853 3.74986 5.055 3.75H9.475C9.63005 3.74984 9.77962 3.80732 9.89466 3.91128C10.0097 4.01523 10.082 4.15823 10.0975 4.3125C10.1263 4.6 10.1525 4.82875 10.1775 5.0025C10.4259 6.73615 10.935 8.42229 11.6875 10.0038C11.8063 10.2538 11.7288 10.5525 11.5037 10.7125L8.80625 12.64C10.4556 16.4831 13.5182 19.5457 17.3612 21.195L19.2863 18.5025C19.3649 18.3925 19.4797 18.3136 19.6106 18.2796C19.7415 18.2455 19.8802 18.2585 20.0025 18.3162C21.5838 19.0673 23.2695 19.5751 25.0025 19.8225C25.1763 19.8475 25.405 19.875 25.69 19.9025C25.844 19.9183 25.9867 19.9907 26.0904 20.1057C26.1941 20.2207 26.2514 20.3701 26.2512 20.525H26.25Z"
                                fill="currentColor"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_549_4797">
                                <rect width="30" height="30" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <span className="capitalize">Contact us now</span>
                </Link>
            </div>
        </section>
    );
};

export default Counter;

import { fontStyles } from '@/styles';
import {
  accountDisplayContainer,
  accountSelectorContainer,
  displayName,
  leftContainer,
} from './account-selector.css';

const AccountSelector = () => {
  return (
    <div className={accountSelectorContainer}>
      <div className={leftContainer}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" rx="4" fill="#FF85BF" />
          <path
            d="M10.916 17H12.362V9.716H15.158V8.36H8.12V9.716H10.916V17Z"
            fill="white"
          />
        </svg>
        <div className={accountDisplayContainer}>
          <p className={`${displayName} ${fontStyles.MANROPE_MED}`}>Tectonic</p>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.5286 7.5286C5.78894 7.26825 6.21105 7.26825 6.4714 7.5286L10 11.0572L13.5286 7.5286C13.7889 7.26825 14.2111 7.26825 14.4714 7.5286C14.7318 7.78895 14.7318 8.21106 14.4714 8.47141L10.4714 12.4714C10.2111 12.7318 9.78894 12.7318 9.5286 12.4714L5.5286 8.47141C5.26825 8.21106 5.26825 7.78895 5.5286 7.5286Z"
              fill="#ABB3B9"
            />
          </svg>
        </div>
      </div>

      <svg
        style={{ margin: 8 }}
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_0_60)">
          <rect
            x="2"
            y="1"
            width="24"
            height="24"
            rx="4"
            fill="white"
            shape-rendering="crispEdges"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.4286 8C10.8231 8 11.1429 8.3198 11.1429 8.71429V17.2857C11.1429 17.6802 10.8231 18 10.4286 18C10.0341 18 9.71429 17.6802 9.71429 17.2857V8.71429C9.71429 8.3198 10.0341 8 10.4286 8ZM17.0664 8.20921C17.3453 7.93026 17.7976 7.93026 18.0765 8.20921C18.3555 8.48816 18.3555 8.94042 18.0765 9.21936L14.2959 13L18.0765 16.7806C18.3555 17.0596 18.3555 17.5118 18.0765 17.7908C17.7976 18.0697 17.3453 18.0697 17.0664 17.7908L12.7806 13.5051C12.5017 13.2261 12.5017 12.7739 12.7806 12.4949L17.0664 8.20921Z"
            fill="#ABB3B9"
          />
          <rect
            x="2.5"
            y="1.5"
            width="23"
            height="23"
            rx="3.5"
            stroke="#EEF2F4"
            shape-rendering="crispEdges"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_0_60"
            x="0"
            y="0"
            width="28"
            height="28"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="1" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_0_60"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_0_60"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default AccountSelector;

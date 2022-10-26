import { fontStyles, vars } from '@prince-assessment/styles';

export function Header() {
  return (
    <div
      style={{
        backgroundColor: vars.colors.surface,
        height: '100%',
        maxWidth: '100vw',
        padding: '0 28px',
        margin: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: vars.shadows.minute,
      }}
    >
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.4714 3.5286C10.7318 3.78895 10.7318 4.21106 10.4714 4.47141L6.94281 8L10.4714 11.5286C10.7318 11.7889 10.7318 12.2111 10.4714 12.4714C10.2111 12.7318 9.78895 12.7318 9.5286 12.4714L5.5286 8.47141C5.26825 8.21106 5.26825 7.78895 5.5286 7.5286L9.5286 3.5286C9.78895 3.26825 10.2111 3.26825 10.4714 3.5286Z"
            fill="#ABB3B9"
          />
        </svg>
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
            d="M7.52859 5.5286C7.78894 5.26825 8.21105 5.26825 8.4714 5.5286L12.4714 9.5286C12.7317 9.78895 12.7317 10.2111 12.4714 10.4714L8.4714 14.4714C8.21105 14.7318 7.78894 14.7318 7.52859 14.4714C7.26824 14.2111 7.26824 13.7889 7.52859 13.5286L11.0572 10L7.52859 6.47141C7.26824 6.21106 7.26824 5.78895 7.52859 5.5286Z"
            fill="#ABB3B9"
          />
        </svg>

        <p className={fontStyles.MANROPE_LARGE} style={{ fontWeight: 700 }}>
          Tectonic Ltd
        </p>
      </div>
      <button
        style={{
          width: 128,
          height: 40,
          border: '1px solid #EEF2F4',
          backgroundColor: vars.colors.surface,
          boxShadow: vars.shadows.tiny,
          borderRadius: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
        }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.99996 2.66666C8.36815 2.66666 8.66663 2.96514 8.66663 3.33333V7.33333H12.6666C13.0348 7.33333 13.3333 7.63181 13.3333 8C13.3333 8.36819 13.0348 8.66666 12.6666 8.66666H8.66663V12.6667C8.66663 13.0349 8.36815 13.3333 7.99996 13.3333C7.63177 13.3333 7.33329 13.0349 7.33329 12.6667V8.66666H3.33329C2.9651 8.66666 2.66663 8.36819 2.66663 8C2.66663 7.63181 2.9651 7.33333 3.33329 7.33333H7.33329V3.33333C7.33329 2.96514 7.63177 2.66666 7.99996 2.66666Z"
            fill="#ABB3B9"
          />
        </svg>
        <p
          className={fontStyles.MANROPE_MED}
          style={{ fontWeight: 600, color: vars.colors.onSurface }}
        >
          New Action
        </p>
      </button>
    </div>
  );
}

export default Header;

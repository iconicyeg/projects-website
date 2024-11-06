// src/components/Analytics.js
'use client';

import Script from 'next/script';

export default function Analytics() {
  return (
    <>
      {/* Google Analytics Script */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-VN3NH43Y5Q" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){ dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', 'G-VN3NH43Y5Q');
        `}
      </Script>
    </>
  );
}

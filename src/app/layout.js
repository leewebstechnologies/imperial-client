import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import BootstrapClient from "./components/BootstrapClient";
import Script from "next/script";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

export const metadata = {
  title: "IMPERIAL LEGACY SCHOOL - BEST SCHOOL FOR WARDS",
  description: "Leading school in Magboro, Ibafo, Obafemi Owode Local Government, Ogun State, Nigeria",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="description"
          content="best school in Magboro, Ibafo, Obafemi Owode Local Government"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
          integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        {/*====== Title ======*/}
        {/* <title>IMPERIAL LEGACY SCHOOL - BEST SCHOOL FOR WARDS</title> */}
        {/*====== Favicon Icon ======*/}
        <link rel="shortcut icon" href="images/favicon.png" type="image/png" />
        {/*====== Slick css ======*/}
        <link rel="stylesheet" href="css/slick.css" />
        {/*====== Animate css ======*/}
        <link rel="stylesheet" href="css/animate.css" />
        {/*====== Nice Select css ======*/}
        <link rel="stylesheet" href="css/nice-select.css" />
        {/*====== Nice Number css ======*/}
        <link rel="stylesheet" href="css/jquery.nice-number.min.css" />
        {/*====== Magnific Popup css ======*/}
        <link rel="stylesheet" href="css/magnific-popup.css" />
        {/*====== Bootstrap css ======*/}
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        {/*====== Fontawesome css ======*/}
        <link rel="stylesheet" href="css/font-awesome.min.css" />
        {/*====== Default css ======*/}
        <link rel="stylesheet" href="css/default.css" />
        {/*====== Style css ======*/}
        <link rel="stylesheet" href="css/style.css" />
        {/*====== Responsive css ======*/}
        <link rel="stylesheet" href="css/responsive.css" />
      </head>
      <body>
        <Navbar />
        {children}
        <BootstrapClient />
        <Script src="js/vendor/modernizr-3.6.0.min.js"></Script>
        <Script src="js/vendor/jquery-1.12.4.min.js"></Script>

        <Script src="js/bootstrap.min.js"></Script>

        <Script src="js/slick.min.js"></Script>

        <Script src="js/jquery.magnific-popup.min.js"></Script>

        <Script src="js/waypoints.min.js"></Script>
        <Script src="js/jquery.counterup.min.js"></Script>

        <Script src="js/jquery.nice-select.min.js"></Script>

        <Script src="js/jquery.nice-number.min.js"></Script>

        <Script src="js/jquery.countdown.min.js"></Script>

        <Script src="js/validator.min.js"></Script>

        <Script src="js/ajax-contact.js"></Script>

        <Script src="js/main.js"></Script>

        <Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDC3Ip9iVC0nIxC6V14CKLQ1HZNF_65qEQ"></Script>
        <Script src="js/map-script.js"></Script>
        <Footer />
      </body>
    </html>
  );
}

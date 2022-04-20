import Document, { Html, Head, Main, NextScript } from "next/document";
import Safe from "react-safe"


class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          {/* FAVICON */}
          <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
          <link rel="stylesheet" href="css/jquery-ui.css" />
          {/* GOOGLE FONTS */}
          <link
            href="https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i%7CMontserrat:600,800"
            rel="stylesheet"
          />
          {/* FONT AWESOME */}
          <link rel="stylesheet" href="font/flaticon.css" />
          <link rel="stylesheet" href="css/fontawesome-all.min.css" />
          <link rel="stylesheet" href="css/fontawesome-5-all.min.css" />
          <link rel="stylesheet" href="css/font-awesome.min.css" />
          {/* LEAFLET MAP */}
          <link rel="stylesheet" href="css/leaflet.css" />
          <link rel="stylesheet" href="css/leaflet-gesture-handling.min.css" />
          <link rel="stylesheet" href="css/leaflet.markercluster.css" />
          <link rel="stylesheet" href="css/leaflet.markercluster.default.css" />
          {/* ARCHIVES CSS */}
          <link rel="stylesheet" href="css/search.css" />
          <link rel="stylesheet" href="css/animate.css" />
          <link rel="stylesheet" href="css/aos.css" />
          <link rel="stylesheet" href="css/aos2.css" />
          <link rel="stylesheet" href="css/magnific-popup.css" />
          <link rel="stylesheet" href="css/lightcase.css" />
          <link rel="stylesheet" href="css/owl.carousel.min.css" />
          <link rel="stylesheet" href="css/bootstrap.min.css" />
          <link rel="stylesheet" href="css/menu.css" />
          <link rel="stylesheet" href="css/slick.css" />
          <link rel="stylesheet" href="css/styles.css" />
          <link rel="stylesheet" href="css/maps.css" />
          <link rel="stylesheet" id="color" href="css/colors/pink.css" />
        </Head>
        <body className="homepage-9 hp-6 hd-white">
          <Main />
          <NextScript />
          {/*  <!-- ARCHIVES JS --> */}
          
          
          {/* <script defer src="js/jquery-3.5.1.min.js"></script>
          <script defer src="js/rangeSlider.js"></script>
          <script defer src="js/tether.min.js"></script>
          <script defer src="js/popper.min.js"></script>
          <script defer src="js/moment.js"></script>
          <script defer src="js/bootstrap.min.js"></script>
          <script defer src="js/mmenu.min.js"></script>
          <script defer src="js/mmenu.js"></script>
          <script defer src="js/aos.js"></script>
          <script defer src="js/aos2.js"></script>
          <script defer src="js/slick.min.js"></script>
          <script defer src="js/fitvids.js"></script>
          <script defer src="js/jquery.waypoints.min.js"></script>
          <script defer src="js/jquery.counterup.min.js"></script>
          <script defer src="js/imagesloaded.pkgd.min.js"></script>
          <script defer src="js/isotope.pkgd.min.js"></script>
          <script defer src="js/smooth-scroll.min.js"></script>
          <script defer src="js/lightcase.js"></script>
          <script defer src="js/search.js"></script>
          <script defer src="js/owl.carousel.js"></script>
          <script defer src="js/jquery.magnific-popup.min.js"></script>
          <script defer src="js/ajaxchimp.min.js"></script>
          <script defer src="js/jquery.form.js"></script>
          <script defer src="js/jquery.validate.min.js"></script>
          <script defer src="js/searched.js"></script>
          <script defer src="js/forms-2.js"></script>
          <script defer src="js/leaflet.js"></script>
          <script defer src="js/leaflet-gesture-handling.min.js"></script>
          <script defer src="js/leaflet-providers.js"></script>
          <script defer src="js/leaflet.markercluster.js"></script>
          <script defer src="js/map-style2.js"></script>
          <script defer src="js/range.js"></script>
          <script defer src="js/color-switcher.js"></script>
          
          <script defer src="revolution/js/jquery.themepunch.tools.min.js" ></script>
          <script  defer src="revolution/js/jquery.themepunch.revolution.min.js" ></script>

          <script defer src="js/1.js"></script>

          <script defer src="js/script.js"></script> */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;

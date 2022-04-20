import '../styles/globals.css'


import Script from 'next/script'

function MyApp({ Component, pageProps }) {

  return (
    <>
    {/* <Script src="js/jquery-3.5.1.min.js" strategy='beforeInteractive' />
    <Script src="js/rangeSlider.js" strategy='beforeInteractive'  />
    <Script src="js/tether.min.js" strategy='beforeInteractive'  />
    <Script src="js/popper.min.js" strategy='beforeInteractive'  />
    <Script src="js/moment.js" strategy='beforeInteractive'  />
    <Script src="js/bootstrap.min.js" strategy='beforeInteractive'  />
    <Script src="js/mmenu.min.js" strategy='beforeInteractive'  />
    <Script src="js/mmenu.js" strategy='beforeInteractive'  />
    <Script src="js/aos.js" strategy='beforeInteractive' />
    <Script src="js/aos2.js" strategy='beforeInteractive' />
    <Script src="js/slick.min.js" strategy='beforeInteractive'  />
    <Script src="js/fitvids.js" strategy='beforeInteractive'  />
    <Script src="js/jquery.waypoints.min.js" strategy='beforeInteractive'  />
    <Script src="js/jquery.counterup.min.js" strategy='beforeInteractive'  />
    <Script src="js/imagesloaded.pkgd.min.js" strategy='beforeInteractive'  />
    <Script src="js/isotope.pkgd.min.js" strategy='beforeInteractive'  />
    <Script src="js/smooth-scroll.min.js" strategy='beforeInteractive'  />
    <Script src="js/lightcase.js" strategy='beforeInteractive'  />
    <Script src="js/search.js" strategy='beforeInteractive'  />
    <Script src="js/owl.carousel.js" strategy='beforeInteractive'  />
    <Script src="js/jquery.magnific-popup.min.js" strategy='beforeInteractive'  />
    <Script src="js/ajaxchimp.min.js" strategy='beforeInteractive'  />
    <Script src="js/jquery.form.js" strategy='beforeInteractive'  />
    <Script src="js/jquery.validate.min.js" strategy='beforeInteractive'  />
    <Script src="js/searched.js" strategy='beforeInteractive'  />
    <Script src="js/forms-2.js" strategy='beforeInteractive'  />
    <Script src="js/leaflet-gesture-handling.min.js" strategy='beforeInteractive'  />
    <Script src="js/leaflet-providers.js" strategy='beforeInteractive'  />
    <Script src="js/leaflet.markercluster.js" strategy='beforeInteractive'  />
    <Script src="js/map-style2.js" strategy='afterInteractive' />
    <Script src="js/range.js" strategy='beforeInteractive' />
    <Script src="js/color-switcher.js" strategy='beforeInteractive' /> */}
    {/* <!-- Slider Revolution scripts --> */}
    {/* <Script src="revolution/js/jquery.themepunch.tools.min.js" strategy='beforeInteractive' />
    <Script src="revolution/js/jquery.themepunch.revolution.min.js" strategy='beforeInteractive' />

    <Script src="js/1.js"  strategy='beforeInteractive' /> */}

    {/* <Script src="js/script.js" strategy='beforeInteractive' /> */}
    <Component {...pageProps} />
    
    </>
  )
}

export default MyApp

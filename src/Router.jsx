import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomeOne from "./components/HomeOne/index.jsx";
import HomeOneYellow from "./components/HomeOne/index-yellow.jsx";
import HomeOneDark from "./components/HomeOne/index-dark.jsx";
import HomeOneSingle from "./components/HomeOne/index-single.jsx";
import HomeTwo from "./components/HomeTwo/index.jsx";
import HomeTwoYellow from "./components/HomeTwo/index-2-yellow.jsx";
import HomeTwoDark from "./components/HomeTwo/index-2-dark.jsx";
import HomeTwoSingle from "./components/HomeTwo/index-2-single.jsx";
import HomeThree from "./components/HomeThree/index.jsx";
import HomeThreeYellow from "./components/HomeThree/index-3-yellow.jsx";
import HomeThreeDark from "./components/HomeThree/index-3-dark.jsx";
import HomeThreeSingle from "./components/HomeThree/index-3-single.jsx";
import HomeFour from "./components/HomeFour/index.jsx";
import HomeFourYellow from "./components/HomeFour/index-4-yellow.jsx";
import HomeFourDark from "./components/HomeFour/index-4-dark.jsx";
import HomeFourSingle from "./components/HomeFour/index-4-single.jsx";
import HomeFive from "./components/HomeFive/index.jsx";
import HomeFiveYellow from "./components/HomeFive/index-5-yellow.jsx";
import HomeFiveDark from "./components/HomeFive/index-5-dark.jsx";
import HomeFiveSingle from "./components/HomeFive/index-5-single.jsx";
import AboutUs from "./components/AboutUs/index.jsx";
import ProjectsPages from "./components/Projects/index.jsx";
import ProjectsDetailsPages from "./components/Projects/project-details-page.jsx";
import TeamPages from "./components/TeamPages/index.jsx";
import TeamDetailsPages from "./components/TeamPages/TeamDetails.jsx";
import TestimonialPages from "./components/TestimonialPages/index.jsx";
import PricingPages from "./components/PricingPages/index.jsx";
import FaqPages from "./components/FaqPages/index.jsx";
import Error from "./components/ErrorPages/index.jsx";
import ServicesPages from "./components/ServicesPages/index.jsx";
import ServiceDetailsPages from "./components/ServicesPages/service-details-page.jsx";
import News from "./components/NewsPages/index.jsx";
import NewsDetails from "./components/NewsPages/NewsDetails.jsx";
import Contact from "./components/ContactPages/Contact.jsx";
import Layout from "./components/Helper/Layout.jsx";
import ShopPages from "./components/ShopPages/Products.jsx";
import ProductsSidebar from "./components/ShopPages/ProductsSidebar.jsx";
import ProductsDetails from "./components/ShopPages/ProductsDetails.jsx";
import Cart from "./components/ShopPages/Cart.jsx"
import Checkout from "./components/ShopPages/Checkout.jsx";


const router = createBrowserRouter([
  {
    path:'/',
    Component:Layout,
    children:[
      {
        index:true,
        element: <HomeOne />
      },
      {
        path:"/index-yellow",
        element: <HomeOneYellow />
      },
      {
        path:"/index-dark",
        element: <HomeOneDark />
      },
      {
        path:"/index-single",
        element: <HomeOneSingle />
      },
      {
        path: "/index-2",
        element: <HomeTwo />
      },
      {
        path: "/index-2-yellow",
        element: <HomeTwoYellow />
      },
      {
        path: "/index-2-dark",
        element: <HomeTwoDark />
      },
      {
        path: "/index-2-single",
        element: <HomeTwoSingle />
      },
      {
        path: "/index-3",
        element: <HomeThree />
      },
      {
        path: "/index-3-yellow",
        element: <HomeThreeYellow />
      },
      {
        path: "/index-3-dark",
        element: <HomeThreeDark />
      },
      {
        path: "/index-3-single",
        element: <HomeThreeSingle />
      },
      {
        path: "/index-4",
        element: <HomeFour />
      },
      {
        path: "/index-4-yellow",
        element: <HomeFourYellow />
      },
      {
        path: "/index-4-dark",
        element: <HomeFourDark />
      },
      {
        path: "/index-4-single",
        element: <HomeFourSingle />
      },
      {
        path: "/index-5",
        element: <HomeFive />
      },
      {
        path: "/index-5-yellow",
        element: <HomeFiveYellow />
      },
      {
        path: "/index-5-dark",
        element: <HomeFiveDark />
      },
      {
        path: "/index-5-single",
        element: <HomeFiveSingle />
      },
      {
        path: "/page-about",
        element: <AboutUs />
      },
      {
        path: "/page-projects",
        element: <ProjectsPages />
      },
      {
        path: "/page-project-details",
        element: <ProjectsDetailsPages />
      },
      {
        path: "/page-team",
        element: <TeamPages />
      },
      {
        path: "/page-team-details",
        element: <TeamDetailsPages />
      },
      {
        path: "/page-testimonial",
        element: <TestimonialPages />
      },
      {
        path: "/page-pricing",
        element: <PricingPages />
      },
      {
        path: "/page-faq",
        element: <FaqPages />
      },
      {
        path: "*",
        element: <Error />
      }, 
      {
        path: "/page-services",
        element: <ServicesPages />
      },
      {
        path: "/page-service-details",
        element: <ServiceDetailsPages />
      },
      {
        path: "/shop-products",
        element: <ShopPages />
      },
      {
        path: "/shop-products-sidebar",
        element: <ProductsSidebar />
      },
      {
        path: "shop-product-details",
        element: <ProductsDetails />
      },
      {
        path: "/shop-cart",
        element: <Cart />
      },
      {
        path: "/shop-checkout",
        element: <Checkout />
      },
      {
        path: "/news-grid",
        element: <News />
      },
      {
        path: "/news-details",
        element: <NewsDetails />
      },
      {
        path: "/page-contact",
        element: <Contact />
      }      
    ]
  }
]);

function Router() {
  return (
      <>
        <RouterProvider router={router} />
      </>
  );
}

export default Router;

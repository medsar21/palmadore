import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "@/components/Loading";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import ProductsPage from "./pages/ProductsPage";
import ProductDetails from "./pages/ProductDetails";
import OrderConfirmation from "./pages/OrderConfirmation";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";
import ServiceMarriagePage from "./pages/ServiceMarriagePage";
import ServiceFiancaillesPage from "./pages/ServiceFiancaillesPage";
import ServiceNaissancePage from "./pages/ServiceNaissancePage";
import ServiceAnniversairePage from "./pages/ServiceAnniversairePage";
import NotFound from "./pages/NotFound";
import { APP_ROUTES } from "@/lib/app-routes";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Timer de 2 secondes pour le loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route element={<Layout />}>
              <Route path={APP_ROUTES.HOME} element={<Index />} />
              <Route path={APP_ROUTES.PRODUCTS} element={<ProductsPage />} />
              <Route path={APP_ROUTES.SERVICES} element={<ServicesPage />} />
              <Route path={APP_ROUTES.ABOUT} element={<AboutPage />} />
              <Route path={APP_ROUTES.CONTACT} element={<ContactPage />} />
              <Route path={APP_ROUTES.LOGIN} element={<Login />} />
            </Route>
            <Route path={APP_ROUTES.PRODUCT_DETAILS} element={<ProductDetails />} />
            <Route path={APP_ROUTES.ORDER_CONFIRMATION} element={<OrderConfirmation />} />
            <Route path={APP_ROUTES.SERVICE_MARIAGE} element={<ServiceMarriagePage />} />
            <Route path={APP_ROUTES.SERVICE_FIANCAILLES} element={<ServiceFiancaillesPage />} />
            <Route path={APP_ROUTES.SERVICE_NAISSANCE} element={<ServiceNaissancePage />} />
            <Route path={APP_ROUTES.SERVICE_ANNIVERSAIRE} element={<ServiceAnniversairePage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;

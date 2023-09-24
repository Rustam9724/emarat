import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { SiteContext } from './context';
import Main from "./components/Main";
import Footer from "./components/Footer";
import Catalog from "./components/Catalog";
import CatalogItem from './components/CatalogItem';
import ForComVeh from './components/forСomVeh';
import PowerThrust from './components/PowerThrust';
import Contacts from './components/Contacts';
import AppSucSent from './components/AppSucSent';
import Services from './components/ServicesSection';
import LubeAssistant from './components/servicePages/LubeAssistant';
import LubeSupport from './components/servicePages/LubeSupport';
import LubeTrainer from './components/servicePages/LubeTrainer';
import VideoCheck from './components/servicePages/VideoCheck';
import CooperationSection from './components/CooperationSection';
import Purchase from './components/cooperation-pages/Purchase';
import Distribution from './components/cooperation-pages/Distribution';
import AboutCompany from './components/AboutCompany';
import Mission from './components/Mission';
import News from './components/News';
import NewsPage from './components/NewsPage';
import Vacancies from './components/Vacancies';
import BurgerMenu from './components/Burger-menu';
import SubBurgerMenu from './components/SubBurgerMenu';
import FormPopUp from './components/FormPopUp';

function App() {
  const { subBurgerItem } = useContext(SiteContext);

  return (
    <div className='wrapper'>
      <Router basename="/emarat">
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/catalog" element={<Catalog />}/>
          <Route path="/catalog/catalog-item" element={<CatalogItem />}/>
          <Route path="/catalog/catalog-item/for-commercial-vehicles" element={<ForComVeh />} />
          <Route path="/catalog/catalog-item/for-commercial-vehicles/pwr-thrust" element={<PowerThrust />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/lube-assistant" element={<LubeAssistant />} />
          <Route path="/services/lube-support" element={<LubeSupport />} />
          <Route path="/services/lube-trainer" element={<LubeTrainer />} />
          <Route path="/services/video-check" element={<VideoCheck />} />
          <Route path="/cooperation" element={<CooperationSection />} />
          <Route path="/cooperation/purchase" element={<Purchase />} />
          <Route path="/cooperation/distribution" element={<Distribution />} />
          <Route path="/about-company" element={<AboutCompany />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/news-page" element={<NewsPage />} />
          <Route path="/vacancies" element={<Vacancies />} />
        </Routes>
        <AppSucSent />
        <BurgerMenu />
        <FormPopUp />
        { subBurgerItem && <SubBurgerMenu />}
        <Footer />
        </Router>
    </div>
  )
}

export default App;
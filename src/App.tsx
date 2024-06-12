import Navbar from './components/Navbar'
import Socials from "./components/Socials"
import { Toaster } from "react-hot-toast";

const items = [

    { label: 'About', href: '/about' },

    { label: 'Project', href: '/work' },

    { label: 'Skills', href: '/skills' },

  ];

const App = () => (
  <>
  <Navbar items={items}/>
  <Socials/>
  <Toaster position="top-center" />
  </>
);
export default App;
import Navbar from "@/component/Navbar/page";
import Dashboard from "./Dashboard/Dashboard";
import Footer from "@/component/Footer/Footer";


export default function Home() {
  return (
    <div>
      <main >
        <Navbar/>
        <Dashboard />
        <Footer />
      </main>
    
    </div>
  );
}

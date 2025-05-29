import HomeComponent from "@/components/Page/Landing";
import NavBar from "@/components/navigation/HomeNavBar";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
    
      <NavBar/>
      <HomeComponent />
    </div>
  );
}
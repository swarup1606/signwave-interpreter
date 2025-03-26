
import TransitionLayout from '@/components/TransitionLayout';
import Navbar from '@/components/Navbar';
import DashboardHeader from '@/components/DashboardHeader';
import FeaturesList from '@/components/FeaturesList';
import DashboardFooter from '@/components/DashboardFooter';

export function Dashboard() {
  return (
    <TransitionLayout>
      <Navbar />
      
      <div className="min-h-screen">
        <DashboardHeader />
        
        <main className="py-8">
          <div className="container mx-auto px-4">
            <FeaturesList />
          </div>
        </main>
        
        <DashboardFooter />
      </div>
    </TransitionLayout>
  );
}

export default Dashboard;

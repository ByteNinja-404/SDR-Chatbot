import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { ChatPanel } from '@/components/dashboard/ChatPanel';
import { LeadPanel } from '@/components/dashboard/LeadPanel';
import { TaskBoard } from '@/components/dashboard/TaskBoard';

function App() {
  return (
    <div className="flex h-screen flex-col bg-background">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          <div className="container mx-auto py-6 px-4 space-y-6">
            <div className="grid lg:grid-cols-2 gap-6 min-h-[400px]">
              <LeadPanel />
              <ChatPanel />
            </div>
            <TaskBoard />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
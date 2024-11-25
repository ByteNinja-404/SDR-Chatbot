import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function Header() {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center px-4 gap-4">
        <div className="flex w-[200px] items-center gap-2">
          <Search className="h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="h-8 w-[150px] lg:w-[200px]"
          />
        </div>
        
        <div className="flex-1 text-center">
          <h1 className="text-xl font-semibold">SDR AI Agent Dashboard</h1>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="text-sm text-right">
            <p className="font-medium">John Doe</p>
            <p className="text-muted-foreground">SDR Manager</p>
          </div>
          <Avatar>
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop&auto=format" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
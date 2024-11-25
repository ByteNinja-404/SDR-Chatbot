import { Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card } from '@/components/ui/card';

const messages = [
  { id: 1, sender: 'AI', text: 'Hello! How can I assist you today?', time: '9:00 AM' },
  { id: 2, sender: 'User', text: 'I need help with a lead.', time: '9:01 AM' },
  { id: 3, sender: 'AI', text: 'Sure! What information do you need?', time: '9:01 AM' },
];

export function ChatPanel() {
  return (
    <Card className="flex h-full flex-col">
      <div className="border-b p-4">
        <h2 className="text-lg font-semibold">AI Assistant</h2>
      </div>
      
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                'flex gap-2 rounded-lg p-3',
                message.sender === 'AI'
                  ? 'bg-muted'
                  : 'ml-auto bg-primary text-primary-foreground'
              )}
            >
              <p className="text-sm">{message.text}</p>
              <span className="ml-auto text-xs opacity-70">{message.time}</span>
            </div>
          ))}
        </div>
      </ScrollArea>
      
      <div className="border-t p-4">
        <div className="flex gap-2">
          <Input placeholder="Type your message..." className="flex-1" />
          <Button size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
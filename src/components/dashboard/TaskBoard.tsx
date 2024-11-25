import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, AlertCircle, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const tasks = [
  {
    id: 1,
    title: 'Follow up with Tech Solutions',
    status: 'todo',
    priority: 'high',
    dueDate: '2024-01-20',
  },
  {
    id: 2,
    title: 'Schedule demo call',
    status: 'in-progress',
    priority: 'medium',
    dueDate: '2024-01-21',
  },
  {
    id: 3,
    title: 'Send proposal',
    status: 'completed',
    priority: 'low',
    dueDate: '2024-01-19',
  },
  {
    id: 4,
    title: 'Product presentation',
    status: 'todo',
    priority: 'high',
    dueDate: '2024-01-22',
  },
];

const columns = [
  { id: 'todo', title: 'To Do', icon: Clock, color: 'text-blue-500' },
  { id: 'in-progress', title: 'In Progress', icon: AlertCircle, color: 'text-yellow-500' },
  { id: 'completed', title: 'Completed', icon: CheckCircle2, color: 'text-green-500' },
];

const priorityColors = {
  low: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100',
  medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100',
  high: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100',
};

export function TaskBoard() {
  return (
    <div className="rounded-lg border bg-card">
      <div className="border-b p-4">
        <h2 className="text-lg font-semibold">Task Tracker</h2>
      </div>
      
      <div className="grid grid-cols-3 gap-4 p-4">
        {columns.map((column) => (
          <div key={column.id} className="space-y-4">
            <div className="flex items-center gap-2">
              <column.icon className={cn('h-5 w-5', column.color)} />
              <h3 className="font-medium">{column.title}</h3>
              <Badge variant="secondary" className="ml-auto">
                {tasks.filter((task) => task.status === column.id).length}
              </Badge>
            </div>
            
            <div className="space-y-3">
              {tasks
                .filter((task) => task.status === column.id)
                .map((task) => (
                  <Card key={task.id} className="p-3 hover:shadow-md transition-shadow">
                    <div className="space-y-2">
                      <p className="font-medium">{task.title}</p>
                      <div className="flex items-center justify-between">
                        <Badge
                          variant="secondary"
                          className={cn(priorityColors[task.priority as keyof typeof priorityColors])}
                        >
                          {task.priority}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {task.dueDate}
                        </span>
                      </div>
                    </div>
                  </Card>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
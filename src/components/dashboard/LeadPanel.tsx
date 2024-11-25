import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Phone, Mail, Calendar, TrendingUp } from 'lucide-react';

const leadData = {
  name: 'Sarah Johnson',
  company: 'Tech Solutions Inc.',
  email: 'sarah.j@techsolutions.com',
  phone: '+1 (555) 123-4567',
  stage: 'Qualified',
  lastContact: '2024-01-15',
  score: 85,
};

export function LeadPanel() {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl">{leadData.name}</CardTitle>
            <CardDescription className="text-base">{leadData.company}</CardDescription>
          </div>
          <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
            {leadData.stage}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">{leadData.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium">{leadData.phone}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Last Contact</p>
                <p className="font-medium">{leadData.lastContact}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Lead Score</p>
                <div className="flex items-center gap-2">
                  <Progress value={leadData.score} className="h-2 w-[60px]" />
                  <span className="font-medium">{leadData.score}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button className="flex-1 bg-primary hover:bg-primary/90">
            Assign to SDR
          </Button>
          <Button variant="outline" className="flex-1">
            Mark as Closed
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
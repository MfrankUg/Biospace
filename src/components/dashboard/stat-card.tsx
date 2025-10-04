import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type StatCardProps = {
  title: string;
  value: string | number;
  icon: React.ReactNode;
};

export function StatCard({ title, value, icon }: StatCardProps) {
  return (
    <Card className="shadow-lg shadow-primary/10 hover:border-primary/50 transition-colors">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold text-primary">{value}</div>
      </CardContent>
    </Card>
  );
}

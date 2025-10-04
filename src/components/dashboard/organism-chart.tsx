'use client';

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, LabelList } from 'recharts';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig
} from '@/components/ui/chart';

type OrganismChartProps = {
  data: { name: string; value: number }[];
};

const chartConfig = {
  value: {
    label: 'Studies',
    color: 'hsl(var(--primary))',
  },
} satisfies ChartConfig

export function OrganismChart({ data }: OrganismChartProps) {
  return (
    <ChartContainer config={chartConfig} className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border) / 0.5)" />
          <XAxis type="number" hide />
          <YAxis
            dataKey="name"
            type="category"
            tickLine={false}
            axisLine={false}
            tick={{ fill: 'hsl(var(--foreground))', fontSize: 12 }}
            width={80}
          />
          <ChartTooltip
            cursor={{ fill: 'hsl(var(--card))' }}
            content={<ChartTooltipContent />}
          />
          <Bar dataKey="value" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]}>
            <LabelList dataKey="value" position="right" offset={8} className="fill-foreground font-medium" fontSize={12} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}

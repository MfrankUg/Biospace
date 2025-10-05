'use client';

import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from 'recharts';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
} from '@/components/ui/chart';

type ResearchTimelineProps = {
  data: { year: number; count: number }[];
};

const chartConfig = {
  count: {
    label: 'Publications',
    color: 'hsl(var(--primary))',
  },
} satisfies ChartConfig;

export function ResearchTimeline({ data }: ResearchTimelineProps) {
  return (
    <ChartContainer config={chartConfig} className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border) / 0.5)" />
          <XAxis
            dataKey="year"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.toString()}
            tick={{ fill: 'hsl(var(--foreground))' }}
          />
          <YAxis 
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tick={{ fill: 'hsl(var(--foreground))' }}
          />
          <ChartTooltip
            cursor={{ fill: 'hsl(var(--card))' }}
            content={<ChartTooltipContent />}
          />
          <defs>
            <linearGradient id="fillCount" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="hsl(var(--primary))"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="hsl(var(--primary))"
                stopOpacity={0.1}
              />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="count"
            stroke="hsl(var(--primary))"
            fillOpacity={1}
            fill="url(#fillCount)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
"use client";

import {
  ResponsiveContainer,
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
} from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";

const chartData = [
  {
    name: "Wemby",
    points: 140,
    rebounds: 205,
    assists: 106,
    steals: 140,
    blocks: 584,
    threes: 112,
  },
  {
    name: "Lebron",
    points: 168,
    rebounds: 149,
    assists: 229,
    steals: 141,
    blocks: 87,
    threes: 131,
  },
  {
    name: "Jokic",
    points: 192,
    rebounds: 265,
    assists: 275,
    steals: 171,
    blocks: 156,
    threes: 73,
  },
  {
    name: "Steph",
    points: 180,
    rebounds: 89,
    assists: 147,
    steals: 86,
    blocks: 64,
    threes: 313,
  },
  {
    name: "Harden",
    points: 110,
    rebounds: 100,
    assists: 238,
    steals: 122,
    blocks: 131,
    threes: 163,
  },
  {
    name: "Luka",
    points: 218,
    rebounds: 175,
    assists: 266,
    steals: 157,
    blocks: 87,
    threes: 249,
  },
];

const chartConfig = {
  points: {
    label: "Points",
    color: "var(--color-chart-1)",
  },
  rebounds: {
    label: "Rebounds",
    color: "var(--color-chart-2)",
  },
  assists: {
    label: "Assists",
    color: "var(--color-chart-3)",
  },
  steals: {
    label: "Steals",
    color: "var(--color-chart-4)",
  },
  blocks: {
    label: "Blocks",
    color: "var(--color-chart-5)",
  },
  threes: {
    label: "Threes",
    color: "var(--color-chart-6)",
  },
} satisfies ChartConfig;

export const description = "A stacked bar chart with NBA player stats";

const NbaChart = () => {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-100%">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="name"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          className="tracking-tighter md:tracking-tight"
        />
        <ChartTooltip
          content={
            <ChartTooltipContent
              indicator="line"
              formatter={(value, name, item, index) => (
                <>
                  <div
                    className="h-2.5 w-2.5 shrink-0 rounded-[2px] bg-[--color-bg]"
                    style={
                      {
                        "--color-bg": `var(--color-${name})`,
                      } as React.CSSProperties
                    }
                  />
                  {chartConfig[name as keyof typeof chartConfig]?.label || name}
                  <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
                    {value}
                  </div>
                  {/* Add this after the last item */}
                  {index === 5 && (
                    <div className="mt-1.5 flex basis-full items-center border-t pt-1.5 text-xs font-medium text-foreground">
                      Average
                      <div className="ml-auto flex items-baseline gap-0.5 font-mono font-medium tabular-nums text-foreground">
                        {Math.floor(
                          (item.payload.points +
                            item.payload.rebounds +
                            item.payload.assists +
                            item.payload.steals +
                            item.payload.blocks +
                            item.payload.threes) /
                            6,
                        )}
                      </div>
                    </div>
                  )}
                </>
              )}
            />
          }
        />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar
          dataKey="points"
          fill="var(--color-chart-1)"
          stackId="a"
          radius={[0, 0, 4, 4]}
        />
        <Bar
          dataKey="rebounds"
          fill="var( --color-chart-2)"
          stackId="a"
          radius={[0, 0, 0, 0]}
        />
        <Bar
          dataKey="assists"
          fill="var( --color-chart-3)"
          stackId="a"
          radius={[0, 0, 0, 0]}
        />
        <Bar
          dataKey="steals"
          fill="var( --color-chart-4)"
          stackId="a"
          radius={[0, 0, 0, 0]}
        />
        <Bar
          dataKey="blocks"
          fill="var( --color-chart-5)"
          stackId="a"
          radius={[0, 0, 0, 0]}
        />
        <Bar
          dataKey="threes"
          fill="var( --color-chart-6)"
          stackId="a"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ChartContainer>
  );
};

export default NbaChart;

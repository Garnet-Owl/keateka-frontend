"use client";

import { useAuthStore } from "@/lib/stores/authStore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, DollarSign, Users } from "lucide-react";

export function DashboardMetrics() {
  const { user } = useAuthStore();

  const getMetrics = () => {
    // For now, returning admin metrics as default
    return [
      {
        title: "Total Jobs",
        value: "12",
        icon: Calendar,
        description: "Active this month",
      },
      {
        title: "Hours Worked",
        value: "24.5",
        icon: Clock,
        description: "Last 30 days",
      },
      {
        title: "Revenue",
        value: "KSh 15,234",
        icon: DollarSign,
        description: "This month",
      },
      {
        title: "Active Cleaners",
        value: "8",
        icon: Users,
        description: "Currently online",
      },
    ];
  };

  const metrics = getMetrics();

  return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
              <Card key={metric.title} className="bg-white">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {metric.title}
                  </CardTitle>
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{metric.value}</div>
                  <p className="text-sm text-muted-foreground">
                    {metric.description}
                  </p>
                </CardContent>
              </Card>
          );
        })}
      </div>
  );
}
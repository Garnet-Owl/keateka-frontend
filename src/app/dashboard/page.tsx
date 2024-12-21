import {Suspense} from "react";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {DashboardMetrics} from "@/app/dashboard/components/DashboardMetrics";

// Loading skeleton for metrics
function MetricsSkeleton() {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="animate-pulse">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <div className="h-4 w-24 bg-muted rounded"/>
                        <div className="h-4 w-4 bg-muted rounded"/>
                    </CardHeader>
                    <CardContent>
                        <div className="h-8 w-32 bg-muted rounded"/>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}

export default function DashboardPage() {
    return (
        <main className="flex-1 space-y-4 p-8 pt-6">
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

            <Suspense fallback={<MetricsSkeleton/>}>
                <DashboardMetrics/>
            </Suspense>

            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
                <div className="col-span-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Recent Jobs</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {/* Recent Jobs Table Component will go here */}
                        </CardContent>
                    </Card>
                </div>

                <div className="col-span-3">
                    <Card>
                        <CardHeader>
                            <CardTitle>Upcoming Schedule</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {/* Calendar/Schedule Component will go here */}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </main>
    );
}
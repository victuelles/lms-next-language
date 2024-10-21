import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { CheckCircle, Clock, InfoIcon } from "lucide-react";
import { getDashboardCourses } from "@/actions/get-dashboard-courses";
import { CoursesList } from "@/components/courses-list";

import { BannerCard } from "./_components/banner-card";
import { InfoCard } from "./_components/info-card";


import { db } from "@/lib/db";
import { List } from "./_components/list";
const Dashboard = async () => {
  const { userId } = auth();

  if (!userId) {
    return redirect("/sign-in");
  }
  const categories = await db.category.findMany({
    orderBy: {
      name: "asc",
    },
  });
  const { completedCourses, coursesInProgress } = await getDashboardCourses(
    userId
  );
  return (
    <div>
      <div className="p-6 space-y-4">
        <div className="grid grid-cols-1 gap-4">
          <BannerCard
            icon={InfoIcon}
            label="Welcome to the dashboard"
            description={`Select a Filipino language to learn  `}
          />
        </div>
        <div className="p-6 space-y-4">
          <List items={categories} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InfoCard
            icon={Clock}
            label="In Progress"
            numberOfItems={coursesInProgress.length}
          />
          <InfoCard
            icon={CheckCircle}
            label="Completed"
            numberOfItems={completedCourses.length}
            variant="success"
          />
        </div>
        <CoursesList items={[...coursesInProgress, ...completedCourses]} />
      </div>
    </div>
  );
};

export default Dashboard;

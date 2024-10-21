import { auth } from "@clerk/nextjs/server";
import { CheckCircle, Clock, InfoIcon } from "lucide-react"; 
import { getDashboardCourses } from "@/actions/get-dashboard-courses";
import { CoursesList } from "@/components/courses-list";

import { BannerCard } from "./_components/banner-card";
import { InfoCard } from "./_components/info-card";
import { redirect } from "next/navigation";
import { Categories } from "./_components/categories";
import { db } from "@/lib/db";
const Dashboard = async() => {
    const { userId } = auth();

    if (!userId) {
      return redirect("/sign-in");
    }
    const categories = await db.category.findMany({
      orderBy: {
        name: "asc"
      }
    });
    const {
      completedCourses,
      coursesInProgress
    } = await getDashboardCourses(userId);
    return (<div>
        
        <div className="p-6 space-y-4">
      <div className="grid grid-cols-1 gap-4">
        <BannerCard
            icon={InfoIcon}
            label="Welcome to the dashboard"
            description={`This is where you can see your progress 
            and continue your courses. This is a demonstration LMS and as such, all courses are free and Stripe is in test
             mode. To enroll in a course, enter dummy data in the Stripe form. Go to www.TalkFilipino.com sign-in using your google email address `}
        />
      </div>
      <div className="p-6 space-y-4">
        <Categories
          items={categories}
        />
 
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
      <CoursesList
        items={[...coursesInProgress, ...completedCourses]}
      />
    </div>
    </div>  );
}
 
export default Dashboard;
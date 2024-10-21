import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getCourses } from "@/actions/get-courses";
import { CoursesList } from "@/components/courses-list";
import { BannerCard } from "./_components/banner-card";
import { InfoIcon } from "lucide-react";

 

interface CategoryPageProps {
  searchParams: {
    title: string;
    categoryId: string;
  }
};

const CategoryPage = async ({
  searchParams
}: CategoryPageProps) => {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

 console.log("searchParams")
 console.log(searchParams)

  const courses = await getCourses({
    userId,
    ...searchParams,
  });

 
  return (
    <>
       <div className="px-6 pt-6  md:mb-0 block">
      
       <div className="grid grid-cols-1 gap-4">
          <BannerCard
            icon={InfoIcon}
            label={`So you want to learn about ${searchParams.title} language`}
            description={`Here are some courses you might want to start with `}
          />
        </div>
      </div> 
      <div className="p-6 space-y-4">
      
        <CoursesList items={courses} />
      </div>
    </>
   );
}
 
export default CategoryPage;
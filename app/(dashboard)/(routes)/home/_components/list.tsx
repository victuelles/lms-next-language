"use client";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { Card } from "./card";
import { Category } from "@prisma/client";

interface CategoriesProps {
  items: Category[];
}

export const List = ({ items }: CategoriesProps) => {
  const router = useRouter();
 
  const onClick = (id: string, title:string) => {
    return router.push(`/category?categoryId=${id}&title=${title}`)
  }

  return (
    <div className="pt-6 grid  grid-cols-2    lg:grid-cols-4 gap-4">
      {items.map((category) => (
        <Card
          key={category.id}
          id={category.id}
          title={category.name}
          imageSrc={category.imageSrc}
          onClick={onClick}
        />
      ))}
    </div>
  );
};

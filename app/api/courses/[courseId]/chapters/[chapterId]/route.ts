import Mux from "@mux/mux-node";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// const { Video } = new Mux(
//   process.env.MUX_TOKEN_ID!,
//   process.env.MUX_TOKEN_SECRET!
// );
// https://www.npmjs.com/package/@mux/mux-node


const mux = new Mux({
    tokenId:   process.env.MUX_TOKEN_ID!,
    tokenSecret: process.env.MUX_TOKEN_SECRET!
} );
export async function PATCH(
  req: Request,
  { params }: { params: { courseId: string; chapterId: string } }
) {
  try {
    const { userId } = auth();
    const { isPublished, ...values } = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized!", { status: 401 });
    }

    const courseOwner = await db.course.findUnique({
      where: {
        id: params.courseId,
        userId: userId,
      },
    });

    if (!courseOwner) {
      return new NextResponse("Unauthorized!", { status: 401 });
    }

    const chapter = await db.chapter.update({
      where: {
        id: params.chapterId,
        courseId: params.courseId,
      },
      data: {
        ...values,
      },
    });

    // console.log("videoUrl", values.videoUrl);
    if (values.videoUrl) {
      const existingMuxData = await db.muxData.findFirst({
        where: {
          chapterId: params.chapterId,
        },
      });
    //   console.log("---------------------------*******************------------");
    //   console.log("existingMuxData", existingMuxData);
    //   console.log("mux", mux);

      if (existingMuxData) {
        try {
          await mux.video.assets.del(existingMuxData.assetId);
        } catch (error) {
          console.log("[Mux asset delete]", error);
        }
        await db.muxData.delete({
          where: {
            id: existingMuxData.id,
          },
        });
      }

      try {
        const asset = await mux.video.assets.create({
          input: values.videoUrl,
          playback_policy: "public",
          test: false,
        });
        if (asset) {
          await db.muxData.create({
            data: {
              chapterId: params.chapterId,
              assetId: asset.id,
              playbackId: asset.playback_ids?.[0]?.id,
            },
          });
        }
      } catch (error) {
        console.log("[Mux Asset Create]", error);
      }
    }

    return  NextResponse.json(chapter);
    
  } catch (error) {
    console.log("[Course_Chapter_Id]", error);
    return new NextResponse("Internal error!", { status: 500 });
  }
}

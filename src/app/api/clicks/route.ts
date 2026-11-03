import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import { trackableIds } from "@/data/profile";

type ClickDoc = {
  _id: string; // 링크 ID
  count: number;
  updatedAt: Date;
};

const COLLECTION = "clicks";

/** 링크 클릭 1회 기록: { linkId: string } */
export async function POST(req: Request) {
  let linkId: unknown;
  try {
    ({ linkId } = await req.json());
  } catch {
    return NextResponse.json({ error: "잘못된 요청 본문입니다." }, { status: 400 });
  }

  if (typeof linkId !== "string" || !trackableIds.has(linkId)) {
    return NextResponse.json({ error: "알 수 없는 링크입니다." }, { status: 400 });
  }

  try {
    const db = await getDb();
    await db
      .collection<ClickDoc>(COLLECTION)
      .updateOne(
        { _id: linkId },
        { $inc: { count: 1 }, $set: { updatedAt: new Date() } },
        { upsert: true },
      );
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("클릭 수 기록 실패:", err);
    return NextResponse.json({ error: "클릭 수를 기록하지 못했습니다." }, { status: 500 });
  }
}

/** 링크별 클릭 수 조회: { clicks: { [linkId]: number } } */
export async function GET() {
  try {
    const db = await getDb();
    const docs = await db.collection<ClickDoc>(COLLECTION).find().toArray();
    const clicks = Object.fromEntries(docs.map((d) => [d._id, d.count]));
    return NextResponse.json({ clicks });
  } catch (err) {
    console.error("클릭 수 조회 실패:", err);
    return NextResponse.json({ error: "클릭 수를 불러오지 못했습니다." }, { status: 500 });
  }
}

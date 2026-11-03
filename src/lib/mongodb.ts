import { MongoClient, type Db } from "mongodb";

declare global {
  // 개발 모드의 HMR에서 연결이 계속 늘어나지 않도록 전역에 캐시합니다.
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

export async function getDb(): Promise<Db> {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI 환경 변수가 설정되지 않았습니다. .env.local을 확인하세요.");
  }

  if (!globalThis._mongoClientPromise) {
    globalThis._mongoClientPromise = new MongoClient(uri).connect().catch((err) => {
      // 연결 실패를 캐시하지 않고 다음 요청에서 다시 시도합니다.
      globalThis._mongoClientPromise = undefined;
      throw err;
    });
  }

  const client = await globalThis._mongoClientPromise;
  return client.db(process.env.MONGODB_DB ?? "linknamu");
}

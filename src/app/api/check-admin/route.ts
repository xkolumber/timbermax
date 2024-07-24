import jwt from "jsonwebtoken";
import { unstable_noStore } from "next/cache";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  unstable_noStore();
  const cookieStore = cookies();

  const authTokenCookie = cookieStore.get("FirebaseIdTokenTim");
  const authToken = authTokenCookie ? authTokenCookie.value : null;

  if (authToken) {
    const decodedToken: any = jwt.decode(authToken);
    if (!decodedToken || typeof decodedToken === "string") {
      throw new Error("Invalid authentication token");
    }
    const browser_uid = decodedToken.user_id;

    if (browser_uid === process.env.ADMIN_UID) {
      return new NextResponse(null, { status: 200 });
    } else {
      console.log("500ka");
      return new NextResponse(null, { status: 401 });
    }
  } else {
    return new NextResponse(null, { status: 401 });
  }
}

import mongoose, { Mongoose } from "mongoose";

export async function dbConnect(): Promise<{
  success: boolean;
  connection?: Mongoose;
  error?: unknown;
}> {
  try {
    const conn = await mongoose.connect(
      String(process.env.MONGODB_CONNECTION_STRING)
    );
    return { success: true, connection: conn };
  } catch (error) {
    console.log(error);
    return { success: false, error };
  }
}

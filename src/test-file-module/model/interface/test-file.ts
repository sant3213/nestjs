import { Document } from "mongoose";

export interface TestFile extends Document{
    file:File;
}
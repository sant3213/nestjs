import { Document } from "mongoose";

export interface Test extends Document {

    name:string;
    age:string;
}
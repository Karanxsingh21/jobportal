import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://caransingh04:ZkFVzlTyNrAxAEAT@cluster0.exkex3o.mongodb.net/?retryWrites=true&w=majority");
        console.log('mongodb connected successfully');
    } catch (error) {
        console.log(error);
    }
}
export default connectDB;
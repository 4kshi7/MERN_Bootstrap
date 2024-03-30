
import mongoose from 'mongoose'

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("MongoDB is Connected")
    } catch (error) {
        console.log("Error Connecting to DB", error.message)
    }
}
export default connectToMongoDB

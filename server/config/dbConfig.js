
import mongoose from "mongoose"

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`DB CONNECTION SUCCESS : ${conn.connection.name}`.bgGreen)
        
    } catch (error) {
        console.log(`DB CONNECTION FAILED : ${error.message}.bgRed`)
    }
}

// 9xorobinoffical_db_user
// tSniGcvjBd0GoHWs
export default connectDB

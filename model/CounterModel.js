import mongoose from "mongoose";

const CounterModel = new mongoose.Schema(
    {
        name: String,
        communityNum: Number,
    }
)

const Counter = mongoose.models.Counter || mongoose.model('Counter', CounterModel)
export default Counter
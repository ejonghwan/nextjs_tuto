import mongoose from "mongoose";

const CommunityModel = new mongoose.Schema(
    {
        title: String,
        content: String,
        communityNum: Number,
    }
)

const Community = mongoose.models.Community || mongoose.model('Community', CommunityModel)
export default Community
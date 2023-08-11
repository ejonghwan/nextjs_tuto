import { connectMongoDB } from '@/libs/MongoConnect';
// import Counter from '@/model/CounterModel';
import Community from '@/model/CommunityModel';


export default async function handler(req, res) {

    const aa = await connectMongoDB();
    // console.log('aa??', aa)

    if (req.method === 'GET') {
        try {
            const comm = await Community.find()
            res.status(200).json(comm)
        } catch(err) {
            res.status(400).send(err);
        }
    }

	if (req.method === 'POST') {
        const { _id, title, content } = req.body;
		try {

            // console.log('server id?', _id)
            const newComm = Community({ title: title, content: content })
			newComm.save()

            res.status(200).json(newComm)
            
		} catch (err) {
			res.status(400).send(err);
		}
	}
}
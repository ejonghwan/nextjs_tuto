import mongoose from 'mongoose';

export const connectMongoDB = async () => {
	//해당 함수호출시 MongoDB접속에 성공하면 접속 성공객체를 promise형태로 반환값을 리턴
	if (mongoose.connection.readyState === 1) {
		return mongoose.connection.asPromise();
	}
	return await mongoose.connect(process.env.MONGO_URI);
};
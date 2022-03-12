import mongoose from 'mongoose';

export async function connect() {
    try {
        await mongoose.connect('mongodb://localhost/masters-posgrados', {
            useNewUrlParser: true,
            useFindAndModify: false 
        });
        console.log('>>> Database connected');
    }
    catch {
        console.log('Error');
    }
}

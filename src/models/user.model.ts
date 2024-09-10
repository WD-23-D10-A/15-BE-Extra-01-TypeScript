import {Schema, model, Document} from 'mongoose';

interface UserInt extends Document {
    name: string;
    email: string;
    password: string;
}

const userSchema = new Schema<UserInt>({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
})

const User = model<UserInt>('User', userSchema);

export default User;
export {UserInt};
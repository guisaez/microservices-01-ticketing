import mongoose from "mongoose";

// An interface that describes the properties that are required 
// to create a new User.

interface UserAttrs {
    email: string;
    password: string;
}

interface UserModel extends mongoose.Model<UserDoc> {
    build(attrs: UserAttrs): UserDoc;
}


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.pre('save', async function(done) {
    if(this.isModified('password')){
        
    }
});

userSchema.statics.build = (attrs: UserAttrs) => {
    return new User(attrs)
}

interface UserDoc extends mongoose.Document {
    email: string;
    password: string;
}

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);


export { User };
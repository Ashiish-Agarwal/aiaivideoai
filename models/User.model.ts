import  mongoose ,{ Document, Model,  Schema } from "mongoose";

interface IUSer extends Document {
    clearkId: string;
    email: string;
    userName: string;
    photo: string;
    firstName: string;
    lastName: string;
    planeId:Number;
    creditBalance: Number;
}


const Userschema = new Schema<IUSer>({
    clearkId:{
        type:String,
        require:true,
        unique:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    userName:{
        type:String,
        require:true,
        unique:true
    },
    photo:{
        type:String,
        require:true
    },
    firstName:{
        type:String,
        require:true,
    
    },
    lastName:{
        type:String,
        require:true,
       
    },
    planeId:{
 type:Number,
 default:1
    },
    creditBalance:{
        type:Number,
       
        default:10
    },
})

const User = mongoose.models?.User || mongoose.model<IUSer>('User',Userschema)

export default User

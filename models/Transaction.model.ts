import mongoose ,{ Document, Schema ,models } from "mongoose";

interface ITransaction extends Document {
    createdAt: Date;
    stripeId: number;
    amount: number;
    plane: string;
    credits: number;
    buyer: mongoose.Schema.Types.ObjectId;
}


const TranstactionSchema= new Schema<ITransaction>({
    createdAt:{
        type:Date,
        Default:Date.now
    },
    stripeId:{
        type:Number,
        unique:true,
        require:true
    },
    amount:{
        type:Number,
        require:true
    },
    plane:{
        type:String,
        require:true
    },
    credits:{
        type:Number,
        require:true
    },
    buyer:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }

})
const transaction = models?.transaction || mongoose.model<ITransaction>('transaction', TranstactionSchema)
export default transaction
import { Schema } from "mongoose";

export const ProductSchema = new Schema({
    item: { type: String, required: true},
    description: { type: String, required: true},
    price: { type: Number, required: true},
    quantity: { type: Number, required: true},
    createdAt: {
        type: Date,
        default: Date.now,
    },
    category: [{ type: String, required:true}],
    images: [String],
    manufacture_details: {
        model: String,
        brand: String
    },
    color:[String],
    shipping_details:{
        weight: Number,
        width: Number,
        height: Number,
        depth: Number
    }
})
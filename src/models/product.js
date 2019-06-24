"use strict";

const mongose = require("mongoose");
const Schema = mongose.Schema;

const schema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        trim: true,
        index: true,
        unique: true
    },
    description: {
        type: String,
        required: 'A description é obrigatória!'
    },
    price: {
        type: Number,
        require: true,
    },
    active: {
        type: Boolean,
        required:  true,
        default: true
    },
    tags: [
        {
            type: String,
            required: true,
        }
    ]
});

module.exports = mongose.model("Product", schema);

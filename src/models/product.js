"use strict";

const mongose = require("mongoose");
const Schema = mongose.Schema;

const schema = new Schema({
    title: {
        type: String,
        required: [true, 'O title é obrigatório!'],
        trim: true
    },
    slug: {
        type: String,
        required: [true, 'O slug é obrigatório!'],
        trim: true,
        index: true,
        unique: true
    },
    description: {
        type: String,
        required: [true,'A description é obrigatória!']
    },
    price: {
        type: Number,
        require: [true,'O price é obrigatório!']
    },
    active: {
        type: Boolean,
        required:  [true,'O active é obrigatório!'],
        default: true
    },
    tags: [
        {
            type: String,
            required: [true,'as tags são obrigatórias!'],
        }
    ]
});

module.exports = mongose.model("Product", schema);

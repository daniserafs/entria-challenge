const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema(
    {
        _id: Schema.Types.ObjectId,
        name: { type: String, maxlength: 100},
        
    }
)
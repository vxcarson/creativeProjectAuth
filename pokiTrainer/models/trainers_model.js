var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var TrainerSchema = new Schema;
    username: { type: String, unique: true },
    email: String,
    hashed_password: String,
    poki1: Number,
    poki2: Number,
    poki3: Number,
    poki4: Number,
    poki5: Number,
    poki6: Number
});
mongoose.model('Trainer',TrainerSchema);

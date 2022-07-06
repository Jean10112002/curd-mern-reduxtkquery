import mongoose from 'mongoose'

const LibroSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    descripcion:{
        type:String,
        required:true
    }
}
)

export default mongoose.model('Libro', LibroSchema);


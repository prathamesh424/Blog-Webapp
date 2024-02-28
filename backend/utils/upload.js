
import {GridFsStorage } from 'multer-gridfs-storage' ;
import multer from 'multer';


const storage = new GridFsStorage ({
    url : 'mongodb+srv://prathamesh24:5cCJrveHootshvnP@cluster0.0ao77yt.mongodb.net/?retryWrites=true&w=majority'  ,
    options : {useNewUrlParser : true} ,
    file : (request , file) => {
        const match = ["image/png" , "image/jpg"] ;

        if (match.indexOf(file.memeType)  === -1){
            return `${Date.now()} -blog- ${file.originalname}` ;
        }
        return {
            bucketName : "photos"  ,
            filname : `${Date.now()} -blog- ${file.originalname}`
        }
    }

})


export default multer({storage}) ;
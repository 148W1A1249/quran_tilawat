import { useEffect, useState } from "react";
// import ReactPlayer from "react-player";
const PlayInfo = ({RecitersData,ChapterData,ReciterId,ChapterId})=>{
    const [SingleChapter, setSingleChapter] = useState([]);
    useEffect(()=>{
        function singleChapterF(){
            ChapterData.forEach(obj=>{
               if(obj.id === Number(ChapterId)){
                setSingleChapter(obj);
               }
            })
        }
        singleChapterF()
    })
    const audioLink = (reciterLink,chapterID)=>{
        return reciterLink+"/"+("00"+chapterID).slice(-3)+'.mp3' ;
    }
    return<>
    <div className="m-5">
        <h4 className="text-center font-weight-bold">PlayInfo</h4>
        <hr/>
        {
            ((RecitersData && RecitersData.length >0) && (ChapterData && ChapterData.length >0)) ?
            RecitersData.map(obj=>{
                return (obj.id === ReciterId ) ? <>
                    <div key={obj.id}>
                        <h6 className="d-flex justify-content-between">
                            <span>Reciter :</span>
                            <span>{obj.name}</span>
                        </h6>
                        <h6 className="d-flex justify-content-between">
                            <span>Chapter In Arabic :</span>
                            <span>{SingleChapter.name_arabic}</span>
                        </h6>
                        <h6 className="d-flex justify-content-between">
                            <span>Chapter In English :</span>
                            <span>{SingleChapter.name_simple}</span>
                        </h6>
                        <h6 className="d-flex justify-content-between">
                            <span>Revelation Place :</span>
                            <span>{SingleChapter.revelation_place}</span>
                        </h6>
                        {/* <h6 className="d-flex justify-content-between">
                            <span>Translated Name :</span>
                            <span>{SingleChapter.translated_name.name}</span>
                        </h6> */}
                        <div className="mt-5">
                            {/* <ReactPlayer url={audioLink(obj.Server,SingleChapter.id)}  controls={true} playing={true} width="100%" height="100%" /> */}
                            <audio controls autoPlay>
                                <source src={audioLink(obj.Server,SingleChapter.id)} type="audio/mpeg"/>
                                Your browser does not support the audio element.
                            </audio>
                        </div>
                        
                    </div>
                </>
                : null                
            })
            :
            <>data not found</>
        }

    </div>
    </>
}   
export default PlayInfo
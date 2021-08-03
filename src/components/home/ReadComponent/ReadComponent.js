
const ReadComponent = ({ReadChapter, ReadChapterName})=>{
    return <>
    <div className="m-5">
        <h4 className="text-center font-weight-bold">{ReadChapterName ? ReadChapterName:"Select the Chapter"}</h4>
        <hr/>
        {
            ReadChapter.map(obj=>{
                return <div class="card text-dark mb-3">
                    <div class="card-body">                
                    <h6 class="card-subtitle mb-2 text-muted">Ayah: {obj.aya}</h6>
                    <hr/>
                    <h5 class="card-title text-right" style={{fontSize:"40px"}}>{obj.arabic_text}</h5>
                    <hr/>
                    <p class="card-text">{obj.translation}</p>
                    <p class="card-text">{obj.footnotes}</p>
                    </div>
                </div>;
            })
        }
        {/*{
            (ReadChapter && ReadChapter>0) ? 
                ReadChapter.map(obj=>{
                    return <div class="card text-dark">
                    <div class="card-body">                
                     <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                     <hr/>
                     <h5 class="card-title text-right">Card title</h5>
                     <hr/>
                     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>;
                })
            
            : 
            <>Data Fetching</>
        } */}
        
    </div>    
    </>;
}

export default ReadComponent;
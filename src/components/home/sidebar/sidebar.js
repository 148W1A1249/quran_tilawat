import ToggleButton from './togglebutton/togglebutton';

const Sidebar = ({openMenu,RecitersData,ChapterData,ReciterId,setReciterId,ChapterId,setChapterId,ToggleValue,ToggleClick})=>{
    
    return<>    
    <h4 className="text-center font-weight-bold mt-5">Select {ToggleValue ? "":"Reciter &"} Chapter</h4>
    <hr className="ml-3 mr-3" />
    <div className="sidebarMenu pl-5 pr-5">
       
    <div className="text-uppercase text-right h3 d-lg-none d-xl-none" onClick={openMenu}>X</div>
        <div className="row">
            <div className="col-12">
                <label className="font-weight-bold h6">Chapter: </label>
                <select className="form-control" name="ChapterId" value={ChapterId} onChange={((e)=>setChapterId(e.target.value))}>
                    <option value="">--Select Chapter--</option>
                    {
                        (ChapterData && ChapterData.length >0) ? ChapterData.map((obj)=>{return <option className="text-right" value={obj.id} key={obj.id}>&ensp;{obj.name_simple} ({obj.name_arabic}) </option>}) : <option>Data not feteched</option>
                    }
                </select>
            </div>
            <div className={`col-12 mt-2 ${ToggleValue ? "BlockReciter" : "DisplayReciter"}`}>
                <label className="font-weight-bold h6">Reciter: </label>
                <select className="form-control" name="ReciterId" value={ReciterId} onChange={((e)=>setReciterId(e.target.value))}>
                <option value="">--Select Reciter--</option>
                    {
                        (RecitersData && RecitersData.length >0) ? RecitersData.map((obj)=>{return <option value={obj.id} key={obj.id}>{obj.name}</option>}) : <option>Data not feteched</option>
                    }
                </select>
            </div>            
            <div  className="col-12 mt-4 ">
                <ToggleButton ToggleValue={ToggleValue} ToggleClick={ToggleClick}/>
            </div>
           
        </div>
    </div>
    </>
}


export default Sidebar;
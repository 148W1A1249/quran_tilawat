import './home.css';
import Sidebar from './sidebar/sidebar';
import PlayInfo from './playInfo/playInfo';
import ReadComponent from './ReadComponent/ReadComponent';
import SmallDevice from './SmallDevice/smallDevice';
import { useEffect, useState } from 'react';
import axios from 'axios';
const Home = ()=>{
    const [show,setShow] = useState(false);
    const [Reciters,setReciters] = useState([]);
    const [Chapter,setChapter] = useState([]);
    const [ReciterId,setReciterId] = useState();
    const [ChapterId,setChapterId] = useState();
    const [ToggleValue,SetToggleValue]= useState(false);
    const [ReadChapter,setReadChapter] = useState([]);
    const [ReadChapterName,setReadChapterName] = useState();
    const openMenu = ()=>{
        setShow(value => !value);
        if(show){ 
            document.querySelector("#sidebarOpen").style.display = "block"; 
        }else{
            document.querySelector("#sidebarOpen").style.display = "none"; 
        }
    }
    useEffect(()=>{
        async function fetchRecitersData(){
            const {data:{reciters}} = await axios.get('https://mp3quran.net/api/_english.php');
            setReciters(reciters);
        }
        async function fetchChapterData(){            
            const {data:{chapters}}= await axios.get('https://api.quran.com/api/v4/chapters');
            setChapter(chapters);
        }
        fetchRecitersData();    
        fetchChapterData(); 
    },[]);

    const ToggleClick = ()=>{
        SetToggleValue(value => !value);
    }
    useEffect(()=>{
        async function fetchChapterReadData(){            
            const {data:{result}}= await axios.get(`https://quranenc.com/api/translation/sura/english_saheeh/${ChapterId}`);
            setReadChapter(result);
            const ChapterName = `( ${Chapter[ChapterId-1].name_arabic} ) ${Chapter[ChapterId-1].name_complex}`;
            setReadChapterName(ChapterName);            
        }  
        fetchChapterReadData(); 
    },[ChapterId]);

    return<>
    <div className="homeContainer">
        <div className="sidebarShow" id="sidebarOpen">
            <Sidebar openMenu={openMenu} RecitersData={Reciters} ChapterData={Chapter} 
                ReciterId={ReciterId} setReciterId={setReciterId}
                ChapterId={ChapterId} setChapterId={setChapterId}
                ToggleValue={ToggleValue} ToggleClick={ToggleClick}
            />
        </div>
        <div className="d-lg-none d-xl-none">
            <SmallDevice data={openMenu} />
        </div>
        <div className="playBackShow ">
            {
                ToggleValue ? <>
                <ReadComponent ReadChapter={ReadChapter} ReadChapterName={ReadChapterName}/>
                </>
                :
                <>                        
                    <PlayInfo RecitersData={Reciters} ChapterData={Chapter}
                    ReciterId={ReciterId} ChapterId={ChapterId}
                    />
                </>
            }
        </div>        
    </div>
    </>
}


export default Home;
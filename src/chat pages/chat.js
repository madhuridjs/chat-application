import React, {useState, useEffect} from 'react';
import '../App.css';
const Chat = ({chatTypes}) => {
    const[search, setSearch] = useState("");
    console.log(chatTypes);

    const handleSearch = (event) => {
        setSearch(event.target.value);
    }
    useEffect(() => {
        const sorted = chatTypes.sort((a, b) => {
            return a.lastmsgtime - b.lastmsgtime;
        })
        console.log(sorted);
    },[]) 

    setTimeout(function(){
        window.location.reload();
    },30000);

    return (
        <div>
            <input 
                className= 'input' 
                type= 'text' 
                placeholder= 'Search...'
                onChange= {handleSearch}
            /> 
            <div className= 'chat'>
                {chatTypes.filter((type) => {
                    if (search === ""){
                        return type
                    }else if(type.title.toLowerCase().includes(search.toLowerCase())){
                        return type
                    }
                }).map((chatType) => {
                    const {id, title, msg, img, lastmsgtime} = chatType;
                    return(
                        
                        <div className="chat_contact">
                            <div key= {id} >
                                <img className= 'image_icon' src= {img} />
                            </div>
                            <div className='chat_message'>  
                                <h3 className= 'chat_title'>{title}</h3>
                                <p>{msg}</p>  
                            </div>
                            <div className= 'chat_msg'>
                                <p className= 'chat_msgtime'>{`${lastmsgtime} mins`}</p>
                            </div>
                        </div>   
                    )
                })}
            </div>
        </div>
        
    )
}
export default Chat;

    // function refresh() {
    //     window.location.reload(false);
    // }

    //window.setInterval(refresh(), 30000);
    // const [time, setTime] = useState(Date.now());
    // useEffect(() => {
    // const interval = setInterval(() => setTime(Date.now()), 3000);
    // return () => {
    //     if(interval){
    //         clearInterval(interval);
    //     }
        
    // };
    // }, []); //time

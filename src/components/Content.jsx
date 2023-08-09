import React, {useState, useRef} from 'react'

import { lofiArray } from '../constant';

const Content = () => {
    const audioRefs = useRef([]);
    const [volumes, setVolumes] = useState(Array(lofiArray.length).fill(0.5));    

    const togglePlay = (index) => {
        const audio = audioRefs.current[index];
        if(audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    }

    const changeVolume = (index, volume) => {
        const audio = audioRefs.current[index];
        audio.volume = volume;
        const newVolume = {...volumes};
        newVolume[index] = volume;
        setVolumes(newVolume);
    }

    const handleVolumeClick = (e) => {
        e.stopPropagation();
    }

    return (
        <div className='flex flex-wrap justify-center items-center'>
            {lofiArray?.map((item, index) => (
                <div
                    key={item.id}
                    title={item.title}
                    onClick={() => togglePlay(index)}
                    className={`m-10 flex flex-col justify-center items-center w-[300px] h-[300px]`}
                >
                    <img 
                        src={item.pic}
                        alt="images"
                        className='w-full h-full object-cover rounded-2xl cursor-pointer'
                    />

                    <audio 
                        ref={(ref) => (audioRefs.current[index] = ref)}
                        src={ item.music }
                        loop
                        onPlay={() => console.log(`Audio ${index} played`)}
                        onPause={() => console.log(`Audio ${index} paused`)}
                        onEnded={() => console.log(`Audio ${index} ended`)}
                    />
                   
                    <input 
                        type='range'
                        min="0"
                        max="1"
                        step="0.01"
                        className='absolute'
                        value={volumes[index]}
                        onChange={(e) => changeVolume(index, e.target.value)}
                        onClick={handleVolumeClick}
                    />
                </div>
            ))}
        </div>
    );
}

export default Content
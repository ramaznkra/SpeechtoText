import React,{ useState} from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import 'bootstrap/dist/css/bootstrap.min.css';

//---------------------------------- Sesli Komut ---------------------------------------//

const App = () => {
  const {
    listening
  } = useSpeechRecognition();
 
    const commands = [{
      command: 'vergi*',
      callback: (site) => {
        window.open('http://e-belediye.mezitli.bel.tr/'+site)
      }
    },
    {
      command: 'Mezitli Belediyesi*',
      callback: (site) => {
        window.open('https://mezitli.bel.tr/'+site)
      }
    }, 
    {
      command: 'Hesap Numarası*',
      callback: (site) => {
        window.open('https://mezitli.bel.tr/hesap-numaralarimiz/'+site)
      }
    },
    ]
      const { transcript, resetTranscript } = useSpeechRecognition({commands});
      const [start,setStart] = useState(true);
      const startFunc = (start) =>{
        if(start){
          SpeechRecognition.startListening
          ({continuous: true, language: 'tr-TR'})
         }else{
           SpeechRecognition.stopListening()
         }

              }
 // -------------------------------- Sesli Komut --------------------------------------- //

  return (
    <div className='d-flex justify-content-center'>
    <div className=''>
      <p className='text-center mt-5'>Mikrofon: {listening ? 'açık' : 'kapalı'}</p>
      <textarea style={{width:'500px', height:'100px'}} value={transcript}></textarea>
      <div className='d-flex justify-content-center'>

      <button className='btn btn-primary me-1' onClick={(e) => {
        if (!start){
          setStart(true)
          startFunc(start)
        } else {
          setStart(false)
          startFunc(start)
        } } }
        >Başla/Bitir</button>
      <button className='btn btn-primary me-1' onClick={resetTranscript}>Reset</button>
      </div>
    </div>
    </div>
    
  );
};
export default App;

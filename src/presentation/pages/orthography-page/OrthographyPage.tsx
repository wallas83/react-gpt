import { GptMessages } from "../../components/chatBubbles/GptMessages"
import { MyMessage } from '../../components/chatBubbles/MyMessage';
import { TypingLoaders } from "../../components/loaders/TypingLoaders";


export const OrthographyPage = () => {
  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div  className="grid grid-cols-12 gap-y-2">
            {/* {bienvenida} */}
              
              <GptMessages text="Hola, puedes escribir tu texto en español"/>
              <MyMessage text= {"Hola perros"}/>
              
             <TypingLoaders className ="fade-in" />
            
        </div>  
      </div>
    </div>
  )
}

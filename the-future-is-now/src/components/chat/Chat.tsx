'use client';
import { useChat } from 'ai/react';
import styles from './Chat.module.sass'
 
export const Chat = (props: { agent: string }) => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    initialMessages:[
      {
        id: '1',
        role: 'system',
        content: props.agent
      }
    ]
  });

  return (
    <main className={ styles.Chat }>
      <h1 className={ styles.Chat__title }>¿En qué puedo ayudarte?</h1>

      <form onSubmit={ handleSubmit } className={ styles.Chat__form }>
        <input 
          type="text" 
          value={ input }
          onChange={ handleInputChange }
          placeholder='¿Qué te gustaría comprar?'
          className={ styles.Chat__input }
        />

        <button className={ styles.Chat__button }>Enviar</button>
      </form>

      <section className={ styles.Chat__messages }>
        {
          messages
            .filter(m => m.role !== 'system')
            .map(m => {
              return (
                <span key={ m.id } className={ styles.Chat__message }>
                  <div className={ styles.Chat__message__icon }>
                    {
                      m.role === 'assistant' ? "🤖" : "😊"
                    }
                  </div>

                  <div>
                    {
                      m.content
                    }
                  </div>
                </span>
              )
            })
        }
      </section>
    </main>
    // <div>
    //   {
    //     messages
    //       .filter(m => m.role !== 'system')
    //       .map(m => (
    //         <div key={ m.id }>
    //             { m.role === 'user' ? 'User: ' : 'AI: ' }
                
    //             { m.content }
    //         </div>
    //     ))
    //   }
 
    //   <form onSubmit={ handleSubmit }>
    //     <input
    //         value={ input }
    //         placeholder='En qué puedo ayudarte?'
    //         onChange={ handleInputChange }
    //     />
    //   </form>
    // </div>
  );
}
'use client';
import { useChat } from 'ai/react';
 
export const Chat = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div>
      {
        messages.map(m => (
            <div key={ m.id }>
                { m.role === 'user' ? 'User: ' : 'AI: ' }
                
                { m.content }
            </div>
        ))
      }
 
      <form onSubmit={ handleSubmit }>
        <input
            value={ input }
            placeholder='En qué puedo ayudarte?'
            onChange={ handleInputChange }
        />
      </form>
    </div>
  );
}
import React, { useState, useRef, useEffect } from 'react'
import './ChatWidget.css'

// const SUPPORT_WHATSAPP_NUMBER = '03001081100'

// { SUPPORT_WHATSAPP_NUMBER : (string) optional phone to open WhatsApp when user chooses that route. }

// const WHATSAPP_MESSAGE = 'Hi, I need help with an order.'

// { WHATSAPP_MESSAGE : default message when opening WhatsApp. }

function ChatWidget() {
    const [open, setOpen] = useState(false)
    // open (boolean) — whether the chat panel is open.

    const [messages, setMessages] = useState([])
    // messages (array) — list of chat message objects { id, sender, text }.

    const [text, setText] = useState('')
    // text (string) — current input content.

    const [isLoading, setIsLoading] = useState(false)
    // isLoading (boolean) — shows typing indicator while waiting for bot reply.

    const messagesEndRef = useRef(null)
    // messagesEndRef (ref) — used to scroll chat to bottom.

    useEffect(() => {
        if (open) scrollToBottom()
    }, [messages, open])
    // useEffect(() => { if (open) scrollToBottom() }, [messages, open]) — whenever messages or open change, if panel is open it scrolls to the latest message.

    function scrollToBottom() {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
        // messagesEndRef → ref pointing to empty div at bottom
        // .current → actual DOM element
        // ?. → optional chaining (avoid crash if null)
        // scrollIntoView() → scrolls to that element
        // smooth → smooth animation
    }

    function toggleOpen() {
        setOpen((v) => !v)
        // open → boolean state (true/false)
        // setOpen((v) => !v) → toggle value
    }

    function sendMessage(e) {
        e?.preventDefault()
        const trimmed = text.trim()
        if (!trimmed) return
        // we use return to exit early from the function if the message is empty after trimming whitespace. This prevents sending empty messages.
        //  Prevents:
        // ❌ empty or spaces-only messages

        const msg = { id: Date.now(), sender: 'user', text: trimmed, timestamp: new Date() }
        setMessages((m) => [...m, msg])
        setText('')
        setIsLoading(true)

        // Demo fallback: simple automated reply after a delay
        setTimeout(() => {
            setIsLoading(false)
            const reply = {
                id: Date.now() + 1,
                sender: 'agent',
                text: "Thanks — we've received your message. A team member will reply shortly.",
                timestamp: new Date()
            }
            setMessages((m) => [...m, reply])
        }, 2000)
    }

    function handleQuickAction(message) {
        setText(message)
        setTimeout(() => {
            const msg = { id: Date.now(), sender: 'user', text: message, timestamp: new Date() }
            setMessages((m) => [...m, msg])
            setText('')
            setTimeout(() => {
                const reply = {
                    id: Date.now() + 1,
                    sender: 'agent',
                    text: "Thanks — we've received your message. A team member will reply shortly.",
                    timestamp: new Date()
                }
                setMessages((m) => [...m, reply])
            }, 2000)
        }, 100)
    }

    //   function openWhatsApp() {
    //     if (!SUPPORT_WHATSAPP_NUMBER) {
    //       // if not configured, just open WhatsApp web root
    //       window.open(`https://wa.me/?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`, '_blank')
    //       return
    //     }
    //     const link = `https://wa.me/${SUPPORT_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    //       WHATSAPP_MESSAGE
    //     )}`
    //     window.open(link, '_blank')
    //   }

    return (
        <div className={`chat-root ${open ? 'open' : ''}`}>
            <div className='chat-fab' onClick={toggleOpen} aria-label='Open chat'>
                <svg viewBox='0 0 24 24' width='22' height='22' fill='white' aria-hidden>
                    <path d='M20.52 3.48A11.87 11.87 0 0 0 12 0C5.37 0 .01 4.97.01 11.11c0 1.95.51 3.78 1.46 5.42L0 24l7.79-2.03A11.98 11.98 0 0 0 12 22.22c6.63 0 12-4.97 12-11.11 0-2.98-1.16-5.71-3.48-7.63zM12 20.1c-1.5 0-2.98-.4-4.28-1.16l-.31-.19-4.63 1.2 1.17-4.26-.2-.34A8.8 8.8 0 0 1 3.2 11.1 8.88 8.88 0 0 1 12 2.22c4.9 0 8.88 3.69 8.88 8.88S16.9 20.1 12 20.1z' />
                </svg>
            </div>

            <div className='chat-panel' role='dialog' aria-label='Support chat'>
                <div className='chat-header'>
                    <div className='phone-dot' />
                    <div className='chat-title'>Support</div>
                    <button className='chat-close' onClick={toggleOpen} aria-label='Close'>✕</button>
                </div>

                <div className='chat-body'>
                    {messages.length === 0 && (
                        <div className='chat-empty'>
                            <div className='chat-empty-title'>Start the conversation — we're here to help.</div>
                            <div className='chat-quick-actions'>
                                <button className='quick-action-btn' onClick={() => handleQuickAction('I have a question about my order')} type='button'>Order Status</button>
                                <button className='quick-action-btn' onClick={() => handleQuickAction('How do I track my shipment?')} type='button'>Track Shipment</button>
                                <button className='quick-action-btn' onClick={() => handleQuickAction('What is your return policy?')} type='button'>Return Policy</button>
                            </div>
                        </div>
                    )}
                    <div className='chat-messages'>
                        {messages.map((m) => (
                            <div key={m.id} className={`chat-msg ${m.sender === 'agent' ? 'agent' : 'user'}`}>
                                <div className='chat-text'>{m.text}</div>
                                <div className='chat-timestamp'>{new Date(m.timestamp).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className='chat-msg agent'>
                                <div className='chat-typing'>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                </div>

                <form className='chat-input-wrap' onSubmit={sendMessage}>
                    <textarea
                        // textarea has a default behavior of allowing new lines when pressing Enter. To change this, we listen for the onKeyDown event and check if the Enter key is pressed without the Shift key. If so, we prevent the default behavior (which would insert a new line) and instead call our sendMessage function to submit the message.

                        className='chat-input'
                        placeholder='Type a message...'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                                e.preventDefault()
                                sendMessage(e)
                            }
                        }}
                        rows='2'
                    />
                    <button className='chat-send' type='submit' disabled={!text.trim()}>Send</button>
                </form>

                {/* Why use form?
                 Because HTML automatically supports:
                 ✅ Enter key submits
                 ✅ button type="submit" works
                 ✅ accessibility */}

                {/* <div className='chat-footer'>
          <button className='chat-whatsapp' onClick={openWhatsApp} type='button'>Connect via WhatsApp</button>
        </div> */}
            </div>
        </div>
    )
}
export default ChatWidget

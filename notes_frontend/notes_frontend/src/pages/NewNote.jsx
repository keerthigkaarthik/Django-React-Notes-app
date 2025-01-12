import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import getCsrfToken from '../utils/getCsrfToken'

const NewNote = () => {
    const [note, setNote] = useState({
        title: '',
        body: ''
    })
    const navigate = useNavigate()

    const createNote = async () => {
        const defaultTitleNote = {
            ...note,
        }
        if (!defaultTitleNote.title) {
            defaultTitleNote.title = "No title"
        }
        await fetch(`/api/newnote`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCsrfToken()
            },
            body: JSON.stringify(defaultTitleNote)
        })
    }

    const handleBack = () => {
        if (note.body.trim() || note.title.trim()) {
            createNote()
        }
        navigate('/')
    }

    return (
        <div className='note'>
            <div className='note-header'>
                <h3 onClick={() => handleBack()}>&larr;</h3>
                <Link to={'/'}><button onClick={() => createNote()}>Done</button></Link>
            </div>
            <textarea 
                className='title-textarea' 
                onChange={(e) => setNote({...note, title: e.target.value})} 
                value={note.title} 
                placeholder="Untitled Note"
                maxLength={30}
            ></textarea>
            <textarea 
                onChange={(e) => setNote({...note, body: e.target.value})} 
                value={note.body}
                placeholder="Start writing here..."
            ></textarea>
        </div>
    )
}

export default NewNote
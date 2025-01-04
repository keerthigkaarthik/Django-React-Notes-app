import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom' 
import getCsrfToken from '../utils/getCsrfToken'

const NewNote = () => {  
    const [note, setNote] = useState("")
    const navigate = useNavigate()

    const createNote = async () => {
        await fetch(`/api/newnote`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCsrfToken()
            },
            body: JSON.stringify(note)
        })
    }

    const handleBack = () => {
        if (note.trim()) {
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
            <textarea onChange={(e) => setNote(e.target.value)} value={note}></textarea>
        </div>
    )
}

export default NewNote
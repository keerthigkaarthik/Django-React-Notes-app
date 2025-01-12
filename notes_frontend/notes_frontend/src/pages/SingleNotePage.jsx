import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import getCsrfToken from '../utils/getCsrfToken'

const SingleNotePage = () => {
    const { id } = useParams()
    const [note, setNote] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        getNote()
    }, [id])

    const getNote = async () => {
        let response = await fetch(`/api/notes/${id}`)
        let data = await response.json()
        setNote(data)
    }

    const updateNote = async () => {
        const defaultTitleNote = {
            ...note,
        }

        if (!defaultTitleNote.title) {
            defaultTitleNote.title = "No title"
        }

        await fetch(`/api/notes/${id}/update`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCsrfToken()
            },
            body: JSON.stringify(defaultTitleNote)
        })
    }

    const deleteNote = async () => {
        await fetch(`/api/notes/${id}/delete`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCsrfToken()
            },
        })
        navigate('/')
    }

    const handleBack = () => {
        if (!note.body?.trim() && !note.title?.trim()) {
            deleteNote()
        } else {
            updateNote()
        }
        navigate('/')
    }

    return (
        <div className='note'>
            <div className='note-header'>
                <h3 onClick={() => handleBack()}>&larr;</h3>
                <button onClick={() => deleteNote()}>Delete</button>
            </div>
            <textarea 
                className='title-textarea' 
                onChange={(e) => setNote({...note, title: e.target.value})} 
                value={note?.title || ''} 
                placeholder="Untitled Note"
                maxLength={30}
            ></textarea>
            <textarea 
                onChange={(e) => setNote({...note, body: e.target.value})} 
                value={note?.body || ''} 
                placeholder="Start writing here..."
            ></textarea>
        </div>
    )
}

export default SingleNotePage
import React, {useState, useEffect} from 'react'
import IndivNote from '../components/IndivNote'
import NewNoteButton from '../components/NewNoteButton'

const AllNotes = () => {
    let [notes, setNotes] = useState([])

    useEffect(() => {
        getNotes()
    }, [])

    let getNotes = async () => {
        let response = await fetch('/api/notes/', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
            }
        })
        let data = await response.json()
        setNotes(data)
    }

    return (
        <div className='notes'>

            <div className='notes-header'>
                <h2 className='notes-title'>&#9782;Notes</h2>
                <p className='notes-count'>{notes.length}</p>
            </div>

            <div className='notes-list'>
                {notes.map((note, index) => (
                    <IndivNote note={note} key={index}/>
                ))}
            </div>
            <NewNoteButton />
        </div>
    )
}

export default AllNotes
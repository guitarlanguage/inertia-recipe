import React, {useState} from 'react';
import { InertiaLink } from '@inertiajs/inertia-react'

const CreateRecipe = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  
  const submit = () => {
    Inertia.post('/recipes', {name, description});
  }

  return (
    <>  
      <h1>Create New Recipe</h1>

      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
        <input value={name} onChange={e => setName(e.currentTarget.value)} className="form-control" id="exampleFormControlInput1" placeholder="tacos" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
        <textarea value={description} onChange={e => setDescription(e.currentTarget.value)}  className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <button type="button" className="btn btn-primary" onClick={submit}>Create New Recipe!</button>
    </>
  )
};

export default CreateRecipe;
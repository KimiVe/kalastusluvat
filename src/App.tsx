import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Viesti lähetetty: ${formData.message}`);
    setFormData({ name: '', email: '', message: '' }); // Reset form
  };

  return (
    <>
      <h1>Kalastuslisenssit</h1>
      <div className="card">
        <h2>Kalastuslisenssin vaihtoehdot</h2>
        <ul>
          <li>Vuosi lisenssi</li>
          <li>Kuukausi lisenssi</li>
          <li>Päivä lisenssi</li>
        </ul>
        <button onClick={() => setCount(count + 1)}>
          Laskuri: {count}
        </button>
      </div>
      
      <section>
        <h2>Ota yhteyttä</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nimi:
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleInputChange} 
              required 
            />
          </label>
          <label>
            Sähköposti:
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleInputChange} 
              required 
            />
          </label>
          <label>
            Viesti:
            <textarea 
              name="message" 
              value={formData.message} 
              onChange={handleInputChange} 
              required 
            />
          </label>
          <button type="submit">Lähetä</button>
        </form>
      </section>

      <p className="read-the-docs">
        Testi
      </p>
    </>
  );
}

export default App;

import React, { useState } from 'react';
import axios from 'axios';

const MyForm = () => {
  const [text, setText] = useState('');
  const [number, setNumber] = useState('');
  const [desc, setDesc] = useState('');
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.length === 0 || number.length === 0 || desc.length === 0) {
      setErrorMsg('Fill the inputs');
      return;
    } else {
      setErrorMsg('Your informations are sucesfully saved!');
    }

    const token = '6468082632:AAHjNdMTUZX1n6CF6n1D-UShBWi2Msbmc0Y';
    const chat_id = '-4228537280';
    const my_text = `Name: ${text} Number: ${number} Description: ${desc}`;

    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(my_text)}`;

    axios.get(url)
      .then((response) => {
        console.log('Message sent', response.data);
      })
      .catch((error) => {
        console.error('Error sending message', error);
      });

    setText('');
    setNumber('');
    setDesc('');
  };

  return (
    <form id="form" onSubmit={handleSubmit} className='grid gap-4 px-4'>
      <h1 className='text-2xl font-medium text-white text-center'>Contact with me</h1>
      <input
        type="text"
        id="text"
        value={text}
        placeholder='Your Name Here...'
        onChange={(e) => setText(e.target.value)}
        className='bg-[#1b2640] rounded-md border-2 border-[#44506e] h-10 pl-4'
      />
      <input
        type="text"
        id="text"
        value={number}
        placeholder='Your Number Here...'
        onChange={(e) => setNumber(e.target.value)}
        className='bg-[#1b2640] rounded-md border-2 border-[#44506e] h-10 pl-4'
      />
      <textarea
        id="message"
        value={desc}
        placeholder='Description Here...'
        onChange={(e) => setDesc(e.target.value)}
        className='bg-[#1b2640] rounded-md border-2 border-[#44506e] pl-4 pt-2'
      />
      <p className='text-center text-[#ff5e52]'>{errorMsg}</p>
      <div className='flex justify-center items-center'>
        <button type="submit" id="sign" className='bg-[#04cfad] transition-all px-8 py-1 rounded-lg shadow hover:shadow-[#04cfad]'>Submit</button>
      </div>
    </form>
  );
};

export default MyForm;

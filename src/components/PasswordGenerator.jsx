import React, {useState} from 'react';

const PasswordGenerator = () => {

    const[password, setPassword]=useState('');
    const[number, setNumber]=useState('');
    const[uppercase, setUppercase]=useState(false);
    const[lowercase, setLowercase]=useState(false);
    const[numbers, setNumbers]=useState(false);
    const[symbols, setSymbols]=useState(false);


    const handleGenerate = (e) => {
        e.preventDefault();
        if(number <= 0){
            alert('Debe ser un numero mayor a 0')
            returns
        }

        let characters= ''
        if(uppercase){
            characters='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
            console.log(characters);
        }else{
            characters=characters
        }
        if(lowercase){
            characters=characters+'abcdefghijklmnopqrstuvwxyz'
            console.log(characters);
        }else{
            characters=characters
        }
        if(numbers){
            characters=characters+'0123456789'
            console.log(characters);
        }else{
            characters=characters
        }
        if(symbols){
            characters=characters+'?¿+*_-)(/&%$#![]'
            console.log(characters);
        }else{
            characters=characters
        }
        // const num = 12
        characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789?¿+*_-';
        let result1= ' ';
        const charactersLength = characters.length;
        for ( let i = 0; i < number; i++ ) {
            result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
    
        setPassword(result1);
        setNumber('');
    }

    return (
        <div
            className=' bg-orange-500 p-5 rounded-lg text-white'
        >
            <p className=' text-center my-5'>Password Generator</p>
            <p className=' text-center font-bold my-2 h-10'>{password}</p>
            <div>
                <div className=' flex justify-center w-full'>
                    <form 
                        className='form'
                        onSubmit={handleGenerate}>
                        <div className='flex justify-between w-72'>
                            <p className=' font-light my-1'>Number:</p>
                            <input 
                                type="number" 
                                className=' bg-red-400 rounded border my-1'
                                onChange={e => setNumber(parseInt(e.target.value))}
                                value={number}
                            />
                        </div>
                        <div className='flex justify-between w-72'>
                            <p className=' font-light my-1'>Include Uppercase Letters:</p>
                            <input 
                                type="checkbox" 
                                className=' bg-red-400 rounded border my-1'
                                onChange={e => setUppercase(!uppercase)}
                                value={uppercase}
                            />
                        </div>
                        <div className='flex justify-between w-72'>
                            <p className=' font-light my-1'>Include Lowercase Letters:</p>
                            <input 
                                type="checkbox"  
                                className=' bg-red-400 rounded border my-1'
                                onChange={e => setLowercase(!lowercase)}
                                value={lowercase}
                            />
                        </div>
                        <div className='flex justify-between w-72'>
                            <p className=' font-light my-1'>Include Numbers:</p>
                            <input 
                                type="checkbox"  
                                className=' bg-red-400 rounded border my-1'
                                onChange={e => setNumbers(!numbers)}
                                value={numbers}
                            />
                        </div>
                        <div className='flex justify-between w-72'>
                            <p className=' font-light my-1'>Include Symbols:</p>
                            <input 
                                type="checkbox" 
                                className=' bg-red-400 rounded border my-1'
                                onChange={e => setSymbols(!symbols)}
                                value={symbols}
                            />
                        </div>

                        <div className=' flex justify-center'>
                            <button
                                type='onSubmit'
                                className=' bg-slate-700 text-white p-3 rounded-md'
                            >Generate</button>
                        </div>
                    </form>
                    
                </div>
            </div>
            
        </div>
  )
}

export default PasswordGenerator
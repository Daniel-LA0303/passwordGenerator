import React, {useState} from 'react';
import { motion } from 'framer-motion';
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

        let result1= ' ';
        const charactersLength = characters.length;
        for ( let i = 0; i < number; i++ ) {
            result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
    
        setPassword(result1);
        setNumber('');
    }

    return (
        <motion.div
            className=' bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 focus:ring-4 focus:outline-none focus:ring-lime-200  p-5 rounded-lg text-gray-900 text-2xl font-light'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
        >
            <p className=' text-center my-5'>Password Generator</p>
            <p className=' text-center my-2 h-10 text-xl text-gray-900 font-light'>{password}</p>
            <div>
                <div className=' flex justify-center w-full'>
                    <form 
                        className='form'
                        onSubmit={handleGenerate}
                    >
                        <div className='mb-5'>
                            <label className="block mb-2 text-xl text-gray-900 font-light">Number:</label>
                            <input 
                                type="number" 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="" 
                                required 
                                onChange={e => setNumber(parseInt(e.target.value))}
                                value={number}
                            />
                        </div>
                        <ul className="w-full mb-5 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                <div className="flex items-center pl-3">
                                    <input 
                                        type="checkbox" 
                                        onChange={() => setUppercase(!uppercase)}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" 
                                    />
                                    <label className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Include Uppercase Letters</label>
                                </div>
                            </li>
                            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                <div className="flex items-center pl-3">
                                    <input 
                                        type="checkbox"  
                                        onChange={() => setLowercase(!lowercase)}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" 
                                    />
                                    <label className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Include Lowercase Letters</label>
                                </div>
                            </li>
                            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                <div className="flex items-center pl-3">
                                    <input 
                                        type="checkbox" 
                                        onChange={() => setNumbers(!numbers)}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" 
                                    />
                                    <label className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Include Numbers</label>
                                </div>
                            </li>
                            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                <div className="flex items-center pl-3">
                                    <input 
                                        type="checkbox" 
                                        onChange={() => setSymbols(!symbols)}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" 
                                    />
                                    <label className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Include Symbols</label>
                                </div>
                            </li>
                        </ul>
                        <div className=' flex justify-center'>
                        <button 
                            type='submit'
                            className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                Generete
                            </span>
                        </button>
                        </div>
                    </form>
                    
                </div>
            </div>
            
        </motion.div>
  )
}

export default PasswordGenerator
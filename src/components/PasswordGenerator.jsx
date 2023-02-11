import React, {useState} from 'react';
import { motion } from 'framer-motion';

const animations = {
    initial: {scale: 0},
    animate: {scale: 1},
    exit: {scale: 0}
}

const PasswordGenerator = () => {

    const[password, setPassword]=useState('');
    const[number, setNumber]=useState('');
    const[uppercase, setUppercase]=useState(false);
    const[lowercase, setLowercase]=useState(false);
    const[numbers, setNumbers]=useState(false);
    const[symbols, setSymbols]=useState(false);


    const handleGenerate = (e) => {
        e.preventDefault();
        if(number <= 0 || number > 16){
            alert('The number must be in the range of 0 -16')
            returns
        }


        let characters= ''
        if(uppercase){
            characters='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        }else{
            characters=characters
        }
        if(lowercase){
            characters=characters+'abcdefghijklmnopqrstuvwxyz'
        }else{
            characters=characters
        }
        if(numbers){
            characters=characters+'0123456789'
        }else{
            characters=characters
        }
        if(symbols){
            characters=characters+'?¿+*_-)(/&%$#![]'
        }else{
            characters=characters
        }
        if(!uppercase && !lowercase && !numbers && !symbols){
            characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789?¿+*_-)(/&%$#![]'
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
            className=' bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 focus:ring-4 focus:outline-none focus:ring-lime-200  p-2 rounded-lg text-gray-900 text-2xl font-light'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
        >
            <p className='text-center my-1'>Password Generator</p>
            {password ? 
                <motion.p 
                    className=' text-center my-2 h-10 text-xl text-gray-900 font-light'
                    {...animations} 
                >{password}</motion.p>
                : null
            }
            
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
                                onChange={e => setNumber(parseInt(e.target.value))}
                                value={number}
                            />
                        </div>
                        <ul className="w-full mb-5 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            <li className="w-full border-gray-200 rounded-t-lg dark:border-gray-600">
                                <div className='flex items-center'>
                                    <label className='px-4'>
                                        <input 
                                            type="checkbox"
                                            onChange={() => setUppercase(!uppercase)}
                                        />
                                        <span className="checkbox"></span>
                                    </label>
                                    <div className="flex items-center ">
                                        <label className="w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300">Include Uppercase Letters</label>
                                    </div>
                                </div>
                            </li>
                            <li className="w-full border-gray-200 rounded-t-lg dark:border-gray-600">
                                <div className='flex items-center'>
                                    <label className='px-4'>
                                        <input 
                                            type="checkbox"
                                            onChange={() => setLowercase(!lowercase)}
                                        />
                                        <span className="checkbox"></span>
                                    </label>
                                    <div className="flex items-center ">
                                        <label className="w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300">Include Lowercase Letters</label>
                                    </div>
                                </div>
                            </li>
                            <li className="w-full border-gray-200 rounded-t-lg dark:border-gray-600">
                                <div className='flex items-center'>
                                    <label className='px-4'>
                                        <input 
                                            type="checkbox"
                                            onChange={() => setNumbers(!numbers)}
                                        />
                                        <span className="checkbox"></span>
                                    </label>
                                    <div className="flex items-center ">
                                        <label className="w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300">Include Numberss</label>
                                    </div>
                                </div>
                            </li>
                            <li className="w-full border-gray-200 rounded-t-lg dark:border-gray-600">
                                <div className='flex items-center'>
                                    <label className='px-4'>
                                        <input 
                                            type="checkbox"
                                            onChange={() => setSymbols(!symbols)} 
                                        />
                                        <span className="checkbox"></span>
                                    </label>
                                    <div className="flex items-center ">
                                        <label className="w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300">Include Symbols</label>
                                    </div>
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
                <p className=' text-center text-sm'>Created by Code-LA</p>
            </div>
            
        </motion.div>
  )
}

export default PasswordGenerator
import React from 'react';

const Contacts = () => {
    return (
        <div id='contacts' className='max-w-[640px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#606060] mb-2'>Contacts</h1>
            <form action="https://getform.io/f/jawxwyyb" method='POST' encType='multipart/form-data'>
                <div className='flex flex-col md:flex-row md:justify-between'>
                    <div className='flex flex-col md:w-[48%]'>
                        <label className='uppercase text-sn py-2'>
                            Name
                        </label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='firstname' required />
                    </div>
                    <div  className='flex flex-col md:w-[48%]'>
                        <label className='uppercase text-sn py-2'>
                            Subject
                        </label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='subject' required />
                    </div>
                </div>
                <div className='flex flex-col md:mt-4 md:w-[100%]'>
                    <label className='uppercase text-sn py-2'>
                        Email
                    </label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" name='email' required />
                </div>
                <div className='flex flex-col md:mt-4 md:w-[100%]'>
                    <label className='uppercase text-sn py-2'>
                        Message
                    </label>
                    <textarea className='border-2 rounded-lg p-3 flex border-gray-300' rows={10} name='message'></textarea>
                </div>
                <button className='bg-[#36e0d8] text-gray-100 rounded-md font-medium my-6 w-full mx-auto md:mx-0 py-3'>
                    Send Message
                </button>
            </form>
        </div>
    );
}

export default Contacts;

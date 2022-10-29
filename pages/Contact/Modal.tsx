import React from 'react'

export default function Modal({setOpenModal }:any) {

  return (
    <div>
        <div className="fixed inset-0 z-10 overflow-y-auto text-black">
            <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={() => setOpenModal(false)}
            ></div>
            <div className="flex items-center min-h-screen">
                <div className="relative w-full max-w-lg p-40 xl:p-60 mx-auto bg-zinc-700/40 rounded-md shadow-lg">
                    <div className="sm:flex sm:items-center">
                        <div className="flex items-center justify-center w-12 h-12 mx-auto ">
                         <form>
                          <label className='text-white'>Nom</label>
                          <input type="text" placeholder="Pierre"className='outline-1 xl:w-96'/>
                          <label className='text-white'>Email</label>
                          <input type="text" placeholder='bonjourdev@gamil.com' className='outline-1 xl:w-96 '/>
                          <label className='text-white '>Message</label>
                          <textarea placeholder='Votre message ici...' className='xl:w-96 xl:h-64 resize-none'/>
                          <button type='button' className='bg-indigo-600 rounded py-1 px-4 text-lg hover:bg-indigo-800 text-white mt-4'>Envoyer</button>
                         </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  
);
}

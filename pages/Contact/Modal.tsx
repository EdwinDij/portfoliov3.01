import React, { useState } from 'react'
import Swal from 'sweetalert2'

export default function Modal({setOpenModal }:any) {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')

   function handleOnSubmit(e:any) {
      e.preventDefault()

      const data = {
          name,
          email,
          message
      }

      if (name === '' || email === '' || message === '') {
              Swal.fire({
                  title: 'Error',
                  text: 'Veuillez remplir tous les champs',
                  icon: 'error',
                  confirmButtonText: 'OK'
              })
          
      } else if (email.includes('@') === true && email.includes('.') === true && email.length > 5 && email.length < 100 && data.name !== "" && data.message !== ""){	
           fetch('/api/mail', {
              method: 'POST',
              body: JSON.stringify(data),
          })
          console.log(data)
          Swal.fire({
              title: 'Merci',
              text: 'Votre message a bien été envoyé !',
              icon: 'success',
              confirmButtonText: 'OK'
          })
          setOpenModal(false)
      } else {
          Swal.fire({
              title: 'Oops...',
              text: 'Une erreur est survenue',
              icon: 'error',
              confirmButtonText: 'OK'
          })
      }
  }

  return (
    <div>
        <div className="fixed inset-0 z-20 overflow-y-auto text-black">
            <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={() => setOpenModal(false)}
            ></div>
            <div className="flex items-center min-h-screen">
                <div className="relative w-full max-w-lg p-40 xl:p-60 mx-auto bg-zinc-700/40 rounded-md shadow-lg">
                    <div className="sm:flex sm:items-center">
                        <div className="flex items-center justify-center w-12 h-12 mx-auto ">
                         <form method='post' onSubmit={handleOnSubmit}>
                          <label className='text-white' >Nom</label>
                          <input type="text" placeholder="Pierre"className='outline-1 xl:w-96' name="name"onChange={(e) => setName(e.target.value)}/>
                          <label className='text-white'>Email</label>
                          <input type="text" name="email" placeholder='bonjourdev@gamil.com' className='outline-1 xl:w-96 ' onChange={(e) => setEmail(e.target.value)}/>
                          <label className='text-white '>Message</label>
                          <textarea name="message" placeholder='Votre message ici...' className='xl:w-96 xl:h-64 resize-none' onChange={(e) => setMessage(e.target.value)}/>
                          <button type='submit' className='bg-indigo-600 rounded py-1 px-4 text-lg hover:bg-indigo-800 text-white mt-4'>Envoyer</button>
                         </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  
);
}

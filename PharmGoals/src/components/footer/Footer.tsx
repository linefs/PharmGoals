
import { FacebookLogo, InstagramLogo} from '@phosphor-icons/react'

function Footer() {
 
  

  return (
    <>
        <div className="flex justify-center bg-slate-500 text-white">
          <div className="container flex-auto flex: 1 1 auto; items-center py-4">
            <p className='text-xl font-bold'>PharmGoals | Copyright: </p>
            <p className='text-lg'>Acesse nossas redes sociais</p>
            <div className='flex gap-1'>
              <InstagramLogo size={30} weight='bold' />
              <FacebookLogo size={30} weight='bold' />
            </div>
          </div>
        </div>
      </>
  )
}

export default Footer
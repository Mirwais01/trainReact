import Link from 'next/link';


function navigation(){
    return (
        <nav className="flex bg-orange-500">
            <div className='container mx-auto'>
                <div className='sm:flex justify-around p-4'>
                    <a href="\" className='text-xl text-sky-950'>Reciipe App</a>

                    <ul className='sm:self-center text-xl border-t sm:border-none'>
                        <li className='sm:inline-block'><Link href="/" className='p-3 hover:text-white hover:transition'>Home</Link></li>
                        <li className='sm:inline-block'><Link href="/foods" className='p-3 hover:text-white hover:transition'>Foods</Link></li>
                        <li className='sm:inline-block'><Link href="" className='p-3 hover:text-white hover:transition'>Login</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default navigation;
import cachorrinhoError from '../../assets/cachorro.png';

export default function Error(){
    return(
        <main className='bg-[#e4c5a1] w-full h-[100vh] flex items-center justify-center'>
            <div className='w-[80%] flex flex-col items-center justify-center'>
                <img src={cachorrinhoError} alt="imagem de cachorro page not found" className='w-[25rem]'/>
                <h1 className='text-[3rem] font-bold text-[#f52323]'>Page Not Found</h1>
                <h2 className='text-[2rem] font-bold text-[#f52323]'>404</h2>
            </div>
        </main>
    );
}
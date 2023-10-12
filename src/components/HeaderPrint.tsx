import {
    HeaderAddress, HeaderFirstName, HeaderLastName, HeaderTitle,
} from "../data/HeaderPrintData.ts"

const HeaderPrint = () => {
    return (
        <>
            <section>
                <div className='px-[1%] text-left print:text-center md:text-center mx-auto align-middle bg-background'>
                    <div className='pb-[1%]'>
                        <h1 className='text-4xl font-bold pointer-events-none underline underline-offset-auto'>
                            <span>{HeaderFirstName}</span>
                            <span className='-tracking-widest'> </span>
                            <span>{HeaderLastName}</span>
                        </h1>
                        <p className='text-primary font-semibold text-lg'>{HeaderTitle}</p>
                        <p className='text-primary text-sm'>{HeaderAddress}</p>
                    </div>
                    {/*<hr className='mx-auto border-2 border-opacity-50 border-primary mt-[1%]'/>*/}
                </div>
            </section>
        </>
    )
}

export default HeaderPrint;
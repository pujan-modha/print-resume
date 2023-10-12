import {CertificationsPrintData} from "../data/CertificationsPrintData.ts";

const CertificationsPrint = () => {
    return (
        <>
            <section>
                <div className='bg-background'>
                    <h2 className='text-lg text-foreground font-bold pointer-events-none underline underline-offset-2'>CERTIFICATIONS</h2>
                    <div className='text-sm'>
                        <ul>
                            {CertificationsPrintData.map((certifications, id) => (
                                <li key={id}>
                                    <span className='font-semibold text-secondary opacity-75 select-none'> › </span><span
                                    className='text-primary font-light'><span>
                                    {certifications.certificationCourseName}</span>
                                    {!certifications.certificationHaveCourseLink ? ("") : (<span>
                                            <span> - </span><a
                                        href={certifications.certificationLinkToCourse} target="_noref">(<span
                                        className='hover:text-primary text-secondary font-light hover:underline text-xs over'>{certifications.certificationCoursePlatformName}
                                        <span className='text-primary opacity-50 print:hidden inline-flex align-middle'></span></span>)</a>
                                        </span>)}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CertificationsPrint;
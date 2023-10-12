import {EducationPrintData} from "../data/EducationPrintData.ts";

const EducationPrint = () => {
    return(
        <>
            <section>
                <div className='bg-background'>
                    <h2 className='text-lg text-foreground font-bold pointer-events-none underline underline-offset-2'>EDUCATION</h2>
                    {EducationPrintData.map((education, id) => (
                    <div key={id}>
                        <div className='grid print:grid-cols-2 md:grid-cols-2'>
                            <div>
                                <p className='font-semibold text-base text-primary'>{education.EducationInstitutionName}</p>
                                <div>
                                    <div className=''>
                                        <p className='text-secondary font-medium'>{education.EducationCourseName}</p>
                                        <p className='text-secondary text-sm font-medium'>({education.EducationFromTime}<span> - </span>{education.EducationToTime})</p>
                                    </div>
                                </div>
                            </div>
                            <div className='text-sm'>
                                <ul>
                                    <li><span
                                        className='font-semibold text-primary'><span className='font-semibold text-secondary opacity-75 select-none'> › </span>Major:<span> </span></span><span
                                        className='text-primary font-light'>{education.EducationMajor}</span></li>
                                    {!education.EducationHasMinor ? ("") : (<li><span
                                        className='font-semibold text-primary'><span className='font-semibold text-secondary opacity-75 select-none'> › </span>Minor:<span> </span></span><span
                                        className='text-primary font-light'>{education.EducationMinor}</span></li>)}
                                    {!education.EducationHasSpecialization ? ("") : (<li><span
                                        className='font-semibold text-primary'><span className='font-semibold text-secondary opacity-75 select-none'> › </span>Specialization:<span> </span></span><span
                                        className='text-primary font-light'>{education.EducationSpecialization}</span></li>)}
                                    <li><span
                                        className='font-semibold text-primary'><span className='font-semibold text-secondary opacity-75 select-none'> › </span>GPA:<span> </span></span><span
                                        className='text-primary font-light'>{education.EducationGPA}</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default EducationPrint;
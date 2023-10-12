import MediaQuery from "react-responsive";
import {ExperiencePrintData} from "../data/ExperiencePrintData.ts";

const ExperiencePrint = () => {
    return(
        <>
            <section>
                <div className='bg-background'>
                        <h2 className='text-lg text-foreground font-bold pointer-events-none underline underline-offset-2'>EXPERIENCE</h2>
                    {ExperiencePrintData.map((experience, id) => (
                        <div key={id}>
                            <div className='grid print:grid-cols-2 md:grid-cols-2'>
                                <div>
                                    <p className='font-semibold text-primary'>{experience.ExperienceOrganization}<span> | </span>{experience.ExperienceWorkTitle}</p>
                                    {/*<div className='opacity-0 print:opacity-100 h-0 print:h-full'>*/}
                                    {/*    <p className='gap-[1%] text-xs text-secondary italic'>(<span>{experience.ExperienceLocation}</span>)</p>*/}
                                    {/*</div>*/}
                                    {/*<MediaQuery minWidth={768}>*/}
                                    {/*    <p className='gap-[1%] text-xs print:hidden text-secondary italic'>(<span>{experience.ExperienceLocation}</span>)</p>*/}
                                    {/*</MediaQuery>*/}
                                </div>
                                <div>
                                    <div className='opacity-0 print:opacity-100 h-0 print:h-full'>
                                        <p className='text-secondary text-xs font-medium print:text-right md:text-right italic'>({experience.ExperienceTimeFrom}<span> - </span>{experience.ExperienceTimeTo}<span> | </span>{experience.ExperienceLocation})</p>
                                    </div>
                                    <MediaQuery minWidth={768}>
                                        <p className='text-secondary text-xs font-medium print:hidden md:text-right italic'>({experience.ExperienceTimeFrom}<span> - </span>{experience.ExperienceTimeTo}<span> | </span>{experience.ExperienceLocation})</p>
                                    </MediaQuery>
                                    <p className='text-secondary text-xs font-medium print:text-right md:hidden print:hidden italic'>({experience.ExperienceTimeFrom}<span> - </span>{experience.ExperienceTimeTo}<span> | </span>{experience.ExperienceLocation})</p>
                                </div>
                            </div>
                            <div className='text-sm text-primary'>
                                <ul>
                                    {experience.ExperienceDescription.map((experiencedescription, id) => (
                                        <li key={id}><span className='text-secondary font-semibold opacity-75 select-none'> › </span>{experiencedescription}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default  ExperiencePrint;
import MediaQuery from "react-responsive";
import {ProjectsPrintData} from "../data/ProjectsPrintData.ts";

const ProjectsPrint = () => {
    return (
        <>
            <section className='h-min'>
                <div className='bg-background'>
                    <h2 className='text-lg text-foreground font-bold pointer-events-none underline underline-offset-2'>PROJECTS</h2>
                    {ProjectsPrintData.map((project, id) => (
                        <div key={id}>
                            <div className='grid print:grid-cols-2 md:grid-cols-3'>
                                <div className='md:col-start-1 md:col-span-2'>
                                    <p className='font-semibold text-primary'>
                                        <span>{project.ProjectName}</span>
                                        {!project.ProjectHasLink ? ("") : (
                                            <span><span className='text-primary opacity-50 font-thin text-sm select-none'> | </span><a
                                                href={project.ProjectLink} target='_noref'
                                                className='text-secondary hover:text-primary font-thin text-sm hover:opacity-100'>({project.ProjectLinkText}<span
                                                className='font-light opacity-50 inline-flex align-middle'><svg
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                fill="currentColor" className="w-auto h-4">
                                                    <path fillRule="evenodd"
                                                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                          clipRule="evenodd"/>
                                                </svg>
                                                </span>)
                                        </a></span>)}
                                    </p>
                                </div>
                                <div>
                                    <div className='opacity-0 print:opacity-100 h-0 print:h-full'>
                                        <p className='text-secondary text-xs font-medium print:text-right md:text-right italic'>({project.ProjectTimeFrom}{!project.ProjectHasTimeTo ? (")") : (
                                            <span><span> - </span>{project.ProjectTimeTo})</span>)}</p>
                                    </div>
                                    <MediaQuery minWidth={768}>
                                        <p className='text-secondary text-xs font-medium print:hidden md:text-right italic'>({project.ProjectTimeFrom}{!project.ProjectHasTimeTo ? (")") : (
                                            <span><span> - </span>{project.ProjectTimeTo})</span>)}</p>
                                    </MediaQuery>
                                    <p className='text-secondary text-xs font-medium print:text-right md:hidden print:hidden italic'>({project.ProjectTimeFrom}{!project.ProjectHasTimeTo ? ("") : (
                                        <span><span> - </span>{project.ProjectTimeTo}</span>)})</p>
                                </div>
                            </div>
                            {!project.ProjectHasTechStack ? ("") : (
                                <div>
                                    <p key={id} className='text-xs text-secondary'><span>({project.ProjectTechStack})</span></p>
                                </div>
                            )}
                            <div className='text-sm text-primary'>
                                <ul>
                                    {project.ProjectDescription.map((projectdescription, id) => (
                                        <li key={id}>
                                            <span className='text-secondary font-semibold opacity-75 select-none'> › </span>{projectdescription}
                                        </li>
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

export default ProjectsPrint;
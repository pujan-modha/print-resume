import {SkillsPrintData} from "../data/SkillsPrintData.ts";

const SkillsPrint = () => {
    return (
        <>
            <section>
                <div className='bg-background'>
                    <h2 className='text-lg text-foreground font-bold pointer-events-none underline underline-offset-2'>SKILLS</h2>
                    {SkillsPrintData.map((skills, id) => (
                        <div key={id}>
                            <div>
                                <p className='font-semibold text-primary text-xs'>{skills.SkillsTitle}:<span> </span>
                                    <span key={id}
                                          className='text-xs text-primary font-normal'>{skills.SkillsName}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default SkillsPrint;
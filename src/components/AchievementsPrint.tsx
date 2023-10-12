import {AchievementsPrintData} from "../data/AchievementsPrintData.ts";

const AchievementsPrint = () => {
    return (
        <>
            <section>
                <div className='bg-background'>
                    <h2 className='text-lg text-foreground font-bold pointer-events-none underline underline-offset-2'>ACHIEVEMENTS</h2>
                    <div className='text-sm'>
                        <ul>
                            {AchievementsPrintData.map((achievements, id) => (
                                <li key={id}><span className='font-semibold text-secondary opacity-75 select-none'> › </span><span
                                    className='text-primary font-light'><span
                                    className='font-semibold'>{achievements.achievementMain}</span>
                                        <span> - </span>{achievements.achievementEvent}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AchievementsPrint;
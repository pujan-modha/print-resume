import './App.css'
import {useState} from "react";
import {HeaderFullName} from "./data/HeaderPrintData.ts";
import HeaderPrint from "./components/HeaderPrint.tsx";
import ContactPrint from "./components/ContactPrint.tsx";
import HorizontalRulePrint from "./components/HorizontalRulePrint.tsx";
import EducationPrint from "./components/EducationPrint.tsx";
import SkillsPrint from "./components/SkillsPrint.tsx";
import ExperiencePrint from "./components/ExperiencePrint.tsx";
import ProjectsPrint from "./components/ProjectsPrint.tsx";
import CertificationsPrint from "./components/CertificationsPrint.tsx";
import AchievementsPrint from "./components/AchievementsPrint.tsx";
import MediaQuery from "react-responsive";

function Print() {
    const [title] = useState(HeaderFullName);
    useState(() => {
        document.title = title;
    });
    return (
        <>
            <div className='px-[2.5%] md:mx-auto py-[2.5%] print:py-0 md:bg-fixed' id='bg-pattern'>
                <div className='h-screen md:h-full text-foreground bg-background font-mono box-border max-w-3xl mx-auto print:border-none border-4 border-foreground w-full'>
                    <MediaQuery maxWidth={768}>
                        <div className='print:hidden p-[2.5%]'>
                            <p className='text-lg font-semibold'>
                                 To view this website open this website on device with bigger screen or Switch to Desktop mode.
                            </p>
                        </div>
                    </MediaQuery>
                    <MediaQuery minWidth={768}>
                        <div>
                            <HeaderPrint/>
                            <div className='px-[1%]'>
                                <HorizontalRulePrint/>
                                <ContactPrint/>
                                <HorizontalRulePrint/>
                                <EducationPrint/>
                                <HorizontalRulePrint/>
                                <SkillsPrint/>
                                <HorizontalRulePrint/>
                                <ExperiencePrint/>
                                <HorizontalRulePrint/>
                                <ProjectsPrint/>
                                <HorizontalRulePrint/>
                                <div className='md:grid md:grid-cols-2'>
                                    <CertificationsPrint/>
                                    <div className='md:hidden md:scale-0'>
                                        <HorizontalRulePrint/>
                                    </div>
                                    <AchievementsPrint/>
                                </div>
                                <hr className='mx-auto border-2 border-opacity-50 border-primary my-[1%]'/>
                            </div>
                        </div>
                    </MediaQuery>
                </div>
            </div>
        </>
    )
}

export default Print;
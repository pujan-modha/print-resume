import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {ContactPrintData} from "../data/ContactPrintData.ts";
import MediaQuery from "react-responsive";

const ContactPrint = () => {
    return (
        <>
            <section>
                <div className='bg-background'>
                    <ul className='md:flex md:flex-row md:justify-between columns-2'>
                        {ContactPrintData.map((contact, id) => (
                            <li key={id}><span
                                className='font-semibold text-primary -tracking-widest align-middle'><FontAwesomeIcon
                                // @ts-expect-error for fa icon
                                icon={contact.ContactIcon}
                                style={{color: "#44475a"}}/><span className='-tracking-widest select-none'> </span></span><a
                                href={contact.ContactLink}
                                target="_noref">
                                <span className='md:hidden hover:text-primary text-secondary font-light hover:underline text-xs align-middle'>
                                    {contact.AltContactText}
                                </span>
                                <MediaQuery minWidth={768}>
                                    <span className='hover:text-primary text-secondary font-light hover:underline text-xs align-middle'>
                                    {contact.ContactText}
                                    </span>
                                </MediaQuery>
                            </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default ContactPrint;
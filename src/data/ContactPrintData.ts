import {faLinkedin, faSquareGithub, faSquareGitlab, faSquareXTwitter} from "@fortawesome/free-brands-svg-icons";
import {faSquareEnvelope, faSquarePhone} from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faLinkedin, faSquareGithub, faSquareGitlab, faSquareXTwitter, faSquareEnvelope, faSquarePhone);



export const ContactPrintData = [
    {
        ContactIcon: "fa-brands fa-square-github",
        ContactLink: "/",
        ContactText: "github.com/john-doe",
        AltContactText: "github.com/john-doe"
    },
    {
        ContactIcon: "fa-solid fa-square-envelope",
        ContactLink: "/",
        ContactText: "johndoe@email.com",
        AltContactText: "johndoe@email.com"
    },
    {
        ContactIcon: "fa-solid fa-square-phone",
        ContactLink: "/",
        ContactText: "+91 9876543210",
        AltContactText: "+91 9876543210"
    },
    {
        ContactIcon: "fa-brands fa-linkedin",
        ContactLink: "/",
        ContactText: "linkedin.com/in/john-doe",
        AltContactText: "john-doe-123456789"
    },
]
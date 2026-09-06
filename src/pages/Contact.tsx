import React, { useState } from "react";

import {
    MdEmail,
    MdLocationOn,
    MdSend,
    MdChatBubbleOutline,
} from "react-icons/md";

import {
    FaGithub,
    FaLinkedin,
    FaWhatsapp,
} from "react-icons/fa";


const Contact = () => {

    const [result, setResult] = useState<string>("");
    const [isSending, setIsSending] = useState<boolean>(false);


    const onSubmit = async (
        event: React.FormEvent<HTMLFormElement>
    ) => {

        event.preventDefault();

        setIsSending(true);
        setResult("");

        const form = event.currentTarget;
        const formData = new FormData(form);

        formData.append(
            "access_key",
            "3e48acc8-7f9d-441d-9f36-577dc3951869"
        );

        formData.append(
            "subject",
            "New Contact Message from CodeX Portfolio"
        );

        formData.append(
            "from_name",
            "CodeX Portfolio"
        );

        try {

            const response = await fetch(
                "https://api.web3forms.com/submit",
                {
                    method: "POST",
                    body: formData,
                }
            );

            const data = await response.json();

            if (data.success) {

                setResult(
                    "Your message has been sent successfully."
                );

                form.reset();

            } else {

                setResult(
                    data.message ||
                    "Something went wrong. Please try again."
                );

            }

        } catch {

            setResult(
                "Something went wrong. Please try again later."
            );

        } finally {

            setIsSending(false);

        }

    };


    return (

        <section
            id="contact"
            className="
                w-full
                min-w-0
                overflow-hidden
                pb-[50px]
                pt-[64px]
                min-[400px]:pt-[70px]
                sm:pt-[80px]
                bg-[var(--light-bg)]
                dark:bg-[var(--dark-bg)]
            "
        >

            <div
                className="
                    w-full
                    max-w-[1440px]
                    mx-auto
                    px-[10px]
                    min-[320px]:px-[12px]
                    min-[400px]:px-[16px]
                    sm:px-[24px]
                    lg:px-[48px]
                    flex
                    flex-col
                    items-center
                    text-center
                "
            >

                {/* =========================
                    SECTION HEADER
                ========================== */}

                <h2
                    className="
                        max-w-full
                        font-bold
                        text-[22px]
                        min-[320px]:text-[25px]
                        min-[400px]:text-[28px]
                        sm:text-[36px]
                        leading-[1.25]
                        break-words
                        text-[var(--light-primary-text)]
                        dark:text-[var(--dark-primary-text)]
                        mb-[10px]
                    "
                >
                    Let's Work{" "}

                    <span className="text-[var(--primary-color)]">
                        Together
                    </span>
                </h2>


                <p
                    className="
                        w-full
                        max-w-[700px]
                        text-[12px]
                        min-[320px]:text-[13px]
                        min-[400px]:text-[14px]
                        sm:text-[16px]
                        leading-[1.7]
                        break-words
                        text-[var(--light-secondary-text)]
                        dark:text-[var(--dark-secondary-text)]
                        mb-[28px]
                        min-[400px]:mb-[35px]
                    "
                >
                    Have a project in mind or want to collaborate?
                    I'd love to hear from you.

                    <br />

                    Feel free to send me a message and I'll get back to
                    you as soon as possible.
                </p>


                {/* =========================
                    CONTENT
                ========================== */}

                <div
                    className="
                        w-full
                        min-w-0
                        grid
                        grid-cols-1
                        lg:grid-cols-[1fr_1.6fr]
                        gap-[16px]
                        min-[400px]:gap-[20px]
                        lg:gap-[24px]
                        text-left
                    "
                >

                    {/* =========================
                        CONTACT INFORMATION
                    ========================== */}

                    <div
                        className="
                            w-full
                            min-w-0
                            box-border
                            px-[12px]
                            py-[18px]
                            min-[320px]:px-[14px]
                            min-[400px]:px-[22px]
                            min-[400px]:py-[25px]
                            sm:px-[30px]
                            sm:py-[30px]
                            bg-[var(--light-surface)]
                            dark:bg-[var(--dark-surface)]
                            border
                            border-[var(--light-border)]
                            dark:border-[var(--dark-border)]
                            rounded-[var(--radius-lg)]
                        "
                    >

                        {/* EMAIL */}

                        <div
                            className="
                                w-full
                                min-w-0
                                flex
                                items-center
                                gap-[10px]
                                min-[400px]:gap-[16px]
                                mb-[18px]
                                min-[400px]:mb-[22px]
                            "
                        >

                            <div
                                className="
                                    w-[42px]
                                    h-[42px]
                                    min-[320px]:w-[46px]
                                    min-[320px]:h-[46px]
                                    min-[400px]:w-[56px]
                                    min-[400px]:h-[56px]
                                    shrink-0
                                    flex-center
                                    rounded-[var(--radius-md)]
                                    bg-[var(--light-alt-surface)]
                                    dark:bg-[var(--dark-alt-surface)]
                                    text-[var(--primary-color)]
                                    text-[21px]
                                    min-[400px]:text-[25px]
                                "
                            >
                                <MdEmail />
                            </div>


                            <div
                                className="
                                    min-w-0
                                    flex-1
                                "
                            >

                                <h3
                                    className="
                                        font-semibold
                                        text-[14px]
                                        min-[400px]:text-[15px]
                                        truncate
                                        text-[var(--light-primary-text)]
                                        dark:text-[var(--dark-primary-text)]
                                    "
                                >
                                    Email
                                </h3>


                                <a
                                    href="mailto:faresmohamedsaiedahmed@gmail.com"
                                    className="
                                        block
                                        max-w-full
                                        text-[11px]
                                        min-[320px]:text-[12px]
                                        min-[400px]:text-[13px]
                                        break-all
                                        text-[var(--light-secondary-text)]
                                        dark:text-[var(--dark-secondary-text)]
                                        hover:text-[var(--primary-color)]
                                        transition
                                    "
                                >
                                    faresmohamedsaiedahmed@gmail.com
                                </a>

                            </div>

                        </div>


                        {/* LOCATION */}

                        <div
                            className="
                                w-full
                                min-w-0
                                flex
                                items-center
                                gap-[10px]
                                min-[400px]:gap-[16px]
                                mb-[18px]
                                min-[400px]:mb-[22px]
                            "
                        >

                            <div
                                className="
                                    w-[42px]
                                    h-[42px]
                                    min-[320px]:w-[46px]
                                    min-[320px]:h-[46px]
                                    min-[400px]:w-[56px]
                                    min-[400px]:h-[56px]
                                    shrink-0
                                    flex-center
                                    rounded-[var(--radius-md)]
                                    bg-[var(--light-alt-surface)]
                                    dark:bg-[var(--dark-alt-surface)]
                                    text-[var(--primary-color)]
                                    text-[21px]
                                    min-[400px]:text-[25px]
                                "
                            >
                                <MdLocationOn />
                            </div>


                            <div className="min-w-0">

                                <h3
                                    className="
                                        font-semibold
                                        text-[14px]
                                        min-[400px]:text-[15px]
                                        text-[var(--light-primary-text)]
                                        dark:text-[var(--dark-primary-text)]
                                    "
                                >
                                    Location
                                </h3>


                                <p
                                    className="
                                        text-[12px]
                                        min-[400px]:text-[13px]
                                        text-[var(--light-secondary-text)]
                                        dark:text-[var(--dark-secondary-text)]
                                    "
                                >
                                    Egypt
                                </p>

                            </div>

                        </div>


                        {/* GITHUB */}

                        <div
                            className="
                                w-full
                                min-w-0
                                flex
                                items-center
                                gap-[10px]
                                min-[400px]:gap-[16px]
                                mb-[18px]
                                min-[400px]:mb-[22px]
                            "
                        >

                            <div
                                className="
                                    w-[42px]
                                    h-[42px]
                                    min-[320px]:w-[46px]
                                    min-[320px]:h-[46px]
                                    min-[400px]:w-[56px]
                                    min-[400px]:h-[56px]
                                    shrink-0
                                    flex-center
                                    rounded-[var(--radius-md)]
                                    bg-[var(--light-alt-surface)]
                                    dark:bg-[var(--dark-alt-surface)]
                                    text-[var(--primary-color)]
                                    text-[21px]
                                    min-[400px]:text-[25px]
                                "
                            >
                                <FaGithub />
                            </div>


                            <div className="min-w-0 flex-1">

                                <h3
                                    className="
                                        font-semibold
                                        text-[14px]
                                        min-[400px]:text-[15px]
                                        text-[var(--light-primary-text)]
                                        dark:text-[var(--dark-primary-text)]
                                    "
                                >
                                    GitHub
                                </h3>


                                <a
                                    href="https://github.com/faresXmohamed"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="
                                        block
                                        max-w-full
                                        text-[11px]
                                        min-[320px]:text-[12px]
                                        min-[400px]:text-[13px]
                                        break-all
                                        text-[var(--light-secondary-text)]
                                        dark:text-[var(--dark-secondary-text)]
                                        hover:text-[var(--primary-color)]
                                        transition
                                    "
                                >
                                    github.com/faresXmohamed
                                </a>

                            </div>

                        </div>


                        {/* LINKEDIN */}

                        <div
                            className="
                                w-full
                                min-w-0
                                flex
                                items-center
                                gap-[10px]
                                min-[400px]:gap-[16px]
                            "
                        >

                            <div
                                className="
                                    w-[42px]
                                    h-[42px]
                                    min-[320px]:w-[46px]
                                    min-[320px]:h-[46px]
                                    min-[400px]:w-[56px]
                                    min-[400px]:h-[56px]
                                    shrink-0
                                    flex-center
                                    rounded-[var(--radius-md)]
                                    bg-[var(--light-alt-surface)]
                                    dark:bg-[var(--dark-alt-surface)]
                                    text-[var(--primary-color)]
                                    text-[21px]
                                    min-[400px]:text-[25px]
                                "
                            >
                                <FaLinkedin />
                            </div>


                            <div className="min-w-0 flex-1">

                                <h3
                                    className="
                                        font-semibold
                                        text-[14px]
                                        min-[400px]:text-[15px]
                                        text-[var(--light-primary-text)]
                                        dark:text-[var(--dark-primary-text)]
                                    "
                                >
                                    LinkedIn
                                </h3>


                                <a
                                    href="https://www.linkedin.com/in/faresxmohamed"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="
                                        block
                                        max-w-full
                                        text-[11px]
                                        min-[320px]:text-[12px]
                                        min-[400px]:text-[13px]
                                        break-all
                                        text-[var(--light-secondary-text)]
                                        dark:text-[var(--dark-secondary-text)]
                                        hover:text-[var(--primary-color)]
                                        transition
                                    "
                                >
                                    linkedin.com/in/faresxmohamed
                                </a>

                            </div>

                        </div>


                        {/* DIVIDER */}

                        <div
                            className="
                                w-full
                                h-[1px]
                                bg-[var(--light-border)]
                                dark:bg-[var(--dark-border)]
                                my-[20px]
                                min-[400px]:my-[25px]
                            "
                        />


                        {/* FOLLOW ME */}

                        <h3
                            className="
                                font-semibold
                                text-[15px]
                                min-[400px]:text-[17px]
                                text-[var(--light-primary-text)]
                                dark:text-[var(--dark-primary-text)]
                                mb-[3px]
                            "
                        >
                            Follow Me
                        </h3>


                        <p
                            className="
                                text-[11px]
                                min-[320px]:text-[12px]
                                min-[400px]:text-[13px]
                                break-words
                                text-[var(--light-secondary-text)]
                                dark:text-[var(--dark-secondary-text)]
                                mb-[12px]
                                min-[400px]:mb-[15px]
                            "
                        >
                            Connect with me on social media
                        </p>


                        <div
                            className="
                                flex
                                flex-wrap
                                gap-[8px]
                                min-[400px]:gap-[12px]
                            "
                        >

                            {/* GITHUB */}

                            <a
                                href="https://github.com/faresXmohamed"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub"
                                className="
                                    w-[38px]
                                    h-[38px]
                                    min-[400px]:w-[42px]
                                    min-[400px]:h-[42px]
                                    flex-center
                                    shrink-0
                                    rounded-[var(--radius-md)]
                                    bg-[var(--light-alt-surface)]
                                    dark:bg-[var(--dark-alt-surface)]
                                    border
                                    border-[var(--light-border)]
                                    dark:border-[var(--dark-border)]
                                    text-[18px]
                                    min-[400px]:text-[20px]
                                    text-[var(--light-primary-text)]
                                    dark:text-[var(--dark-primary-text)]
                                    hover:text-[var(--primary-color)]
                                    transition
                                "
                            >
                                <FaGithub />
                            </a>


                            {/* LINKEDIN */}

                            <a
                                href="https://www.linkedin.com/in/faresxmohamed"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                                className="
                                    w-[38px]
                                    h-[38px]
                                    min-[400px]:w-[42px]
                                    min-[400px]:h-[42px]
                                    flex-center
                                    shrink-0
                                    rounded-[var(--radius-md)]
                                    bg-[var(--light-alt-surface)]
                                    dark:bg-[var(--dark-alt-surface)]
                                    border
                                    border-[var(--light-border)]
                                    dark:border-[var(--dark-border)]
                                    text-[18px]
                                    min-[400px]:text-[20px]
                                    text-[var(--light-primary-text)]
                                    dark:text-[var(--dark-primary-text)]
                                    hover:text-[var(--primary-color)]
                                    transition
                                "
                            >
                                <FaLinkedin />
                            </a>


                            {/* WHATSAPP */}

                            <a
                                href="https://wa.me/fares.mo121"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="WhatsApp"
                                className="
                                    w-[38px]
                                    h-[38px]
                                    min-[400px]:w-[42px]
                                    min-[400px]:h-[42px]
                                    flex-center
                                    shrink-0
                                    rounded-[var(--radius-md)]
                                    bg-[var(--light-alt-surface)]
                                    dark:bg-[var(--dark-alt-surface)]
                                    border
                                    border-[var(--light-border)]
                                    dark:border-[var(--dark-border)]
                                    text-[18px]
                                    min-[400px]:text-[20px]
                                    text-[var(--light-primary-text)]
                                    dark:text-[var(--dark-primary-text)]
                                    hover:text-[var(--primary-color)]
                                    transition
                                "
                            >
                                <FaWhatsapp />
                            </a>

                        </div>

                    </div>


                    {/* =========================
                        SEND ME A MESSAGE
                    ========================== */}

                    <div
                        className="
                            w-full
                            min-w-0
                            box-border
                            px-[12px]
                            py-[18px]
                            min-[320px]:px-[14px]
                            min-[400px]:px-[22px]
                            min-[400px]:py-[25px]
                            sm:px-[30px]
                            sm:py-[30px]
                            bg-[var(--light-surface)]
                            dark:bg-[var(--dark-surface)]
                            border
                            border-[var(--light-border)]
                            dark:border-[var(--dark-border)]
                            rounded-[var(--radius-lg)]
                        "
                    >

                        {/* FORM HEADER */}

                        <div
                            className="
                                w-full
                                min-w-0
                                flex
                                items-center
                                gap-[10px]
                                min-[400px]:gap-[16px]
                                mb-[20px]
                                min-[400px]:mb-[25px]
                            "
                        >

                            <div
                                className="
                                    w-[42px]
                                    h-[42px]
                                    min-[320px]:w-[46px]
                                    min-[320px]:h-[46px]
                                    min-[400px]:w-[56px]
                                    min-[400px]:h-[56px]
                                    shrink-0
                                    flex-center
                                    rounded-[var(--radius-md)]
                                    bg-[var(--light-alt-surface)]
                                    dark:bg-[var(--dark-alt-surface)]
                                    text-[var(--primary-color)]
                                    text-[21px]
                                    min-[400px]:text-[25px]
                                "
                            >
                                <MdChatBubbleOutline />
                            </div>


                            <div className="min-w-0">

                                <h3
                                    className="
                                        font-semibold
                                        text-[15px]
                                        min-[400px]:text-[17px]
                                        break-words
                                        text-[var(--light-primary-text)]
                                        dark:text-[var(--dark-primary-text)]
                                    "
                                >
                                    Send Me a Message
                                </h3>


                                <p
                                    className="
                                        text-[11px]
                                        min-[320px]:text-[12px]
                                        min-[400px]:text-[13px]
                                        break-words
                                        text-[var(--light-secondary-text)]
                                        dark:text-[var(--dark-secondary-text)]
                                    "
                                >
                                    I'll get back to you as soon as possible.
                                </p>

                            </div>

                        </div>


                        {/* FORM */}

                        <form
                            onSubmit={onSubmit}
                            className="
                                w-full
                                min-w-0
                                flex
                                flex-col
                                gap-[14px]
                                min-[400px]:gap-[18px]
                            "
                        >

                            {/* HONEYPOT */}

                            <input
                                type="checkbox"
                                name="botcheck"
                                className="hidden"
                                tabIndex={-1}
                                autoComplete="off"
                            />


                            {/* NAME */}

                            <div className="w-full min-w-0">

                                <label
                                    htmlFor="name"
                                    className="
                                        block
                                        font-medium
                                        text-[12px]
                                        min-[400px]:text-[13px]
                                        text-[var(--light-primary-text)]
                                        dark:text-[var(--dark-primary-text)]
                                        mb-[6px]
                                        min-[400px]:mb-[7px]
                                    "
                                >
                                    Full Name
                                </label>


                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    required
                                    autoComplete="name"
                                    className="
                                        block
                                        w-full
                                        min-w-0
                                        box-border
                                        h-[42px]
                                        min-[400px]:h-[44px]
                                        px-[10px]
                                        min-[400px]:px-[12px]
                                        rounded-[var(--radius-md)]
                                        border
                                        border-[var(--light-border)]
                                        dark:border-[var(--dark-border)]
                                        bg-[var(--light-alt-surface)]
                                        dark:bg-[var(--dark-alt-surface)]
                                        text-[12px]
                                        min-[400px]:text-[13px]
                                        text-[var(--light-primary-text)]
                                        dark:text-[var(--dark-primary-text)]
                                        placeholder:text-[var(--light-muted-text)]
                                        dark:placeholder:text-[var(--dark-muted-text)]
                                        outline-none
                                        focus:border-[var(--primary-color)]
                                        transition
                                    "
                                />

                            </div>


                            {/* EMAIL */}

                            <div className="w-full min-w-0">

                                <label
                                    htmlFor="email"
                                    className="
                                        block
                                        font-medium
                                        text-[12px]
                                        min-[400px]:text-[13px]
                                        text-[var(--light-primary-text)]
                                        dark:text-[var(--dark-primary-text)]
                                        mb-[6px]
                                        min-[400px]:mb-[7px]
                                    "
                                >
                                    Email Address
                                </label>


                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    required
                                    autoComplete="email"
                                    className="
                                        block
                                        w-full
                                        min-w-0
                                        box-border
                                        h-[42px]
                                        min-[400px]:h-[44px]
                                        px-[10px]
                                        min-[400px]:px-[12px]
                                        rounded-[var(--radius-md)]
                                        border
                                        border-[var(--light-border)]
                                        dark:border-[var(--dark-border)]
                                        bg-[var(--light-alt-surface)]
                                        dark:bg-[var(--dark-alt-surface)]
                                        text-[12px]
                                        min-[400px]:text-[13px]
                                        text-[var(--light-primary-text)]
                                        dark:text-[var(--dark-primary-text)]
                                        placeholder:text-[var(--light-muted-text)]
                                        dark:placeholder:text-[var(--dark-muted-text)]
                                        outline-none
                                        focus:border-[var(--primary-color)]
                                        transition
                                    "
                                />

                            </div>


                            {/* MESSAGE */}

                            <div className="w-full min-w-0">

                                <label
                                    htmlFor="message"
                                    className="
                                        block
                                        font-medium
                                        text-[12px]
                                        min-[400px]:text-[13px]
                                        text-[var(--light-primary-text)]
                                        dark:text-[var(--dark-primary-text)]
                                        mb-[6px]
                                        min-[400px]:mb-[7px]
                                    "
                                >
                                    Your Message
                                </label>


                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Tell me about your project..."
                                    required
                                    rows={5}
                                    className="
                                        block
                                        w-full
                                        min-w-0
                                        box-border
                                        px-[10px]
                                        py-[9px]
                                        min-[400px]:px-[12px]
                                        min-[400px]:py-[10px]
                                        rounded-[var(--radius-md)]
                                        border
                                        border-[var(--light-border)]
                                        dark:border-[var(--dark-border)]
                                        bg-[var(--light-alt-surface)]
                                        dark:bg-[var(--dark-alt-surface)]
                                        text-[12px]
                                        min-[400px]:text-[13px]
                                        text-[var(--light-primary-text)]
                                        dark:text-[var(--dark-primary-text)]
                                        placeholder:text-[var(--light-muted-text)]
                                        dark:placeholder:text-[var(--dark-muted-text)]
                                        outline-none
                                        resize-y
                                        focus:border-[var(--primary-color)]
                                        transition
                                    "
                                />

                            </div>


                            {/* BUTTON */}

                            <button
                                type="submit"
                                disabled={isSending}
                                className="
                                    w-full
                                    min-w-0
                                    h-[42px]
                                    min-[400px]:h-[44px]
                                    mt-[2px]
                                    flex
                                    justify-center
                                    items-center
                                    gap-[6px]
                                    min-[400px]:gap-[8px]
                                    rounded-[var(--radius-md)]
                                    bg-[var(--primary-color)]
                                    hover:bg-[var(--secondary-color)]
                                    disabled:opacity-60
                                    disabled:cursor-not-allowed
                                    text-white
                                    font-semibold
                                    text-[12px]
                                    min-[400px]:text-[14px]
                                    transition
                                    cursor-pointer
                                "
                            >

                                <MdSend />

                                {isSending
                                    ? "Sending..."
                                    : "Send Message"
                                }

                            </button>


                            {/* RESULT */}

                            {result && (

                                <p
                                    className={`
                                        w-full
                                        break-words
                                        text-center
                                        text-[11px]
                                        min-[400px]:text-[13px]
                                        ${
                                            result.includes("successfully")
                                                ? "text-[var(--success-color)]"
                                                : "text-[var(--error-color)]"
                                        }
                                    `}
                                >
                                    {result}
                                </p>

                            )}

                        </form>

                    </div>

                </div>

            </div>

        </section>
    );
};


export default Contact;
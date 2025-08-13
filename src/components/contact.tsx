"use client";

import React from 'react';
import { useSectionInView } from '@/lib/hooks';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { sendEmail } from "../../actions/sendEmail";
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {
    const { ref } = useSectionInView("Contact");
    return (
        <motion.section
            ref={ref}
            id="contact"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-[min(100%, 38rem)] text-center">
            <div className="space h-25"></div>
            <SectionHeading>Contact Me</SectionHeading>
            <p className="text-gray-700 -mt-6">
                Please contact me directlt at{" "}
                <a
                    className="underline"
                    href="mailto:creationteamoreo@gmail.com">
                    example@gmail.com
                </a>
                {" "}or through this form.
            </p>
            <form
                action={async (formData) => {
                    const { data, error } = await sendEmail(formData);
                    if (error) {
                        toast.error(error);
                        return;
                    }
                    toast.success("Email Sent Successfully.");
                }}
                className="group mt-10 flex flex-col">
                <input
                    type="email"
                    name="senderEmail"
                    required={true}
                    maxLength={500}
                    className="h-14 rounded-lg border border-black/10 px-4"
                    placeholder="your email" />
                <textarea
                    id=""
                    name="message"
                    placeholder="your message"
                    required={true}
                    maxLength={5000}
                    className="h-52 my-3 rounded-lg border border-black/10 p-4">
                </textarea>
                <SubmitBtn />
            </form>
        </motion.section>
    )
}

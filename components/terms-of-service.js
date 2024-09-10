'use client'
import { motion } from 'framer-motion';
const termsOfServiceData = [
  {
    title: "",
    content: `
      Welcome to Dizzbe! These terms and conditions outline the rules and regulations for the use of Dizzbe's website and services, located at <a href="https://www.dizzbe.com" class="text-blue-500 hover:underline">Dizzbe.com</a>.
    `,
  },
  {
    title: "Acceptance of Terms",
    content: `
      By accessing and using our website, you accept and agree to be bound by these terms. If you do not agree to these terms, please do not use our services.
    `,
  },
  {
    title: "Services Provided",
    content: `
      Dizzbe offers AI-driven product search and recommendation services. We strive to provide accurate and helpful information, but we do not guarantee the accuracy, completeness, or reliability of any content provided.
    `,
  },
  {
    title: "User Responsibilities",
    content: `
      Users agree to use our services in compliance with all applicable laws and regulations. Users must not engage in any activity that may harm or disrupt our services or other users.
    `,
  },
  {
    title: "Intellectual Property",
    content: `
      All content on our website, including text, graphics, logos, and software, is the property of Dizzbe or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works from our content without our prior written permission.
    `,
  },
  {
    title: "Disclaimers and Limitation of Liability",
    content: `
      Our services are provided "as is" without any warranties, express or implied. Dizzbe is not liable for any direct, indirect, incidental, or consequential damages arising from the use of our services.
    `,
  },
  {
    title: "Governing Law",
    content: `
      These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Dizzbe operates.
    `,
  },
  {
    title: "Changes to Terms",
    content: `
      We may update these terms from time to time. We will notify you of any changes by posting the new terms on this page.
    `,
  },
  {
    title: "Contact Us",
    content: `
      If you have any questions about these Terms of Service, please contact us at <a href="mailto:customerrelations@dizzbe.com" class="text-blue-500 hover:underline">customerrelations@dizzbe.com</a>.
    `,
  },
];

const TermsOfService = () => {
  return (
    <div className="w-full">
      <h1 className='text-3xl font-bold'>Terms of Service</h1>
      {termsOfServiceData.map((section, index) => (
        <motion.div key={index} className="mb-8"

          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: .4 }}
        >
          <h2 className="text-xl font-bold mb-4">{section.title}</h2>
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: section.content }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default TermsOfService;

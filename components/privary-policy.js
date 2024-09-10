'use client'
import { motion } from 'framer-motion';

const privacyPolicyData = [
  {
    title: "",
    content: `
      At Dizzbe, accessible from <a href="https://www.dizzbe.com" class="text-blue-500 hover:underline">Dizzbe.com</a>, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you use our website and services.
    `,
  },
  {
    title: "Information We Collect",
    content: "",
    subtitles: [
      {
        subtitle: "Personal Information",
        content: `
          We may collect the following personal information:
          <ul class="list-disc ml-5 mt-2">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Billing information</li>
          </ul>
        `,
      },
      {
        subtitle: "Usage Data",
        content: `
          We may also collect usage data, including:
          <ul class="list-disc ml-5 mt-2">
            <li>IP address</li>
            <li>Browser type</li>
            <li>Pages visited</li>
            <li>Time spent on pages</li>
            <li>Other diagnostic data</li>
          </ul>
        `,
      },
    ],
  },
  {
    title: "How We Use Your Information",
    content: `
      We use the information we collect to:
      <ul class="list-disc ml-5 mt-2">
        <li>Provide and improve our services</li>
        <li>Communicate with you, including sending updates and promotional materials</li>
        <li>Process transactions and manage orders</li>
        <li>Comply with legal obligations and protect our rights</li>
      </ul>
    `,
  },
  {
    title: "Data Sharing and Disclosure",
    content: `
      We do not sell your personal information. We may share your information with third-party service providers to facilitate our services, comply with legal obligations, or protect our rights. 
    `,
  },
  {
    title: "Security of Your Data",
    content: `
      We implement reasonable security measures to protect your data. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
    `,
  },
  {
    title: "Your Rights",
    content: `
      You have the right to:
      <ul class="list-disc ml-5 mt-2">
        <li>Access your personal information</li>
        <li>Update your personal information</li>
        <li>Delete your personal information</li>
      </ul>
      You can also opt-out of receiving marketing communications from us.
    `,
  },
  {
    title: "Changes to This Privacy Policy",
    content: `
      We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. We recommend reviewing this page periodically for updates.
    `,
  },
  {
    title: "Contact Us",
    content: `
      If you have any questions about this Privacy Policy, please contact us at <a href="mailto:customerrelations@dizzbe.com" class="text-blue-500 hover:underline">customerrelations@dizzbe.com</a>.
    `,
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="w-full">
    <h1 className='text-3xl font-bold'>Privacy Policy</h1>
      {privacyPolicyData.map((section, index) => (
        <motion.div key={index} className="mb-8"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: .4 }}
        >
          <h2 className="text-xl font-bold mb-4">{section.title}</h2>
          {section.content && (
            <div
              className="prose"
              dangerouslySetInnerHTML={{ __html: section.content }}
            />
          )}
          {section.subtitles &&
            section.subtitles.map((sub, subIndex) => (
              <div key={subIndex} className="mt-4 ml-4">
                <h3 className="text-lg font-semibold">{sub.subtitle}</h3>
                <div
                  className="prose"
                  dangerouslySetInnerHTML={{ __html: sub.content }}
                />
              </div>
            ))}
        </motion.div>
      ))}
    </div>
  );
};

export default PrivacyPolicy;

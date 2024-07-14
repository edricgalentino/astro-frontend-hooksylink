import Accordion, { AccordionItem } from '../../Common/Accordion';

const FAQSection = () => {
  const defaultOpenAccordion = [1, 2, 8];
  return (
    <section className="flex h-full w-full items-center justify-center border-b border-black py-20 md:px-20 md:py-20">
      <div className="flex w-full flex-col items-center justify-center gap-8 px-4 md:max-w-[80%]">
        <div className="flex w-full flex-col items-center justify-center gap-4 md:w-1/2">
          <h2 className="text-center text-4xl font-bold text-gray-800">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-lg text-gray-600">
            Here are some common questions about Hooksylink. If you have any
            other questions, feel free to reach out to our customer support
            team.
          </p>
        </div>
        <Accordion>
          {FAQ.map((faq, index) => (
            <AccordionItem
              key={index}
              defaultOpen={defaultOpenAccordion.includes(index)}
              accordionTitle={faq.q}
              headBorder={false}
              maxHClassName="max-h-[70rem]"
              contentClassName="space-y-4"
            >
              <p>{faq.a}</p>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;

const FAQ = [
  {
    q: 'What is Hooksylink?',
    a: 'Hooksylink is a powerful link management tool that allows you to create, customize, and track your links with ease. Whether you are a content creator, marketer, or business owner, Hooksylink can help you drive traffic, increase engagement, and grow your online presence.',
  },
  {
    q: 'How does Hooksylink work?',
    a: 'Hooksylink works by providing you with a unique link that you can share with your audience. When someone clicks on your link, they will be directed to a landing page where they can access all of your content in one place. You can customize your link to match your brand and track its performance using detailed analytics.',
  },
  {
    q: 'What are the benefits of using Hooksylink?',
    a: 'Hooksylink offers a wide range of benefits, including increased traffic, improved brand visibility, and enhanced user experience. By using Hooksylink, you can create a seamless online experience for your audience and drive more engagement with your content.',
  },
  {
    q: 'What social media platforms can I use with Hooksylink?',
    a: "Hooksylink supports all major social media platforms, including Facebook, Twitter, Instagram, Facebook, YouTube, TikTok, and more. We're constantly adding new integrations to meet your needs.",
  },
  {
    q: 'What if the platform I need is not available?',
    a: "If there's a platform you'd like to see integrated with Hooksylink, please let us know by filling the form on the support page. We're always looking to expand our services based on user feedback.",
  },
  {
    q: 'How do I track the performance of my links?',
    a: 'Hooksylink provides detailed analytics that show you how many clicks your links are getting, where your audience is coming from, and which links are the most popular.',
  },
  {
    q: 'Is Hooksylink free to use?',
    a: 'Yes, Hooksylink offers a free plan that includes basic features. For more advanced features, you can upgrade to our Pro plan with one-time payment.',
  },
  //   {
  //     q: 'Can I customize my Hooksylink?',
  //     a: 'Absolutely! Hooksylink offers a wide range of customization options, including themes, colors, and layouts, so you can create a link that truly represents your brand.',
  //   },
  {
    q: 'How do I ensure my links are secure?',
    a: 'Hooksylink uses top-notch security measures to protect your links. You can also control privacy settings to ensure only the right people have access to your content.',
  },
  {
    q: 'Can I change my plan later?',
    a: 'Yes, you can upgrade or downgrade your plan at any time to suit your changing needs.',
  },
  {
    q: 'How do I get in touch with customer support?',
    a: 'If you have any questions or need help with your account, you can reach out to our customer support team via email or live chat. We are here to help!',
  },
];

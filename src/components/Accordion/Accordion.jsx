import React from "react";

import AccordionItem from "./AccordionItem";

const Accordion = () => {
  const accordionData = [
    {
      id: "1",
      title: "آیا می‌توانم فیلم‌های موجود در فیلیمو را دانلود کنم؟",
      content: `بله، شما می‌توانید همه فیلم‌ و سریال‌های فیلیمو را داخل خود اپلیکیشن فیلیمو دانلود کنید و برای زمان‌هایی که اینترنت ندارید یا در سفر، هواپیما و قطار آ‌ن‌ها را تماشا کنید. برای دانلود هم از طریق رایانه و هم از طریق خود اپلیکیشن فیلیمو می‌توانید اقدام‌کنید. برای جزییات بیشتر می‌توانید فیلم‌های آموزشی مربوط به دانلود از طریق سایت و دانلود از طریق  اپلیکیشن را تماشا کنید.`,
    },
    {
      id: "2",
      title: "آیا فیلیمو برای خارج از ایران در دسترس است؟",
      content: `خیر. درحال حاضر تماشای فیلیمو فقط در داخل کشور فعال است و امکان تماشا برای افراد خارج از کشور فعال نیست.`,
    },
    {
      id: "3",
      title: "آیا برای تماشای فیلم‌های اکران آنلاین، باید اشتراک بخرم؟",
      content: `تماشای فیلم‌های اکران آنلاین مانند تماشا در سینمای واقعی است؛ یعنی برای دیدن هر فیلم که در اکران آنلاین است باید بلیت تهیه کنید و به جای رفتن به سالن سینما، 8 ساعت فرصت دارید که آن فیلم را از داخل خانه تماشا کنید.`,
    },
    {
      id: "4",
      title: "از کجا می‌توانم نرم‌افزار اندروید یا iOS فیلیمو را دانلود کنم؟",
      content: `تماشای فیلم‌های اکران آنلاین مانند تماشا در سینمای واقعی است؛ یعنی برای دیدن هر فیلم که در اکران آنلاین است باید بلیت تهیه کنید و به جای رفتن به سالن سینما، 8 ساعت فرصت دارید که آن فیلم را از داخل خانه تماشا کنید.`,
    },
  ];

  return (
    <div>
      <div className="accordion">
        {accordionData.map(({ title, content, id }) => (
          <AccordionItem title={title} content={content} key={id} />
        ))}
      </div>
    </div>
  );
};

export default Accordion;

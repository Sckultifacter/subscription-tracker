import dayjs from 'dayjs';
import { emailTemplates } from './email-templates.js';
import transporter, { accountEmail } from '../config/nodemailer.js';

export const sendRemainderEmail = async ({
  to,
  type,
  subscription,
}) => {
  if (!to || !type || !subscription) {
    throw new Error('Missing required parameters');
  }

  console.log('Sending email to:', to);
  console.log('Template type:', type);

  const template = emailTemplates.find(
    (t) => t.label === type
  );

  if (!template) {
    throw new Error(`Template not found: ${type}`);
  }

  const mailInfo = {
    userName: subscription.user.name,
    subscriptionName: subscription.name,
    renewalDate: dayjs(subscription.renewalDate).format(
      'MMMM D, YYYY'
    ),
    planName: subscription.name,
    price: `${subscription.currency} ${subscription.price} (${subscription.frequency})`,
    paymentMethod: subscription.paymentmethod,
    accountSettingsLink: '#',
    supportLink: '#',
  };

  const subject = template.generateSubject(mailInfo);
  const message = template.generateBody(mailInfo);

  const info = await transporter.sendMail({
    from: accountEmail,
    to,
    subject,
    html: message,
  });

  console.log('Email sent:', info.response);

  return info;
};


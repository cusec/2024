interface EmailTemplateProps {
  fullname: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullname,
}) => (
  <div>
    <h1>Welcome, {fullname}!</h1>
    <p>Thank you for sending us a message. If a response is required, our team will be in touch with you shortly.</p>
  </div>
);

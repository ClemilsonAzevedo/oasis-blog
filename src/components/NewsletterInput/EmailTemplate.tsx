interface EmailTemplateProps {
  firstName: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1>
      Email de Teste para a newsletter! <strong>{firstName}!</strong>
    </h1>
  </div>
)

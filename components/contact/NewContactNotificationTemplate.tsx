import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
  Link,
  Font,
} from "@react-email/components";

interface NewContactEmailProps {
  clientName: string;
  clientEmail: string;
  subject?: string;
  message: string;
}

export const NewContactNotification = ({
  clientName = "Jean Dupont",
  clientEmail = "jean.dupont@example.com",
  subject = "Subject",
  message = "Bonjour, je suis très intéressé par vos services d'aménagement et j'aimerais en discuter avec vous lors d'un appel. Quel serait le meilleur moment ?",
}: NewContactEmailProps) => {
  const previewText = `Nouveau message de ${clientName} via le blog Refined Space`;

  return (
    <Html>
      <Head>
        <Font
          fontFamily="DM Sans"
          fallbackFontFamily="sans-serif"
          webFont={{
            url: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* En-tête avec le nom de la marque */}
          <Section style={header}>
            <Text style={logo}>REFINED SPACE</Text>
          </Section>

          {/* Titre principal */}
          <Heading style={heading}>Nouveau Message Entrant</Heading>

          <Text style={paragraph}>Bonjour,</Text>
          <Text style={paragraph}>
            Un nouveau message provenant du formulaire de contact sur Refined
            Space
          </Text>

          {/* Boîte d'informations du client */}
          <Section style={infoContainer}>
            <Text style={infoText}>
              <strong>Nom :</strong> {clientName}
            </Text>

            <Text style={infoText}>
              <strong>Email :</strong>{" "}
              <Link href={`mailto:${clientEmail}`} style={link}>
                {clientEmail}
              </Link>
            </Text>
            <Text style={infoText}>
              <strong>Subject :</strong> {subject}
            </Text>
          </Section>

          {/* Corps du message */}
          <Section style={messageContainer}>
            <Text style={messageLabel}>MESSAGE DU CLIENT :</Text>
            <Text style={messageContent}>&quot;{message}&quot;</Text>
          </Section>

          {/* Bouton d'action direct (lien mailto) */}
          <Section style={buttonContainer}>
            <Link href={`mailto:${clientEmail}`} style={button}>
              Répondre à {clientName}
            </Link>
          </Section>

          <Hr style={hr} />

          {/* Pied de page interne */}
          <Text style={footer}>
            Cet e-mail est généré automatiquement depuis le formulaire du blog
            Refined Space.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default NewContactNotification;

// --- Styles en ligne ---
// L'utilisation de styles en ligne est la meilleure pratique pour la compatibilité des e-mails.

const main = {
  backgroundColor: "#f6f6f6",
};

const container = {
  backgroundColor: "#ffffff",
  margin: "40px auto",
  padding: "40px",
  maxWidth: "600px",
  borderRadius: "8px",
  border: "1px solid #e5e5e5",
};

const header = {
  textAlign: "center" as const,
  marginBottom: "30px",
};

const logo = {
  fontSize: "24px",
  fontWeight: "bold",
  letterSpacing: "2px",
  color: "#111111",
  margin: "0",
};

const heading = {
  fontSize: "20px",
  fontWeight: "600",
  color: "#1b3a2d",
  textAlign: "center" as const,
  marginBottom: "24px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#1c2b22",
};

const infoContainer = {
  backgroundColor: "#f7f3ec",
  padding: "20px",
  borderRadius: "6px",
  marginBottom: "24px",
  borderLeft: "4px solid #b8d4c0",
};

const infoText = {
  fontSize: "15px",
  color: "#1b3a2d",
  margin: "8px 0",
};

const link = {
  color: "#0066cc",
  textDecoration: "none",
};

const messageContainer = {
  marginBottom: "32px",
};

const messageLabel = {
  fontSize: "12px",
  fontWeight: "bold",
  color: "#888888",
  letterSpacing: "1px",
  marginBottom: "8px",
};

const messageContent = {
  fontSize: "16px",
  lineHeight: "24px",
  color: "#1b3a2d",
  fontStyle: "italic",
  backgroundColor: "#f7f3ec",
  padding: "16px",
  borderRadius: "6px",
};

const buttonContainer = {
  textAlign: "center" as const,
  margin: "32px 0",
};

const button = {
  backgroundColor: "#1b3a2d",
  color: "#ffffff",
  padding: "12px 24px",
  borderRadius: "3px",
  fontSize: "16px",
  fontWeight: "400",
  textDecoration: "none",
  display: "inline-block",
};

const hr = {
  borderColor: "#e5e5e5",
  margin: "32px 0",
};

const footer = {
  fontSize: "12px",
  color: "#999999",
  textAlign: "center" as const,
  lineHeight: "18px",
};

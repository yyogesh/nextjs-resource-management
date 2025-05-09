import { ResourceString } from "@cms/libs/types";

export const resourceStrings: ResourceString[] = [
  {
    id: "string-1",
    projectId: "project-1",
    key: "welcome_message",
    translations: {
      en: "Welcome to our website!",
      fr: "Bienvenue sur notre site web !",
      es: "¡Bienvenido a nuestro sitio web!",
      de: "Willkommen auf unserer Website!",
      ja: "私たちのウェブサイトへようこそ！",
    },
    description: "Homepage welcome message",
    tags: ["homepage", "greeting"],
    createdAt: "2023-01-20T10:30:00Z",
    updatedAt: "2023-04-15T14:45:00Z",
  },
  {
    id: "string-2",
    projectId: "project-1",
    key: "about_us_title",
    translations: {
      en: "About Us",
      fr: "À propos de nous",
      es: "Sobre Nosotros",
      de: "Über uns",
      ja: "会社概要",
    },
    description: "About page title",
    tags: ["about", "navigation"],
    createdAt: "2023-01-22T11:15:00Z",
    updatedAt: "2023-04-10T09:30:00Z",
  },
  {
    id: "string-3",
    projectId: "project-1",
    key: "contact_form_submit",
    translations: {
      en: "Send Message",
      fr: "Envoyer le message",
      es: "Enviar mensaje",
      de: "Nachricht senden",
      ja: "メッセージを送信",
    },
    description: "Contact form submit button",
    tags: ["contact", "form", "button"],
    createdAt: "2023-01-25T14:20:00Z",
    updatedAt: "2023-04-05T16:45:00Z",
  },
  {
    id: "string-4",
    projectId: "project-2",
    key: "login_button",
    translations: {
      en: "Log In",
      fr: "Se connecter",
      es: "Iniciar sesión",
      zh: "登录",
    },
    description: "Login screen button",
    tags: ["auth", "button"],
    createdAt: "2023-02-15T09:30:00Z",
    updatedAt: "2023-04-12T11:15:00Z",
  },
  {
    id: "string-5",
    projectId: "project-2",
    key: "signup_button",
    translations: {
      en: "Sign Up",
      fr: "S'inscrire",
      es: "Registrarse",
      zh: "注册",
    },
    description: "Signup screen button",
    tags: ["auth", "button"],
    createdAt: "2023-02-15T09:35:00Z",
    updatedAt: "2023-04-12T11:20:00Z",
  },
]

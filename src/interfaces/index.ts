import { ReactNode } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface Project {
  title: string;
  description: string;
  getImageSrc: () => string;
}

export interface FormData {
  firstName: string;
  email: string;
  type: string;
  comment: string;
}

export interface Notification {
  type: string;
  message: string;
}

export interface AlertState extends Notification {
  isOpen: boolean;
}

export interface AlertContextData extends AlertState {
  onOpen: (type: string, message: string) => void;
  onClose: () => void;
}

export interface AlertProviderData {
  children: ReactNode;
}

export interface Socials {
  icon: IconDefinition;
  url: string;
}

export interface CardData {
  title: string;
  description: string;
  imageSrc: string;
}

export interface FullScreenSectionData {
  children: ReactNode;
  isDarkBackground?: boolean;
  backgroundColor?: string;
  [key: string]: any;
}

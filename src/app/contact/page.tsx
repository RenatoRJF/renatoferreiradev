import Title from "@/components/Title";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <>
      <Title>Let&apos;s start connecting</Title>

      <p className="text-gray-300 text-sm leading-relaxed mb-8 max-w-2xl">
        I&apos;m always happy to meet fellow{" "}
        <span className="text-white font-bold">
          developers, founders, and creators
        </span>{" "}
        who enjoy exploring new technologies and bringing ideas to life. If
        you&apos;re working on something exciting in the{" "}
        <span className="text-white font-bold">
          web, AI, or blockchain space
        </span>
        , I&apos;d love to hear from you — maybe our paths can cross on a{" "}
        <span className="text-white font-bold">future project</span>. I&apos;m
        not always quick to reply (
        <span className="text-white font-bold">code takes focus</span>), but
        I&apos;ll make sure to get back to you as soon as I can.
      </p>

      <ContactForm />
    </>
  );
}

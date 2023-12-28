import styles from "./Mail.module.css";

const Mail = () => {
  const sendMail = () => {
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const subject = (document.getElementById("subject") as HTMLInputElement)
      .value;
    const message = (document.getElementById("message") as HTMLInputElement)
      .value;

    /* write a mailto with "sincerly, name" on a new line*/
    window.open(
      `mailto:frederikfarstad@gmail.com
      ?subject=${subject}
      &body=${message}
      %0D%0A%0D%0ASincerly, ${name}`
    );
  };

  return (
    <section className={styles.container}>
      <div className={styles.mailWrapper}>
        <h1 className={styles.title}>Contact Me</h1>
        <form className={styles.form}>
          <input
            className={styles.name}
            type="text"
            placeholder="Full Name"
            id="name"
            autoComplete="name"
            required
          />
          <input
            className={styles.subject}
            type="text"
            placeholder="Subject"
            id="subject"
            required
          />
          <textarea
            className={styles.message}
            placeholder="Message"
            id="message"
            required
          />
          <button className={styles.send} type="button" onClick={sendMail}>
            Send Mail
          </button>
        </form>
      </div>
    </section>
  );
};

export default Mail;

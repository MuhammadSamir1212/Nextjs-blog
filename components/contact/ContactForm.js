import { useState, useEffect } from "react";
import styles from "../../styles/contact-form.module.css";
import Notification from "../ui/notification";

async function sendContactData(connectDetails) {
  // add client-side validation

  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(connectDetails),
    headers: {
      "Conttent-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }
}

export default function ContactForm() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [requestStatu, setRequestStatu] = useState("");
  const [requestError, setRequestError] = useState("");

  useEffect(() => {
    if (requestStatu === "success" || requestStatu === "error") {
      const timer = setTimeout(() => {
        setRequestStatu(null);
        setRequestError(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [requestStatu]);

  async function sendMessageHandler(e) {
    e.preventDefault();

    setRequestStatu("pending");

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });
      setRequestStatu("success");
      setEnteredMessage("");
      setEnteredEmail("");
      setEnteredName("");
    } catch (error) {
      setRequestError(error.message);
      setRequestStatu("error");
    }
  }

  let notification;

  if (requestStatu === "pending") {
    notification = {
      status: "pending",
      title: "Sending message..",
      message: "your message is on its way",
    };
  }
  if (requestStatu === "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: "Message send successfuly",
    };
  }
  if (requestStatu === "error") {
    notification = {
      status: "error",
      title: "Error!",
      message: requestError,
    };
  }

  return (
    <section className={styles.contact}>
      <h1>How can i help you?</h1>
      <form className={styles.form} onSubmit={sendMessageHandler}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={enteredEmail}
              onChange={(e) => setEnteredEmail(e.target.value)}
            />
          </div>
          <div className={styles.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={enteredName}
              onChange={(e) => setEnteredName(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows={5}
            required
            value={enteredMessage}
            onChange={(e) => setEnteredMessage(e.target.value)}
          />
        </div>
        <div className={styles.actions}>
          <button>Send message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
}

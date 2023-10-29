"use client"
import Uebersicht from "@/components/uebersichtComponents/uebersicht/page";
import { ValidationError, useForm } from "@formspree/react";

export default function SupportPage() {
  const [state, handleSubmit] = useForm("xrgwowoj");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <>
      <div className="platzhalter" />
      <section className="uebersichtSection">
        <div className="uebersichtSection__nav">
          <Uebersicht />
        </div>
        <div className="uebersichtSection__profileContent">
          <section id="form" className="kontakt-sec increase-size">
            <form
              onSubmit={handleSubmit}
              className="kontakt-form makeChildrenVisible"
          > 
              <textarea
                placeholder="Wie können wir dir Weiterhelfen ? "
                name="Nachricht"
                id=""
                cols={90}
                rows={10}
              ></textarea>
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <button type="submit" disabled={state.submitting}>
                Submit
              </button>
            </form>
          </section>
        </div>
      </section>
    </>
  );
}
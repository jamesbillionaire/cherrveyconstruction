"use client";

import { useState, useSyncExternalStore, type FormEvent } from "react";
import { site } from "@/lib/company";

const workTypes = ["General construction", "Renovation & facility improvement", "Structured cabling & networks", "Data room & technical works", "CCTV systems", "Other project"];
const subscribe = () => () => {};
const clientReady = () => true;
const serverReady = () => false;

export function InquiryForm() {
  const ready = useSyncExternalStore(subscribe, clientReady, serverReady);
  const [draft, setDraft] = useState("");
  const [notice, setNotice] = useState("");

  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const value = (key: string) => String(form.get(key) || "").trim();
    if (!value("name") || !value("location") || value("message").length < 10) {
      setNotice("Please include your name, project location and a short project description.");
      return;
    }
    const text = ["Good day, CHERRVEY,", "", "I would like to discuss a project.", "",
      `Name: ${value("name")}`, `Email: ${value("email")}`, `Company: ${value("company") || "Not specified"}`,
      `Phone: ${value("phone") || "Not specified"}`, `Project location: ${value("location")}`,
      `Type of work: ${value("type")}`, `Target schedule: ${value("schedule") || "To be discussed"}`,
      "", "Project brief:", value("message"), "", "Thank you.",
    ].join("\n");
    setDraft(text);
    setNotice("Your draft is ready below. Open it in your email app, or copy it. Nothing has been sent.");
  }
  async function copyDraft() {
    try { await navigator.clipboard.writeText(draft); setNotice("Project brief copied. Paste it into an email to " + site.email + "."); }
    catch { setNotice("Copy is unavailable in this browser. Select and copy the draft below."); }
  }
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent("Project inquiry — CHERRVEY")}&body=${encodeURIComponent(draft)}`;

  return <form className="cs-inquiry-form" onSubmit={prepare} onChange={() => { if (draft) { setDraft(""); setNotice(""); } }}>
    <div className="cs-form-title"><span className="cs-index">Project inquiry</span><h2>What are you planning?</h2><p>Required fields are marked with an asterisk.</p></div>
    <noscript><p>Please email your project requirements directly to <a href={`mailto:${site.email}`}>{site.email}</a>. Enable JavaScript to use the draft builder.</p></noscript>
    <fieldset disabled={!ready} style={{ minWidth: 0, border: 0, padding: 0, margin: 0 }}>
      <legend className="sr-only">Project inquiry details</legend>
      <div className="cs-fields">
        <label htmlFor="inquiry-name">Your name *<input id="inquiry-name" name="name" autoComplete="name" required maxLength={80} placeholder="Full name" /></label>
        <label htmlFor="inquiry-email">Email address *<input id="inquiry-email" name="email" type="email" autoComplete="email" required maxLength={120} placeholder="you@company.com" /></label>
        <label htmlFor="inquiry-company">Company<input id="inquiry-company" name="company" autoComplete="organization" maxLength={100} placeholder="Company or organisation" /></label>
        <label htmlFor="inquiry-phone">Phone number<input id="inquiry-phone" name="phone" type="tel" autoComplete="tel" maxLength={32} placeholder="Your contact number" /></label>
        <label htmlFor="inquiry-location">Project location *<input id="inquiry-location" name="location" required maxLength={120} placeholder="City or municipality" /></label>
        <label htmlFor="inquiry-type">Type of work *<select id="inquiry-type" name="type" required defaultValue=""><option value="" disabled>Select a service</option>{workTypes.map(type => <option key={type}>{type}</option>)}</select></label>
        <label htmlFor="inquiry-schedule" className="cs-field-wide">Target schedule<input id="inquiry-schedule" name="schedule" maxLength={80} placeholder="Intended start date or timeframe" /></label>
        <label htmlFor="inquiry-message" className="cs-field-wide">A short project brief *<textarea id="inquiry-message" name="message" required minLength={10} maxLength={1000} rows={4} placeholder="Describe the work you need." /></label>
      </div>
      <p className="cs-form-note" id="inquiry-how">This prepares an email draft. Your details stay in this page until you choose to send them from your email app.</p>
      <button type="submit" className="cs-submit" aria-describedby="inquiry-how">Prepare inquiry email <span aria-hidden="true">→</span></button>
    </fieldset>
    <p role="status" aria-live="polite" className="cs-form-status">{notice}</p>
    {draft ? <section className="cs-email-draft" aria-labelledby="draft-heading"><h3 id="draft-heading">Your project brief</h3><p>To: <a href={`mailto:${site.email}`}>{site.email}</a></p><textarea aria-label="Prepared project brief" value={draft} readOnly rows={9} /><div className="cs-draft-actions"><a href={mailto} className="cs-submit">Open email draft</a><button type="button" onClick={copyDraft}>Copy brief</button></div><p>Attach drawings in your email app before sending.</p></section> : null}
  </form>;
}
